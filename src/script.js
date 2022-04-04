const mainBox = document.querySelector(".mainBox"),
    btn = document.getElementsByClassName("btn")[0];



let boxArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
    emptyBox;



function drowBox() {
    boxArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < boxArray.length; i++) {
        mainBox.innerHTML += `<button class="box">${boxArray[i]}</button>`
    }

    const boxes = document.querySelectorAll(".box");

    boxes[0].style.left = "0%"
    boxes[0].style.top = "0%"

    for (let j = 0; j < boxArray.length - 1; j++) {
        if (boxes[j].style.left == "100%") {
            boxes[j].style.left = "0%"
            boxes[j].style.top = parseInt(boxes[j].style.top) + 25 + "%"
        }
        if (boxArray[j] == 0) {
            boxes[j].classList.add("hide")
            emptyBox = boxes[j]

        }
        if (boxArray[j + 1] == 0) {
            boxes[j + 1].classList.add("hide")
            emptyBox = boxes[j + 1]
        }

        boxes[j + 1].style.left = parseInt(boxes[j].style.left) + 25 + "%"
        boxes[j + 1].style.top = boxes[j].style.top
    }

}

//IN Progress
function check(boxes) {
    let winArr = []
    for (let z = 0; z < boxes.length; z++) {
        winArr.push(parseInt(boxes[z].innerHTML))
    }
    console.log(winArr)

    if (winArr == initArray) {
        console.log("winn")

    }
}


function move() {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(rect => {
        rect.addEventListener("click", function(event) {
            let targetbox = event.target,
                targetLeft = targetbox.style.left,
                targetTop = targetbox.style.top

            rect.transition = "all 2s";


            if (((parseInt(targetbox.style.left) - 25) == parseInt(emptyBox.style.left) &&
                    (parseInt(targetbox.style.top)) == parseInt(emptyBox.style.top)) ||
                ((parseInt(targetbox.style.left) + 25) == parseInt(emptyBox.style.left) &&
                    (parseInt(targetbox.style.top)) == parseInt(emptyBox.style.top)) ||
                ((parseInt(targetbox.style.top) - 25) == parseInt(emptyBox.style.top) &&
                    (parseInt(targetbox.style.left)) == parseInt(emptyBox.style.left)) ||
                ((parseInt(targetbox.style.top) + 25) == parseInt(emptyBox.style.top) &&
                    (parseInt(targetbox.style.left)) == parseInt(emptyBox.style.left))) {



                targetbox.style.left = parseInt(emptyBox.style.left) + "%"
                targetbox.style.top = parseInt(emptyBox.style.top) + "%"
                emptyBox.style.left = parseInt(targetLeft) + "%"
                emptyBox.style.top = parseInt(targetTop) + "%"


            } else if ((parseInt(targetbox.style.top) + 25) == parseInt(emptyBox.style.top) && (parseInt(targetbox.style.left)) == parseInt(emptyBox.style.left)) {

                targetbox.style.left = parseInt(emptyBox.style.left) + "%"
                targetbox.style.top = parseInt(emptyBox.style.top) + "%"
                emptyBox.style.left = parseInt(targetLeft) + "%"
                emptyBox.style.top = parseInt(targetTop) + "%"

            }
            check(boxes)
        })


    });

    boxes = document.querySelectorAll(".box");





}


drowBox()
move()

btn.addEventListener("click", function() {
    for (let i = 15; i >= 0; i--) {
        let boxes = document.querySelectorAll(".box");
        boxes[i].remove()

    }
    drowBox()
    move()

})