export interface IButton {
  title: string;
}

const Button: React.FC<IButton> = ({ title, ...props }) => {
  return (
    <button className="btn-primary" {...props}>
      {title}
    </button>
  );
};

export default Button;
