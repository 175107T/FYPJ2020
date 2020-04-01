pragma solidity >=0.5.0;

contract GetSetMessage {
    struct Message {
        string Name;
        string ModuleName;
    }

    Message[] public message;

    function setMessage(string memory _name, string memory _modulename) public {
        nameToindex[_name] = (uint256(message.length));
        message.push(Message(_name, _modulename));
        //nameToindex[_name] = (uint256(message.length) - 1);
    }

    function getMessage()
        public
        view
        returns (string memory name, string memory module)
    {
        for (uint256 counter = 0; counter < message.length; counter++) {
            name = string(abi.encodePacked(name, message[counter].Name));
            module = string(
                abi.encodePacked(module, message[counter].ModuleName)
            );
        }
        return (name, module);
    }

    mapping(string => uint256) nameToindex;

    function getMessageByOne(string memory Name)
        public
        view
        returns (string memory, string memory)
    {
        uint256 index = nameToindex[Name];
        return (message[index].Name, message[index].ModuleName);
    }
}
