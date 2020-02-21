import * as React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Button } from '@material-ui/core'
import { fetchSearchResults } from './searchResultsSlice'
import SearchResultsList from '../../components/List'

const SearchResults = (props: { [key: string]: any }) => {

    const dispatch = useDispatch()

    const [filteredResults, setFilteredResults] = React.useState([])

    const { searchResultsLoading, searchResultsError, searchResults, filters, isGridViewOn } = useSelector(
        (state: any) => {
            return {
                searchResultsLoading: state.searchResults.isLoading,
                searchResultsError: state.searchResults.error,
                searchResults: state.searchResults.searchResults,
                filters: state.navbar.filters,
                isGridViewOn: state.navbar.isGridViewOn
            }
        },
        shallowEqual
    )

    React.useEffect(() => {
        if (!searchResults.length) {
            dispatch(fetchSearchResults())
        }
    }
        , [dispatch, searchResults])

    React.useEffect(() => {
        if (searchResults.length) {
            // dispatch(getSearchResultsStart())
            const anyFilters = Object.values(filters).includes(true)
            if (anyFilters) {
                const filteredSearchResults = searchResults.filter((result: any) => filters[result.rating] === true)
                setFilteredResults(filteredSearchResults)
            } else {
                setFilteredResults(searchResults)
            }
        }
    }
        , [filters, dispatch, searchResults])

    let renderedSearchResults
    if (filteredResults.length) {
        renderedSearchResults = <SearchResultsList items={filteredResults} isGridViewOn={isGridViewOn} />
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexGrow: 1 }} >
                {renderedSearchResults}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" color="inherit">
                    Load More
            </Button>
            </div>
        </div>
    )
}

export default SearchResults