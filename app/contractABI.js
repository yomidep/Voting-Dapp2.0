const contractABI = [
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "proposalNames",
                "type": "bytes32[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "king",
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
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "proposals",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "name",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "voteC",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            }
        ],
        "name": "righttoVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "vote",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "voteD",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "voteI",
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
                "name": "proposal",
                "type": "uint256"
            }
        ],
        "name": "votingTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "winningbyName",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "winningName_",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "winningbyint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_winning",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]


export default contractABI;