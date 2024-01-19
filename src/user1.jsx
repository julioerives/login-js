import "./user.css";
import { useState, useEffect } from 'react';

function User1(props) {
  const { variable, setVariable } = props;
  const [localVariable, setLocalVariable] = useState(variable);

  const handleEliminarUsuario = (key) => {
    const updatedUsers = localVariable.filter(user => user.key !== key);
    setLocalVariable(updatedUsers);
    setVariable(localVariable);
    console.log(variable);
  };
  useEffect(() => {
    console.log("users", localVariable);
    // Si es necesario, puedes actualizar la variable original aquí
    // setVariable(localVariable);
  }, [localVariable]);
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <strong>Usuario 1</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://es.wikipedia.org/wiki/Rick_y_Morty">
              Rick y morty
            </a>
          </li>
          <li>
            <a href="https://es.wikipedia.org/wiki/Malcolm_in_the_Middle">
              Malcolm el de en medio
            </a>
          </li>
          <li>
            <a
              href="https://es.wikipedia.org/wiki/The_Big_Bang_Theory"
              role="button"
            >
              La teoria del big bang
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="grid">
      <article>
        <h1>Malcom el de en medio</h1>
        <img
          src="https://m.media-amazon.com/images/S/pv-target-images/d419eaabc5a135ae69b898c1c853c14bcc3264ed25e46154dce50de2a5d7c647.jpg"
          alt=""
        />
        <p>
          "Malcolm el de enmedio" es una popular serie de televisión
          estadounidense que se emitió desde 2000 hasta 2006. La serie fue
          creada por Linwood Boomer y se centra en la vida de una familia
          disfuncional compuesta por los padres, Lois y Hal, y sus cuatro
          hijos, siendo el protagonista central el tercer hijo, Malcolm
        </p>
      </article>
      <article>
        <h1>La teoria del big bang</h1>
        <img
          src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/08/Big-Bang-Theory-1.jpg?fit=1200%2C675&quality=50&strip=all&ssl=1"
          alt=""
        />
        <p>
          La serie sigue la vida de cuatro amigos científicos altamente
          inteligentes pero socialmente ineptos: Leonard Hofstadter, Sheldon
          Cooper, Howard Wolowitz y Rajesh "Raj" Koothrappali. Sus vidas se
          ven alteradas cuando una mujer, Penny, una aspirante a actriz y
          mesera, se muda al departamento del lado. A lo largo de las
          temporadas, el grupo experimenta situaciones cómicas y desafíos en
          sus relaciones, tanto románticas como amistosas.
        </p>
      </article>
    </div>
    <div className="container-user1">
      <article>
        <h1 id="RickAndmorty">Rick y morty</h1>
        <img
          src="https://www.latercera.com/resizer/wYOVxpChZfy-GAe1pocnF7oUp68=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/MITDV2TMLRAIBAOKSLREQAFNTA.jpeg"
          alt=""
        />
        <p>
          "Rick and Morty" es una serie de animación para adultos que sigue
          las aventuras interdimensionales y cósmicas del científico
          alcohólico, Rick Sanchez, y su nieto adolescente, Morty Smith. La
          serie combina elementos de ciencia ficción, humor negro y parodias
          de la cultura pop para crear una experiencia única.
        </p>
      </article>
    </div>
    <div className="grid">
    {
      (function () {
        const userElements = [];
        for (let i = 1; i < localVariable.length; i++) {
          const user = localVariable[i];
          userElements.push(
            <article key={user.key}>
              <p>
                <strong>Nombre de usuario:</strong> {user.user}
              </p>
              <p>
                <strong>Contraseña:</strong> {user.password}
              </p>
              <button onClick={() => handleEliminarUsuario(user.key)}>
                Eliminar
              </button>
            </article>
          );
        }
        return userElements;
      })()
    }
    </div>
  
    <footer>
      <div className="footer-container">
        <h2>Julio y asociados</h2>
        <div className="icons">
          <a href="https://github.com/julioerives">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
              className="logo"
            />
          </a>
          <a href="https://github.com/julioerives">
            {" "}
            <img
              src="https://img.freepik.com/vector-premium/icono-instagram-logotipo-insignia-moderna_578229-124.jpg"
              alt=""
              className="logo"
            />
          </a>
        </div>
      </div>
    </footer>
  </>
  );
}
export default User1;
