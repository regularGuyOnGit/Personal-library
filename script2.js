const libraryStore = []

const content = document.querySelector(".content")
const sumbit = document.querySelector('#sumbitBtn')
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const fontIcon = Array.from(document.querySelectorAll('i'));
// console.log(fontIcon);


let filteredLibrary = [];


function addBook() {
    let requiredDiv = [];
    for (let i = libraryStore.length; i < libraryStore.length +1 ; i++)
     {
        requiredDiv.push(document.createElement('div'))
        requiredDiv[0].classList.add("contentCards")

        let spanTag1 = document.createElement("span");
        spanTag1.textContent = "Title";
        let pTag1 = document.createElement('p');
        pTag1.textContent = libraryStore[i-1].title

        let spanTag2 = document.createElement("span");
        spanTag2.textContent = "Pages";
        let pTag2 = document.createElement('p');
        pTag2.textContent = libraryStore[i-1].pages

        let spanTag3 = document.createElement("span");
        spanTag3.textContent = "Author";
        let pTag3 = document.createElement('p');
        pTag3.textContent = libraryStore[i-1].author


        let spanTag4 = document.createElement("span");
        spanTag4.textContent = "Read";

        const checkbox = document.createElement('input'); 
       checkbox.setAttribute('type','checkbox')
       
       const btnDelete = document.createElement('button');
       btnDelete.classList.add("cardDelete")
       btnDelete.innerText = "Delete Card"

        
        requiredDiv[0].appendChild(spanTag1)
        requiredDiv[0].appendChild(pTag1)
        requiredDiv[0].appendChild(spanTag2)
        requiredDiv[0].appendChild(pTag2)
        requiredDiv[0].appendChild(spanTag3)
        requiredDiv[0].appendChild(pTag3)
        requiredDiv[0].appendChild(spanTag4)
        requiredDiv[0].appendChild( checkbox)
        requiredDiv[0].appendChild(btnDelete)
        requiredDiv[0].accessKey = libraryStore.length-1

        content.appendChild(requiredDiv[0])
// console.log(requiredDiv);

btnDelete.addEventListener('click',(e)=>{
   libraryStore.map((item,index)=>{
       if( index != requiredDiv[0].accessKey){
        filteredLibrary.push(item); }
        console.log(index);
        console.log(requiredDiv[0].accessKey);
    })
    
    console.log(filteredLibrary);

 cardsAfterDeleted()
})
    }

}

fontIcon.map((iTag,index) => iTag.addEventListener("click",(e)=>{
    if(index ==0){
        title.value = "";
        titleInput = "";
    }
    else if ( index == 1){
        author.value = "";
         authorInput =""
    }
    else if(index == 2){
        pages.value = ""  
         pagesInput = ""
    }

}))



let titleInput = ""
let authorInput =""
let pagesInput = ""



title.addEventListener('change',(e)=>{
    titleInput += e.target.value
    // console.log(titleInput);
//    e.target.value = ""
//    console.log(e);
})
author.addEventListener('change',(e)=>{
    authorInput += e.target.value
    // console.log(authorInput);
})

pages.addEventListener('change',(e)=>{
    if(pages.value>5000){
       return pagesInput = "Greater than 5000.."
    }
    pagesInput += e.target.value;
    // console.log(pagesInput);
})

function addToLibraryRecords(titleA,pagesA,authorA){

 libraryStore.push({
title  : titleA,
pages : pagesA,
author : authorA,})
// console.log(libraryStore);
}

sumbit.addEventListener('click',(e)=>{
    e.preventDefault();
    addToLibraryRecords(titleInput,pagesInput,authorInput)
   

    if(  titleInput =="" || authorInput == ""  ){
        return;
    }
    // console.log("click listner worked!");
    addBook()
    cleaningOfTempString()
    console.log(libraryStore);

  
})


const cleaningOfTempString = ()=>{
  titleInput = ""
authorInput =""
pagesInput = ""
return
}

const cardsAfterDeleted = ()=>{
    let requiredDiv = [];
    for (let i = 0; i < filteredLibrary.length ; i++)
     {
        requiredDiv.push(document.createElement('div'))
        requiredDiv[i].classList.add("contentCardsFiltered")

        let spanTag1 = document.createElement("span");
        spanTag1.textContent = "Title";
        let pTag1 = document.createElement('p');
        pTag1.textContent = filteredLibrary[i].title

        let spanTag2 = document.createElement("span");
        spanTag2.textContent = "Pages";
        let pTag2 = document.createElement('p');
        pTag2.textContent = filteredLibrary[i].pages

        let spanTag3 = document.createElement("span");
        spanTag3.textContent = "Author";
        let pTag3 = document.createElement('p');
        pTag3.textContent = filteredLibrary[i].author


        let spanTag4 = document.createElement("span");
        spanTag4.textContent = "Read";

        const checkbox = document.createElement('input'); 
       checkbox.setAttribute('type','checkbox');
       const btnDelete = document.createElement('button');
       btnDelete.classList.add("cardDelete")
       btnDelete.innerText = "Delete Card"

       

        
        requiredDiv[i].appendChild(spanTag1)
        requiredDiv[i].appendChild(pTag1)
        requiredDiv[i].appendChild(spanTag2)
        requiredDiv[i].appendChild(pTag2)
        requiredDiv[i].appendChild(spanTag3)
        requiredDiv[i].appendChild(pTag3)
        requiredDiv[i].appendChild(spanTag4)
        requiredDiv[i].appendChild( checkbox)
        requiredDiv[i].appendChild(btnDelete)
        requiredDiv[i].accessKey = i

        content.appendChild(requiredDiv[i])
        
btnDelete.addEventListener('click',(e)=>{
    // filteredLibrary.map((item,index)=>{
    //     if( index != requiredDiv[i].accessKey){
    //      filteredLibrary.push(item); }
    //      console.log(index);
    //      console.log(requiredDiv[0].accessKey);
    //  })
    
     
     console.log(filteredLibrary);
 
  cardsAfterDeleted()
 })


}}
