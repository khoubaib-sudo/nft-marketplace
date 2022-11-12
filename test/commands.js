const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmWb9mduWG6y6QL7vEwmDZTKHBQnuRgACCufVW8XhVZJkg","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmdtdMEHsfjtYTaCFys8TUfiyHYLDE6RFiFkNb7jxPmmyp","300000000000000000", {value: "25000000000000000",from: accounts[0]})
// instance.mintToken("https://gateway.pinata.cloud/ipfs/Qmb5cAQhiyyajhEjjCadSt4gRz5pheV1hNiJZVjftqiyRt","400000000000000000", {value: "25000000000000000",from: accounts[0]})
// instance.mintToken("https://gateway.pinata.cloud/ipfs/QmT9UWUFgDsR1vKiq5TkFxCMhg9DjXHj3xVT8q8R6Zab5S","600000000000000000", {value: "25000000000000000",from: accounts[0]})
// instance.mintToken("https://gateway.pinata.cloud/ipfs/QmXeyzHjtPRVMXVdReHuRGd78thdZoHq9tzr78jgKaX4MY","500000000000000000", {value: "25000000000000000",from: accounts[0]})
// instance.mintToken("https://gateway.pinata.cloud/ipfs/QmbmtTRCFHN8Kzf5esmgdE3qScKb6yNM7rrQDyGUkRdYkj","200000000000000000", {value: "25000000000000000",from: accounts[0]})