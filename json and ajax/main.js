let tb = document.querySelector(".tb")
let search = document.querySelector(".search")
let ins = document.querySelector("#myInput")
search.onclick=function () {
    search.style.display="none"
    ins.style.display="inline";
    ins.focus()
}
ins.onblur=function () {
    search.style.display="inline"
    ins.style.display="none";
}

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }



let req = new XMLHttpRequest()
req.open("GET","main.json")
window.onload= function(){
    let kk = JSON.parse(req.responseText)
for (let i = 0; i < kk.length; i++) {
         var tr = document.createElement("tr")
    tr.className="r"
    var th = document.createElement("td")
    th.className="t"
    var td = document.createElement("td")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
/////////////////////////////////////////
tb.appendChild(tr)
    tr.appendChild(th)
    tr.appendChild(td)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
/////////////////////////////////////////
    
th.textContent+=kk[i].Film
td.textContent+=kk[i].Director
td1.textContent+=kk[i].Runtime
td2.textContent+=kk[i].Year
td3.innerHTML+=`<img src="${kk[i].Poster}">`
td4.textContent+=kk[i].Actors
}
}

    req.send()