const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback){
    this.push(
      chunk
      .toString()
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase().concat(word.slice(1));
      })
      .join('')
    );
    callback();
  }
});
process.stdin.pipe(transformStream).pipe(process.stdout);
