/**
 * Created by itryt on 04-May-17.
 */

const color = (state = '#008033', action) => {
    switch (action.type) {
        case 'SET_COLOR':
            return state = action.payload
        default:
            return state
    }
}

export default color