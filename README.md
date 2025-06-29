#helloWorld smart contract deployment commands in node

npx hardhat node --hostname localhost    # make sure to run as localhost vs the dns

npx hardhat console --network localhost

await ethers.provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

const signers = await ethers.getSigners();

signers[0];

signers.length;

const contract =  await ethers.getContractFactory("Hello");

const cd = await contract.deploy();

await ethers.provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

await cd.set('hello world');

await ethers.provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

await cd.get()

await ethers.provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

await cd.set("hello world again");

const b2 = await ethers.provider.getBlock(2, true)

const d2 = b2.prefetchedTransactions

d2

await ethers.toUtf8String(d2[0].data);

