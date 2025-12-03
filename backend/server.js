import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_OPENAI_KEY_HERE"; // change api key

app.post("/chat", async (req, res) => {
  try {
    const { message, personality } = req.body;

    const systemPrompt =
      personality === "roast"
        ? "You are a playful, mischievous AI study buddy who loves to joke, tease, and exaggerate dramatically. You often make funny, light-hearted comments about the user's mistakes, but always guide them toward the correct answers and help them learn. You are chaotic, sassy, and humorous, but ultimately supportive and encouraging in their studies."
        : "You are a gentle, caring AI study buddy who supports and motivates the user. You offer kind guidance, explain concepts clearly, and cheer the user on, helping them feel confident and capable. You are patient, warm, and always focused on helping the user learn and succeed.";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "AI is currently taking a nap 😴";

    res.json({ reply });
  } catch (err) {
    res.json({ reply: "Server error 😭" });
  }
});

app.listen(3000, () => {
  console.log("AI Buddy Server running at http://localhost:3000");
});