import { ResultView } from "./common";

const prompt = "Translate from greeklish to greek";
const model = "gpt-4o";
const toastTitle = "Thinking..";

export default function GreeklishToGreek() {
  return ResultView(prompt, model, toastTitle);
}
