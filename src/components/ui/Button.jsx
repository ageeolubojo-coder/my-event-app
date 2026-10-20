
function Button({
  type = "button",
  onClick,
  children,
  variant = "default",
  className = "",
}) {
  const variants = {
    add: "bg-indigo-600 text-white hover:bg-indigo-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
    default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    "rounded-full":
      "bg-indigo-600 text-white rounded-full hover:bg-indigo-700",
  };

  return (
    <button
      className={`p-2 rounded-md cursor-pointer flex items-center gap-2 px-4 ${variants[variant]} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;