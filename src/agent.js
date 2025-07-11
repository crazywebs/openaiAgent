import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { convertCurrency } from "./tools/currencyTool.js";
import { getUserDetail } from "./tools/userTool.js";

const model = new ChatOpenAI({
  model: "gpt-4-turbo",
  temperature: 0,
  apiKey: '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'
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