import configureStore from 'redux-mock-store'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import getBookAction from '../bookAction'


jest.mock("axios");
const middleWare = [reduxThunk];
const mockStore = configureStore(middleWare);

/*describe('BookActions', () => {
    it('Should be able to dispatch succes action', async () => {
        const store = mockStore({});

        axios.get.mockImplementation(() => Promise.resolve({data: [{
            id: 1,
            title: 'test title',
            description: 'des',
            releaseYear: 2018
        }]}))

        await store.dispatch(getBookAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(1);
        expect(actions[0]).toEqual({
            type: 'BOOKLIST',
            payload: []
        })
    } )

})*/