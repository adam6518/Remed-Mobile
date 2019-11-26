import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import UserList from '../Screens/UserList'
import UserDetails from '../Screens/UserDetails'

const UserStack = createAppContainer(
    createStackNavigator({ 
        UserList,
        UserDetails,
    },
        {
            headerMode: 'none'
        })
)

export default UserStack