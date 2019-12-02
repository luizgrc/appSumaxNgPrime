export class Transporte {
    otransporte: string;
    servicio: string;
    oaduana: string;
    cliente: string;
    tenvio: string;
    viaje: string;
    oviaje: string;
    estado: string;
    gtransporte: string;
    fh_hra_cita: string;
    fh_hra_entrega: string;
    imo: string;
    contenedor: string;
    pesobruto: string;
    bul: string;
    zona: string;
    puntopartida: string;
    puntollegada: string;
    transportista: string;
    vehiculo: string;
    chofer: string;
    guia_aduana: string;
    ultincidencia: string;



    constructor(
        otransporte: string, 
        servicio: string, 
        oaduana: string, 
        cliente: string, 
        tenvio: string,
        viaje: string,
        oviaje: string,
        estado: string,
        gtransporte: string,
        fh_hra_cita: string,
        fh_hra_entrega: string,
        imo: string,
        contenedor: string,
        pesobruto: string,
        bul: string,
        zona: string,
        puntopartida: string,
        puntollegada: string,
        transportista: string,
        vehiculo: string,
        chofer: string,
        guia_aduana: string,
        ultincidencia: string
        ) {
        this.otransporte = otransporte;
        this.servicio = servicio;
        this.oaduana = oaduana;
        this.cliente = cliente;
        this.tenvio = tenvio;
        this.viaje =viaje;
        this.oviaje =oviaje;
        this.estado =estado;
        this.gtransporte =gtransporte;
        this.fh_hra_cita =fh_hra_cita;
        this.fh_hra_entrega =fh_hra_entrega;
        this.imo =imo;
        this.contenedor =contenedor;
        this.pesobruto =pesobruto;
        this.bul =bul;
        this.zona =zona;
        this.puntopartida =puntopartida;
        this.puntollegada =puntollegada;
        this.transportista =transportista;
        this.vehiculo =vehiculo;
        this.chofer =chofer;
        this.guia_aduana =guia_aduana;
        this.ultincidencia =ultincidencia;

    }
}
