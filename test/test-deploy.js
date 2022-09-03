const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

//there are different ways to create a function
//describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
    let simpleStorage, simpleStorageFactory
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favourite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()

        const expectedValue = "0"
        //assert    // expect
        assert.equal(currentValue.toString(), expectedValue)
        //expect(currentValue.toString()).to.equal(expectedValue)
    })

    //To run a single test use
    //it.only ()
    //or
    //yarn hardhat test --grep KEYWORD

    it("should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const updatedValue = await simpleStorage.retrieve()

        assert.equal(updatedValue.toString(), expectedValue)
    })
})
