function digitStack(inputCommands) {
  let STACK = [];
  let lastIndex = STACK.length - 1;
  let sum = 0;
  for (let i = 0; i < inputCommands.length; i++) {
    const command = inputCommands[i];
    switch (command.slice(0, 2)) {
      case "PU":
        STACK.push(parseInt(command.slice(-1).trim()));
        lastIndex = STACK.length - 1;
        break;
      case "PO":
        if (lastIndex !== -1) {
          sum += STACK.pop();
          lastIndex = STACK.length - 1;
        } else {
          sum += 0;
        }
        break;
      case "PE":
        lastIndex !== -1 ? (sum += STACK[lastIndex]) : (sum += 0);
        break;
      default:
        break;
    }
  }
  return sum;
}

module.exports = {
  digitStack
};
