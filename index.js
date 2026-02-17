let entries = [];

let addBtn = document.getElementById("addBtn");
let calculateBtn = document.getElementById("calculateBtn");
let entryList = document.getElementById("entryList");
let result = document.getElementById("result");

addBtn.addEventListener("click", function() {

    let name = document.getElementById("nameInput").value;
    let amount = Number(document.getElementById("amountInput").value);

    if (name === "" || amount <= 0) {
        alert("Enter valid data");
        return;
    }

    entries.push({ name, amount });

    let li = document.createElement("li");
    li.innerText = `${name} paid ₹${amount}`;
    entryList.appendChild(li);

    document.getElementById("nameInput").value = "";
    document.getElementById("amountInput").value = "";
});

calculateBtn.addEventListener("click", function() {

    let total = entries.reduce((sum, entry) => sum + entry.amount, 0);

    let average = total / entries.length;

    let output = "";

    entries.forEach(entry => {
        let difference = entry.amount - average;

        if (difference > 0) {
            output += `${entry.name} should receive ₹${difference.toFixed(2)}<br>`;
        } else {
            output += `${entry.name} should pay ₹${Math.abs(difference).toFixed(2)}<br>`;
        }
    });

    result.innerHTML = output;
});
