import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/process-prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <h1>ChatGPT Prompt Tester</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Escribe tu prompt aquí..."
        ></textarea><br />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Respuesta:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
