const promiseFunction = () => new Promise((resolve, reject) => {
  setTimeout( () => {
    if(Math.random() < 0.5) {
      resolve('Hello world')
    }else {
      reject('Hello error');
    }
  }, 2000)
});

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log('message', msg.toUpperCase());
  } catch (error) {
    console.log('error', error);
  }
};

asyncAwait();