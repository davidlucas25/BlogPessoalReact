import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagem/listapostagem/ListaPostagem';
import CadastroPost from './components/postagem/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPost from './components/postagem/deletarPost/DeletarPost';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{minHeight: '75vh'}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/temas' element={<ListaTema />} />
          <Route path='/posts' element={<ListaPostagem />} />
          
          <Route path='/formularioPostagem' element={<CadastroPost />} />
          <Route path='/formularioPostagem/:id' element={<CadastroPost />} />
          <Route path='/formularioTema' element={<CadastroTema />} />
          <Route path='/formularioTema/:id' element={<CadastroTema />} />
          <Route path='/deletarPost/:id' element={<DeletarPost />} />
          <Route path='/deletarTema/:id' element={<DeletarTema />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
