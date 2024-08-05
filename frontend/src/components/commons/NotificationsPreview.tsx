import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

type NotificationsPreviewProps = {
  setOpenNotifications: (val: boolean) => void;
};

export const NotificationsPreview: React.FC<NotificationsPreviewProps> = ({
  setOpenNotifications,
}) => {
  // Temporary Solutions in place of List of Notifications
  const { isAuthenticated } = useSelector((state: AppState) => state.authState);

  return (
    <div
      className="absolute min-w-[300px] h-40 top-9 right-0 p-5 border-solid border-[1px] z-[11] border-gray-300
      text-gray-700 bg-white overflow-hidden flex flex-col justify-center items-center text-sm rounded-2xl"
      role="button"
      tabIndex={0}
      onMouseLeave={() => setOpenNotifications(false)}
    >
      {!isAuthenticated ? (
        <div className="text-center">
          Please &nbsp;
          <Link to={routes.signin} className="text-blue-500">
            sign in &nbsp;
          </Link>
          to view your notifications
        </div>
      ) : (
        <div className="text-center">
          You currently have no new notifications
        </div>
      )}
    </div>
  );
};
