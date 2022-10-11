import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    #app の中身書き換えたったで ^^
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
