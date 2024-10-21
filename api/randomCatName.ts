import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const catNames: string[] = [
    "Whiskers",
    "Fluffy",
    "Mittens",
    "Paws",
    "Cuddles",
    "Meowser",
    "Purrcy",
    "Catnip",
    "Sir Purrs-a-lot",
    "Fuzzy Wuzzy"
];

const randomCatName: AzureFunction = async (context: Context, req: HttpRequest) => {
    const randomIndex = Math.floor(Math.random() * catNames.length);
    context.res = {
        status: 200,
        body: catNames[randomIndex]
    };
};

export default randomCatName;