import React, {Component, PropTypes} from "react";
import {StyleSheet, View} from "react-native";

export default class Body extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        style: View.propTypes.style,
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
