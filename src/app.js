import express from 'express';
import { createAgent } from './agent.js';
const app = express();
app.use(express.json());

app.post('/ask', async (req, res) => {
    const agent = await createAgent();
    const response = await agent.invoke({
        messages: [{
            role: "user",
            content: req.body.question
        }]
    });
    const lastMessage = JSON.parse(JSON.stringify(response, null, 2));
    // const lastMessage = response.answer.messages[response.answer.messages.length - 1];
    res.json({status:true, lastMessage: lastMessage.messages[lastMessage.messages.length - 1].kwargs.content});
});

app.listen(3000, () => console.log('Agent running on port 3000'));