const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmWb9mduWG6y6QL7vEwmDZTKHBQnuRgACCufVW8XhVZJkg","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmdtdMEHsfjtYTaCFys8TUfiyHYLDE6RFiFkNb7jxPmmyp","300000000000000000", {value: "25000000000000000",from: accounts[0]})