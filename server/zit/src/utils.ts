export type Callback<R> = (err: any, result: R) => any;

/**
 * Turn function which receive a callback to a Promise.
 *
 * @param callbackFunc function which will receive a callback of library API.
 */
export function toPromise<R>(
  callbackFunc: (callback: Callback<R>) => any,
): ((v?: any) => Promise<R>);
export function toPromise<T, R>(
  callbackFunc: (v1: T, callback: (err: any, result: R) => any) => any,
): ((v1: T) => Promise<R>);
export function toPromise(callbackFunc: any) {
  return (v?: any): Promise<any> => {
    return new Promise((res, rej) => {
      const callback = (err: any, result: any) => {
        if (err != null) {
          rej(err);
        }
        res(result);
      };
      if (typeof v !== 'undefined') {
        callbackFunc(v, callback);
      } else {
        callbackFunc(callback);
      }
    });
  };
}
