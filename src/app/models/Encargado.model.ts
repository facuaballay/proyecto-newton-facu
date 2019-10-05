
export class Encargado{
        constructor(
            public empresa_id:number,
            public nombre: string,
            public apellido: string,
            public usuario:string,
            public password:string,
            public img?:File,
            public tipo:string = 'encargado'
        ){
        }
      
}   

