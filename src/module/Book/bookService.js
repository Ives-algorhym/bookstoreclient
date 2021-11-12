/*import axios from "axios";
import baseurl from '../../config'

const getBookService = () => axios.get(`${baseurl}/api/v1/books`);

export default getBookService;*/

import axios from "axios";
import baseUrl from "../../config";

export const getBooksService = () => axios.get(`${baseUrl}/api/v1/books`);