import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimageUser'
})
export class NoimageUserPipe implements PipeTransform {

  transform( images: any[] ): string {

    if ( !images ) {
      return 'assets/images/users/default.png';
    }
  
    if ( images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/images/users/default.png';
    }

  }

}
