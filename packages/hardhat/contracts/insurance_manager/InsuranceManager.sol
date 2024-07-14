// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract InsuranceManager {

    struct Insured {
        uint256 id;
        uint256 insuranceAmount;
        uint256 premiumPaid;
        uint256 validityPeriod;
        uint256 startTime;
        bool isValid;
        bool isClaimed;
    }

    mapping(uint256 => Insured) public insurances;
    address public owner;

    event NewInsurance(uint256 indexed id, uint256 insuranceAmount, uint256 premiumPaid, uint256 validityPeriod);
    event InsuranceUpdated(uint256 indexed id, uint256 insuranceAmount, uint256 premiumPaid, uint256 validityPeriod);
    event InsuranceClaimed(uint256 indexed id, uint256 insuranceAmount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addNewInsurance(uint256 _id, uint256 _insuranceAmount, uint256 _validityPeriod) public payable {
        require(insurances[_id].id == 0, "Insurance ID already exists");

        insurances[_id] = Insured({
            id: _id,
            insuranceAmount: _insuranceAmount,
            premiumPaid: msg.value,
            validityPeriod: _validityPeriod,
            startTime: block.timestamp,
            isValid: true,
            isClaimed: false
        });

        emit NewInsurance(_id, _insuranceAmount, msg.value, _validityPeriod);
    }

    function getInsurance(uint256 _id) public view returns (Insured memory) {
        require(insurances[_id].id != 0, "Insurance not found");
        return insurances[_id];
    }

    function updateInsurance(uint256 _id, uint256 _insuranceAmount, uint256 _validityPeriod) public {
        require(insurances[_id].id != 0, "Insurance not found");

        insurances[_id].insuranceAmount = _insuranceAmount;
        insurances[_id].validityPeriod = _validityPeriod;

        emit InsuranceUpdated(_id, _insuranceAmount, insurances[_id].premiumPaid, _validityPeriod);
    }

    function checkValidity(uint256 _id) public view returns (bool) {
        require(insurances[_id].id != 0, "Insurance not found");
        Insured memory insurance = insurances[_id];
        return insurance.isValid && (block.timestamp <= insurance.startTime + insurance.validityPeriod);
    }

    function invalidateInsurance(uint256 _id) public {
        require(insurances[_id].id != 0, "Insurance not found");

        insurances[_id].isValid = false;
    }

    function renewInsurance(uint256 _id, uint256 _additionalValidityPeriod) public {
        require(insurances[_id].id != 0, "Insurance not found");
        require(insurances[_id].isValid, "Insurance is not valid");

        insurances[_id].validityPeriod += _additionalValidityPeriod;
    }

    function claimInsurance(uint256 _id) public {
        require(insurances[_id].id != 0, "Insurance not found");
        require(insurances[_id].isValid, "Insurance is not valid");
        require(!insurances[_id].isClaimed, "Insurance already claimed");
        require(block.timestamp <= insurances[_id].startTime + insurances[_id].validityPeriod, "Insurance validity period has expired");

        insurances[_id].isClaimed = true;
        insurances[_id].isValid = false;

        // Logic to transfer the insurance amount to the claimant can be added here.
        // For example: payable(msg.sender).transfer(insurances[_id].insuranceAmount);

        emit InsuranceClaimed(_id, insurances[_id].insuranceAmount);
    }

    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
