/**
 * Created by itryt on 01-May-17.
 */
/**
 * Created by itryt on 26-Mar-17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import PropTypes  from 'prop-types'
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import { ColorPicker } from 'react-native-color-picker'

import Header from './header'
import * as api from '../util/api'

import {setColor} from '../redux/actions/index'

class Main extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#212021' }}>
                <Header
                    color={this.props.color}
                />
                <ColorPicker
                    oldColor='purple'
                    onColorSelected={this.props.onSetColor}
                    style={{ flex: 4,margin:15 }}

                />
            </View>
        );
    }

}

Main.propTypes = {
    color: PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetColor: (color) => {
            dispatch(setColor(color))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)

