import { useState } from "react";

export default function AIChatHistory() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
      // Here you would typically send the input to your AI service
      // and then add the AI's response to the messages array
    }
  };

  return (
    <div className="w-full max-w-2xl mt-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              {msg}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
