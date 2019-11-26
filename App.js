import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Content } from 'native-base'

import UserStack from './src/Navigators/UserStack'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Text style={styles.headline}>Basic List</Text>
        </Header>
        <Content>
          {/* <Text style={styles.container}>HEADER CERITANYA</Text> */}
          <UserStack />
        </Content>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#c9c4c3',
    fontSize: 20,
    borderBottomColor: 'black'
  },
});

export default App