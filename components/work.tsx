import { CloverViewerProps } from '@samvera/clover-iiif';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  },
);

const API_URL = "https://api-ub.vercel.app"; // @TODO, set to prod API when it is ready

const Work = ({ children, id, url, marcus, config }: { children?: ReactNode, id?: string, url?: string, marcus?: string, config?: CloverViewerProps }) => {
  const manifestId = id ? `${API_URL}/items/${id}?as=iiif` : url
  const { locale } = useRouter()

  const buttonText = locale === 'no' ? 'Se mer i Marcus' : 'Read more in Marcus'

  return (
    <div className='my-10 w-full flex flex-col lg:flex-row'>
      <div className='w-full h-[500px] md:h-[700px] lg:h-[70vh] relative dark:nx-bg-primary-300/10 bg-slate-200 z-0'>
        <Viewer
          iiifContent={manifestId}
          options={{
            canvasHeight: '100%', // @TODO: Height bug reported to samvera (https://github.com/samvera-labs/clover-iiif/issues/214)
            informationPanel: {
              open: false
            },
            ...config // Override default options
          }}
        />
      </div>
      {children ?
        <div className='p-5 flex flex-col justify-between w-full lg:max-w-md bg-slate-200 dark:nx-bg-primary-400/10'>
          {children}
          {marcus ?
            <a
              className='rounded-full self-end px-5 py-2 m-5  bg-red-300 dark:bg-red-700'
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