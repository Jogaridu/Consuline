import React, { useState } from "react";
import { Dimensions, Text, StyleSheet } from "react-native";

import { TextInputMask as Input } from "react-native-masked-text";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import colors from "../../../Styles/colors";

import {
  ContainerImgTelefone,
  ImgTelefone,
  ContainerTituloTelefone,
  ContainerFormularioTelefone,
  ContainerBotao,
} from "./styles";

const Telefone = ({ navigation }) => {
  const [celular, setCelular] = useState("");

  const { height, width } = Dimensions.get("window");

  const navegarCodigo = () => {
    navigation.navigate("RegistrarCodigo");
  };

  return (
    <Container>
      <ContainerImgTelefone style={{ width: width * 0.15 + "%" }}>
        <ImgTelefone source={require("../../../Assets/vetorCelular.jpg")} />
      </ContainerImgTelefone>

      <ContainerTituloTelefone>
        <Titulo title="Celular" />
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Insira seu número de celular para verificar sua conta
        </Text>
      </ContainerTituloTelefone>

      <ContainerFormularioTelefone>
        <Input
          style={styles.input}
          type={"cel-phone"}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          value={celular}
          onChangeText={(e) => setCelular(e)}
          placeholder="Número"
          placeholderTextColor="#403e66"
        />
      </ContainerFormularioTelefone>

      <ContainerBotao>
        <Botao title="Próximo" width={130} funcExec={navegarCodigo} />
      </ContainerBotao>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 288,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },
});

export default Telefone;
