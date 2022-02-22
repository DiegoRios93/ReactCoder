import '../App.css';


function ContactoPage() {


  return (
    <div>
      <h1>Contacto</h1>
      <form className="formularioContacto">
        <input type="text" id="name" name="name" placeholder="Nombre Completo" required />
        <br />
        <br />
        <input type="mail" id="name" name="mail" placeholder="Email" required />
        <br />
        <br />
        <input type="number" id="name" name="contacto" placeholder="Número de contacto" required />
        <br />
        <br />
        <input type="text" id="name" name="asunto" placeholder="Asunto" required />
        <br />
        <br />
        <textarea name="Comentarios" cols="60" rows="10" placeholder="Comentarios y consultas aquí..."></textarea>
        <br />
        <input type="submit" name="Enviar" />
      </form>
    </div>
  );
}

export default ContactoPage ;