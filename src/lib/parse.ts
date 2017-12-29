export default function parse(input) {
  function parseComponent(inputComponent) {
    const document = inputComponent.document

    document.render()

    return inputComponent
  }

  function toBuffer() {
    return parseComponent(input)
  }

  return {
    toBuffer
  }
}