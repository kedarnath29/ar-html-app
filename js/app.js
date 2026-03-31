function goToConditions() {
  const scenario = document.getElementById("scenario")?.value;
  localStorage.setItem("scenario", scenario);
  window.location.href = "conditions.html";
}

function evaluate() {
  const scenario = localStorage.getItem("scenario");

  const inputs = {
    BAL_ZERO: document.getElementById("BAL_ZERO").value,
    CODING_DONE: document.getElementById("CODING_DONE").value
  };

  const rule = findRule(scenario, inputs);

  if (!rule) {
    alert("No matching rule found");
    return;
  }

  localStorage.setItem("noteType", rule.noteType);
  localStorage.setItem("noteSubject", rule.noteSubject);
  localStorage.setItem("comment", generateComment());

  window.location.href = "result.html";
}

/* ✅ CRITICAL: Attach click handler AFTER page loads */
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("generateBtn");
  if (btn) {
    btn.addEventListener("click", evaluate);
  }

  if (document.getElementById("noteType")) {
    document.getElementById("noteType").value =
      localStorage.getItem("noteType") || "";
    document.getElementById("noteSubject").value =
      localStorage.getItem("noteSubject") || "";
    document.getElementById("comment").value =
      localStorage.getItem("comment") || "";
  }
});
