import React,{useState} from 'react';
import { View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaCadastro from './telas/TelaCadastro';
import TelaUsuario from './telas/TelaUsuario';
import UsuariosNavegacao from './navegacao/UsuariosNavegacao';

export default function App() {
  
  return <UsuariosNavegacao />

/*   const[idUsuario, setIdUsuario] = useState();
  const[nomeUsuario, setNomeUsuario] = useState();
  const[telefoneUsuario, setTelefoneUsuario] = useState();
  const[telaInicial, setTelaInicial] = useState(true)
  const[telaUsuario, setTelaUsuario] = useState(false)

  const selecionaUsuarioId = (idUsuario) => {
    setIdUsuario(idUsuario);
  }

  const selecionaUsuarioNome = (nomeUsuario) => {
    setNomeUsuario(nomeUsuario);
  }

  const selecionaUsuarioTelefone = (telefoneUsuario) => {
    setTelefoneUsuario(telefoneUsuario);
  }

  const editarUsuario = (id, nome, telefone) => {
    setIdUsuario(id);
    setNomeUsuario(nome);
    setTelefoneUsuario(telefone);
  }
*/
}
