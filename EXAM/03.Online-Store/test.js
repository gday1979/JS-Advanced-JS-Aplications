const assert = require("chai").assert;

describe("onlineStore", function () {
  describe("isProductAvailable", function () {
    it("should return a message if the product is out of stock", function () {
      const result = onlineStore.isProductAvailable("iPhone", 0);
      assert.equal(result, "Sorry, iPhone is currently out of stock.");
    });

    it("should return a message if the product is available", function () {
      const result = onlineStore.isProductAvailable("iPhone", 10);
      assert.equal(result, "Great! iPhone is available for purchase.");
    });

    it("should throw an error if the input is invalid", function () {
      assert.throw(
        () => onlineStore.isProductAvailable("iPhone", "invalid"),
        "Invalid input."
      );
      assert.throw(
        () => onlineStore.isProductAvailable(100, 0),
        "Invalid input."
      );
      assert.throw(
        () => onlineStore.isProductAvailable("", 0),
        "Invalid input."
      );
      assert.throw(
        () => onlineStore.isProductAvailable("iPhone", null),
        "Invalid input."
      );
    });
  });

  describe("canAffordProduct", function () {
    it("should return a message if the user can afford the product", function () {
      const result = onlineStore.canAffordProduct(500, 1000);
      assert.equal(
        result,
        "Product purchased. Your remaining balance is $500."
      );
    });

    it("should return a message if the user cannot afford the product", function () {
      const result = onlineStore.canAffordProduct(1000, 500);
      assert.equal(
        result,
        "You don't have sufficient funds to buy this product."
      );
    });

    it("should throw an error if the input is invalid", function () {
      assert.throw(
        () => onlineStore.canAffordProduct("invalid", 1000),
        "Invalid input."
      );
      assert.throw(
        () => onlineStore.canAffordProduct(500, "invalid"),
        "Invalid input."
      );
      assert.throw(
        () => onlineStore.canAffordProduct("", 1000),
        "Invalid input."
      );
      assert.throw(
        () => onlineStore.canAffordProduct(500, null),
        "Invalid input."
      );
    });
  });

  describe("getRecommendedProducts", function () {
    it("should return a message if there are no recommended products in the category", function () {
      const result = onlineStore.getRecommendedProducts(
        [{ name: "Camera", category: "Photography" }],
        "Electronics"
      );
      assert.equal(
        result,
        "Sorry, we currently have no recommended products in the Electronics category."
      );
    });

    it("should return a message with recommended products in the category", function () {
      const result = onlineStore.getRecommendedProducts(
        [
          { name: "Camera", category: "Photography" },
          { name: "Laptop", category: "Electronics" },
        ],
        "Electronics"
      );
      assert.equal(
        result,
        "Recommended products in the Electronics category: Laptop"
      );
    });

    it("should throw an error if the input is invalid", function () {
      assert.throw(
        () => onlineStore.getRecommendedProducts("invalid", "Electronics"),
        "Invalid input."
      );
      assert.throw(
        () =>
          onlineStore.getRecommendedProducts(
            [{ name: "Camera", category: "Photography" }],
            100
          ),
        "Invalid input."
      );
      assert.throw(
        () =>
          onlineStore.getRecommendedProducts(
            [{ name: "Camera", category: "Photography" }],
            ""
          ),
        "Invalid input."
      );
      assert.throw(
        () =>
          onlineStore.getRecommendedProducts(
            [{ name: "Camera", category: "Photography" }],
            null
          ),
        "Invalid input."
      );
    });
  });
});
