import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {render} from "@testing-library/react";
import reduxThunk from 'redux-thunk';
import reducers from '../module';


const createStoreWithMiddleWare = applyMiddleware(reduxThunk)(createStore);

const renderWithRedux = (
    ui,
    {
        initialState,
        store = createStoreWithMiddleWare(reducers,initialState)
    }
) => ({
    ...render(
        <Provider store={store}>{ui}</Provider>
    )
})

export default renderWithRedux;

