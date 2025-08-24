import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[strkthru]',
  standalone: true
})
export class StrkthruDirective {
    @HostBinding('style.backgroundColor') bgColor = 'yellow';
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.textDecoration') textDecoration = 'line-through';
}
