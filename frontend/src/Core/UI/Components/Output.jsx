import { useState } from "react";

function Output({ items }) {
  const [framework, setFramework] = useState("vanilla");
  const [copied, setCopied] = useState(false);

  const tagname = items?.root?.tagName || "div";
  const styles = items?.root?.styles || {};

  let classStr = "";

  for (let styleType in styles) {
    for (let key in styles[styleType]) {
      classStr += styles[styleType][key] + " ";
    }
  }
  classStr = classStr.trim();

  const handleFrameworkChange = (e) => {
    setFramework(e.target.value);
  };

  const CodeBlock =
    framework === "vanilla"
      ? `<${tagname} class="${classStr}">\n\n</${tagname}>`
      : `<${tagname} className="${classStr}">\n\n</${tagname}>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CodeBlock);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed: ", err);
    }
  };

  return (
    <div className="w-full p-4 space-y-4">
      <div className="flex items-center gap-4">
        <label>
          <input
            type="radio"
            name="framework"
            value="vanilla"
            checked={framework === "vanilla"}
            onChange={handleFrameworkChange}
          />
          <span className="ml-2">Vanilla HTML</span>
        </label>
        <label>
          <input
            type="radio"
            name="framework"
            value="react"
            checked={framework === "react"}
            onChange={handleFrameworkChange}
          />
          <span className="ml-2">React JSX</span>
        </label>
      </div>

      <div className="relative">
        <pre className="w-full border bg-cyan-200 dark:bg-cyan-800 p-2 rounded">
          <code className="whitespace-pre-wrap text-sm">{CodeBlock}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="w-full mt-4 border bg-gray-100 dark:bg-cyan-900 p-2 rounded">
        <code className="whitespace-pre-wrap text-xs text-gray-600 dark:text-gray-400">
          {JSON.stringify(items, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default Output;
