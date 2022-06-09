import {Platform, Text, View, StyleSheet, Image} from 'react-native'
import { Component } from 'react'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>
            Lambe Lambe
          </Text>
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
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 40,
    marginRight: 10,
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28
  }
})

export default Header