`use strict`
let donate = true
function receive() {
    document.getElementById('received').innerHTML = 'Blood Receive Form';
    donate = false
}
function Donate() {
    document.getElementById('received').innerHTML = 'Blood Donor Form';
    donate = true;
}
let n = 1;

function AddRow() {

    let newname = document.getElementById('name').value;
    let newbg = document.getElementById('bg').value;
    let newlocation = document.getElementById('location').value;
    let newage = document.getElementById('age').value;


    const details = {
        name: newname,
        bg: newbg,
        location: newlocation,
        age: newage
    }
    const localArray = JSON.parse(localStorage.getItem("dataArray"));
    if (!localArray) {
        const new_arr = [];
        new_arr.push(details)
        localStorage.setItem("dataArray", JSON.stringify(new_arr));

    }
    else {
        const new_arr = [...localArray];
        new_arr.push(details);
        localStorage.setItem("dataArray", JSON.stringify(new_arr));
    }


}


const locallyStoredArray = JSON.parse(localStorage.getItem("dataArray"));
for (let i = 0; i < locallyStoredArray.length; i++) {
    let table = document.getElementById('show');
    let newRow = table.insertRow();

    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    let cel5 = newRow.insertCell(4);
    cel1.classList.add("cell");
    // cel2.classList.add("'")
    // cel5.classList.add("tabularbutton")
    console.log(localStorage.getItem(locallyStoredArray[i].name))
    cel1.innerHTML = locallyStoredArray[i].name;
    cel2.innerHTML = locallyStoredArray[i].bg;
    cel3.innerHTML = locallyStoredArray[i].location;
    cel4.innerHTML = locallyStoredArray[i].age;
    // background-color: #930002;
    // color: aliceblue;

    let button = document.createElement("button");
    if (donate) {
        button.innerHTML = "Donate";
    }
    else {
        button.innerHTML = "Receive";
    }
    button.style.cssText = "font-size: 1.1rem; color: aliceblue; transition: all 0.5s;  border: none; background-color: #930002; border-radius: 1.5rem; height: 6vh;width:7vw;";

    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#790402";
        button.style.cursor = "pointer";
        button.style.color = "white";
    });

    // Remove hover styles
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#930002";
        button.style.cursor = "default";
        button.style.color = "aliceblue";
    });


    cel5.appendChild(button);

}


// button4.addEventListenerd('submit', async function (event) {
//     event.preventDefault()
//     const response = await getOpenAIResponse(input)
//     console.log(response)
// })


// [{name,bg,location,age},{},{}]

