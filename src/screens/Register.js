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

  componentDidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.setState({
        name: '',
        email: '',
        password: ''
      })
      this.props.navigation.navigate('Profile') // Feed
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registrar</Text>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  button: {
    marginTop: 30,
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
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#bbb',
    paddingLeft: 25,
  },
})

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: user => dispatch(createUser(user))
  }
}
const mapStateToProps = ({user}) => {
  return {
    isLoading: user.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)