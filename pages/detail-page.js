function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerText = `${name} said:`
    p.innerText = msg
    comment.classList.add('comment') // adding 'comment' variable to class attribute
    comment.appendChild(h3)
    comment.appendChild(p)
    const commentSection = document.getElementById('comments')
    // console.log(commentSection)
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null
}