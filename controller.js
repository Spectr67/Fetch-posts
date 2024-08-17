async function handleStart() {
  await updateTextData()
  renderContainerAll(textDataTop, textDataBot)
}