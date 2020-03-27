var expenseArray =[]
var details ={date:'',spent:'',amount:'',category:''}

var totalEarning = 0
var totalExpense = 0
var balance = 0

function add(){
    var date = document.getElementById("date").value
    var spent = document.getElementById("spentOn").value
    var amount = Number(document.getElementById("amount").value)
    var category = document.getElementById("select").value
    
   if((date =="" || spent =="" || amount =="" || category =="") || (date =="&nbsp;" || spent =="&nbsp;" || amount =="&nbsp;" || category =="&nbsp;") || (date ==undefined || spent ==undefined || amount ==undefined || category ==undefined)) {
       alert("Please Fill All The Fields")
       updateInput()
   }
    else{
    details.date = date
    details.spent = spent
    details.amount = amount
    details.category = category

   //Function call to update table
    updateTable(details)

    //Function call to update Total Earnings
    updateTotal(details)
    
    expenseArray.push(details)
    // //Function call to clear input fields
    updateInput()
}
}


//Function to upadte table
function updateTable(details){
    var tbody = document.getElementById("tableBody")
    var row = document.createElement("tr")

    var col_1 = document.createElement("td")
    col_1.innerText = details.date

    var col_2 = document.createElement("td")
    col_2.innerText=details.spent

    var col_3 = document.createElement("td")
    col_3.innerText = details.amount

    var col_4 = document.createElement("td")
    col_4.innerText = details.category
    
    if(details.category == "credit")
        row.style.color = "green"    
    if(details.category =="debit")
        row.style.color = "red"
    

    row.appendChild(col_1)
    row.appendChild(col_2)
    row.appendChild(col_3)
    row.appendChild(col_4)
   
    tbody.appendChild(row)
}

//Function to upadte Input boxes
function updateInput(){	
    document.getElementById('date').value = ""

    document.getElementById("spentOn").value =""
    document.getElementById("amount").value =""
    var cat = document.getElementById("cat").value
    document.getElementById("select").value = cat
}

//Function to update Earnings
function updateTotal(details){
    if(details.category == "credit"){
        totalEarning += details.amount
        document.getElementById("earned").innerHTML = "Total Earnings : "+totalEarning
    }
    else if(details.category =="debit"){
        totalExpense += details.amount
        document.getElementById("expense").innerHTML = "Total Expense : "+totalExpense
    }

    balance = (totalEarning - totalExpense)
    var update = document.getElementById("balance")
    update.innerHTML = "Balance Amount : "+balance
    if(balance < 2000){
        update.style.color ="red"
    }
    else
    update.style.color ="green"
        
}