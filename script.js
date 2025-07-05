let shape = document.querySelectorAll(".shape");
let sh1 = document.querySelector("#sh1");
let sh2 = document.querySelector("#sh2");
let sh3 = document.querySelector("#sh3");

shape.forEach((shapes)=>{
    shapes.addEventListener("mouseenter",()=>{
        //Random Numbers For Shape 1
        let randNum = Math.floor(Math.random()*101);
        //Random Numbers For Shape 3
        let r1 = Math.floor(Math.random()*256);
        let r2 = Math.floor(Math.random()*256);
        let r3 = Math.floor(Math.random()*256);
        //Shape 1
        if(shapes.id == "sh1") {
            shapes.textContent = randNum;
        }
        //Shape 2
        else if (shapes.id == "sh2") {
            let count = parseInt(shapes.dataset.count) || 0;
            shapes.dataset.count = count + 1;
            if(count%2==0) {
                shapes.style.backgroundColor = "purple"
            } else {
                shapes.style.backgroundColor = "crimson"
            }
        } 
        //Shape 3
        else if (shapes.id == "sh3") {
            shapes.style.backgroundColor = `rgb(${r1},${r2},${r3})`
        }
    });
    //Shape 4
    if(shapes.id == "sh4") {
        shapes.addEventListener("click",()=>{
        let r11 = Math.floor(Math.random()*256);
        let r22 = Math.floor(Math.random()*256);
        let r33 = Math.floor(Math.random()*256);
        sh1.style.backgroundColor = `rgb(${r11},255,255)`;
        sh2.style.backgroundColor = `rgb(255,${r22},255)`;
        sh3.style.backgroundColor = `rgb(255,255,${r33})`;
    });
    }

    shapes.addEventListener("mouseleave",()=>{
        //Shape 1
        if(shapes.id == "sh1") {
            shapes.textContent = "1"
        } 
        //Shape 2
        else if (shapes.id == "sh2") {
            shapes.style.backgroundColor = "white"
        } 
        //Shape 3
        else if (shapes.id == "sh3") {
            shapes.style.backgroundColor = "white"
        } else if (shapes.id == "sh4") {
        sh1.style.backgroundColor = "white";
        sh2.style.backgroundColor = "white";
        sh3.style.backgroundColor = "white";
        }
    })
})

let container = document.querySelector(".container");
let mouse = document.querySelector(".mouse");

container.addEventListener("mousemove",(details)=>{
    mouse.style.display = "flex"
    mouse.style.top = details.y + "px";
    mouse.style.left = details.x + "px";
    console.log(details);
})
container.addEventListener("mouseleave",()=>{
    mouse.style.display = 'none'
})