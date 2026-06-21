function Input({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        px-4
        py-2
        border
        border-gray-300
        rounded-xl
        outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
      "
    />
  );
}

export default Input;