#### PromiseJS
https://www.promisejs.org/

  - async solution
  - integrated into ES6
  - a container, an object, contains 2 functions that will be executed future
  - no callback function needed anymore
  - states: pending, fulfilled, rejected
    + pending ---> fulfilled
    + pending ---> rejected
  - prefer catch over second function of then



#### Example
```tsx
// an example
export class Confirm {
    public show(content: string): Promise<any> {
        return new Promise(function (fulfill, reject) {
            ReactDOM.render(
                <ConfirmComponent content={content}
                    onConfirm={onConfirm}
                    onCancel={onCancel}/>,
                document.getElementById('container-alert'));

            function onConfirm() {
                fulfill();
            }

            function onCancel() {
                reject();
            }
        });
    }
}

let dlg = new Confirm();
dlg.show("test promise dialog").then(
    () => {
        console.log('ok')
    }).catch(
    () => {
        console.log('excaption')
    });

// another example from http://es6.ruanyifeng.com/#docs/promise
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

// the calling sequence
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// Resolved
```tsx