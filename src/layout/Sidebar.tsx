import NavLink from "../components/NavLink";
import { useAppSelector } from "../redux/hooks";
import clsx from "clsx";

function Sidebar() {
  const isSidebarVisible = useAppSelector((state) => state.nav.sidebarVisible);

  return (
    <div
      className={clsx(
        "lg:block fixed z-20 inset-0 top-[3.8125rem] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto border-r-2 border-gray-200 bg-white",
        [{ hidden: !isSidebarVisible }]
      )}
    >
      <nav id="nav" className="lg:text-sm lg:leading-6 relative">
        <ul>
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
              Menu
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
              <li>
                <NavLink label="Contacts" href="/contacts" />
                <NavLink label="Charts & Maps" href="/chart-maps" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
