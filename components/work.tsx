import { CloverViewerProps } from '@samvera/clover-iiif';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  },
);

const API_URL = "https://api-ub.vercel.app"; // @TODO, set to prod API when it is ready

const Work = ({ children, id, url, marcus, config }: { children?: ReactNode, id?: string, url?: string, marcus?: string, config?: CloverViewerProps }) => {
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
    <div className='my-10 w-full  h-[630px] md:h-[700px] lg:h-[70vh] flex flex-col lg:flex-row  bg-ll-sandy border-solid border-2 border-ll-sandy-100 dark:bg-ll-blue-900'>
      <div className='w-full relative dark:bg-ll-blue-950 z-0'>
        <Viewer
          iiifContent={manifestId}
          options={{
            canvasHeight: canvasHeight,
            informationPanel: {
              open: false
            },
            ...config // Override default options
          }}
        />
      </div>
      {children ?
        <div className='p-5 sm:p-10 flex flex-col justify-between w-full lg:max-w-md bg-ll-blue-900 text-white dark:nx-bg-primary-400/10'>
          {children}
          {marcus ?
            <a
              className='rounded-full self-end px-5 py-2 m-5 bg-ll-red dark:bg-red-700'
              href={marcus}>
              {buttonText}
            </a>
            : null}
        </div>
        : null}
    </div>
  );
};

export default Work;
