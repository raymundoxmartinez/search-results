import { combineReducers } from '@reduxjs/toolkit'
import searchResultsReducer from '../routes/SearchResults/searchResultsSlice'


const rootReducer = combineReducers({
    searchResults: searchResultsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer