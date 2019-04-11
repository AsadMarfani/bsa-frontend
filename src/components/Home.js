
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />)
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        orderId: '12',
                        userToken: '123123123'
                    })}
                />
            </View>
        );
    }
}
