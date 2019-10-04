
export class Pedido{

    constructor(
        public tipo:string,
        public creador_id:number,
        public nombre:string,
        public descripcion:string,
        public progreso:number,
        public precio:number,
        public user_id:number
    ){

    }
}
