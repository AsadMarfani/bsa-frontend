import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        title: `User ${navigation.getParam('orderId', '(With no id)')}`,
        headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
    });
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('orderId', 'NO-ID');
        const userToken = navigation.getParam('userToken', 'logged in user token');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Text>orderId : {JSON.stringify(itemId)}</Text>
                <Text>userToken : {JSON.stringify(userToken)}</Text>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({orderId: 'With no id'})}
                />
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details', {
                        orderId: Math.floor(Math.random() * 100),
                    })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}