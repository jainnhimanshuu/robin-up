interface ITileProps {
  className?: string;
  children?: React.ReactNode;
}

const Tile = ({ children, className }: ITileProps) => {
  return (
    <div
      className={`p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Tile;
