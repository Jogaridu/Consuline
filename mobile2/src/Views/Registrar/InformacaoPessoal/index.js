import React, { useState, useRef } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { validate } from 'validate.js';
import { TextInputMask as Input } from "react-native-masked-text";

import Container from "../../../Components/Container";
import Titulo from "../../../Components/TituloCadastro";
import Botao from "../../../Components/Botao2";

import validarCamposVazios from "../../../Fixtures/validarInputVazia";

import {
  ImgInfmPessoais,
  ContainerFormulario,
  ContainerImgCadastro,
  ContainerTituloCadastro,
  ContainerBotao,
} from "./styles";

import colors from "../../../Styles/colors";

const InformacaoPessoal = ({ navigation, route }) => {

  var [novoPaciente, setNovoPaciente] = useState({
    nome: "",
    dataNascimento: "",
    rg: "",
    cpf: "",
    email: "",
  });

  const { height, width } = Dimensions.get("window");

  const inputNome = useRef(null);
  const inputData = useRef(null);
  const inputRg = useRef(null);
  const inputCpf = useRef(null);
  const inputEmail = useRef(null);

  const tratamentoDados = () => {
    var dataNascimento = novoPaciente.dataNascimento;
    var separador = "-";
    var arrayData = dataNascimento.split(separador);

    var ano = arrayData[2];
    var mes = arrayData[1];
    var dia = arrayData[0];

    const dataNova = ano + "-" + mes + "-" + dia;

    var rg = novoPaciente.rg;
    var cpf = novoPaciente.cpf;

    const rgParse = rg.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
    const cpfParse = cpf.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");

    novoPaciente = {
      ...novoPaciente,
      dataNascimento: dataNova,
      rg: rgParse,
      cpf: cpfParse,
    };
  };

  const mascaraNome = (e) => {
    var nome = e;
    nome = nome.replace(/([\u0300-\u036f]|[0-9])/g, '');

    setNovoPaciente({...novoPaciente, nome});
  }

  const navegarLocalizacao = () => {
    tratamentoDados();
    // console.log(rgParse, cpfParse);
    // const arrayInputsVazias = validarCamposVazios(novoPaciente);
    // console.log(arrayInputsVazias);
    // if (arrayInputsVazias.length) {
    //   console.warn("Existem campos vazios");
    //   if (arrayInputsVazias.find(campo => campo === "nome")) {
    //     inputNome.current.style = { height: "100px" };
    //   }
    //   // arrayInputsVazias.find(campo => campo === "dataNascimento") ? inputData.current.focus() : "";
    //   // arrayInputsVazias.find(campo => campo === "rg") ? inputRg.current.focus() : "";
    //   // arrayInputsVazias.find(campo => campo === "cpf") ? inputCpf.current.focus() : "";
    //   // arrayInputsVazias.find(campo => campo === "email") ? inputEmail.current.focus() : "";
    // } else {
    //   // arrayInputsVazias
    navigation.navigate("RegistrarLocalizacao", novoPaciente);
    // }
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerImgCadastro>
            <ImgInfmPessoais source={require("../../../Assets/user.png")} />
          </ContainerImgCadastro>
          <ContainerTituloCadastro>
            <Titulo title="Informações pessoais" />
          </ContainerTituloCadastro>

          <ContainerFormulario>
            <TextInput
              style={styles.input}
              value={novoPaciente.nome}
              id="nome"
              onChangeText={mascaraNome}
              placeholder="Nome Completo"
              placeholderTextColor="#403e66"
              ref={inputNome}
              underlineColor="#ff0000"
            />
            <Input
              style={styles.input}
              type={"datetime"}
              options={{
                format: "99-99-9999",
              }}
              value={novoPaciente.dataNascimento}
              id="dataNasc"
              onChangeText={(e) =>
                setNovoPaciente({ ...novoPaciente, dataNascimento: e })
              }
              placeholder="Data de Nascimento"
              placeholderTextColor="#403e66"
              ref={inputData}
            />
            <Input
              style={styles.rg}
              type={"custom"}
              options={{
                mask: "99.999.999-9",
              }}
              value={novoPaciente.rg}
              id="rg"
              keyboardType="numeric"
              onChangeText={(e) => setNovoPaciente({ ...novoPaciente, rg: e })}
              placeholder="RG"
              placeholderTextColor="#403e66"
              ref={inputRg}
            />
            <Input
              style={styles.cpf}
              type={"cpf"}
              value={novoPaciente.cpf}
              id="cpf"
              onChangeText={(e) => setNovoPaciente({ ...novoPaciente, cpf: e })}
              placeholder="CPF"
              placeholderTextColor="#403e66"
              ref={inputCpf}
            />
            <TextInput
              style={styles.input}
              value={novoPaciente.email}
              id="email"
              onChangeText={(e) =>
                setNovoPaciente({ ...novoPaciente, email: e })
              }
              placeholder="Email"
              placeholderTextColor="#403e66"
              ref={inputEmail}
              autoCompleteType="email"
            />
          </ContainerFormulario>
          <ContainerBotao>
            <Botao title="Próximo" width={130} funcExec={navegarLocalizacao} />
          </ContainerBotao>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  erroInput: {
    width: 288,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: [colors.fundo],
    marginBottom: 15,
    borderColor: "#FF0000",
    color: "#FF0000",
  },

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
  rg: {
    width: 136,
    height: 45,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },
  cpf: {
    width: 136,
    height: 45,
    marginLeft: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: [colors.principal],
    backgroundColor: [colors.fundo],
    marginBottom: 15,
  },
});

export default InformacaoPessoal;