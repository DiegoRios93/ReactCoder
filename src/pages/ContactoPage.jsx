import '../App.css';


function ContactoPage() {


  return (
    <div className="confirmaForm">
      <h1 className="centrar">Contacto</h1>
      <form className="formularioContacto centrar">
        <input className="formEstilo" type="text" id="name" name="name" placeholder="Nombre Completo" required />
        <br />
        <br />
        <input className="formEstilo" type="mail" id="name" name="mail" placeholder="Email" required />
        <br />
        <br />
        <input className="formEstilo" type="number" id="name" name="contacto" placeholder="Número de contacto" required />
        <br />
        <br />
        <input className="formEstilo" type="text" id="name" name="asunto" placeholder="Asunto" required />
        <br />
        <br />
        <textarea className="formEstilo" name="Comentarios" cols="60" rows="10" placeholder="Comentarios y consultas aquí..."></textarea>
        <br />
        <input type="submit" name="Enviar" className="botonPagar" />
      </form>
    </div>
  );
}

export default ContactoPage ;