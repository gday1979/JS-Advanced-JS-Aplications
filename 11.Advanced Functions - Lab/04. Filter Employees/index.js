function filterEmployees(data, criteria) {
    const [key, value] = criteria.split('-');
    const employees = JSON.parse(data);
    const filtered = employees.filter(x => x[key] === value);
    filtered.forEach((x, i) => console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`));
}