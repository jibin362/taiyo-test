import clsx from "clsx";

type BadgeVariant = "Success" | "Danger" | undefined;

interface IBadgeProps {
  label: string;
  variant?: BadgeVariant;
}

function getClassName(variant: BadgeVariant): string {
  switch (variant) {
    case "Success":
      return "bg-green-50 text-green-700 ring-green-600/20";
    case "Danger":
      return "bg-red-50 text-red-700 ring-red-600/10";
    default:
      return "bg-indigo-50 text-indigo-700 ring-indigo-700/10";
  }
}

function Badge({ label, variant }: IBadgeProps) {
  const className = getClassName(variant);
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
        className
      )}
    >
      {label}
    </span>
  );
}

export default Badge;
