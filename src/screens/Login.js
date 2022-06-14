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
        <Text style={styles.title}>Login</Text>
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
          secureTextEntry={true}
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  button: {
    marginTop: 20,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
  input: {
    marginTop: 10,
    borderRadius: 20,
    width: '90%',
    height: 40,
    borderColor: '#bbb',
    padding: 10,
    paddingLeft: 25,
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