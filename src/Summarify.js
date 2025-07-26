// src/App.js
/*import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [qa, setQa] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const res = await axios.post("https://1d4b-35-185-233-185.ngrok-free.app/process", formData);
      setSummary(res.data.summary);
      setQa(res.data.qa);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-xl w-full"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          📚 SUMMARIFY
        </motion.h1>

        <motion.input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full bg-gray-700 text-white p-2 rounded-lg mb-4 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition duration-300"
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Generating..." : "Generate Summary + Q&A"}
        </motion.button>

        {summary && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-2">📄 Summary</h2>
            <p className="bg-gray-700 p-3 rounded-lg">{summary}</p>
          </motion.div>
        )}

        {qa && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">❓ Questions & Answers</h2>
            <pre className="bg-gray-700 p-3 rounded-lg whitespace-pre-wrap">{qa}</pre>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
*/
/*
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [qa, setQa] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://6e9b2f7eeaf1.ngrok-free.app"; // 🔗 REPLACE THIS

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await axios.post(`https://6e9b2f7eeaf1.ngrok-free.app/process`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(res.data.summary);
      setQa(res.data.qa);
    } catch (err) {
      alert("Upload or processing failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleProcessText = async () => {
    if (!text.trim()) return alert("Please paste some text first.");

    setLoading(true);
    try {
      const res = await axios.post(`https://6e9b2f7eeaf1.ngrok-free.app/process_text`, { text });
      setSummary(res.data.summary);
      setQa(res.data.qa);
    } catch (err) {
      alert("Text processing failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>📘 Auto-Summarizer + Q&A Generator</h1>

      <section>
        <h3>📄 Upload PDF</h3>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload & Process</button>
      </section>

      <hr />

      <section>
        <h3>✍️ Or Paste Text</h3>
        <textarea
          rows="6"
          placeholder="Paste your textbook content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleProcessText}>Summarize + Generate Q&A</button>
      </section>

      <hr />

      {loading && <p>⏳ Processing...</p>}

      {summary && (
        <section>
          <h3>📝 Summary</h3>
          <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{summary}</pre>
        </section>
      )}

      {qa && (
        <section>
          <h3>❓ Q&A</h3>
          <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{qa}</pre>
        </section>
      )}
    </div>
  );
}

export default App;
*//*
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import jsPDF from "jspdf";


function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [summaryChunks, setSummaryChunks] = useState([]);
  const [qaPairs, setQaPairs] = useState([]);
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://bb2bc9b77e53.ngrok-free.app"; // 🔁 Replace this

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file.");
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/process`, formData);
      setSummaryChunks(res.data.summary.split("\n\n"));
      setQaPairs(res.data.qa.split("\n").filter((line) => line.trim()));
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTextSubmit = async () => {
    if (!text.trim()) return alert("Please enter some text.");
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/process_text`, { text });
      setSummaryChunks(res.data.summary.split("\n\n"));
      setQaPairs(res.data.qa.split("\n").filter((line) => line.trim()));
    } catch (err) {
      alert("Text processing failed.");
    } finally {
      setLoading(false);
    }
  };
  
  const downloadAsTxt = (content, filename) => {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

const downloadAsPdf = (content, filename) => {
  const doc = new jsPDF();
  const lines = doc.splitTextToSize(content, 180);
  doc.text(lines, 10, 10);
  doc.save(filename);
};

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center p-6">
      <motion.div
        className="bg-gray-900 p-10 rounded-3xl shadow-xl max-w-5xl w-full space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          📚 SUMMARIFY
        </motion.h1>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <motion.button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md"
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Processing PDF..." : "Generate from PDF"}
        </motion.button>

        <div className="text-center text-gray-400 my-2 font-medium">OR</div>

        <textarea
          rows="4"
          placeholder="Paste text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-gray-800 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <motion.button
          onClick={handleTextSubmit}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md"
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Summarizing..." : "Summarize Pasted Text"}
        </motion.button>

       {summaryChunks.length > 0 && (
  <motion.div
    className="mt-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <h2 className="text-xl font-semibold mb-2">📝 Summary</h2>
    {summaryChunks.map((chunk, index) => (
      <p key={index} className="bg-gray-700 p-3 rounded-lg whitespace-pre-wrap mb-4">
        📑 Part {index + 1}: {chunk}
      </p>
    ))}
    <div className="flex gap-4 mt-2">
      <button
        onClick={() => downloadAsTxt(summaryChunks.join("\n\n"), "summary.txt")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Download Summary (.txt)
      </button>
      <button
        onClick={() => downloadAsPdf(summaryChunks.join("\n\n"), "summary.pdf")}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Download Summary (.pdf)
      </button>
    </div>
  </motion.div>
)}


     {qaPairs.length > 0 && (
  <motion.div
    className="mt-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    <h2 className="text-xl font-semibold mb-2">❓ Questions & Answers</h2>
    {qaPairs.map((qa, index) => (
      <pre key={index} className="bg-gray-700 p-3 rounded-lg whitespace-pre-wrap mb-2">
        {qa}
      </pre>
    ))}
    <div className="flex gap-4 mt-2">
      <button
        onClick={() => downloadAsTxt(qaPairs.join("\n"), "qa.txt")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Download Q&A (.txt)
      </button>
      <button
        onClick={() => downloadAsPdf(qaPairs.join("\n"), "qa.pdf")}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Download Q&A (.pdf)
      </button>
    </div>
  </motion.div>
)}

      </motion.div>
    </div>
  );
}

export default App;
*/

/*import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Summarify() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [summaryChunks, setSummaryChunks] = useState([]);
  const [qaPairs, setQaPairs] = useState([]);
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://YOUR_NGROK_URL.ngrok-free.app";

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file.");
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/process`, formData);
      setSummaryChunks(res.data.summary.split("\n\n"));
      setQaPairs(res.data.qa.split("\n").filter(line => line.trim()));
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTextSubmit = async () => {
    if (!text.trim()) return alert("Please enter some text.");
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/process_text`, { text });
      setSummaryChunks(res.data.summary.split("\n\n"));
      setQaPairs(res.data.qa.split("\n").filter(line => line.trim()));
    } catch (err) {
      alert("Text processing failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center p-4">
      <motion.div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-7xl w-full">
        <motion.h1 className="text-3xl font-bold mb-6 text-center">📚 SUMMARIFY</motion.h1>

        <motion.input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full bg-gray-700 text-white p-2 rounded-lg mb-4 cursor-pointer"
        />
        <motion.button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg mb-4"
        >
          {loading ? "Processing PDF..." : "Generate from PDF"}
        </motion.button>

        <div className="text-center text-gray-400 my-2">OR</div>

        <textarea
          rows="4"
          placeholder="Paste text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-gray-700 text-white p-2 rounded-lg mb-2 resize-none"
        />
        <motion.button
          onClick={handleTextSubmit}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
        >
          {loading ? "Summarizing..." : "Summarize Pasted Text"}
        </motion.button>

        {summaryChunks.length > 0 && (
          <motion.div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">📝 Summary</h2>
            {summaryChunks.map((chunk, i) => (
              <p key={i} className="bg-gray-700 p-3 rounded-lg mb-4">📑 Part {i + 1}: {chunk}</p>
            ))}
          </motion.div>
        )}

        {qaPairs.length > 0 && (
          <motion.div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">❓ Questions & Answers</h2>
            {qaPairs.map((qa, i) => (
              <pre key={i} className="bg-gray-700 p-3 rounded-lg mb-2 whitespace-pre-wrap">{qa}</pre>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Summarify;*/

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Summarify() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [summary, setSummary] = useState([]);
  const [qa, setQa] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://6a8e69c3cc2c.ngrok-free.app"; 

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleDownload = () => {
    const content = `SUMMARY:\n\n${summary.join("\n\n---\n\n")}\n\nQ&A:\n\n${qa}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "summarify_output.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF");
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/process`, formData);
      setSummary(res.data.summary.split("\n\n---\n\n"));
      setQa(res.data.qa);
    } catch (err) {
      alert("PDF processing failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleTextSubmit = async () => {
    if (!text.trim()) return alert("Please enter text");
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/process_text`, { text });
      setSummary(res.data.summary.split("\n\n---\n\n"));
      setQa(res.data.qa);
    } catch (err) {
      alert("Text summarization failed.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
      <motion.div
        className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-7xl w-full"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📚 Summarify</h1>
         <button
onClick={() => {
    localStorage.removeItem("auth");
    window.location.href = "/"; // Go to welcome page
  }}
  className="bg-red-600 px-4 py-2 rounded text-white"
>
  Logout
</button>

        </div>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full bg-gray-700 text-white p-2 rounded-lg mb-4 cursor-pointer"
        />
        <motion.button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg mb-4"
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Processing PDF..." : "Generate from PDF"}
        </motion.button>

        <div className="text-center text-gray-400 mb-2">OR</div>

        <textarea
          rows="4"
          placeholder="Paste text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-gray-700 text-white p-2 rounded-lg mb-2 resize-none"
        />
        <motion.button
          onClick={handleTextSubmit}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mb-6"
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Summarizing..." : "Summarize Text"}
        </motion.button>

        {summary.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">📝 Summary</h2>
            {summary.map((chunk, idx) => (
              <p key={idx} className="bg-gray-700 p-3 rounded-lg mb-3 whitespace-pre-wrap">
                {chunk}
              </p>
            ))}
          </div>
        )}

        {qa && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">❓ Questions & Answers</h2>
            <pre className="bg-gray-700 p-3 rounded-lg whitespace-pre-wrap">{qa}</pre>
          </div>
        )}

        {(summary.length > 0 || qa) && (
          <div className="mt-4 text-right">
            <button
              onClick={handleDownload}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
            >
              ⬇️ Download Summary + Q&A
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Summarify;

