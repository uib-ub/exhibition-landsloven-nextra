import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Viewer = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  },
);

const API_URL = "https://api-ub.vercel.app";

const Work = ({ id, url }: { id?: string, url?: string }) => {
  const [manifest, setManifest] = useState();
  const manifestId = id ? `${API_URL}/items/${id}?as=iiif` : url

  useEffect(() => {
    (async () => {
      const response = await fetch(manifestId);
      const json = await response.json();
      setManifest(json);
    })();
  }, [manifestId]);

  if (!manifest) return <></>;

  return (
    <article>
      <Viewer
        iiifContent={manifestId}
        options={{
          informationPanel: {
            open: false
          }
        }}
      />
    </article>
  );
};

export default Work;