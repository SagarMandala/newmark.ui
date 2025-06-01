import { getRequest } from "../../app/axiosClient";
import { setProperties } from "./propertiesSlice";
export const getAllPropertiesAPI = () => (dispatch) => {
  try {
    getRequest("api/Properties/GetAll")
      .then((res) => {
        dispatch(setProperties(res?.data));
      })
      .catch((e) => {
        //TODO : Show error message
      });
  } catch (e) {
    //TODO : Show error message
  }
};
