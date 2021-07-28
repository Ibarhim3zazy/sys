function funn(){
  if (document.getElementById("menu").style.display == "none") {
    document.getElementById("menu").style.display = "block";
  }
  else {
    document.getElementById("menu").style.display = "none";
  }
}
function add(id){
  name = document.getElementById('name'+id).innerHTML;
  price = document.getElementById('price'+id).innerHTML;
  amount = prompt("enter the number of pieces", "0");
  total = price*amount;
  names.push(name);
  prices.push(price);
  amounts.push(amount);

  sidetotalprice += parseFloat(total);
  sidetotalpieces += parseInt(amount);
  sidetotalamount +=1;

  document.getElementById('product').innerHTML = sidetotalamount;
  document.getElementById('pieces').innerHTML = sidetotalpieces;
  document.getElementById('price').innerHTML = sidetotalprice;
  // alert("product name: "+name+"\n"+"total price: "+ total+"$");
}
