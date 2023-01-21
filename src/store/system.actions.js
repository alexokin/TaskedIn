import { store } from "./store"
import { SET_FILTER } from "./system.reducer"

export async function setFilter(filter) {
    try {
        store.dispatch({
            type: SET_FILTER,
            filter
        })
    } catch (err) {
        console.log('Cannot set filter', err)
        throw err
    }
}