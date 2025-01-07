import { ReactNode } from 'react';


interface ContainerProps {
  width?: string;
  padding?: string;
  margin?: string;
  stil?: string;
  columns?: boolean;
  children?: ReactNode;
  className?: string;
}


const Container: React.FC<ContainerProps> = (props) => {
  const { width = '833', padding = '0', margin = '0', stil = '', columns = false, children, className } = props;

  return (
    <div className={`w-${width} ${columns && 'sm:columns-2'} p-${padding} my-${margin} ${stil} max-w-screen-lg mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;

