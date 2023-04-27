//highlight all of the words over 8 characters long in the paragraph text (with a yellow backgroubd for example)

const paragraph = document.querySelector("p");

paragraph.innerHTML = paragraph.innerHTML
  .split(" ")
  .map((word) => {
    return word.length > 8
      ? `<div style ="background-color: yellow">${word}</span>`
      : word;
  })
  .join(" ");
