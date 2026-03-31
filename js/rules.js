function findRule(scenario, inputs) {
  for (let rule of dispositionRules) {
    if (rule.scenario !== scenario) continue;

    let match = true;
    for (let key in rule.conditions) {
      if (rule.conditions[key] !== inputs[key]) {
        match = false;
      }
    }

    if (match) return rule;
  }
  return null;
}