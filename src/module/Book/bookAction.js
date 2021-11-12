import { getBooksService } from "./bookService";



export const getBooksAction = () => async (dispatch) => {
  try {
    // Loading Data
    dispatch({
      type: "BOOKLISTPENDING",
    });

    // Calling service
    const books = await getBooksService();

    // When getting data
    dispatch({
      type: "BOOKLIST",
      payload: books.data,
    });

    // When finishing to load all data
    dispatch({
      type: "BOOKLISTFULFILLED",
    });
  } catch (error) {
    console.log(error);

    // Data connection issue
    dispatch({
      type: "BOOKLISTERROR",
    });
  }
};

