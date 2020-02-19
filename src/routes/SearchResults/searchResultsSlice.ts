import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../app/store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockMovies from '../../mock/mockMovies'

const mockAxios = new MockAdapter(axios);

mockAxios.onGet('/movies').reply(200, mockMovies);

interface Movie {
    id: string,
    title: string
}

interface Movies {
    data: Movie[]
}
export interface SearchResultsState {
    count: number
    isLoading: boolean
    error: string | null
    ids: string[]
    mapper: Record<string, any>
    searchResults: any[]

}

const searchResultsInitialState: SearchResultsState = {
    count: 0,
    isLoading: false,
    error: null,
    ids: [],
    mapper: {},
    searchResults: []
}

const startLoading = (state: SearchResultsState) => {
    state.isLoading = true
}

const loadingFailed = (state: SearchResultsState, action: PayloadAction<string>) => {
    state.isLoading = false
    state.error = action.payload

}
const searchResults = createSlice({
    name: 'searchResults',
    initialState: searchResultsInitialState,
    reducers: {
        getSearchResultsStart: startLoading,
        getSearchResultsSuccess(state, { payload }: PayloadAction<Movies>) {
            const { data } = payload
            data.forEach((item: Movie) => {
                state.ids.push(item.id)
                state.mapper[item.id] = item
            })
            state.searchResults = data
            state.count = data.length
            state.isLoading = false
            state.error = null
        },
        getSearchResultsFailure: loadingFailed
    }
})



export const {
    getSearchResultsStart,
    getSearchResultsSuccess,
    getSearchResultsFailure
} = searchResults.actions

export default searchResults.reducer


export const fetchSearchResults = (): AppThunk => async dispatch => {
    try {
        dispatch(getSearchResultsStart())
        const searchResults = await axios.get('/movies').then((results) => {
            console.log(results)
            return results
        })
        dispatch(getSearchResultsSuccess(searchResults))
    } catch (error) {
        dispatch(getSearchResultsFailure(error.toString()))
    }
}