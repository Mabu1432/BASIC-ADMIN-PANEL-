var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
(data)=> {

    console.log(data)
    renderTableData(data)
    var data = data;

});

function renderTableData(data) {
    data.map(function(currentValue) {
$('tbody').append(`
        <tr class="table-row " id="${currentValue.id}">
        <td class="column1">${currentValue.id}</td>
        <td class="column2">${currentValue.firstName}</td>
        <td class="column3">${currentValue.lastName}</td>
        
      <td class="column4">${currentValue.email}</td>
        <td class="column5">${currentValue.phone}</td>
        </tr>`)
    });
  $(".table-row").click(function(e){
    // alert(this.id);
    let id = parseInt(this.id);
    let userDetails="";
    // alert(this.id);
    data.map(function(currentValue) {
      console.log(currentValue);
      if(currentValue.id===id){
        userDetails +='<div><b>User selected:</b>'+currentValue.firstName+currentValue.lastName+'</div><div><b>Description: </b><textarea cols="50" rows="5" readonly>'+currentValue.description+'</textarea></div><div><b>Address:</b>'+currentValue.address.streetAddress+'</div><div><b>City:</b>'+currentValue.address.city+'</div><div><b>State:</b>'+currentValue.address.state+'</div><div><b>Zip:</b>'+currentValue.address.zip+'</div>';
      }
    })
    console.log(userDetails);
    // document.getElementById("info-content").innerHTML=userDetails;
    $("#info-content").css("display", "block");
    // $("#info-content").html(userDetails);
    $("#info-content").html(userDetails);
  });
}

const searchFun =() =>{
  let filter=document.getElementById("search-box").value.toUpperCase() ;
  let myTable = document.getElementById("myTable")
  let tr = myTable.getElementsByTagName("tr")
  for(let i=0;tr.length;i++)
  {
    let td=tr[i].getElementsByTagName("td")[1]; 
   
  if(td){
    let text = td.textContent || td.innerHTML;
    
    if(text.toUpperCase().indexOf(filter)>-1){
      tr[i].style.display = "";
     
    }else{
     tr[i].style.display = "none";
    }
   }
  }
}
let tr = document.getElementsByClassName("table-row")


$(document).ready(function(){

 });
