
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #141e30, #243b55);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding: 35px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

h1 {
    text-align: center;
    color: #243b55;
    margin-bottom: 10px;
}

.subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 30px;
    font-size: 14px;
}

.formulario {
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 7px;
    color: #333;
}

input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 7px;
    font-size: 16px;
    width: 100%;
}

input:focus {
    outline: none;
    border-color: #243b55;
    box-shadow: 0 0 5px rgba(36, 59, 85, 0.3);
}

small {
    color: #777;
    margin-top: 5px;
    font-size: 12px;
}

button {
    margin-top: 25px;
    padding: 14px;
    background-color: #243b55;
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #141e30;
}

.resultado {
    margin-top: 25px;
    padding: 20px;
    background-color: #eef3f8;
    border-radius: 10px;
    text-align: center;
}

.resultado h2 {
    color: #243b55;
    margin-bottom: 12px;
}

#mensagem {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}
