const libraryStore = []

const content = document.querySelector(".content")
const sumbit = document.querySelector('#sumbitBtn')
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const fontIcon = Array.from(document.querySelectorAll('i'));
// console.log(fontIcon);
const checkbox = document.querySelector("#formCheck")


let titleInput = ""
let authorInput =""
let pagesInput = ""
let formCheckedTrue = false;


const addBook = ()=>{
    removeAllChildNodes(content);

for( let i = 0 ; i<libraryStore.length;i++){
const childDiv = document.createElement("div")
const span1 = document.createElement('span')
const span2 = document.createElement('span')
const span3 = document.createElement('span')
const span4 = document.createElement('span')


const para1 = document.createElement("p")
const para2 = document.createElement("p")
const para3 = document.createElement("p")
const checkbox = document.createElement('input'); 
checkbox.setAttribute('type','checkbox');



const DeleteBtn = document.createElement("button");

span1.innerText = "Title"
span2.innerText = "Author"
span3.innerText = "Pages"
span4.innerText = "Read"


para1.innerText = libraryStore[i].title
para2.innerText = libraryStore[i].author
para3.innerText = libraryStore[i].pages
checkbox.checked = libraryStore[i].read
DeleteBtn.classList.add("cardDelete")
DeleteBtn.innerText = "Delete Card"


childDiv.appendChild(span1)
childDiv.appendChild(para1)
childDiv.appendChild(span2)
childDiv.appendChild(para2)
childDiv.appendChild(span3)
childDiv.appendChild(para3)
childDiv.appendChild(span4)
childDiv.appendChild(checkbox)


// if(formCheckedTrue =='true'){
//     const span4 = document.createElement('span')
//     const checkbox = document.createElement('input'); 
// checkbox.setAttribute('type','checkbox')
// span4.innerText = "Read"
// checkbox.setAttribute('checked',true)
// childDiv.appendChild(span4)
// childDiv.appendChild(checkbox)
// }

childDiv.appendChild(DeleteBtn)
childDiv.accessKey = i
content.appendChild(childDiv)

console.log(childDiv.accessKey);


DeleteBtn.addEventListener("click",(e)=>{
    DeleteLibraryBook(childDiv.accessKey)
})
}
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const DeleteLibraryBook = (accessKey)=>{
    libraryStore.splice(accessKey,1);
    removeAllChildNodes(content);
    addBook();
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
});

checkbox.addEventListener('click',(e)=>{
    if(formCheckedTrue == false){
        formCheckedTrue = true;
    }
    else{
        formCheckedTrue = false;
    }
    console.log(formCheckedTrue);
})




function addToLibraryRecords(titleA,pagesA,authorA,formCheckedTrueA){

 libraryStore.push({
title  : titleA,
pages : pagesA,
author : authorA,
read : formCheckedTrueA})
// console.log(libraryStore);
}

sumbit.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(  titleInput =="" && authorInput == ""  ){
        title.value = "Required *"
        title.style.color = "whitesmoke"
        author.value = "Required *"
        author.style.color = "whitesmoke"
        setTimeout(()=>{
            title.value = ""
            author.value = ""
        },2000)
 return
    }

    else if(titleInput ==""){
        title.value = "Required *"
        title.style.color = "whitesmoke"
        setTimeout(()=>{
            title.value = ""
        },2000)
 return
    }
    else if( authorInput == ""){
        author.value = "Required *"
        author.style.color = "whitesmoke"
        setTimeout(()=>{
            author.value = ""
        },2000)
 return
    }
    addToLibraryRecords(titleInput,pagesInput,authorInput,formCheckedTrue)
   

   
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