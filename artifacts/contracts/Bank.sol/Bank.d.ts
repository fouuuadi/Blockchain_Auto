// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Bank$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Bank",
  "sourceName": "contracts/Bank.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "erc20",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "employee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "pay",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60c060405234801561001057600080fd5b50604051610b54380380610b5483398181016040528101906100329190610104565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050610144565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d1826100a6565b9050919050565b6100e1816100c6565b81146100ec57600080fd5b50565b6000815190506100fe816100d8565b92915050565b6000806040838503121561011b5761011a6100a1565b5b6000610129858286016100ef565b925050602061013a858286016100ef565b9150509250929050565b60805160a0516109c861018c600039600081816102dd015281816103fa01526104c40152600081816101c2015281816102b901528181610301015261048801526109c86000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806327e235e3146100675780632e1a7d4d14610097578063785e9e86146100b35780638da5cb5b146100d1578063b6b55f25146100ef578063c40768761461010b575b600080fd5b610081600480360381019061007c9190610603565b610127565b60405161008e9190610649565b60405180910390f35b6100b160048036038101906100ac9190610690565b61013f565b005b6100bb6102b7565b6040516100c891906106cc565b60405180910390f35b6100d96102db565b6040516100e691906106cc565b60405180910390f35b61010960048036038101906101049190610690565b6102ff565b005b610125600480360381019061012091906106e7565b6103f8565b005b60006020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156101c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b790610784565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161021b9291906107a4565b6020604051808303816000875af115801561023a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025e9190610805565b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102ad9190610861565b9250508190555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161035c93929190610895565b6020604051808303816000875af115801561037b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039f9190610805565b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103ee91906108cc565b9250508190555050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d90610972565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd7f000000000000000000000000000000000000000000000000000000000000000030846040518463ffffffff1660e01b815260040161050393929190610895565b6020604051808303816000875af1158015610522573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105469190610805565b50806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461059591906108cc565b925050819055505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105d0826105a5565b9050919050565b6105e0816105c5565b81146105eb57600080fd5b50565b6000813590506105fd816105d7565b92915050565b600060208284031215610619576106186105a0565b5b6000610627848285016105ee565b91505092915050565b6000819050919050565b61064381610630565b82525050565b600060208201905061065e600083018461063a565b92915050565b61066d81610630565b811461067857600080fd5b50565b60008135905061068a81610664565b92915050565b6000602082840312156106a6576106a56105a0565b5b60006106b48482850161067b565b91505092915050565b6106c6816105c5565b82525050565b60006020820190506106e160008301846106bd565b92915050565b600080604083850312156106fe576106fd6105a0565b5b600061070c858286016105ee565b925050602061071d8582860161067b565b9150509250929050565b600082825260208201905092915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b600061076e601483610727565b915061077982610738565b602082019050919050565b6000602082019050818103600083015261079d81610761565b9050919050565b60006040820190506107b960008301856106bd565b6107c6602083018461063a565b9392505050565b60008115159050919050565b6107e2816107cd565b81146107ed57600080fd5b50565b6000815190506107ff816107d9565b92915050565b60006020828403121561081b5761081a6105a0565b5b6000610829848285016107f0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061086c82610630565b915061087783610630565b925082820390508181111561088f5761088e610832565b5b92915050565b60006060820190506108aa60008301866106bd565b6108b760208301856106bd565b6108c4604083018461063a565b949350505050565b60006108d782610630565b91506108e283610630565b92508282019050808211156108fa576108f9610832565b5b92915050565b7f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b600061095c602183610727565b915061096782610900565b604082019050919050565b6000602082019050818103600083015261098b8161094f565b905091905056fea2646970667358221220c05c162c5a2574529c339c2180582b26534dd11c7739782cf9008815e6085fac64736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c806327e235e3146100675780632e1a7d4d14610097578063785e9e86146100b35780638da5cb5b146100d1578063b6b55f25146100ef578063c40768761461010b575b600080fd5b610081600480360381019061007c9190610603565b610127565b60405161008e9190610649565b60405180910390f35b6100b160048036038101906100ac9190610690565b61013f565b005b6100bb6102b7565b6040516100c891906106cc565b60405180910390f35b6100d96102db565b6040516100e691906106cc565b60405180910390f35b61010960048036038101906101049190610690565b6102ff565b005b610125600480360381019061012091906106e7565b6103f8565b005b60006020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156101c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b790610784565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161021b9291906107a4565b6020604051808303816000875af115801561023a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025e9190610805565b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102ad9190610861565b9250508190555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161035c93929190610895565b6020604051808303816000875af115801561037b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039f9190610805565b50806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103ee91906108cc565b9250508190555050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d90610972565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd7f000000000000000000000000000000000000000000000000000000000000000030846040518463ffffffff1660e01b815260040161050393929190610895565b6020604051808303816000875af1158015610522573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105469190610805565b50806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461059591906108cc565b925050819055505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105d0826105a5565b9050919050565b6105e0816105c5565b81146105eb57600080fd5b50565b6000813590506105fd816105d7565b92915050565b600060208284031215610619576106186105a0565b5b6000610627848285016105ee565b91505092915050565b6000819050919050565b61064381610630565b82525050565b600060208201905061065e600083018461063a565b92915050565b61066d81610630565b811461067857600080fd5b50565b60008135905061068a81610664565b92915050565b6000602082840312156106a6576106a56105a0565b5b60006106b48482850161067b565b91505092915050565b6106c6816105c5565b82525050565b60006020820190506106e160008301846106bd565b92915050565b600080604083850312156106fe576106fd6105a0565b5b600061070c858286016105ee565b925050602061071d8582860161067b565b9150509250929050565b600082825260208201905092915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b600061076e601483610727565b915061077982610738565b602082019050919050565b6000602082019050818103600083015261079d81610761565b9050919050565b60006040820190506107b960008301856106bd565b6107c6602083018461063a565b9392505050565b60008115159050919050565b6107e2816107cd565b81146107ed57600080fd5b50565b6000815190506107ff816107d9565b92915050565b60006020828403121561081b5761081a6105a0565b5b6000610829848285016107f0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061086c82610630565b915061087783610630565b925082820390508181111561088f5761088e610832565b5b92915050565b60006060820190506108aa60008301866106bd565b6108b760208301856106bd565b6108c4604083018461063a565b949350505050565b60006108d782610630565b91506108e283610630565b92508282019050808211156108fa576108f9610832565b5b92915050565b7f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b600061095c602183610727565b915061096782610900565b604082019050919050565b6000602082019050818103600083015261098b8161094f565b905091905056fea2646970667358221220c05c162c5a2574529c339c2180582b26534dd11c7739782cf9008815e6085fac64736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Bank",
    constructorArgs: [_erc20: AbiParameterToPrimitiveType<{"name":"_erc20","type":"address"}>, _owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Bank$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Bank.sol:Bank",
    constructorArgs: [_erc20: AbiParameterToPrimitiveType<{"name":"_erc20","type":"address"}>, _owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Bank$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Bank",
    constructorArgs: [_erc20: AbiParameterToPrimitiveType<{"name":"_erc20","type":"address"}>, _owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Bank$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Bank.sol:Bank",
    constructorArgs: [_erc20: AbiParameterToPrimitiveType<{"name":"_erc20","type":"address"}>, _owner: AbiParameterToPrimitiveType<{"name":"_owner","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Bank$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Bank",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Bank$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Bank.sol:Bank",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Bank$Type["abi"]>>;
}
