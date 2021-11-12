import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";
import { getBooksAction } from "../../../module/Book/bookAction";


jest.mock("../BookList", () => jest.fn());

jest.mock("../../../module/Book/bookAction", () => ({
  getBooksAction: jest.fn(),
}));

describe("BookContainer", () => {
  

  it("should render without error", () => {
    const books = [
      {
        id: "1",
        title: "test title",
        description: "desc",
        releaseYear: 2019,
      },
    ];


    BookList.mockImplementation(() => <div>mock booklist comp</div>);
    getBooksAction.mockImplementation(() => (dispatch) => {
      dispatch({
        type: "BOOKLIST",
        payload: books,
      });
      dispatch({ type: "BOOKLISTFULFILLED" });
    });

    renderWithRedux(<BookContainer />, {});

  
    expect(BookList).toHaveBeenLastCalledWith({ books }, {});
  });

  it("should show Loader when pending is TRUE", () => {
  
    getBooksAction.mockImplementation(() => ({
      type: "BOOKLISTPENDING",
    }));

    const { getByTestId } = renderWithRedux(<BookContainer />, {});

  
    expect(getByTestId("book-loader")).toBeInTheDocument();
  });

 
});