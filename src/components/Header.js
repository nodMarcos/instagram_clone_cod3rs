import {Platform, Text, View, StyleSheet, Image} from 'react-native'
import { Component } from 'react'
import icon from '../../assets/imgs/icon.png'
import { Gravatar } from 'react-native-gravatar'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const name = this.props.name || 'Anonymous'
    const gravatar = this.props.email ? <Gravatar options={{email: this.props.email, secure: true}} style={styles.avatar} /> : null
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>
            Lambe Lambe
          </Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {gravatar}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 45,
    marginRight: 10,
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 10,
    color: '#888'
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  }
})

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
    email: user.email,
  }
}

export default connect(mapStateToProps, null) (Header)