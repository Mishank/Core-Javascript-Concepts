const replaceParamsInUrl = (url, replacements) => {
  return replacements.reduce((acc, replacement) => {
    return acc.replace(":" + replacement.from, replacement.to);
  }, url);
};

const initialUrl = "/post";
const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { form: "commentId", to: "3" },
]);
console.log(resultUrl);
