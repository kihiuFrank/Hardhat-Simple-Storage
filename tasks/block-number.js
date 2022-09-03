const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    //syntx below is equivalent to;
    //const blockTask = async function() => {}
    //or
    //async function blockTask() {}
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current Block Number: ${blockNumber}`)
    }
)

module.exports = {}
