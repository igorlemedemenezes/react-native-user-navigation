import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';
import UsuariosNavegacao from './navegacao/UsuariosNavegacao';
import usuariosReducer from './store/usuarios-reducer'

const rootReducer = combineReducers({
  usuarios: usuariosReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return <Provider store={store}>
        <UsuariosNavegacao />
        </Provider>

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
