const listItems = document.getElementsByClassName('fruit');
listItems[2].style.backgroundColor = 'yellow';

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontWeight = 'bold';
}