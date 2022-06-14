import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";


export default class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}> 
        <Image source={require('../../assets/imgs/icon.png')} style={styles.logo} />
        <Text style={styles.header}>Lambe-Lambe</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
  }
})