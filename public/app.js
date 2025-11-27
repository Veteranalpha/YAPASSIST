document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("extract-form");
  const textarea = document.getElementById("text-input");
  const output = document.getElementById("output");

  console.log("Frontend loaded successfully");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = textarea.value.trim();
    if (!text) {
      output.textContent = "No text provided.";
      return;
    }

    try {
      const res = await fetch("/extract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      if (!data.links || data.links.length === 0) {
        output.textContent = "No links found.";
        return;
      }

      output.textContent = data.links.join("\n");
    } catch (err) {
      console.error("Fetch error:", err);
      output.textContent = "Error extracting links.";
    }
  });
});
