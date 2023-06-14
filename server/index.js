const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/enviar-email', (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Configurações para o envio do e-mail
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha-do-email',
    },
  });

  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'gabrielsj151@gmail.com',
    subject: 'Nova mensagem do formulário de contato',
    text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocorreu um erro ao enviar a mensagem.' });
    } else {
      console.log('E-mail enviado:', info.response);
      res.json({ message: 'Mensagem enviada com sucesso!' });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
