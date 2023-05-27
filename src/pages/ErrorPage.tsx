import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/Button";

interface IRouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as IRouteError;

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        Oops
      </h1>
      <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={onBack}>Go Back</Button>
    </div>
  );
}
