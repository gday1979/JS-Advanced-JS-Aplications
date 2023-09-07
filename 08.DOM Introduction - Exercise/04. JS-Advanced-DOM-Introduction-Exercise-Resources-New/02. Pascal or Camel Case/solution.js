function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let words = text.split(' ').map(x => x.toLowerCase());
  let output = '';

  if (convention === 'Camel Case') {
    output = words[0];
    for (let i = 1; i < words.length; i++) {
      output += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      output += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  } else {
    output = 'Error!';
  }

  result.textContent = output;
}