import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockAxios from '../api/mock'
import mockMovies from '../mock/mockMovies'

const instance = new MockAdapter(axios);

mockAxios.onGet('/movies').reply(200, {
    movies: mockMovies
});
export default instance