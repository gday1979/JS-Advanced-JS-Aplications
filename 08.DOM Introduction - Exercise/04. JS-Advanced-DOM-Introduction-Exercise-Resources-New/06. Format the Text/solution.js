function solve() {
  const input = document.getElementById('input').value;
  const sentences = input.split('.').filter(sentence => sentence.trim().length > 0);
  let output = '';
  if (sentences.length <= 3) {
    output = `<p>${sentences.join('. ')}</p>`;
  } else {
    for (let i = 0; i < sentences.length; i += 3) {
      const paragraph = sentences.slice(i, i + 3).join('. ');
      output += `<p>${paragraph}</p>`;
    }
    if (sentences.length % 3 === 1) {
      const lastParagraph = output.slice(output.lastIndexOf('<p>') + 3, output.lastIndexOf('</p>'));
      output = output.slice(0, output.lastIndexOf('<p>')) + lastParagraph + '</p>';
    }
  }
  document.getElementById('output').innerHTML = output;
}