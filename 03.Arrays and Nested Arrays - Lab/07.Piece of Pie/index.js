function getFlavorSection(flavors, startFlavor, endFlavor) {
  const startIndex = flavors.indexOf(startFlavor);
  const endIndex = flavors.indexOf(endFlavor);
  
  if (startIndex === -1 || endIndex === -1) {
    return [];
  }
  
  return flavors.slice(startIndex, endIndex + 1);
}
pieceOfPay(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie');