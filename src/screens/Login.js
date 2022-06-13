import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {connect} from 'react-redux';
import {login} from '../store/actions/user'
class Login extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  componentdidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.navigation.navigate('Profile')
    }
  }

  login = () => {
    this.props.onLogin({...this.state})
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType='email-address'
          autoFocus={true}
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    width: '90%',
    height: 40,
    borderColor: '#333',
    padding: 10,
    backgroundColor: '#eee',
    borderWidth: 1,
  }
})

const mapDispatchToProps = dispatch => {
  return{
    onLogin: user => dispatch(login(user))
  }
}

const mapStateToProps = ({user}) => {
  return {
    isLoading: user.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)