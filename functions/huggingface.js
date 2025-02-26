const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const userInput = body.question || "请解释乾卦的含义";

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/mixtral-8x7b-instruct-v0.1",
      {
        inputs: userInput,
        parameters: { max_length: 500, temperature: 0.7 },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ answer: response.data[0].generated_text }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    };
  }
};