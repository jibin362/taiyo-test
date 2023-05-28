import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { hideSidebar, toggleSidebar } from "../redux/slices/navSlice";
import { useEffect } from "react";

function Header() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const onToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    // hide sidebar when location key changes
    dispatch(hideSidebar());
  }, [dispatch, location.key]);

  return (
    <div className="max-w-8xl mx-auto border-b-2 border-gray-200">
      <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
        <div className="relative flex items-center">
          <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
            <button
              type="button"
              onClick={onToggleSidebar}
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <svg width={24} height={24}>
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <Link className="mr-3 flex-none w-auto overflow-hidden" to="/">
            TAIYO.AI
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
