import axios from "axios";

const api = async (term) => {
  try {
    const { data } = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${term}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

export default api;