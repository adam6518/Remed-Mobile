import React, { Component } from 'react'
import axios from 'axios'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { Container, Header, Content, Footer, Body, Title } from 'native-base';

class UserList extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                // console.log(res.data);

                const users = res.data;
                // console.log(this.state.data);
                this.setState({ users });
            })
    }

    renderUser = () => {
        return this.state.users.map((user) => {
            return (
                <View>
                    <Text onPress={() => props.navigation.navigate('UserDetails', { user })}>{user.name}</Text>
                    {/* <FlatList data={[{ key: user.name }]}
                        renderItem={({ item }) => <Text>{item.key}</Text>} />
                    <Text onPress={() => props.navigation.navigate('UserDetails', { user })}>Open</Text> */}
                </View>
            )
        })
    }

    render() {
        console.log(this.state.users);
        return (
            <Content>{this.renderUser}</Content>
        )

    }

}

export default UserList