const chai = require('chai');
const expect = chai.expect;
const findNewApartment = require('./findApartment.js');

describe("findNewApartment", () => {
    describe("isGoodLocation", () => {
        it('should throw an error for invalid input', () => {
            expect(() => { findNewApartment.isGoodLocation(10, "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation("Meat", 30) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation(10, 10) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation("krasi", "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation({}, "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation([], "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation(10, []) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation(10, {}) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation({}, []) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isGoodLocation([], {}) }).to.throw('Invalid input');
          });

          it("should return appropriate message based on params", () => {
            expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation("Burgas", false)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
          })
    })

    describe("isLargeEnough", () => {
        it("should return error for invalid input", () => {
            expect(() => { findNewApartment.isLargeEnough(10, "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough("", "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough({}, "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough([], "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough(10, "Meat") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough("", 10) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough(10, 10) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough("", {}) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isLargeEnough("", []) }).to.throw('Invalid input');
            
        })

        it("should return appropriate message based on params", () => {
            expect(findNewApartment.isLargeEnough([60], 50)).to.equal("60");
            expect(findNewApartment.isLargeEnough([60], 60)).to.equal("60");
            expect(findNewApartment.isLargeEnough([50], 60)).to.equal("");

        })
    })

    describe("isItAffordable", () => {
        it("should return error for invalid input", () => {
            expect(() => { findNewApartment.isItAffordable("", []) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable("", {}) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable("", "") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable("", 10) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable(10, "") }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable(10, []) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable("", {}) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable({}, {}) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable([], []) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable([], {}) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable({}, []) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable(5, -3) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable(-5, 3) }).to.throw('Invalid input');
            expect(() => { findNewApartment.isItAffordable(-5, -3) }).to.throw('Invalid input');
        })
        
        it("should return appropriate message based on params", () => {
            expect(findNewApartment.isItAffordable(60, 50)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(60, 60)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(50, 50)).to.equal("You can afford this home!");

        })
    })
})

/*isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number"
     || price <= 0 || budget <= 0) {
      throw new Error("Invalid input!");
    }
    let result = budget - price;
    if (result < 0) {
      return "You don't have enough money for this house!";
    } else {
      return "You can afford this home!";
    }
  },*/