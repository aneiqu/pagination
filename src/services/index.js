import axios from "axios";

const response = await axios.get("https://api.coincap.io/v2/assets");
const crypto = await response.data;

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = crypto.data.slice(from, to);

      resolve({
        count: crypto.data.length,
        data: data,
      });
    });
  },
};

export default service;
