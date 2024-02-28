`use strict`
function AddRow() {

    let newname = document.getElementById('fname').value;
    let newUsername = document.getElementById('uname').value;
    let newmobileNumber = document.getElementById('Phn').value;
    let newDOB = document.getElementById('DOB').value;


    const details = {
        fname: newname,
        uname: newUsername,
        Phn: newmobileNumber,
        DOB: newDOB
    }
    const profileArray = JSON.parse(localStorage.getItem("infoArray"));
    if (!profileArray) {
        const new_pro_array = [];
        new_pro_array.push(details)
        localStorage.setItem("infoArray", JSON.stringify(new_pro_array));

    }
    else {
        const new_pro_array = [...profileArray];
        new_pro_array.push(details);
        localStorage.setItem("infoArray", JSON.stringify(new_pro_array));
    }


}


const locallyStoredArray = JSON.parse(localStorage.getItem("infoArray"));
for (let i = 0; i < locallyStoredArray.length; i++) {
    let table = document.getElementById('show');
    let newRow = table.insertRow();

    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    // cel1.classList.add("");
    // cel2.classList.add("'")
    // console.log(localStorage.getItem(locallyStoredArray[i].name))
    cel1.innerHTML = locallyStoredArray[i].fname;
    cel2.innerHTML = locallyStoredArray[i].uname;
    cel3.innerHTML = locallyStoredArray[i].Phn;
    cel4.innerHTML = locallyStoredArray[i].DOB;
}
