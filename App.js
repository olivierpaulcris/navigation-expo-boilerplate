import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

// Principal

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

// Screeens

class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Feed"
          onPress={() => this.props.navigation.navigate('Feed')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}

// Menu

const DashboardStackNavigator = createStackNavigator(
  {
    Welcome: { 
      screen: WelcomeScreen,
      navigationOptions: () => ({
        title: 'Welcome',
      }),
    },
    Feed: { 
      screen: Feed,
      navigationOptions: () => ({
        title: 'Feed',
      }),
    },
    Settings: { 
      screen: Settings ,
      navigationOptions: () => ({
        title: 'Settings',
      }),
    },
    Profile: { 
      screen: Profile,
      navigationOptions: () => ({
        title: 'Profile',
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

// Screens

const AppDrawerNavigator = createDrawerNavigator({
  MyApp: {
    screen: DashboardStackNavigator,
  },
  Welcome: { 
    screen: WelcomeScreen 
  },
  Feed: { 
    screen: Feed
  },
  Settings: { 
    screen: Settings 
  },
  Profile: { 
    screen: Profile 
  },
});

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
