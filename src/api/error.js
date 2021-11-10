import axiosClient from 'api/axios';

export const fetchErrorAPI = (code) => {
  return axiosClient.get(`http://localhost:8080/code/${code}`, { useUrl: true });
};
