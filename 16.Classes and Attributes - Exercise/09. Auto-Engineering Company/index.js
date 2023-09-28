function autoEngineeringCompany(input) {
  let cars = new Map()

  for (let line of input) {
    let [brand, model, quantity] = line.split(' | ')
    quantity = Number(quantity)

    if (!cars.has(brand)) {
      cars.set(brand, new Map())
    }
    if (!cars.get(brand).has(model)) {
      cars.get(brand).set(model, 0)
    }
    cars.get(brand).set(model, cars.get(brand).get(model) + quantity)
  }

  for (let [brand, models] of cars) {
    console.log(brand)
    for (let [model, quantity] of models) {
      console.log(`###${model} -> ${quantity}`)
    }
  }
}