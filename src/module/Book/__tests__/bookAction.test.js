/*import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import getBooksAction from '../bookAction'



jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);
describe('BookActions',() => {
    it('Should be able to dispatch succes action',async () =>{
       const store = mockStore({});

       axios.get.mockImplementation(() => Promise.resolve({data: [{
           id: 1,
           title: 'test title',
           description: 'des',
           releaseYear: 2014
       }]}))
       await store.dispatch(getBooksAction());
       const actions = store.getActions();
       expect(actions.length).toEqual(3);
       expect(actions[1]).toEqual({
        type: 'BOOKLIST',
        payload:[{
            id: 1,
            title: 'test title',
            description: 'des',
            releaseYear: 2014
        }]
        
       })
    })

})*/

import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import axios from "axios";
import { getBooksAction, getBooksByTitle } from "../bookAction";

// Mocking Axios requests
jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("BookActions", () => {
  // Will be executed before each test cases
  beforeEach(() => {
    // Promise.resolve will return an object with 'data' property which should contain a list of Books
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: "test title TOTO",
            description: "test description",
            releaseYear: 2018,
          },
        ],
      })
    );
  });

  it("should able to dispatch success action", async () => {
    // Creating the store with empty initialState
    const store = mockStore({});

    await store.dispatch(getBooksAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(3);

    // actions[0] = BOOKLISTPENDING, actions[1] = BOOKLIST
    expect(actions[1]).toEqual({
      type: "BOOKLIST",
      payload: [
        {
          id: 1,
          title: "test title TOTO",
          description: "test description",
          releaseYear: 2018,
        },
      ],
    });
  });

 /* it("should able to dispatch success bookbytitle action", async () => {
    // Creating the store with empty initialState
    const store = mockStore({});

    await store.dispatch(getBooksByTitle("test title TOTO"));
    const actions = store.getActions();
    expect(actions.length).toEqual(3);

    // actions[0] = BOOKLISTPENDING, actions[1] = BOOKLIST, actions[2] = BOOKLISTFULFILLED
    expect(actions[1]).toEqual({
      type: "BOOKSBYTITLE",
      payload: [
        {
          id: 1,
          title: "test title TOTO",
          description: "test description",
          releaseYear: 2018,
        },
      ],
    });
  });

  it("should able to dispatch error action", async () => {
    // Creating the store with empty initialState
    const store = mockStore({});
    axios.get.mockImplementation(() => {
      throw new Error();
    });

    await store.dispatch(getBooksByTitle("test title TOTO"));
    const actions = store.getActions();

    expect(actions.length).toEqual(2);
    // actions[0] = BOOKLISTPENDING, actions[1] = BOOKLISTERROR in case of error
    expect(actions[1]).toEqual({
      type: "BOOKLISTERROR",
    });
  });*/
});