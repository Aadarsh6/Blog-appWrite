const Button = ({
  text,
  type = "button",
  bgColor = "bg-blue-600 hover:bg-blue-700", // new prop
  textColor = "text-white",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg shadow-md ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {text || children}
    </button>
  );
};

export default Button;
