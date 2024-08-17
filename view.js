const elButtonStart = document.querySelector('button')
elButtonStart.onclick = onClickButtonLoadData

function onClickButtonLoadData() {
  handleLoadData()
}

function renderContainerAll(posts) {
  document.querySelector('.container').innerHTML = ''

  // function helper(post) {
  //   renderContainer(post)
  // }

  // posts.forEach(post => renderContainer(post))

  // posts.forEach(helper)

  posts.forEach(renderContainer)

  // let i = 0
  // while (i < posts.length) {
  //   renderContainer(posts[i])
  //   i++
  // }
}

function renderContainer(post) {
  const elContainer = document.querySelector('.container')
  const elDivPost = generateDivPost(post)
  elContainer.appendChild(elDivPost)
}

function generateDivPost(post) {
  const elDivPost = document.createElement('div')
  const elDivTop = document.createElement('div')
  const elDivBot = document.createElement('div')
  elDivTop.textContent = post.title
  elDivBot.textContent = post.body
  elDivPost.appendChild(elDivTop)
  elDivPost.appendChild(elDivBot)
  return elDivPost
}
