/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * modified: San Nguyen
 */

type AnyFunc = (...args: any[]) => any;

/**
 * Explicitly mark method to bind `this` to the component.
 *
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
export function bindThis(
  target: any,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<AnyFunc>,
): void | TypedPropertyDescriptor<AnyFunc> {
  let fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error(`@bindThis decorator can only be applied to methods not: ${typeof fn}`);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  let definingProperty = false;

  return {
    configurable: true,
    get() {
      if (definingProperty || typeof fn !== 'function' || this === target) {
        return fn;
      }

      const boundFn = fn.bind(this);

      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get() {
          return boundFn;
        },
        set(value) {
          fn = value;
          delete this[key];
        },
      });
      definingProperty = false;
      return boundFn;
    },
    set(value) {
      fn = value;
    },
  };
}
