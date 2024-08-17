async function handleLoadData() {
  await updatePosts()
  renderContainerAll(posts)
}
