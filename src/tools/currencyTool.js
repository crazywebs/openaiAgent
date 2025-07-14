import { DynamicTool } from "@langchain/core/tools";

export const convertCurrency = new DynamicTool({
    name: "convertCurrency",
    description: "Convert between currencies",
    func: async ({ fromCurrency, toCurrency, amount }) => {
        const result = {
            fromCurrency,
            toCurrency,
            amount,
            convertedAmount: amount*85,
            exchangeRate: 85
        }
        return JSON.stringify(result);
    }
});