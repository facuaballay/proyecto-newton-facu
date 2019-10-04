export class Usuario{

    imagen:any = 'assets/images/logo';

    constructor(
        public usuario:string,
        public email:string,
        public password:string,
        public img?:File,
        public tipo:string = 'usuario'
    ){
         
        
        
    }
}

