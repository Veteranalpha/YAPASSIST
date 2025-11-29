// ====== DOM ELEMENTS ======
const linksInput = document.getElementById("links-input");
const commentsInput = document.getElementById("comments-input");
const extractBtn = document.getElementById("extract-links");
const generateBtn = document.getElementById("generate-comment");
const linkList = document.getElementById("link-list");
const currentComment = document.getElementById("current-comment");

// ====== DATA STORAGE ======
let extractedLinks = [];
let numberedComments = [];
let linkCommentPairs = [];

// ====== PRELOADED COMMENTS ======
// Insert your preloaded comments here
const preloadedComments = [
  "The project’s execution has been consistently impressive.",
  "Growth trends here are showing strong momentum.",
  "The roadmap looks realistic and achievable.",
  "Execution speed has exceeded expectations.",
  "Progress updates show tangible results.",
  "The team is clearly committed to long-term success.",
  "Momentum is building steadily over time.",
  "Strategic partnerships will likely accelerate growth.",
  "The roadmap shows a clear path to milestones.",
  "Market adoption is showing positive signals.",
  "Execution quality has been consistent throughout.",
  "Progress is being delivered on schedule.",
  "The team’s focus on long-term goals is evident.",
  "The project is scaling effectively.",
  "Roadmap milestones are ambitious but realistic.",
  "Strong momentum is visible across updates.",
  "Execution and vision are well aligned.",
  "The project shows resilience in challenging markets.",
  "Growth metrics indicate a positive trajectory.",
  "The team is demonstrating high accountability.",
  "Roadmap clarity builds confidence.",
  "Execution speed is improving steadily.",
  "Progress is measurable and transparent.",
  "Strategic decisions are enhancing long-term potential.",
  "Momentum indicators point to further growth.",
  "The roadmap execution is disciplined and structured.",
  "Results show strong operational performance.",
  "Long-term potential appears significant.",
  "Growth is sustainable and methodical.",
  "Execution quality inspires confidence.",
  "The team is hitting key milestones on time.",
  "Roadmap planning seems highly strategic.",
  "Positive progress is evident from updates.",
  "Momentum is consistent and accelerating.",
  "Strategic moves indicate future expansion.",
  "The project is building a solid foundation for growth.",
  "Execution reliability is a key strength.",
  "Long-term vision is being realized step by step.",
  "Growth strategy is clear and actionable.",
  "Milestones are being achieved with precision.",
  "Momentum trends are promising for investors.",
  "The roadmap execution reflects strong planning.",
  "Operational progress is steady and measurable.",
  "The team is maintaining execution discipline.",
  "Strategic growth initiatives are paying off.",
  "Long-term potential is evident in recent moves.",
  "Momentum is visible in adoption and engagement metrics.",
  "The project’s roadmap is thoughtfully structured.",
  "Execution effectiveness is a competitive advantage.",
  "Positive growth patterns are becoming consistent.",
  "Milestone achievements are signaling strong progress.",
  "The team’s execution is aligned with their vision.",
  "Momentum indicators suggest continued upward trends.",
  "Growth initiatives are being implemented efficiently.",
  "Roadmap transparency builds trust.",
  "Execution and planning are complementary strengths.",
  "Progress reports demonstrate tangible results.",
  "Long-term potential is underpinned by solid execution.",
  "Growth trajectory is promising and sustainable.",
  "Momentum is being maintained across multiple fronts.",
  "Strategic roadmap decisions are impactful.",
  "The team demonstrates disciplined execution.",
  "Progress is visible in adoption and usage metrics.",
  "Execution consistency strengthens confidence.",
  "Roadmap clarity supports long-term vision.",
  "Growth milestones are being achieved systematically.",
  "Positive momentum is evident from recent updates.",
  "Strategic moves indicate continued expansion.",
  "Execution effectiveness drives investor confidence.",
  "Long-term potential is backed by careful planning.",
  "The project’s progress is measurable and meaningful.",
  "Momentum is accelerating across key indicators.",
  "Growth strategies are being implemented effectively.",
  "Roadmap alignment with market needs is strong.",
  "Execution is disciplined and results-oriented.",
  "Long-term vision is clearly prioritized.",
  "Milestones are achieved with consistent effort.",
  "Strategic growth moves signal robust planning.",
  "Momentum is visible in community engagement.",
  "Progress updates reflect actionable results.",
  "Execution quality reinforces confidence in outcomes.",
  "Growth trajectory shows long-term promise.",
  "Roadmap steps are realistic and measurable.",
  "Strategic initiatives support sustained momentum.",
  "Team execution is improving over time.",
  "Milestones are achieved without major setbacks.",
  "Positive progress is evident in project metrics.",
  "Long-term potential is strong and well-communicated.",
  "Momentum trends are favorable for future growth.",
  "Roadmap clarity and execution are aligned.",
  "Execution precision is a notable strength.",
  "Strategic growth plans are being realized.",
  "Progress updates are consistent and transparent.",
  "Momentum is accelerating steadily across metrics.",
  "Growth potential is underpinned by solid execution.",
  "Roadmap milestones are being delivered on time.",
  "Execution reliability inspires confidence.",
  "Long-term strategic vision is well implemented.",
  "Positive momentum is visible in adoption rates.",
  "Milestone achievements indicate operational excellence.",
  "The project shows consistent growth patterns.",
  "Roadmap execution is disciplined and transparent.",
  "Execution effectiveness supports long-term goals.",
  "Momentum is being maintained through consistent updates.",
  "Growth initiatives are translating into tangible results.",
  "Strategic planning reinforces project potential.",
  "Progress is both measurable and meaningful.",
  "Execution precision is reflected in achieved milestones.",
  "Long-term potential is clearly mapped in the roadmap.",
  "Positive trends indicate ongoing momentum.",
  "Growth trajectory is stable and promising.",
  "Team execution is disciplined and consistent.",
  "Strategic initiatives drive tangible progress.",
  "Momentum is sustained through disciplined planning.",
  "Long-term vision is being realized effectively.",
  "Roadmap milestones are achieved methodically.",
  "Positive progress is evident across updates.",
  "Execution quality supports strong growth potential.",
  "Momentum trends indicate continued adoption.",
  "Strategic roadmap decisions are impactful.",
  "Growth trajectory is supported by execution discipline.",
  "Milestones are achieved without compromise.",
  "Roadmap clarity reinforces long-term confidence.",
  "Progress is measurable and transparent.",
  "Execution effectiveness is visible in results.",
  "Momentum is steadily increasing across key metrics.",
  "Long-term potential is backed by strong planning.",
  "Strategic moves signal ongoing expansion.",
  "Roadmap execution is precise and disciplined.",
  "Growth initiatives are delivering consistent results.",
  "Execution quality is a clear strength.",
  "Momentum is reflected in community and adoption metrics.",
  "Milestones indicate strong operational performance.",
  "Long-term vision is clear and achievable.",
  "Progress updates are consistently actionable.",
  "Execution is aligned with strategic goals.",
  "Roadmap clarity enhances confidence in outcomes.",
  "Growth trends are sustainable and promising.",
  "Momentum is evident in consistent updates.",
  "Strategic initiatives support long-term success.",
  "Execution discipline reinforces project credibility.",
  "Milestones are delivered efficiently and effectively.",
  "Long-term potential is visible in roadmap execution.",
  "Positive progress is evident in adoption metrics.",
  "Growth strategy is both clear and achievable.",
  "Roadmap milestones show tangible results.",
  "Execution is precise and reliable.",
  "Momentum is building steadily over time.",
  "Strategic decisions are driving measurable outcomes.",
  "Long-term vision is being effectively realized.",
  "Progress updates show meaningful advancements.",
  "Execution effectiveness is a competitive advantage.",
  "Roadmap alignment supports sustainable growth.",
  "Milestones are achieved with consistent focus.",
  "Growth trajectory is positive and well-managed.",
  "Momentum indicators suggest continued expansion.",
  "Execution discipline reinforces confidence in the team.",
  "Long-term potential is grounded by strategic planning.",
  "Roadmap clarity makes tracking progress simple.",
  "Positive trends indicate operational success.",
  "Growth strategy is delivering tangible outcomes.",
  "Momentum is reflected in project engagement metrics.",
  "Execution quality strengthens investor confidence.",
  "Milestones are achieved in a structured manner.",
  "Long-term vision is clearly mapped and actionable.",
  "Strategic initiatives are yielding measurable progress.",
  "Roadmap execution is disciplined and effective.",
  "Growth potential is backed by consistent execution.",
  "Momentum trends suggest long-term adoption success.",
  "Progress updates are transparent and meaningful.",
  "Execution discipline is evident across project activities.",
  "Milestones are reached methodically, showing efficiency.",
  "Long-term potential is promising and achievable.",
  "Strategic roadmap moves enhance project credibility.",
  "Growth trajectory is stable and upward.",
  "Momentum is building consistently across updates.",
  "Execution effectiveness supports sustained growth.",
  "Roadmap clarity ensures achievable milestones.",
  "Positive progress is reflected in adoption metrics.",
  "Long-term vision is being realized strategically.",
  "Milestones are delivered with precision.",
  "Growth initiatives are both consistent and impactful.",
  "Execution quality drives confidence in outcomes.",
  "Momentum is evident in measurable progress.",
  "Roadmap planning supports long-term execution.",
  "Strategic initiatives are translating into growth.",
  "Long-term potential is backed by disciplined execution.",
  "Progress shows a consistent path toward sustainable success.",
];

// ====== FUNCTIONS ======

// Extract links from text (http or https)
// Extract only X/Twitter links that point to a tweet/status
function extractLinks(text) {
  if (!text) return [];

  // Find candidate URLs (require protocol)
  const urlRegex = /https?:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/[^\s)]+/gi;
  const rawMatches = text.match(urlRegex) || [];

  const cleaned = rawMatches
    .map(url => {
      // Remove trailing punctuation that often comes when users paste in text
      return url.replace(/[.,)\]]+$/g, "");
    })
    .filter(Boolean)
    .filter(url => {
      // Accept if URL ends with a numeric path segment (e.g. /1234567890)
      // OR matches the i/web/status/<id> pattern
      const numericIdAtEnd = /\/\d{3,20}(?:$|[?#])/;
      const iWebStatus = /\/i\/web\/status\/\d{3,20}/;
      return numericIdAtEnd.test(url) || iWebStatus.test(url);
    });

  // Remove duplicates while preserving order
  return [...new Set(cleaned)];
}

// Clear the displayed links
const clearLinkList = () => {
  linkList.innerHTML = "";
};

// Display clickable links with comment preview
const displayLinks = () => {
  clearLinkList();

  linkCommentPairs.forEach((pair) => {
    const li = document.createElement("li");
    li.className =
      "p-3 border border-green-400 rounded bg-green-100 cursor-pointer hover:bg-green-200 transition";
    li.textContent = pair.link;

    // Click opens X comment intent and marks as claimed
    li.addEventListener("click", function handler() {
      const tweetIdMatch = pair.link.match(/status\/(\d+)/);
      if (!tweetIdMatch) return alert("Invalid X link format.");
      const tweetId = tweetIdMatch[1];

      // Open X comment window
      window.open(
        `
        https://twitter.com/intent/tweet?in_reply_to=${tweetId}&text=${pair.comment}`,
        "_blank"
      );

      // Mark link as claimed
      li.textContent = pair.link + " ✅ Claimed";
      li.classList.remove("hover:bg-green-200", "cursor-pointer");
      li.classList.add("bg-cream-50", "text-green-700");

      // Clear comment preview
      currentComment.value = "";

      // Remove this click handler
      li.removeEventListener("click", handler);
    });

    // Hover to preview comment
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



// ==== GENERATE COMMENT BUTTON ====
generateBtn.addEventListener("click", () => {

  if (!extractedLinks.length) {
    alert("No links extracted yet!");
    return;
  }

  if (!preloadedComments.length) {
    alert("Preloaded comments are empty!");
    return;
  }

  // Pair each link with a comment (random)
  linkCommentPairs = extractedLinks.map((link) => ({
    link,
    comment: preloadedComments[Math.floor(Math.random() * preloadedComments.length)]
  }));

  displayLinks();
});
