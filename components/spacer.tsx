interface SpacerProps {
  height?: string | number;
  width?: string | number;
}

const Spacer: React.FC<SpacerProps> = ({ height = 24, width = 4 }) => {
  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}></div>
  );
};

export default Spacer;
