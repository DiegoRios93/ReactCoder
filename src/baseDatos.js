/*export const PRODUCTS = [
	{
		id: 0,
		paleta: "Nox AT10 Luxury",
		precio: 62000,
		grosor: "3.8mm",
	},
	{
		id: 1,
		paleta: "Bullpadel Flow Light",
		precio: 58000,
		grosor: "3.8mm",
	},
	{
		id: 2,
		paleta: "Paleta Wilson Bela Pro Wr065511",
		precio: 67500,
		grosor: "3.8mm",
	},
	{
		id: 3,
		paleta: "Paleta Padel adidas Metalbone",
		precio: 85000,
		grosor: "3.8mm",
	},
	{
		id: 4,
		paleta: "Paleta Padel Bullpadel Hack Ctr",
		precio: 72000,
		grosor: "3.8mm",
	},
	{
		id: 5,
		paleta: "Paleta De Padel adidas Adipower Master Ltd",
		precio: 69000,
		grosor: "3.8mm",
	},
	{
		id: 6,
		paleta: "Paleta De Padel Mayor",
		precio: 59600,
		grosor: "3.8mm",
	},
];*/

//Base de datos de producto con detalle

export const PRODUCTS = [
	{
		id: 0,
		paleta: "Nox AT10 Luxury",
		descripcion: "Paleta ideal para jugadores defensivos, balance y peso que aportan control en cada jugada",
		precio: 62000,
		grosor: "3.8mm",
		material: "Fibra de carbono",
	},
];




export function getProductos() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(PRODUCTS), 4000);
	});
}