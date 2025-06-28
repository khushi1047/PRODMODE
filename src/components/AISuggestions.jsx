import { CiCloud } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";

export const AISuggestions = () => {
  const [tip, setTip] = useState("Click to get a motivational tip!");
  const [loading, setLoading] = useState(false);

  const handlebtn = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "Write a 2-line motivational quote for someone feeling unmotivated at work.",
            },
          ],
          max_tokens: 60,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const result = res.data.choices[0].message.content;
      setTip(result);
    } catch (err) {
  console.error("API call failed:", err.response?.data || err.message);
  alert("⚠️ OpenAI Error: " + (err.response?.data?.error?.message || "Too many requests."));
}
finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  text-white text-2xl p-4">
      <p><CiCloud /></p>
      <p className="font-bold text-3xl mb-2">AI Suggestions</p>
      <p className="text-lg text-center max-w-xl ">{loading ? "⏳ Generating..." : tip}</p>
      <button
        className="mt-4 bg-black rounded-2xl p-4     hover:cursor-pointer hover:bg-amber-50 hover:text-black"
        onClick={handlebtn}
        disabled={loading}
      >
        {loading ? "Loading..." : "✦ Regenerate Suggestion"}
      </button>
    </div>
  );
};
