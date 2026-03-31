const dispositionRules = [
  {
    scenario: "DENIAL",
    conditions: { BAL_ZERO: "YES" },
    noteType: "Denied-Adjustment-(Duplicate)",
    noteSubject: "Adjustment Completed"
  },
  {
    scenario: "DENIAL",
    conditions: { CODING_DONE: "YES" },
    noteType: "Denied-Rebilled-(Coding correction)",
    noteSubject: "Claim Corrected and Rebilled"
  },
  {
    scenario: "NCOF",
    conditions: {},
    noteType: "No Response-NCOF-(Rebilled)",
    noteSubject: "Claim Not on File"
  }
];
``