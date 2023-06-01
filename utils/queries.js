import { useQuery } from "react-query";
import api from "./axios";
import API from "../constants/API";

export const QKeys = {
  User: "user",
};

export const useGetUser = (params, options) => {
  return useQuery(
    QKeys.User,
    () => {
      return api.get(`${API.GET_USER}`);
    },
    {
      ...options,
      notifyOnChangeProps: ["data", "isLoading", "isLoadingError"],
    }
  );
};
