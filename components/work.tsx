import dynamic from "next/dynamic";

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  },
);

const API_URL = "https://api-ub.vercel.app";

const Work = ({ id, url }: { id?: string, url?: string }) => {
  const manifestId = id ? `${API_URL}/items/${id}?as=iiif` : url

  return (
    <div className='h-[50vh] my-10 relative dark:nx-bg-primary-300/10 bg-slate-200'>
      <Viewer
        iiifContent={manifestId}
        options={{
          canvasHeight: '100%',
          informationPanel: {
            open: false
          }
        }}
      />
    </div>
  );
};

export default Work;