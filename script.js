let etchaSketch = {
    size : 16,
    canvasArr: [],
    
} 

function add_element() {

    for(let i = 0; i < etchaSketch.size; i++){
        const tileRow = document.createElement('div');
        tileRow.classList.add('sketchTileRow');
        tileRow.setAttribute('id','tileRow'+i);
        document.getElementById("sketchContainer").appendChild(tileRow);
        for(let j = 0;j < etchaSketch.size;j++){
            const template = document.createElement('div');
            template.classList.add('sketchTile');
            //template.innerHTML = etchaSketch.canvasArr[i];
            document.getElementById('tileRow'+i).appendChild(template);
            
        }
    }

}


