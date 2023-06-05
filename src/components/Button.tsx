interface ButtonProp {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProp) => {
  return (
    <div className="btn btn-primary" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
