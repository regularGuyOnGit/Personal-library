// ! first Instance.
// const mainContent = document.querySelector(".content");
// let divArray =[]

// for(let i = 0; i<libraryStore.length;i++){
//  divArray.push(document.createElement('div'))
// let temp =  document.createElement("p");
// let temp1 =  document.createElement("p");
// let temp2 =  document.createElement("p");
// temp.textContent =  libraryStore[i].title
// temp1.textContent = libraryStore[i].pages
// temp2.textContent = libraryStore[i].author
// divArray[i].append(temp)
// divArray[i].append(temp1)
// divArray[i].append(temp2)
// }

// console.log(divArray);

// for(let k = 0 ;k<divArray.length;k++){

//     mainContent.append(divArray[k])
// }


let temp1 = [2,3,4,5,6,8,9]

console.log(
    temp1.filter((item,index)=>{
        return (item%2===0)
    }));
temp1