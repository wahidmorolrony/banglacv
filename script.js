function submitData(){

    /* ====== সাধারণ ফিল্ড ====== */
    p_name.innerText = morol.value;
    p_father.innerText = father.value;
    p_mother.innerText = mother.value;

    p_dob.innerText = dob.value;
    p_relision.innerText = relision.value;
    p_marage.innerText = marage.value;
    p_hight.innerText = hight.value;
    p_ojon.innerText = ojon.value;
    p_paddress.innerText = paddress.value;
    p_peraddress.innerText = peraddress.value;
    p_mobile.innerText = mobile.value;
    p_nid.innerText = nid.value;
    p_bdris.innerText = bdris.value;
    p_email.innerText = email.value;

    p_skill.innerText = skill.value;
    p_oviggota.innerText = oviggota.value;
    p_lagskill.innerText = lagskill.value;
    
    p_na.innerText = morol.value;
   


    /* ====== Dynamic Table Data ====== */
    const inputTable = document
        .getElementById("dynamicTable")
        .querySelector("tbody");

    const previewTable = document
        .getElementById("previewTable")
        .querySelector("tbody");

    previewTable.innerHTML = ""; // আগের ডাটা ক্লিয়ার

    for(let i = 0; i < inputTable.rows.length; i++){

        let row = inputTable.rows[i];
        let name = row.cells[1].querySelector("input").value;
        let relation = row.cells[2].querySelector("input").value;
        let age = row.cells[3].querySelector("input").value;
        let job = row.cells[4].querySelector("input").value;
        let rony = row.cells[5].querySelector("input").value;
        let abdullah = row.cells[6].querySelector("input").value;
       

        let newRow = previewTable.insertRow();

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${relation}</td>
            <td>${age}</td>
            <td>${job}</td>
            <td>${rony}</td>
            <td>${abdullah}</td>
            
        `;
    }

    /* ====== Preview দেখানো ====== */
    document.getElementById("preview").style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
}



function addRow(){
    const table = document.getElementById("dynamicTable").querySelector("tbody");
    const rowCount = table.rows.length + 1;
    const row = table.insertRow();

    row.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        
    `;
}

function removeRow(){
    const table = document.getElementById("dynamicTable").querySelector("tbody");
    if(table.rows.length > 1){
        table.deleteRow(table.rows.length - 1);
    }else{
        alert("কমপক্ষে ১টি Row থাকতে হবে");
    }
}



