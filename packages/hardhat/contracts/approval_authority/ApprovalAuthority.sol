// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ApprovalAuthority {

    address public owner;
    uint256 public constant minFee = 0.01 ether;
    mapping(address => bool) public authorizedUsers;

    event AuthorizedUserAdded(address indexed user);
    event AuthorizedUserRemoved(address indexed user);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyAuthorizedUser() {
        require(authorizedUsers[msg.sender], "Not an authorized user");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addAuthorizedUser(address _user) public payable {
        require(msg.value >= minFee, "Insufficient fee");
        require(!authorizedUsers[_user], "User already authorized");

        authorizedUsers[_user] = true;
        emit AuthorizedUserAdded(_user);
    }

    function removeAuthorizedUser(address _user) public onlyOwner {
        require(authorizedUsers[_user], "User not authorized");

        authorizedUsers[_user] = false;
        emit AuthorizedUserRemoved(_user);
    }

    function isAuthorizedUser(address _user) public view returns (bool) {
        return authorizedUsers[_user];
    }

    // Function to withdraw collected fees
    function withdrawFees() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
