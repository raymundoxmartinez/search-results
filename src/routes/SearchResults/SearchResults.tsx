import * as React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchSearchResults } from './searchResultsSlice'
import SearchResultsList from '../../components/List'

const SearchResults = (props: { [key: string]: any }) => {
    const dispatch = useDispatch()

    const { searchResultsLoading, searchResultsError, searchResults } = useSelector(
        (state: any) => {
            return {
                searchResultsLoading: state.searchResults.isLoading,
                searchResultsError: state.searchResults.error,
                searchResults: state.searchResults.searchResults
            }
        },
        shallowEqual
    )

    React.useEffect(() => {
        if (!searchResults.length) {
            debugger
            dispatch(fetchSearchResults())
        }
    }
        , [dispatch, searchResults])


    let renderedSearchResults
    if (searchResults.length) {
        debugger
        renderedSearchResults = <SearchResultsList items={searchResults} />
    } else if (searchResultsLoading) {
        renderedSearchResults = (
            <div>
                <p>Loading search results...</p>
            </div>
        )
    } else if (searchResultsError) {
        renderedSearchResults = (
            <div>
                <h1>Could not load search results</h1>
                <p>{searchResultsError.toString()}</p>
            </div>
        )
    }

    return (
        <div >
            {renderedSearchResults}
        </div>
    )
}

export default SearchResults