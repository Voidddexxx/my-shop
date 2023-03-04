import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json'
})
export class JsonPipe<T> implements PipeTransform {

  transform(value: T): string {
    return JSON.stringify(value);
  }

}
