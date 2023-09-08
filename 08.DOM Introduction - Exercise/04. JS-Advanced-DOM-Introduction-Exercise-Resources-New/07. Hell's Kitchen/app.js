function hellsKitchen() {
  const input = document.getElementById('input').value;
  const restaurants = {};
  input.split(',').forEach(restaurant => {
    const [name, ...workers] = restaurant.trim().split(' - ');
    if (!restaurants[name]) {
      restaurants[name] = { workers: [], avgSalary: 0, bestSalary: 0 };
    }
    workers.forEach(worker => {
      const [workerName, salary] = worker.trim().split(' ');
      restaurants[name].workers.push({ name: workerName, salary: Number(salary) });
    });
  });
  let bestRestaurant = '';
  let bestAvgSalary = 0;
  for (const name in restaurants) {
    const restaurant = restaurants[name];
    const totalSalary = restaurant.workers.reduce((acc, worker) => acc + worker.salary, 0);
    restaurant.avgSalary = totalSalary / restaurant.workers.length;
    restaurant.bestSalary = Math.max(...restaurant.workers.map(worker => worker.salary));
    if (restaurant.avgSalary > bestAvgSalary) {
      bestAvgSalary = restaurant.avgSalary;
      bestRestaurant = name;
    }
  }
  const bestWorkers = restaurants[bestRestaurant].workers.sort((a, b) => b.salary - a.salary);
  const bestWorkersString = bestWorkers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
  const output1 = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${restaurants[bestRestaurant].bestSalary.toFixed(2)}`;
  const output2 = ` ${bestWorkersString}`;
  document.getElementById('bestRestaurant').textContent = output1;
  document.getElementById('workers').textContent = output2;
}