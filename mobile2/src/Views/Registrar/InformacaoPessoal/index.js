import React from "react";
import { Dimensions } from "react-native";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import TextInput from "../../../Components/Input";
import Botao from "../../../Components/Botao2";

import {
  ImgInfmPessoais,
  ContainerFormulario,
  ContainerImgCadastro,
  ContainerTituloCadastro,
  ContainerBotao,
} from "./styles";

const InformacaoPessoal = ({ navigation }) => {

  const { height, width } = Dimensions.get('window');

  const navegarLocalizacao = () => {
    navigation.navigate("RegistrarLocalizacao");
  }

  return (
    <Container>
      <ContainerImgCadastro style={{ width: width * 0.15 + "%" }}>
        <ImgInfmPessoais source={require("../../../Assets/user.png")} />
      </ContainerImgCadastro>
      <ContainerTituloCadastro>
        <Titulo title="Informações pessoais" />
      </ContainerTituloCadastro>

      <ContainerFormulario>
        <TextInput plch="Nome Completo" />
        <TextInput plch="Data de Nascimento" />
        <TextInput plch="RG" width={115} />
        <TextInput plch="CPF" marginLeft={15} width={150} />
        <TextInput plch="Email" />
      </ContainerFormulario>
      <ContainerBotao>
        <Botao title="Próximo" width={130} funcExec={navegarLocalizacao} />
      </ContainerBotao>
    </Container>
  );
};

export default InformacaoPessoal;
