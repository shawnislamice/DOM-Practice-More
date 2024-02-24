//Access all buttons
const buttons = document.getElementsByClassName("add-btn");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;
    console.log(name, price, category);
    const selectedContainer = document.getElementById(
      "selected-players-container"
    );
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);
    div.classList.add("selected-players");
    // console.log(getConvertedValue('cart'))
    event.target.setAttribute('disabled',false)
    if(getConvertedValue('cart')+1>6 || getConvertedValue('left')-1<0){
        alert("Limit exceed")
        return
    }     
    event.target.style.backgroundColor="gray"


    // Update Budget
    const budget = getConvertedValue("budget");
    document.getElementById("budget").innerText = budget - parseInt(price); 

    const cartCount=getConvertedValue('cart')
    document.getElementById('cart').innerText=cartCount+1
    const leftCount=getConvertedValue('left')
    document.getElementById('left').innerText=leftCount-1
    // Update Budget
    update_total_cost(price);
    update_grand_total();
  });
}

// Utility function

function update_total_cost(value) {
  const totalCost = getConvertedValue("total-cost");
  const sum = totalCost + parseInt(value);
  document.getElementById("total-cost").innerText = sum;
}

function update_grand_total(status) {
  const totalCost = getConvertedValue("total-cost");
  if (status) {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "love420") {
      const discountPrice = totalCost * 0.2;
      document.getElementById("grand-total").innerText =
        totalCost - discountPrice;
    } else {
      alert("Enter a valid coupon");
    }
  } else {
    document.getElementById("grand-total").innerText = totalCost;
  }
}

function getConvertedValue(id) {
  const price = parseInt(document.getElementById(id).innerText);
  return price;
}
