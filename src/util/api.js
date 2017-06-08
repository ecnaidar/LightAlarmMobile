/**
 * Created by itryt on 01-May-17.
 */
import {
    BASE_URL,
    COLOR_POST
} from '../../constants'

export const postColor = (color) => {
    const obj = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'color': color,
        })
    }

    fetch(BASE_URL + COLOR_POST, obj)
        .then(function (res) {
            return res.json();
        })
        .then(function (resJson) {
            return resJson;
        })
        .catch(e => console.log(e))
}
