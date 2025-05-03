import { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <div className="p-4 border rounded-md bg-grayScale-0 dark:bg-grayScale-2 space-y-2">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-grayScale-10">{description}</p>
        )}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
