import axios from "axios";

/* eslint-disable-next-line */

export const fetchImages = async (query, currentPage = 1) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL}?q=${query}&page=${currentPage}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  } catch (error) {
    console.error("FETCH ERROR: ", error);
    throw new Error(error);
  }
};
