import { fileNames } from "./fileNames";

const body = document.body;
fileNames.forEach((fileName) => {
    const aTag = window.document.createElement("a");
    aTag.innerText = fileName;
    aTag.href = `./${fileName}.html`;
    const li = window.document.createElement("li");
    li.className = "list-disc";
    li.appendChild(aTag);
    body.appendChild(li);
});
