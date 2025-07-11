import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { convertCurrency } from "./tools/currencyTool.js";
import { getUserDetail } from "./tools/userTool.js";

const model = new ChatOpenAI({
  model: "gpt-4-turbo",
  temperature: 0,
  apiKey: ''
});

export const createAgent = async () => {
  return await createReactAgent({
    llm: model,
    tools: [
        convertCurrency,
        getUserDetail
    ],
    // systemMessage: "You are a currency expert. Always verify exchange rates."
  });
};