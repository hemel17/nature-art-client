import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-xl">Page Not Found</p>
      <svg
        className="w-64 h-64 mb-8 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      <Link
        to="/"
        className="px-4 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
