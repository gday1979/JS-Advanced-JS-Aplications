function fromJSONToHTMLTable(input) {
  const data = JSON.parse(input);
  const keys = Object.keys(data[0]);
  let result = "<table>\n<tr>";
  keys.forEach(key => {
    result += `<th>${key}</th>`;
  });
  result += "</tr>\n";
  data.forEach(obj => {
    result += "<tr>";
    keys.forEach(key => {
      result += `<td>${escapeHTML(obj[key])}</td>`;
    });
    result += "</tr>\n";
  });
  result += "</table>";
  return result;
}

