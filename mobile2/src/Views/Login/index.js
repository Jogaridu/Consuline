import React, { useState } from "react";
import { TextInput } from "react-native";
import { Botao1 } from "../../Components/Botao1";
import Botao2 from "../../Components/Botao2";
import { Input } from "./styles";
import Container from "../../Components/Container";

import { ImgLogoLogin } from "./styles";

import api from "../../Services/api";

const Login = ({ navigation }) => {

  const [pacienteLogin, setPacienteLogin] = useState({
    login: "",
    senha: ""
  })

  const navegarCadastro = () => {
    navigation.navigate("RegistrarInformacaoPessoal");
  }

  const handlerInputLogin = (string) => setPacienteLogin({ ...pacienteLogin, login: string });
  const handlerInputSenha = (string) => setPacienteLogin({ ...pacienteLogin, senha: string });

  const autenticarPaciente = async () => {
    try {
      const retorno = await api.post("/paciente/sessao", pacienteLogin);
      console.log(retorno);
      if (retorno) {
        console.log(retorno.data);

      }

    } catch (error) {
      console.warn("Usuário ou senha estão errados...");
    }


  }

  return (
    <Container>
      <ImgLogoLogin style={{ marginBottom: 30 }} source={require("../../Assets/logo.png")} />
      <Input plch="Login" handler={handlerInputLogin} />
      <Input marginBottom={74} plch="Senha" handler={handlerInputSenha} />
      <Botao1 title="Enviar" margin={26} funcExec={autenticarPaciente} />
      <ImgLogoLogin
        style={{ marginBottom: 30 }}
        source={require("../../Assets/logo.png")}
      />
      <Input
        style={{ marginBottom: 15 }}
        placeholder="Login"
        maxLength={20}
        placeholderTextColor="#403e66"
        onChangeText={handlerInputLogin}
      />
      <Input
        secureTextEntry={true}
        style={{ marginBottom: 74 }}
        placeholder="Senha"
        maxLength={20}
        placeholderTextColor="#403e66"
        onChangeText={handlerInputSenha}
      />
      <Botao1 title="Enviar" style={{ marginBottom: 26 }} />
      <Botao2 title="Registrar-se" funcExec={navegarCadastro} />
    </Container>
  );
};

export default Login;
