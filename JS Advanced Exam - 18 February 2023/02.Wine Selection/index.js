class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= 0) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push({
      wineName,
      wineType,
      price,
      paid: false,
    });
    this.space--;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const wine = this.wines.find((w) => w.wineName === wineName);
    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (wine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }
    wine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    const wine = this.wines.find((w) => w.wineName === wineName);
    if (!wine) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    if (!wine.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    this.wines = this.wines.filter((w) => w !== wine);
    this.space++;
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
  if (!wineType) {
    const emptySlots = this.space;
    const paidWines = this.wines.filter((w) => w.paid);
    const notPaidWines = this.wines.filter((w) => !w.paid);
    const result = [
      `You have space for ${emptySlots} bottles more.`,
      `You paid ${this.bill}$ for the wine.`,
    ];
    const winesInfo = [
      ...notPaidWines.sort((a, b) => a.wineName.localeCompare(b.wineName)),
      ...paidWines.sort((a, b) => a.wineName.localeCompare(b.wineName)),
    ];
    winesInfo.forEach((w) => {
      result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`);
    });
    return result.join("\n");
  } else {
    const winesOfType = this.wines.filter((w) => w.wineType === wineType);
    if (winesOfType.length === 0) {
      throw new Error(`There is no ${wineType} in the cellar.`);
    }
    const result = winesOfType
      .sort((a, b) => a.wineName.localeCompare(b.wineName))
      .map((w) => `${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`);
    return result.join("\n");
  }
}
}
