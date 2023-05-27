import { Link } from "react-router-dom";

interface INavLinkProps {
  href: string;
  label: string;
}

function NavLink({ label, href }: INavLinkProps) {
  return (
    <Link
      className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
      to={href}
    >
      {label}
    </Link>
  );
}

export default NavLink;
