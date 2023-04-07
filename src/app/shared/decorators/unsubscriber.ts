import { Constructor } from '@angular/cdk/schematics';

export function AutoUnsubscribe(constructor: Constructor<void>) {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    for (const prop in this) {
      const property = this[prop];
      if (property && typeof property.unsubscribe === 'function') {
        property.unsubscribe();
      }
    }
    original && typeof original === 'function' && original.apply(this);
  };
}
