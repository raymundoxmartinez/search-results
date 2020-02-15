import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../app/store'


interface Item {
    id: string,
    title: string
}

interface Items {
    data: Item[]
}
interface ItemsState {
    count: number
    isLoading: boolean
    error: string | null
    ids: string[]
    mapper: Record<string, any>
}

const itemsInitialState: ItemsState = {
    count: 0,
    isLoading: false,
    error: null,
    ids: [],
    mapper: {}
}

const startLoading = (state: ItemsState) => {
    state.isLoading = true
}

const loadingFailed = (state: ItemsState, action: PayloadAction<string>) => {
    state.isLoading = false
    state.error = action.payload

}
const items = createSlice({
    name: 'items',
    initialState: itemsInitialState,
    reducers: {
        getItemsStart: startLoading,
        getItemsSuccess(state, { payload }: PayloadAction<Items>) {
            const { data } = payload
            data.forEach((item: Item) => {
                state.ids.push(item.id)
                state.mapper[item.id] = item
            })
            state.count = data.length
            state.isLoading = false
            state.error = null
        },
        getItemsFailure: loadingFailed
    }
})



export const {
    getItemsStart,
    getItemsSuccess,
    getItemsFailure
} = items.actions

export default items.reducer


export const fetchItems = (): AppThunk => async dispatch => {
    try {
        dispatch(getItemsStart())
        //************************ */
        //replace with actual api call
        //************************ */
        //************************ */
        // const items = await getItemsStart()
        // dispatch(getItemsSuccess(items))
        //************************ */
        //************************ */
    } catch (error) {
        dispatch(getItemsFailure(error.toString()))
    }
}