import React, { Component } from "react";
import Web3 from "web3";
import HelloAbi from "./contractsData/Hello.json";
import HelloAddress from "./contractsData/Hello-address.json";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    console.log("HelloAddress.address", HelloAddress.address);
    console.log("HelloAbi.abi", HelloAbi.abi);
    let NewHelloAbi = require("./contractsData/Hello.json");
    const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    var account;
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    web3.eth.getAccounts().then((f) => {
      account = f[0];
    });

    this.setState({ account: accounts[0] });
    console.log(account);
    const contract = new web3.eth.Contract(NewHelloAbi.abi);
    contract.options.address = HelloAddress.address;
    this.setState({ contract });
  }

  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      account: "",
      loading: true,
      message: "",
    };
  }

  setHandler = (event) => {
    event.preventDefault();
    console.log("sending " + event.target.setText.value + " to the contract");
    this.state.contract.methods.set(event.target.setText.value).send({ from: this.state.account });
  };

  getCurrentVal = async () => {
    let val = await this.state.contract.methods.get().call(console.log);
    console.log("val", val);
    this.setState({ message: val });
  };

  render() {
    return (
      <div>
        <h5>message output: {this.state.message}</h5>
        <h4> {"Get/Set Contract interaction"} </h4>
        <form onSubmit={this.setHandler}>
          <input id="setText" type="text" />
          <button type={"submit"}> Update Contract </button>
        </form>
        <div>
          <button onClick={this.getCurrentVal} style={{ marginTop: "5em" }}>
            {" "}
            Get Current Contract Value{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
