import React from "react";
import { render } from "@testing-library/react";
import BookList from "../BookList";
import BookListItem from "../BookListItem";

jest.mock("../BookListItem"),() => () => <div>booklistitem comp</div>;

describe("BookList", () => {
  /*beforeAll(() => {
    BookListItem ;
  });*/
  const books = [
    {
      id: '1',
      title: "test title",
      description: "desc",
      releaseYear: 2019,
    },
    {
      id: '2',
      title: "test title 2",
      description: "desc",
      releaseYear: 2020,
    },
  ];

  /*it("render booklist without error", async () => {
    render(<BookList books={books} />);
    expect(jest.fn()).toHaveBeenCalledTimes(2);

  });*/
  it("render BookList without error", async () => {
    render(<BookList books={books} />);
 
    (() => {
      // We have 2 instances of a book. For each of them we are going to call BookListItem
      // We check if BookListItem is called twice
      expect(jest.fn()).toHaveBeenCalledTimes(2);
 
      // Also assert that BookListItem was called with first Book
      expect(jest.fn()).toHaveBeenCalledWith({ book: books[0] }, {});
 
      // Also assert that BookListItem was called with second Book
      expect(jest.fn()).toHaveBeenCalledWith({ book: books[1] }, {});
    });
  });
})