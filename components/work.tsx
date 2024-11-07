import { CloverViewerProps } from '@samvera/clover-iiif';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  },
);

const API_URL = "https://api-ub.vercel.app"; // @TODO, set to prod API when it is ready

// Add interface for props
interface WorkProps {
  children?: ReactNode;
  id?: string;
  url?: string;
  marcus?: string;
  config?: CloverViewerProps;
}

// Define styles using cva
const containerStyles = cva('my-10 w-full grid grid-cols-1 bg-ll-sandy border-solid border-2 border-ll-sandy-100 dark:bg-ll-blue-900', {
  variants: {
    size: {
      default: 'h-[630px] md:h-[700px] lg:h-[70vh]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const viewerContainerStyles = cva('w-full h-[600px] relative dark:bg-ll-blue-950 z-0');

const childrenContainerStyles = cva('p-5 w-full bg-ll-blue-900 text-white dark:nx-bg-primary-400/10 flex flex-col justify-between');

const buttonStyles = cva('rounded-full self-end px-5 py-2 m-5 bg-ll-red dark:bg-red-700');

const Work = ({ children, id, url, marcus, config }: WorkProps) => {
  const manifestId = id ? `${API_URL}/items/${id}?as=iiif` : url;
  const { locale } = useRouter();

  const buttonText = locale === 'no' ? 'Se mer i Marcus' : 'Read more in Marcus';

  const [canvasHeight, setCanvasHeight] = useState('600px');

  useEffect(() => {
    const updateCanvasHeight = () => {
      if (window.innerWidth < 768) {
        setCanvasHeight('380px'); // set your desired height for small screens
      } else {
        setCanvasHeight('auto'); // default height for larger screens
      }
    };

    updateCanvasHeight(); // set initial value
    window.addEventListener('resize', updateCanvasHeight); // update on resize

    return () => window.removeEventListener('resize', updateCanvasHeight); // cleanup on unmount
  }, []);

  return (
    <div className={containerStyles()}>
      <div className={viewerContainerStyles()}>
        <Viewer
          iiifContent={manifestId}
          options={{
            canvasHeight: '100%',
            informationPanel: { open: false },
            ...config
          }}
        />
      </div>
      {children && (
        <div className={childrenContainerStyles()}>
          {children}
          {marcus && (
            <a
              className={buttonStyles()}
              href={marcus}
            >
              {buttonText}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Work;
