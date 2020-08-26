import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces' //ref name when we reference it in HTML
})

export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}