// 🚀 Part 1: Variables & Conditionals
// AI adoption levels (% impact)
let productivityBoost = 0.15; // 15%
let budgetSavingRate = 0.10;  // 10%
let timeReductionRate = 0.20; // 20%

// ❤️ Part 2: Functions
function calculateSavings(budget) {
  return budget * budgetSavingRate;
}

function calculateTimeReduction(duration) {
  return duration - (duration * timeReductionRate);
}

function calculateWorkerEfficiency(workers) {
  return workers + Math.floor(workers * productivityBoost);
}

// Handle form submission
document.getElementById("estimatorForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let workers = parseInt(document.getElementById("workersInput").value);
  let budget = parseFloat(document.getElementById("budgetInput").value);
  let duration = parseInt(document.getElementById("durationInput").value);

  let resultsHTML = `
    <p>💰 Estimated Cost Savings: KES ${calculateSavings(budget).toLocaleString()}</p>
    <p>⏱️ New Project Duration: ${calculateTimeReduction(duration)} months</p>
    <p>👷 Effective Workforce with AI: ${calculateWorkerEfficiency(workers)} workers</p>
  `;

  // Conditional message
  if (budget > 1000000) {
    resultsHTML += "<p>Large-scale project detected — AI impact is significant!</p>";
  } else {
    resultsHTML += "<p>For small projects, AI still gives a solid boost.</p>";
  }

  document.getElementById("results").innerHTML = resultsHTML;
});

// 🔁 Part 3: Loops
const technologies = [
  { name: "Predictive Maintenance", detail: "AI predicts equipment breakdown before it happens." },
  { name: "Generative Design", detail: "AI generates multiple building design options." },
  { name: "Safety Monitoring", detail: "Computer vision detects hazards on site." },
  { name: "Robotics", detail: "AI-powered robots handle repetitive construction tasks." },
  { name: "Drones", detail: "AI-guided drones inspect sites for progress tracking." }
];

document.getElementById("listTechBtn").addEventListener("click", () => {
  let listContainer = document.getElementById("techList");
  listContainer.innerHTML = ""; // Clear

  // Loop through array
  for (let tech of technologies) {
    let li = document.createElement("li");
    li.textContent = tech.name;
    li.addEventListener("click", () => {
      alert(`${tech.name}: ${tech.detail}`);
    });
    listContainer.appendChild(li);
  }
});

// 🌐 Part 4: DOM Manipulation
document.getElementById("toggleInfoBtn").addEventListener("click", () => {
  document.getElementById("extraInfo").classList.toggle("hidden");
});
