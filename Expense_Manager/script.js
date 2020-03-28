var details = { date: '', spent: '', amount: '', category: '' }
var expenseArray =[]
var totalEarning = 0
var totalExpense = 0
var balance = 0
var flag = false

function add() {
    var date = document.getElementById("date").value
    var spent = document.getElementById("spentOn").value
    var amount = Number(document.getElementById("amount").value)
    var category = document.getElementById("select").value

    if ((date == "" || spent == "" || amount == "" || category == "") || (date == "&nbsp;" || spent == "&nbsp;" || amount == "&nbsp;" || category == "&nbsp;") || (date == undefined || spent == undefined || amount == undefined || category == undefined) || (category == "Category")) {
        alert("Please Fill All The Fields")
        updateInput()
    }
    else {
        details.date = date
        details.spent = spent
        details.amount = amount
        details.category = category
        expenseArray.push(details)
        console.log(expenseArray)
        //Function call to update table
        updateTable(details, expenseArray)
        
        //Function call to update Total Earnings
        updateTotal(details)

        // //Function call to clear input fields
        updateInput()
    }
}


//Function to upadte table
function updateTable(details,expenseArray) {
    var tbody = document.getElementById("tableBody")
    
    var row = document.createElement("tr")
    // var count = 0
    // //Function to Add Delete button to particular row
    // row.addEventListener('click', function () {
    //     var del = document.createElement('button')
    //     del.textContent = "Delete"
    //     del.style.marginLeft = "15px"
    //     if(count < 1){
    //     col_4.appendChild(del)
    //     //Function to Delete a particular row
    //     del.addEventListener('click', function () {
    //         event.target.parentNode.parentNode.remove()
    //         updateDelete(expenseArray)
    //     })
        
    //     count ++
    // }
    
    
        
    // })
    
    var col_1 = document.createElement("td")
    col_1.innerText = details.date

    var col_2 = document.createElement("td")
    col_2.innerText = details.spent

    var col_3 = document.createElement("td")
    
    var col_4 = document.createElement("td")
    col_4.innerText =details.category
    
    if (details.category == "credit"){
        row.style.color = "green"
        col_3.innerText ="+ " +details.amount
}
    if (details.category == "debit"){
        row.style.color = "red"
        col_3.innerText ="- "+details.amount
    }

    row.appendChild(col_1)
    row.appendChild(col_2)
    row.appendChild(col_3)
    row.appendChild(col_4)

    tbody.appendChild(row)
}

//Function to upadte Input boxes
function updateInput() {
    document.getElementById('date').value = ""

    document.getElementById("spentOn").value = ""
    document.getElementById("amount").value = ""
    var cat = document.getElementById("cat").value
    document.getElementById("select").value = cat
}

//Function to update Earnings
function updateTotal(details) {
    if (details.category == "credit") {
        totalEarning += details.amount
        document.getElementById("earned").innerHTML = "Total Earnings : " + totalEarning
    }
    else if (details.category == "debit") {
        totalExpense += details.amount
        document.getElementById("expense").innerHTML = "Total Expense : " + totalExpense
    }

    balance = (totalEarning - totalExpense)
    var update = document.getElementById("balance")
    update.innerHTML = "Balance Amount : " + balance
    if (balance < 2000) {
        update.style.color = "red"
    }
    else
        update.style.color = "green"

}

//Function to update Totals on deletion of row
// function updateDelete() {



    
//     // if (details.category == "credit") {
//     //     totalEarning -= details.amount
//     //     document.getElementById("earned").innerHTML = "Total Earnings : " + totalEarning
//     // }
//     // else if (details.category == "debit") {
//     //     totalExpense -= details.amount
//     //     document.getElementById("expense").innerHTML = "Total Expense : " + totalExpense
//     // }

//     // balance = (totalEarning - totalExpense)
//     // var update = document.getElementById("balance")
//     // update.innerHTML = "Balance Amount : " + balance
//     // if (balance < 2000) {
//     //     update.style.color = "red"
//     // }
//     // else
//     //     update.style.color = "green"
// }