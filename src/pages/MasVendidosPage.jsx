//import { getFirestore } from "../firebase/firebase";
import '../App.css';

/*const PALAS =  [
    {
      "paleta": "Nox AT10 Luxury",
      "precio": 62000,
      "grosor": "3.8mm",
      "stock": 50,
      "img": "NoxPaleta.jpeg"
    },
    {
      "paleta": "Bullpadel Flow Light",
      "precio": 58000,
      "grosor": "3.8mm",
      "stock": 48,
      "img": "BullPadelFlow.jpeg"
    },
    {
      "paleta": "Paleta Wilson Bela Pro Wr065511",
      "precio": 67500,
      "grosor": "3.8mm",
      "stock": 55,
      "img": "PaletaBelaWilson.jpeg"
    },
    {
      "paleta": "Paleta Padel adidas Metalbone",
      "precio": 85000,
      "grosor": "3.8mm",
      "stock": 30,
      "img": "AdidasMetalbone.jpeg"
    },
    {
      "paleta": "Paleta Padel Bullpadel Hack Ctr",
      "precio": 72000,
      "grosor": "3.8mm",
      "stock": 40,
      "img": "BullHackCtrl.jpeg"
    },
    {
      "paleta": "Paleta De Padel adidas Adipower Master Ltd",
      "precio": 69000,
      "grosor": "3.8mm",
      "stock": 90,
      "img": "AdidasMaster.jpeg"
    },
    {
      "paleta": "Paleta De Padel Mayor",
      "precio": 59600,
      "grosor": "3.8mm",
      "stock": 68,
      "img": "PaletaMayor.jpeg"
    }
  ];
*/
function MasVendidosPage() {

  //const db = getFirestore();
  //const collection = db.collection("palas");

  //const crearDataBaseFirestore = () => {
   
   // PALAS.forEach((product)=>{
     // collection
      //.add(product)
      //.then((res) => console.log("Producto agregado:", res.id))
      //.catch((err) => console.log("se rompio", err));
    //}); 
  //};



  return (
    <div>
      <h1 className="centrar">Mas vendidos</h1>
      <p className="parrafoMasV">Sección en desarrollo, esperamos contar con más ventas para poder crear un ranking con las paletas mas pedidas y mas deseadas por los jugadores</p>
      <p className="parrafoMasV">Ve a la Home y continua eligiendo tu modelo favorito</p>
      <h2 className="parrafoMasV">Aquí debajo comentaremos varios puntos importantes a la hora de elegir tu paleta</h2>
      <ul className="listaMasV">
       <li>
        <span className="spanMasV">Peso</span>
        <p>Puede ser uno de los factores más importantes a tener en cuenta. A menor peso mayor sensación de ligereza y por tanto de control, en cambio, a mayor peso perdemos control, pero ganamos en potencia.</p>
       </li>
       <li>
        <span className="spanMasV">Forma</span>
        <p>Las palas con forma de diamante tienen más potencia y menos control. Con un balance alto, estas palas están más orientadas a jugadores con experiencia.</p>
        <p>Las que tienen forma de lágrima tienen un equilibrio entre potencia y control. Su balance suele ser equilibrado o algo orientado hacia la punta. Este tipo de forma está más orientado a un jugador de nivel intermedio-avanzado.</p>
        <p>Las palas con forma redonda tienen más control y poca potencia. Su punto dulce se encuentra en el centro de la pala y tienen balance bajo. Es el tipo de pala más idóneo para jugadores de iniciación.</p>
       </li>
       <li>
        <span className="spanMasV">Grosor</span>
        <p>Según la reglamentación actual una pala no debe de tener un grosor mayor a 38 milímetros, siendo esta el espesor más habitual de encontrar en las palas de hoy en día. Por tanto, cerciórate de que la pala tiene dicho espesor y detente más en el resto de factores.</p>
       </li>
       <li>
        <span className="spanMasV">Frecuencia de juego</span>
        <p>A la hora de comprarse una pala de pádel saber el número de veces que sueles jugar a la semana es importante. Si entrenas, juegas partidos con amigos y compites te merece la pena comprarte una buena pala, pero si por el contrario juegas ocasionalmente no es necesario gastarte tanto dinero, es de lógica. Cuantas más horas pases en una pista de pádel mejor debe ser el material que uses.</p>
       </li>
       <li>
        <span className="spanMasV">Probar antes de comprar</span>
        <p>El mejor consejo que te pueden dar. Antes de comprar una pala te recomendamos encarecidamente que la pruebas. Muchas tiendas, como Padel Nuestro por ejemplo, disponen de algunas palas de test por lo que si tienen aquel modelo en el que estás interesado no dudes en probarla antes de comprarla. O incluso si tienes un amigo que tenga la pala que estás pensando en comprar no lo dudes y pídele que te la preste.</p>
       </li>
      </ul>

    </div>
  );
}


export default MasVendidosPage;