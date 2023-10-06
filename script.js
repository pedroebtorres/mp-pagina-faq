function showContent(index) {
    let temp = document.getElementsByTagName("template")[index];
    let clon = temp.content.cloneNode(true);
    let div = document.getElementsByTagName("div")[index + 3];
    console.log(div.children.length);
    if (div.children.length === 4) {
        let elementToRemove = div.querySelector('p');
        elementToRemove.remove();
    } else {
        div.appendChild(clon);
    }
}
