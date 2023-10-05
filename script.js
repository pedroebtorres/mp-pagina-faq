function showContent(index) {
    let temp = document.getElementsByTagName("template")[index];
    let clon = temp.content.cloneNode(true);
    let div = document.getElementsByTagName("div")[index];
    if (div.children.length === 3) {
        let elementToRemove = div.querySelector('p');
        elementToRemove.remove();
    } else {
        div.appendChild(clon);
    }
}
