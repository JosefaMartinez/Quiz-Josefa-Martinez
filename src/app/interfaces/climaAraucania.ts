/*Se genera una interfaz para que mantenga la estructura del clima*/
export interface Clima {
    dia: string;
    imagen: string;
    temperatura: number;
    estadoDelClima: string;
}

/*se crea un array para guardar todos los dias con su respectiva información como base*/
export const ListaClimasAraucania: Array<Clima> =
    [
        {
            dia:"Lunes",
            imagen: "img/soleado.png",
            temperatura: 20,
            estadoDelClima: "soleado"
        },

        {
            dia:"Martes",
            imagen: "img/soleado.png",
            temperatura: 25,
            estadoDelClima: "soleado"
        },

        {
            dia:"Miércoles",
            imagen: "img/nublado.png",
            temperatura: 15,
            estadoDelClima: "nublado"
        },

        {
            dia:"Jueves",
            imagen: "img/lluvioso.png",
            temperatura: 3,
            estadoDelClima: "lluvioso"
        },

        {
            dia:"Viernes",
            imagen: "img/tormenta.png",
            temperatura: 3,
            estadoDelClima: "tormenta"
        },

        {
            dia:"Sábado",
            imagen: "img/soleado.png",
            temperatura: 10,
            estadoDelClima: "soleado"
        },

        {
            dia:"Domingo",
            imagen: "img/nublado.png",
            temperatura: 15,
            estadoDelClima: "nublado"
        },
    ];
