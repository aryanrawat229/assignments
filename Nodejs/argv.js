const fs = require('fs');

// Get command-line arguments
const [,, command, filename, ...contentArr] = process.argv;

// Join the remaining content (in case it has spaces)
const content = contentArr.join(' ');

// Check if command is 'add'
if (command === 'add') {
  if (!filename || !content) {
    console.log('Usage: node app.js add <filename> <content>');
  } else {
    fs.writeFileSync(filename, content);
    console.log(`✅ File "${filename}" created with content: ${content}`);
  }
} else {
  console.log('Unknown command. Only "add" is supported.');
}
