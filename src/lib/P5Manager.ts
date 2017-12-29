import P5Base from "./P5Base"

let texts: P5Base[] = []

function addText(textNode: P5Base) {
  texts.push(textNode)
}

export {
  addText
}