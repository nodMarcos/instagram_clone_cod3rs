import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header';
import Post from '../components/Post';

export default class Feed extends React.Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Fulano de Tal',
        email: 'fulano@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'John Alberto Silva',
            comment: 'Bela foto!'
          },
          {
            nickname: 'Ray Wilson Sumpton',
            comment: 'Stunning!'
          }
        ]
      },
      {
        id: Math.random(),
        nickname: 'Johnson Gil Almeida',
        email: 'johnson@gmail.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: []
      }
    ]
  }

  render () {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={post => `${post.id}`}
          renderItem={({item}) => <Post key={item.id} {...item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})