


const NftMarket = artifacts.require("NftMarket");

contract("NftMarket", accounts => {
    let _contract = null;
    
    before(async () => {
        _contract = await NftMarket.deployed();
        console.log(accounts)
    })
    describe("Mint token", () => {
        const tokenURI = "https://test.com";
        before(async() => {
            await _contract.mintToken(tokenURI, {
                from:accounts[0]
            })
        })
        it("owner of the first token should be address0 ",async () => {
            const owner = await _contract.ownerOf(1);
            // assert(owner == accounts[0] , "owner of token is not matching address 0");
            assert.equal(owner, accounts[0], "owner of token is not matching address 0");
        })
    })
})