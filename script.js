//your code here!
const list = document.getElementById('infi-list');

function addInitialItems() {
	for(let i=1;i<=10;i++){
		const listItem = document.createElement('li');
		listItem.textContent = `Item ${i}`;
		list.appendChild(listItem);
	}
}
window.onload = addInitialItems;

let itemCount =11;
function addMoreItems(){
	for(let i=0;i<2;i++) {
		const listItem = document.createElement('li');
		listItem.textContent= `Item ${itemCount++}`;
		list.appendChild(listItem);
	}
}

window.onscroll= function(){
	if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		addMoreItems();
	}
};
