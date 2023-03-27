let etchaSketch = {
    size : 16,
    canvasArr: [],
    
} 

function initialize_grid() {

    for(let i = 0; i < etchaSketch.size; i++){
        const tileRow = document.createElement('div');
        tileRow.classList.add('sketchTileRow');
        tileRow.setAttribute('id','tileRow'+i);
        document.getElementById("sketchContainer").appendChild(tileRow);
        for(let j = 0;j < etchaSketch.size;j++){
            const template = document.createElement('div');
            template.classList.add('sketchTile');
            template.classList.add('whiteTile');
			template.addEventListener('mouseover', ()=> {
				change_color(template);
			});
            //template.innerHTML = etchaSketch.canvasArr[i];
            document.getElementById('tileRow'+i).appendChild(template);
            
        }
    }
}

function change_color(element){
	
	if(element.classList.contains('whiteTile')){
		element.classList.remove('whiteTile');
		element.classList.add('blackTile');
	}
	else if (element.classList.contains('blackTile')){
		element.classList.remove('blackTile');
		element.classList.add('whiteTile');
	}
	
}


document.addEventListener("DOMContentLoaded", function() {
	//this function runs when document has loaded
	const btn = document.querySelector('#btn');
	btn.addEventListener('click', () => {
	  alert("Hello World");
	});
		
	initialize_grid();
});

