import { ReactNode } from 'react';

interface FlexDivProps {
  padding?: number;
  gap?: number;
  children?: ReactNode;
}

const FlexDiv: React.FC<FlexDivProps> = (props) => {
  const { padding = 6, gap = 3, children } = props;
  return (
    <div className={`flex flex-wrap justify-center py-6 gap-${gap} ${padding ? `p-${padding}` : ''}`}>
      {children}
    </div>
  );
};

export default FlexDiv;