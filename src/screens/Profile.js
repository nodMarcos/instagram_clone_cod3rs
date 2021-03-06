import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar'
import { connect } from 'react-redux';
import { logout } from '../store/actions/user'

class Profile extends React.Component {
  logout = () => {
    this.props.onLogout()
    this.props.navigation.navigate('Auth')
  }

  render() {
    const options = { email: this.props.email, secure: true }
    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>{this.props.name}</Text>
        <Text style={styles.email}>
          {this.props.email}
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
    width: 100,
    height: 100,
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
    borderRadius: 4,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  }
})

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
    email: user.email,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)