//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract FOW {
  address public owner;

  constructor(){
    owner = msg.sender;
  }

  function send() payable public{
    require(msg.value > 0, "You can't send 0 eth");
    payable(owner).transfer(msg.value);
  }
}