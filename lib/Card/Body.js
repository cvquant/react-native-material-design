import React, {Component} from "react";
import {StyleSheet, View, ViewPropTypes} from "react-native";
import PropTypes from 'prop-types';
export default class Body extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        style: ViewPropTypes.style,
    };

    render() {
        const { theme, children, style } = this.props;

        return (
            <View style={[styles.container, style]}>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 16
    }
});
