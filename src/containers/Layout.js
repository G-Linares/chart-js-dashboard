import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import PageContent from "./PageContent";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { removeNotificationMessage } from "../features/common/headerSlice";
import ModalLayout from "./ModalLayout";

function Layout() {
  const dispatch = useDispatch();
  const { newNotificationMessage, newNotificationStatus } = useSelector(
    (state) => state.header
  );

  useEffect(() => {
    if (newNotificationMessage !== "") {
      if (newNotificationStatus === 1)
        NotificationManager.success(newNotificationMessage, "Success");
      if (newNotificationStatus === 0)
        NotificationManager.error(newNotificationMessage, "Error");
      dispatch(removeNotificationMessage());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newNotificationMessage]);

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer drawer-mobile ">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        <LeftSidebar />
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />

      {/** Notification layout container */}
      <NotificationContainer />

      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
}

export default Layout;
