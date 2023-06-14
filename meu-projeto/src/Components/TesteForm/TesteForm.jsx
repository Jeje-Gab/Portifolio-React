import React, { useState } from 'react'
import './TesteForm.css'

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


  }
}

export default TesteForm;
