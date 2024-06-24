import { useRouteError } from "react-router-dom";

import './ErrorPage.css';

import GLogo from "../assets/img/g-header.png"


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src={GLogo} alt="G-Corp" />
      <h1>Oops!</h1>
      <p>Temos um problema.</p>
      <p>Já estamos resolvendo, aguarde por favor...</p>
      <p>Toda a equipe da G-Corp pede perdão pelo ocorrido.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}