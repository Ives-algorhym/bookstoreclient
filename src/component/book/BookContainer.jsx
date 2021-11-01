import React from "react";
import Bookfilter from "./Bookfilter";
import { Box } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import getBooksAction from "../../module/Book/bookAction";
import { getBookSelector } from "../../module/Book/bookSelector";
import store from "/home/algo-rhym/Documents/bookstoreclient/src/index.jsx"
import styles from "./BookStyls";


const BookContainer = () => {
  const dispatch = useDispatch();
 dispatch(getBooksAction);
const classes = styles();


   return(
     <Box className={classes.bookContainer}>
         <Bookfilter />
         <Box className={classes.bookList}>
           Here we return all books.
         </Box>
     </Box>

   );
  


}
export default BookContainer;