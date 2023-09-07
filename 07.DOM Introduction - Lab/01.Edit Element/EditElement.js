function edit(element, match, replacer) {
  element.textContent = element.textContent.replace(new RegExp(match, 'g'), replacer);
}

editElement();
