import React from "react";
import Proptypes from "prop-types";
import { Box } from "@material-ui/core";
import makeStyles from "./BookStyls";
import BookListItem from "./BookListItem";

/*
 * In this component we will receive books as props, so let's define the props type
 */
const propTypes = {
  books: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      title: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired,
      releaseYear: Proptypes.number.isRequired,
    })
  ).isRequired,
};

const BookList = ({ books }) => {
  const classes = makeStyles();
  return (
    <Box className={classes.bookList} ml={5}>
      {books.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </Box>
  );
};

BookList.propTypes = propTypes;

export default BookList;