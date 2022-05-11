const solution = (s) => {
  let text = s;
  const regex = /\(([^()]*)\)/g;
  while (regex.test(text)) {
    text = text.replace(regex, (_, captured) => {
      return `[${captured}]`;
    });
  }

  return text.replace(/\)|\(/g, '').replaceAll('[', '(').replaceAll(']', ')');
};

export default solution;
