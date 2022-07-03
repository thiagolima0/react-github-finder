import { useContext } from "react";
import AlertContext from "../context/alert/AlerContext";

const AppAlert = () => {
  const { alert } = useContext(AlertContext);

  if (alert) {
    return (
      <div className="alert  w-80">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <strong>{alert?.msg}</strong>
        </div>
      </div>
    );
  }
  return null;
};

export default AppAlert;
