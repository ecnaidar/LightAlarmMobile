/**
 * Created by itryt on 04-May-17.
 */
export const SET_COLOR = 'SET_COLOR'

export const setColor = (color) => {
    return {
        type: SET_COLOR,
        payload: color
    }
}