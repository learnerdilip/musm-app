function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    const passed = doesNotPassAllValidations(name, msg)
if (passed) {
    return null
}
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


function doesNotPassAllValidations(name,msg) {
    if(!msg || !name) {
        alert('You forgot to fill in your name or message!')
        return true
    } 
    if(msg.length > 200) {
        alert("your message is too long!")
        return true
    } 
    return false
}

