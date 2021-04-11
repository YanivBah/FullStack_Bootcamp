const fs = require('fs');
fs.writeFileSync('new.txt','Howdy!');
fs.copyFileSync('new.txt', 'newCopy.txt');
fs.rename('newCopy.txt','newCopyRename.txt', (err) => {if (err) throw err});
fs.readdirSync('./').forEach(file => console.log(file));
fs.mkdirSync('New Folder');
console.log(fs.readdirSync("./"));