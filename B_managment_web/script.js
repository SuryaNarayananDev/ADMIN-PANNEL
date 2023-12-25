function add()
{
  var inputname = document.getElementById("pname")
  var inputquantity = document.getElementById("qty")
  var inputprice = document.getElementById("price")
  var table =document.getElementById("pro-table")
  var count=4
  if(count<12)
  {
        var row = table.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = "<td>"+inputname.value+"</td>";
        cell2.innerHTML = "<td>"+inputquantity.value+"</td>";
        cell3.innerHTML = "<td>"+inputprice.value+"</td>";
        cell4.innerHTML = "<td><button class='btn btn-success btn-xs'><i class='fa fa-edit'></i></button></td>";
        cell5.innerHTML = "<td><button onclick='removeitem()' class='btn btn-danger btn-xs'><i class='fa fa-trash'></i></button></td>";
    count++

  }
}
function removeitem(event)
{
    console.log(event)
    document.getElementById("pro-table").deleteRow(event);
  count--
}