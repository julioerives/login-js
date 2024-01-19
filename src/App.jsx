import { useState } from 'react';
import './App.css';
import User1 from "./user1";
import User2 from "./user2";

function App() {
  const [users, setUsers] = useState([
    {
      user: "Julio",
      password: "JulioElbonito",
      key: 0
    },
    {
      user: "UrielAntuna",
      password: "cruzazul",
      key: 1
    },
    {
      user: "pedro",
      password: "Canales",
      key: 2
    }
  ]);
  const eliminar=(user)=>{
    setUsers(user)
  }
  const validar = () => {
    const usuarioActual = document.querySelector('#usuarioInput').value;
    const contrasenaActual = document.querySelector('#contrasenaInput').value;
      if(users[0].password.toLowerCase() == contrasenaActual.toLowerCase() && users[0].user.toLowerCase() == usuarioActual.toLowerCase()) {
        setMostrar(
          <User1 variable={users} setVariable={eliminar} />
        );
      }else if(users[1].password.toLowerCase() == contrasenaActual.toLowerCase() && users[1].user.toLowerCase() == usuarioActual.toLowerCase()){
        setMostrar(
          <User2 />
        );
      }else if(users[2].password.toLowerCase() == contrasenaActual.toLowerCase() && users[2].user.toLowerCase() == usuarioActual.toLowerCase()){
        setMostrar(
          <User2 />
        );
      }else{
        alert("Usuario no detecteado")
      }

    

    // Deshabilitar el botón después de actualizar el estado de mostrar
    setBotonDeshabilitado(true);
  };
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);
  const [mostrar, setMostrar] = useState(
    <div className="container">
      <section className="form">
        <h1>Inicio de sesion</h1>
        <form action="">
          <label htmlFor="">Usuario</label>
          <input type="text" id='usuarioInput' />
          <label htmlFor="">Contraseña</label>
          <input type="text" id='contrasenaInput' />
          <button onClick={validar} disabled={botonDeshabilitado}>
            Iniciar
          </button>
        </form>
      </section>
    </div>
 
  );



  return (
    <>
      {mostrar}
    </>
  );
}

export default App;