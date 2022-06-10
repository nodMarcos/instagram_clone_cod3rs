import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
 
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 
class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    };
 
    pickLocalImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
 
        console.log(res);
 
        if (!res.cancelled) {
            this.setState({ image: res.uri });
        }
    }
 
    pickCameraImage = async () => {
        let res = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
 
        console.log(res);
 
        if (!res.cancelled) {
            this.setState({ image: res.uri, base64: res.data });
        }
    }
 
    save = async () => {
        Alert.alert('Imagem salva!', this.state.comment)
    }
 
    render() {
        console.disableYellowBox = true
 
        return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                keyboardOpeningTime={0} >
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Compartilhe uma imagem</Text>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: this.state.image }} style={styles.image} />
                        </View>
                        <TextInput
                            placeholder='Algum comentário para a foto?'
                            style={styles.input}
                            value={this.state.comment}
                            onChangeText={comment => this.setState({ comment })}
                        />
                        <View style={styles.choicesContainer}>
                            <Text style={styles.butttomText}>Escolha uma foto</Text>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.pickLocalImage}
                                >
                                    <Icon name='folder' size={30} color="gray" />
                                    <Text>Arquivos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.pickCameraImage}
                                >
                                    <Icon name='camera' size={30} color="gray" />
                                    <Text >Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.save}
                                >
                                    <Icon name='share' size={30} color="gray" />
                                    <Text>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View >
                </ScrollView >
            </KeyboardAwareScrollView >
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#eee',
        marginTop: 10,
        resizeMode: 'contain'
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    choicesContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        width: '90%',
        marginTop: 30,
        padding: 5,
 
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        padding: 10,
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        marginTop: 20,
        width: '90%',
    }
})
 
export default AddPhoto