function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        bg-blue-600
        text-white
        px-4
        py-2
        rounded-xl
        hover:bg-blue-700
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
}

export default Button;