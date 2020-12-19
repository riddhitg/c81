import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView} from 'react-native'
import {Header, Icon, Badge} from 'react-native-elements';

const MyHeader = props=>{
    return(
        <Header
        leftComponent = {<Icon name = 'bars' type = 'font-awesome' color = '#696969' onPress = {()=>props.navigation.toggleDrawer()}/>}
        centerComponent = {{text:props.title, style : {color:'#90a5a9', fontSize:20, fontWeight:"bold"}}}
        backgroundColor = "#eaf8fe"
        />
    )
}
export default MyHeader;