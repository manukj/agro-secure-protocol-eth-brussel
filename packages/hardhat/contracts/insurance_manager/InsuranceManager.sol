// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract InsuranceManager {

    struct Insured {
        address insuredAddress;
        uint256 insuranceAmount;
        uint256 premiumPaid;
        uint256 validityPeriod;
        uint256 startTime;
        bool isValid;
        bool isClaimed;
    }

    mapping(address => Insured) public insurances;
    address public owner;

    event NewInsurance(address indexed insuredAddress, uint256 insuranceAmount, uint256 premiumPaid, uint256 validityPeriod);
    event InsuranceUpdated(address indexed insuredAddress, uint256 insuranceAmount, uint256 premiumPaid, uint256 validityPeriod);
    event InsuranceClaimed(address indexed insuredAddress, uint256 insuranceAmount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addNewInsurance(address _insuredAddress, uint256 _insuranceAmount, uint256 _validityPeriod) public payable {
        require(insurances[_insuredAddress].insuredAddress == address(0), "Insurance already exists for this address");

        insurances[_insuredAddress] = Insured({
            insuredAddress: _insuredAddress,
            insuranceAmount: _insuranceAmount,
            premiumPaid: msg.value,
            validityPeriod: _validityPeriod,
            startTime: block.timestamp,
            isValid: true,
            isClaimed: false
        });

        emit NewInsurance(_insuredAddress, _insuranceAmount, msg.value, _validityPeriod);
    }

    function getInsurance(address _insuredAddress) public view returns (Insured memory) {
        require(insurances[_insuredAddress].insuredAddress != address(0), "Insurance not found");
        return insurances[_insuredAddress];
    }

    function updateInsurance(address _insuredAddress, uint256 _insuranceAmount, uint256 _validityPeriod) public {
        require(insurances[_insuredAddress].insuredAddress != address(0), "Insurance not found");

        insurances[_insuredAddress].insuranceAmount = _insuranceAmount;
        insurances[_insuredAddress].validityPeriod = _validityPeriod;

        emit InsuranceUpdated(_insuredAddress, _insuranceAmount, insurances[_insuredAddress].premiumPaid, _validityPeriod);
    }

    function checkValidity(address _insuredAddress) public view returns (bool) {
        require(insurances[_insuredAddress].insuredAddress != address(0), "Insurance not found");
        Insured memory insurance = insurances[_insuredAddress];
        return insurance.isValid && (block.timestamp <= insurance.startTime + insurance.validityPeriod);
    }

    function invalidateInsurance(address _insuredAddress) public {
        require(insurances[_insuredAddress].insuredAddress != address(0), "Insurance not found");

        insurances[_insuredAddress].isValid = false;
    }

    function renewInsurance(address _insuredAddress, uint256 _additionalValidityPeriod) public {
        require(insurances[_insuredAddress].insuredAddress != address(0), "Insurance not found");
        require(insurances[_insuredAddress].isValid, "Insurance is not valid");

        insurances[_insuredAddress].validityPeriod += _additionalValidityPeriod;
    }

    function claimInsurance(address _insuredAddress) public {
        require(insurances[_insuredAddress].insuredAddress != address(0), "Insurance not found");
        require(insurances[_insuredAddress].isValid, "Insurance is not valid");
        require(!insurances[_insuredAddress].isClaimed, "Insurance already claimed");
        require(block.timestamp <= insurances[_insuredAddress].startTime + insurances[_insuredAddress].validityPeriod, "Insurance validity period has expired");

        insurances[_insuredAddress].isClaimed = true;
        insurances[_insuredAddress].isValid = false;

        // Logic to transfer the insurance amount to the claimant can be added here.
        // For example: payable(_insuredAddress).transfer(insurances[_insuredAddress].insuranceAmount);

        emit InsuranceClaimed(_insuredAddress, insurances[_insuredAddress].insuranceAmount);
    }

    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
