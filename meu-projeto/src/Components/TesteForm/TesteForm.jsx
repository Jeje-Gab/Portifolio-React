import React, { useState } from 'react'

import './teste.css';
import axios from 'axios';

function TesteForm(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [erro, setErro] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('http://localhost:3001/enviar-email', {
          nome,
          email,
          mensagem,
        });
  
        setEnviado(true);
        setErro(null);
      } catch (error) {
        console.log(error);
        setErro('Ocorreu um erro ao enviar a mensagem.');
      }
    };
  
    return (
      <div className="form-container">
        <h2>Formulário de Contato</h2>
        {enviado ? (
          <p>Mensagem enviada com sucesso!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
            <br />
            <button type="submit">Enviar</button>
            {erro && <p>{erro}</p>}
          </form>
        )}
      </div>
    );
  }
  
export default TesteForm;
