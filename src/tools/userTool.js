import { DynamicTool } from "@langchain/core/tools";


const users = [
    {
        id: 1,
        name: 'test-1',
        address: "c 102 sector 65 noida UP"
    },
    {
        id: 2,
        name: 'test 2',
        address: "c 103 sector 65 noida UP"
    },
    {
        id: 3,
        name: 'test 3',
        address: "c 104 sector 65 noida UP"
    },
    {
        id: 4,
        name: 'test 4',
        address: "c 105 sector 65 noida UP"
    },
    {
        id: 5,
        name: 'test 5',
        address: "c 106 sector 65 noida UP"
    },
];

export const getUserDetail = new DynamicTool({
    name: "getUserDetail",
    description: "Fetch User address by name",
    func: async (input) => {
        console.log("name",input);
        const user = users.find((user) => {
            console.log(user);
            return user.name == input;
        });
        console.log("user",user);
        const result = {
            input,
            user
        }
        return JSON.stringify(result);
    }
});