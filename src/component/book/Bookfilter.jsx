import { Paper , Box } from "@material-ui/core";
import React from "react";

import styles from './BookStyls';


const Bookfilter = () => {
    const classes = styles();
   return(
       <Box className={classes.bookFilter}>
           <Paper className={classes.bookFilterPaper}>
               book filter
           </Paper>
       </Box>
   );
}

export default Bookfilter;