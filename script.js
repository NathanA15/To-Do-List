document.getElementById('new-task-form').addEventListener('submit', function(event) {
	event.preventDefault();
	createNewTask();
	document.getElementById('new-task').value = '';

});

function createNewTask() {
	var task = document.getElementById('new-task').value;
	if (task.length == 0){
		alert('No task inserted!!!');
		return false;
	};
	console.log(task);
	addTask(task);
};

function addTask(task) {
	var parent = document.getElementById('all-tasks');
	var li = document.createElement('li');


	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	li.appendChild(checkbox);

	checkbox.addEventListener('click', function(){
		if ( li.classList.contains('selected') ) {
			li.classList.remove("selected");
			li.classList.add('not-selected');
		} else {
			li.classList.remove('not-selected');
			li.classList.add('selected');
		};
	});

	li.className = 'task not-selected';
	var typeTask = document.getElementById('select').value;
	li.className += ' ' + typeTask;

	li.appendChild(document.createTextNode(task));

	var button = document.createElement('button');
	button.className = 'delete-button';
	button.innerHTML = 'Delete';
	li.appendChild(button);

	parent.appendChild(li);

	button.addEventListener('click', function(){
		parent.removeChild(li);
	});

};


document.getElementById('delete-all').addEventListener('click', function(event){
	event.preventDefault();
	deleteAll();
});

function deleteAll(){
	var parent = document.getElementById('all-tasks');
	parent.innerHTML = '';
};


document.getElementById('delete-select').addEventListener('click', function(event){
	event.preventDefault();
	var myLis = document.getElementById('all-tasks');
	var childClass = myLis.getElementsByClassName('selected');
	for (var i = childClass.length - 1; i >= 0; i--) {
		childClass[i].remove();
	};
});

var newTypeButton = document.getElementById('create-new-type');

newTypeButton.addEventListener('click', function(e){
	e.preventDefault();
	createType();
	document.getElementById('new-type').value = '';
});


function createType(){
	var newType = document.getElementById('new-type').value;
	var option = document.querySelector('#select');
	var newColor = document.getElementById('new-type-color').value;
	if (newType.length != 0) {

		if (newColor.length == 0) {
			alert('You did not typed in a color for this type so\n it was not added');
			return false
		};
		var typeHTML = `<option value="`+ newType +`" class="selector" id="selection-` + newType + `">` + newType + `</option>`;


		var style = document.createElement('style');
		
		style.type = 'text/css';
		style.innerHTML = '.' + newType + ' { background-color: '+ newColor +'; }';
		document.getElementsByTagName('head')[0].appendChild(style);

		// document.getElementById('someElementId').className = 'cssClass';

		option.innerHTML += typeHTML;
		alert('The type: ' + newType + 'has been added to all the types.\n Thanks you');
	} else {
		alert("Sorry you have not written anything");
	}
}








// document.getElementById('order-alpha').addEventListener('click', function(event){
// 	event.preventDefault();
// 	orderAlpha();
// });

// function orderAlpha(){
// 	var ul = document.getElementById('all-tasks');
// 	var ulChildsSelected = ul.getElementsByClassName('selected');
// 	var ulChildsNotSelected = ul.getElementsByClassName('not-selected');
// };

// function sortList(listTags){
// 	var list = listTags;
// 	var i, switching, shouldSwitch;
// 	switching = true;

// 	while (switching){
// 		switching = false;
// 		for (i = 0; i < (list.length - 1); i++){
// 			shouldSwitch = false;
			
// 		};
// 	};
// }




