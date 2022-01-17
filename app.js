showNotes();
// add notes
let addBtn =document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){

    let addText=document.getElementById('addText');
    let notes=localStorage.getItem("notes");
        if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);

    showNotes();
})

// show element from localstorage
function showNotes(){
    let notes=localStorage.getItem("notes");
        if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="card notecard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index+1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onClick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
              </div>
               `;
        
    });
    let notesElm=document.getElementById('notes');
    if (notesObj.length!=0 ){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML="nothing to show add notes "
    }
}

// delete notes

function deleteNotes(index){
    let notes=localStorage.getItem("notes");
        if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}


// search text


let search=document.getElementById('searchText');
search.addEventListener('input',function(){
    
    let inputVal=search.value
    let notecard=document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardtext=element.getElementsByTagName("p")[0].innerText;        
        if(cardtext.includes(inputVal)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })
})