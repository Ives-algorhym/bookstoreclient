

import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../../module/Book/bookAction";
import React, { useEffect } from "react";
import {
  getBookSelector,
  getBookPromiseSelector,
} from "../../module/Book/bookSelector";
import Bookfilter from "./Bookfilter";
import styles from "./BookStyls";
import BookList from "./BookList";
import { Skeleton } from "@material-ui/lab";

const BookContainer = () => {
  
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  
  const books = useSelector(getBookSelector);
  const bookPromise = useSelector(getBookPromiseSelector);

  console.log("Book Container useSelector books: ", books);


  const classes = styles();
  return (
    <Box className={classes.bookContainer}>
      <Bookfilter />
      <Box className={classes.bookList}>
        {
          
          bookPromise.isPending && (
            <Box ml={5}>
              <Skeleton
                data-testid="book-loader"
              
              />
            </Box>
          )
        }
        {
        
          bookPromise.isErrorOccured && (
            <div data-testid="book-error-messsage"> Error message ... </div>
          )
        }
        {
        
          bookPromise.isFulfilled && <BookList books={books} />
        }
      </Box>
    </Box>
  );
};

export default BookContainer;