import { getRequest } from "../../app/axiosClient";
import { setProperties } from "./propertiesSlice";
export const getAllPropertiesAPI = () => (dispatch) => {
  try {
    //dispatch(showLoader());
    getRequest("api/Properties/GetAll")
      .then((res) => {
        dispatch(setProperties(res?.data));
        // dispatch(hideLoader());
      })
      .catch((e) => {
        // const errorMessage = e?.response?.data?.Message || e?.message;
        // dispatch(hideLoader());
        // OpenNotificationWithIcon(
        //   "error",
        //   "Lookup.Notification.Unexpectederror",
        //   errorMessage,
        //   "Lookup.Notification.Pleasetryagainlater"
        // );
      });
  } catch (e) {
    // dispatch(hideLoader());
    // OpenNotificationWithIcon(
    //   "error",
    //   "Lookup.Notification.Unexpectederror",
    //   "",
    //   "Lookup.Notification.Unexpectederrorretrievingroles"
    // );
  }
};
