class Company{
    constructor(){
        this.departments = [];
    }

    addEmployee(username, salary, position, department){
        if (!username || !salary || !position || !department || salary < 0){
            throw new Error('Invalid input!');
        }

        let currentDepartment = this.departments.find(d => d.name === department);

        if (!currentDepartment){
            currentDepartment = {
                name: department,
                employees: []
            };

            this.departments.push(currentDepartment);
        }

        currentDepartment.employees.push({
            username,
            salary,
            position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment(){
        const departments = this.departments.map(d => {
            const dep = Object.assign({}, d);
            dep.averageSalary = d.employees.reduce((p, c, i, a) => p + c.salary, 0) / d.employees.length;
            return dep;
        });

        departments.sort((a, b) => b.averageSalary - a.averageSalary);

        const best = departments[0];

        if (best){
            best.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

            const result = [
                `Best Department is: ${best.name}`,
                `Average salary: ${best.averageSalary.toFixed(2)}`
            ];

            best.employees.forEach(e => result.push(`${e.username} ${e.salary} ${e.position}`));

            return result.join('\n');
        }
    }
}