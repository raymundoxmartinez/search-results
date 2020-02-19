import * as React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchSearchResults } from './searchResultsSlice'


const SearchResults = (props: { [key: string]: any }) => {
    const dispatch = useDispatch()

    const { searchResultsLoading, searchResultsError, searchResults } = useSelector(
        (state: any) => {
            return {
                searchResultsLoading: state.searchResults.isLoading,
                searchResultsError: state.searchResults.error,
                searchResults: state.searchResults.mapper
            }
        },
        shallowEqual
    )

    React.useEffect(() => {
        if (!searchResults) {
            dispatch(fetchSearchResults())
        }
    }
        , [dispatch])
    return (
        <div >
            Hello
        </div>
    )
}

export default SearchResults