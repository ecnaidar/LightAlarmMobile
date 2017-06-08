/**
 * Created by itryt on 01-May-17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    StatusBar,
    Text,
    View
} from 'react-native';

import _ from 'lodash'
import colornamer from 'color-namer'

export default class Header extends Component {


    render() {
        const {color} = this.props;

        let colorDescription = ''
        _.forEach(
            colornamer(color),
            function(sublist,key) {
                colorDescription = _.find(sublist, function (o) { return o.distance < 30 })
            }
        )
        return (

            <View style={{ flex: 1, backgroundColor: color}}>
                {colorDescription &&
                    <Text style={{fontSize: 30, textAlign: 'center', color: '#ffffff', alignSelf: 'center'}}>
                    {_.capitalize(colorDescription.name || color) }
                    </Text>
                }
                <Text style={{fontSize:30 ,textAlign:'center', color: '#ffffff',alignSelf:'center'}} >
                    {_.capitalize(color) }
                </Text>
                <StatusBar
                    backgroundColor={color}
                    barStyle="light-content"
                />
            </View>
        );
    }

}

