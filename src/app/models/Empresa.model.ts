export class Empresa{

constructor(
   public nombre : string,
   public apellido: string,
   public documento : number ,
   public nombreEmpresa : string,
   public password : string,
   public provincia : string,
   public ubicacion:string,
   public pais: string ,
   public img?: File,
   public usuario?:number,
   public tipo: string = 'empresa',
){}


}
