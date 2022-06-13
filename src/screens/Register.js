import {View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Component } from 'react'
import { createUser } from '../store/actions/user'
import { connect } from 'react-redux'
class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
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
        <TouchableOpacity style={styles.button} onPress={() => this.props.onCreateUser(this.state)}>
          <Text style={styles.buttonText}>Registrar</Text>
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
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 15
  },
})

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: user => dispatch(createUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Register)