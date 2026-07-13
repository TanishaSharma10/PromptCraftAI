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

// Instructions for each enhancement mode
const modeInstructions = {
  Professional:
    "Improve the prompt in a professional, formal and structured way.",

  Coding:
    "Improve the prompt for software development. Include implementation details, best practices, edge cases, and code-related clarity.",

  Creative:
    "Improve the prompt creatively using vivid language, storytelling, imagination and engaging ideas.",

  Marketing:
    "Improve the prompt from a marketing perspective. Focus on persuasive copy, target audience, emotional appeal and call-to-action.",

  Learning:
    "Improve the prompt so concepts are explained clearly with simple language, examples and step-by-step guidance.",
};

// Enhance Prompt Route
app.post("/api/enhance", async (req, res) => {
  try {
    const { prompt, mode } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    // Get the instruction for the selected mode
    const instruction =
      modeInstructions[mode] || modeInstructions.Professional;

    // Build the final prompt for Gemini
    const finalPrompt = `
You are an expert Prompt Engineer.

${instruction}

Your task is to rewrite and enhance the user's prompt.

Requirements:
- Make it detailed.
- Improve clarity.
- Improve structure.
- Keep the original intent.
- Return ONLY the enhanced prompt.
- Do NOT add explanations.

User Prompt:
${prompt}
`;

    const apiKey = process.env.GEMINI_API_KEY;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: finalPrompt,
              },
            ],
          },
        ],
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