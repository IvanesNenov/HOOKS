import {HIDE_ALERT, SHOW_ALERT} from "../types";

// const handlers = {
//     [SHOW_ALERT]: null,
//     [HIDE_ALERT]: null,
//     DEFAULT: state
// }


export const alertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return action.payload
        case HIDE_ALERT:
            return null
        default: return state

    }

}