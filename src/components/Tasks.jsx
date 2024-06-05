//Imports
import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import moment from 'moment';
import 'moment/locale/pt-br'

import commonStyles from "../commonStyles";
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
const [concluida, setConcluida] = useState(props.concluidaEm != null);

toggleConcluida = () => {
        setConcluida(!concluida);
};
const tarefaConcluidaStyle = concluida ? { textDecorationLine: 'line-through', color:"blue" } : {};

const icone = concluida ? <Icon name="check" size={20} color='#FFF'/> : null;


// const tarefaConcluidaNao =props.concluidaEm !=null ?
// {textDecorationLine: 'line-through' } : {}

const date = props.concluidaEm ? props.concluidaEm : props.dataEstimada
const dateTime = moment(date).locale('pt-br').format('ddd, D [de] MMMM'); 

        //Inicio Código
        return (
                <TouchableOpacity onPress={toggleConcluida}>
                <View style={style.container}>
                        <View style={style.checkContainer}>
                                {getCheckView(props.concluidaEm)}
                               
                        </View>

                        <View>
                                <Text style={[style.descricao, tarefaConcluidaStyle]}>{props.descricao}</Text>
                                <Text style={style.date}>{dateTime}</Text>
                        </View>
                </View>
</TouchableOpacity>
        )
};

function getCheckView(concluidaEm) {
        if (concluidaEm != null) {
                return (
                        <View style={style.dataEstimada}>
                                <Icon name="check" size={20} color='#000'/>
                        </View>
                )
        } else {
                return(
                        <View style={style.pendente}>
                                
                        </View>
                )
        }
}

//Styles
const style = StyleSheet.create({

        container: {
            flexDirection:'row',
            borderColor:'#2c2c2c',
            borderBottomWidth:1,
            alignItems:'center',
            paddingVertical:10
        },
        dataEstimada:{
                height:25,
                width:25,
                borderRadius:13,
                borderWidth:1,
                backgroundColor:'#4D7031',
                alignItems:'center',
                justifyContent:'center',
        },
        pendente:{
                height:25,
                width:25,
                borderRadius:13,
                borderWidth:1,
                borderColor:'#555'
        },
        descricao:{
                color: commonStyles.colors.mainText,
                fontSize:15,
        },
        date: {
                fontFamily: commonStyles.fontFamily,
                color: commonStyles.colors.subText,
                fontSize:12,
        },
        checkContainer:{
                width:'20%',
                alignItems:'center',
                justifyContent:'center',
        }
        
    });