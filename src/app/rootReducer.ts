import { combineReducers } from '@reduxjs/toolkit'
import searchResultsReducer from '../routes/SearchResults/searchResultsSlice'
import navbarReducer from '../components/Navbar/navbarSlice'


const rootReducer = combineReducers({
    searchResults: searchResultsReducer,
    navbar: navbarReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer