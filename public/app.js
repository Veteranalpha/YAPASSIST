// ====== DOM ELEMENTS ======
const linksInput = document.getElementById("links-input");
const commentsInput = document.getElementById("comments-input");
const extractBtn = document.getElementById("extract-links");
const assignBtn = document.getElementById("assign-comments");
const linkList = document.getElementById("link-list");
const currentComment = document.getElementById("current-comment");

// ====== DATA STORAGE ======
let extractedLinks = [];
let numberedComments = [];
let linkCommentPairs = [];

// ====== FUNCTIONS ======

// Extract links (basic http/https)
const extractLinks = (text) => {
  const regex = /(https?:\/\/)?(x\.com\/[^\s]+)/g;
  const matches = text.match(regex);
  return matches || [];
};

// Clear the links display
const clearLinkList = () => {
  linkList.innerHTML = "";
};

// Display links as clickable cards
const displayLinks = () => {
  clearLinkList();

  linkCommentPairs.forEach((pair, index) => {
    const li = document.createElement("li");
    li.className =
      "p-3 border border-green-400 rounded bg-green-100 cursor-pointer hover:bg-green-200 transition";
    li.textContent = pair.link;

    // Click handler for opening X reply
    li.addEventListener("click", function handler() {
      const tweetIdMatch = pair.link.match(/status\/(\d+)/);
      if (!tweetIdMatch) return alert("Invalid X link format.");
      const tweetId = tweetIdMatch[1];

      // Open X intent in new tab
      window.open(
        `
        https://twitter.com/intent/tweet?in_reply_to=${tweetId}&text=${pair.comment}`,
        "_blank"
      );

      // Mark as claimed
      li.textContent = pair.link + ` ✅ Claimed`;
      li.classList.remove("hover:bg-green-200", "cursor-pointer");
      li.classList.add("bg-cream-50", "text-green-700");
      currentComment.value = "";

      // Remove click handler
      li.removeEventListener("click", handler);
    });

    // Show comment in preview when hovering
    li.addEventListener("mouseenter", () => {
      currentComment.value = pair.comment;
    });

    li.addEventListener("mouseleave", () => {
      currentComment.value = "";
    });

    linkList.appendChild(li);
  });
};

// ====== EVENT LISTENERS ======

// Extract links from textarea
extractBtn.addEventListener("click", () => {
  extractedLinks = extractLinks(linksInput.value);
  alert(`Extracted ${extractedLinks.length} links.`);
});

// Assign comments to extracted links
assignBtn.addEventListener("click", () => {
  const commentText = commentsInput.value.trim();
  if (!extractedLinks.length) return alert("No links to assign comments to!");
  if (!commentText) return alert("No comments provided!");

  // Split comments by lines or numbers (1. 2. 3.)
  numberedComments = commentText.split(/\n\d*\.?\s*/).filter(Boolean);

  // Pair links with comments
  linkCommentPairs = extractedLinks.map((link, i) => ({
    link,
    comment: numberedComments[i] || "",
  }));

  displayLinks();
});
