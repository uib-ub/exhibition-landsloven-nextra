import { ReactNode } from 'react';

interface FlexGridProps {
  maxcolumns?: number;
  margin?: string;
  padding?: string;
  gap?: string;
  bgcolor?: string;
  bgimage?: string;
  smcolumns?: string;
  mdcolumns?: string;  
  lgcolumns?:  string;  
  xlcolumns?: string;
  xxlcolumns?: string;
  children?: ReactNode;
}

 

const FlexGrid: React.FC<FlexGridProps> = (props) => {
  const { margin = 3, maxcolumns=6,  gap=3, padding=0, bgcolor='bg-white', bgimage='', children } = props;

  // Calculate responsive column counts
  // const columns = 'grid-cols-'  + Math.max(2, Math.floor(maxcolumns * 0.25)); 
  const smcolumns = 'sm:grid-cols-' + Math.max(2, Math.floor(maxcolumns * 0.75));  
  // //const smcolumns = 'sm:grid-cols-1';
  // const mdcolumns = 'md:grid-cols-' + Math.max(2, Math.floor(maxcolumns * 0.5));  
  // const lgcolumns = 'lg:grid-cols-'  + Math.max(3, Math.floor(maxcolumns * 0.75));  
  // const xlcolumns = 'xl:grid-cols-' + maxcolumns;
  // const xxccolumns = 'xxl:grid-cols-' + maxcolumns;

  const columns = 'grid-cols-'  + Math.max(2, Math.floor(maxcolumns * 0.33)); 
  const mdcolumns = 'md:grid-cols-${maxcolumns}' 


  //NOTE: To set for lower than 640 px I needed to set grid-cols-1

  return ( 
      <div 
        className={`flex gap-${gap} ${columns} ${smcolumns} ${mdcolumns} p-${padding} my-${margin} ${bgcolor}`}
         >
        {children} 
      </div>
    );
  };
      
export default FlexGrid;
     
   

    