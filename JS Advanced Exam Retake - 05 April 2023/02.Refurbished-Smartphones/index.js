class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (
      !model ||
      !condition ||
      isNaN(storage) ||
      isNaN(price) ||
      storage <= 0 ||
      price <= 0
    ) {
      throw new Error("Invalid smartphone!");
    }

    const smartphone = { model, storage, price, condition };
    this.availableSmartphones.push(smartphone);

    const formattedPrice = price.toFixed(2);
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${formattedPrice}$`;
  }

  sellSmartphone(model, desiredStorage) {
    const smartphoneIndex = this.availableSmartphones.findIndex(
      (s) => s.model === model && s.storage >= desiredStorage
    );

    if (smartphoneIndex === -1) {
      throw new Error(`${model} was not found!`);
    }

    const smartphone = this.availableSmartphones[smartphoneIndex];
    let soldPrice = smartphone.price;

    const storageDifference = smartphone.storage - desiredStorage;
    if (storageDifference <= 128) {
      soldPrice *= 0.9;
    } else {
      soldPrice *= 0.8;
    }

    soldPrice = soldPrice.toFixed(2);
    this.revenue += parseFloat(soldPrice);

    const soldSmartphone = { model, storage: smartphone.storage, soldPrice };
    this.soldSmartphones.push(soldSmartphone);

    this.availableSmartphones.splice(smartphoneIndex, 1);

    return `${model} was sold for ${soldPrice}$`;
  }

  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      throw new Error("There are no available smartphones!");
    }

    const upgradedSmartphones = this.availableSmartphones.map((s) => {
      s.storage *= 2;
      const formattedPrice = s.price.toFixed(2);
      return `${s.model} / ${s.storage} GB / ${s.condition} condition / ${formattedPrice}$`;
    });

    return `Upgraded Smartphones:\n${upgradedSmartphones.join("\n")}`;
  }

  salesJournal(criteria) {
    let sortedSoldSmartphones = [];

    if (criteria === "storage") {
      sortedSoldSmartphones = this.soldSmartphones.sort(
        (a, b) => b.storage - a.storage
      );
    } else if (criteria === "model") {
      sortedSoldSmartphones = this.soldSmartphones.sort((a, b) =>
        a.model.localeCompare(b.model)
      );
    } else {
      throw new Error("Invalid criteria!");
    }

    const soldSmartphonesCount = sortedSoldSmartphones.length;
    const totalRevenue = this.revenue.toFixed(2);

    const soldSmartphonesList = sortedSoldSmartphones
      .map((s) => `${s.model} / ${s.storage} GB / ${s.soldPrice}$`)
      .join("\n");

    return `${this.retailer} has a total income of ${totalRevenue}$\n${soldSmartphonesCount} smartphones sold:\n${soldSmartphonesList}`;
  }
}
