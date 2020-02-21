import { createSlice } from '@reduxjs/toolkit'

export interface NavbarState {
    filters: Record<string, any>
    isGridViewOn: boolean
}

const navbarState: NavbarState = {
    filters: {
        'G': false,
        'PG': false,
        'PG-13': false,
        'R': false
    },
    isGridViewOn: true
}

const addFilters = (state: NavbarState, action: any) => {
    state.filters = { ...state.filters, ...action.payload }
}
const removeFilters = (state: NavbarState) => {
    state.filters = navbarState.filters
}

const turnOffGridView = (state: NavbarState) => {
    state.isGridViewOn = false
}
const turnOnGridView = (state: NavbarState) => {
    state.isGridViewOn = true
}

const navbar = createSlice({
    name: 'navbar',
    initialState: navbarState,
    reducers: {
        handleAddFilters: addFilters,
        handleRemoveFilters: removeFilters,
        handleTurnOnGridView:turnOnGridView,
        handleTurnOffGridView:turnOffGridView
    }
})

export const {
    handleAddFilters,
    handleRemoveFilters,
    handleTurnOnGridView,
    handleTurnOffGridView
} = navbar.actions

export default navbar.reducer
