import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import axios from 'axios'
import { Button } from 'native-base'

class UserDetails extends Component {
    state = {
        data: []
    }
    componentDidMount = () => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                const data = res.data;
                // console.log(this.state.data);
                this.setState({ data });
            })
    }

    renderUser = () => {
        return this.state.data.map((user) => {
            // console.log(user);
            return (
                <View style={styles.container}>
                    <Text>{user.name}</Text>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderUser()}
                <Button>
                    <Text onPress={() => props.navigation.navigate('UserList', null)}>Back</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
export default UserDetails