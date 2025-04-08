import express from 'express';
import jwt from 'jsonwebtoken';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_KEY }));

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).send("Unauthorized");
  }
};

router.post('/generate', auth, async (req, res) => {
  const { product, audience } = req.body;
  const prompt = `Write a promotional email for ${product} targeted at ${audience}`;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }]
  });
  res.json({ email: response.data.choices[0].message.content });
});

export default router;