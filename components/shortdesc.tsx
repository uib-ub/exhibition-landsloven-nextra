import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";

// import * as HvalContent from "./hval.no.mdx"; 
 
 

// Custom component to render <description> tags
const Description = ({ children }) => {
  return <p>{children}</p>;
};

const components = {
  // Map custom components to MDX tags
  description: Description,
};

const MdxComponent = ({ fileName }) => {
  // Dynamically import the MDX file based on the file name
  const MdxContent = React.lazy(() => import(`./hval.no.mdx`));
  console.log(fileName);
  // const MdxContent = React.lazy(() => > import(`${fileName}`));

  return (
    <div>
      {/* Use MDXProvider to provide custom components */}
      <MDXProvider components={components}>
        {/* Render the imported MDX content */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <MdxContent />
        </React.Suspense>
      </MDXProvider>
    </div>
  );
};

export default MdxComponent;
