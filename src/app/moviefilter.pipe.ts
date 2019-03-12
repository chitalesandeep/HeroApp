import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviefilter'
})
export class MoviefilterPipe implements PipeTransform {

  transform(values: any[], args: number, args2:string): any {
    if(!values )
    {
      return values;
    }
    if(args == 0)
    {
        return values;
    }

    if(args2 == 'id')
    {
      return values.filter(value => value.id == args);
    }
    if(args2 == 'hero_id')
    {
      return values.filter(value => value.hero_id == args);
    }
  }

}