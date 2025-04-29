type ButtonProps = {
  variant: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  disabled = false,
  onClick,
  children,
  fullWidth = false,
}) => {
  const baseClass = `px-4 py-2 font-bold rounded shadow-button transition`;

  const variantClasses: { [key: string]: string } = {
    primary:
      "bg-primary hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled text-white",
    secondary:
      "bg-secondary hover:bg-secondary-hover active:bg-secondary-active disabled:bg-secondary-disabled text-white",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClass} ${variantClasses[variant]} ${widthClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
