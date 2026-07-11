require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 PromptCraft AI Backend is Running!");
});

// Enhance Prompt Route
app.post("/api/enhance", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: `You are an expert Prompt Engineer.

Improve the following prompt so that it becomes:
- More detailed
- Better structured
- Clear
- Professional
- Easy for AI models to understand

Return ONLY the improved prompt.

Prompt:
${prompt}`
              }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const enhancedPrompt =
      response.data.candidates[0].content.parts[0].text;

    res.json({
      success: true,
      enhancedPrompt,
    });

  } catch (error) {

    console.log("========== GEMINI ERROR ==========");
    console.log("Status:", error.response?.status);

    console.log(
      JSON.stringify(error.response?.data, null, 2)
    );

    console.log("==================================");

    res.status(500).json({
      success: false,
      message: "Failed to enhance prompt.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});