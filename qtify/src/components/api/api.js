import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const getTopAlbums = async () => {
  let res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
  return res.data;
};

export const getNewAlbums = async () => {
  let res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
  return res.data;
};

export const getSongs = async () => {
  let res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
  return res.data;
};
