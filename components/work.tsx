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

const PROD_API_URL = "https://api.ub.uib.no";
const FALLBACK_API_URL = "https://api-ub.vercel.app";

// Add interface for props
interface WorkProps {
  children?: ReactNode;
  id?: string;
  url?: string;
  marcus?: string;
  config?: CloverViewerProps;
}

// Define styles using cva
const containerStyles = cva('my-10 w-full rounded grid grid-cols-1 bg-ll-sandy border-solid border border-ll-sandy-100 dark:border-ll-blue-900 dark:bg-ll-blue-900', {
  variants: {
    size: {
      default: 'h-[630px] md:h-[700px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const viewerContainerStyles = cva('w-full relative dark:bg-ll-blue-950 z-0 flex-grow ', {
  variants: {
    size: {
      small: 'h-[380px]',
      large: 'h-[600px]',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

const childrenContainerStyles = cva('p-5 w-full bg-ll-blue-900 text-white dark:nx-bg-primary-400/10 flex flex-col justify-between');

const buttonStyles = cva('rounded-full self-end px-5 py-2 m-5 bg-ll-red dark:bg-red-700');

const Work = ({ children, id, url, marcus, config }: WorkProps) => {
  const [API_URL, setApiUrl] = useState(FALLBACK_API_URL);

  useEffect(() => {
    const checkProdApi = async () => {
      try {
        const response = await fetch(`${PROD_API_URL}/items/${id}`);
        if (response.ok) {
          setApiUrl(PROD_API_URL);
        }
      } catch (error) {
        console.error("Production API is not available, using fallback.");
      }
    };

    checkProdApi();
  }, []);

  const manifestId = id ? `${API_URL}/items/${id}?as=iiif` : url;
  const { locale } = useRouter();

  const buttonText = locale === 'no' ? 'Se mer i Marcus' : 'Read more in Marcus';

  return (
    <div className={containerStyles()}>
      <div className={viewerContainerStyles({ size: 'large' })}>
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
