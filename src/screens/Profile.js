import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar'

export default class Profile extends React.Component {
  logout = () => {
    this.props.navigation.navigate('Auth')
  }

  render() {
    const options = { email: 'fulano@gmail.com', secure: true }
    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>Fulano de Tal</Text>
        <Text style={styles.email}>
          fulanodetal@gmail.com
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.logout}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100, 
  },
  nickname: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold'
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
})