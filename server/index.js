const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("🚀 PromptCraft AI Backend is Running!");
});

app.post("/api/enhance", (req, res) => {
    console.log(req.body);
  
    res.json({
      success: true,
      enhancedPrompt:
        "This is a dummy enhanced prompt. Tomorrow Gemini will generate this.",
    });
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});