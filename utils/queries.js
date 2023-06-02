import { useQuery } from "react-query";
import api from "./axios";
import API from "../constants/API";

export const QKeys = {
  User: "user",
};

export const useGetUser = (params, options) => {
  return useQuery(
    QKeys.User,
    async () => {
      const response = await api.get(`${API.GET_USER}`);

      return response.data;
    },
    {
      ...options,
      notifyOnChangeProps: ["data", "isLoading", "isLoadingError"],
    }
  );
};
