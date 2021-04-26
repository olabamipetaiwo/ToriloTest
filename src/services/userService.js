import axios from "services/axiosConfig";


export const getUserDetails = (userId) => {
  let request = axios.get(`user/dashboard/overview/${userId}`);

  return request.then((response) => {
    if (response.status === 200) {
      return response.data;
    }
  });
};
