import React from "react";
import { View, StyleSheet } from "react-native";

import { TextoBotao } from './styles';

// import { RectButton } from "react-native-gesture-handler";

import colors from "../../Styles/colors";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";

const Botao1 = (props) => {
  return (
    <RectButton
      style={styles.botao}
      onPress={props.funcExec}>

      <TextoBotao> {props.title} </TextoBotao>
    </RectButton>
  );
};

export { Botao1 };

const styles = StyleSheet.create({
  botao: {
    width: 288,
    height: 50,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.fundo,
    borderWidth: 4,
    borderColor: "#000",
  }
  
})
