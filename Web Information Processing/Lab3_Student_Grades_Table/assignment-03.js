var Unsub = 0;
var next =true;
var count =5;


window.addEventListener('keyup', function() 
//$(".button").click(function()
{
    var table = document.getElementById("TABLE");
    var rows = table.rows.length;
    var cols = table.rows[0].cells.length;
    Unsub = 0;
    
    for (var i = 1; i < rows; i++) 
    {
        for (var j = 2; j < cols - 1; j++) 
        {
            var add = table.rows[i].cells[j]; 
            //var add = + adds;
            if (add.innerHTML == '-' || add.innerHTML == '')
            {
                Unsub++;
            }
        }
    }
    $("#un-submmited").text(Unsub).css("textAlign", "right");
})


//function Average()
window.setInterval( function()  
{
    Unsub = 0;
    var table = document.getElementById("TABLE");
    var rows = table.rows;
    
    
    for (var i = 1; i < rows.length; i++) 
    {
        var cols = rows[i].cells;
        var sum = 0;

        for (var j = 2; j < cols.length - 1; j++) 
        {
            var col = cols[j];
            var num = parseInt(col.innerHTML); 
        
            if (!isNaN(num)) 
            {   
                if(num >=0 && num <=100 )
                { 
                    sum += num;
                    $(rows[i].cells[j]).css("textAlign", 'right').css("backgroundColor", '');
                }
                
                else 
                {
                    $(rows[i].cells[j]).text("-");
                    Unsub++;

                }
            } 
            
            else 
            { 
                $(rows[i].cells[j]).text("-").css("backgroundColor", "yellow").css("textAlign", '');
            }
        }

        var avg = sum /  count; 
        var result=false; 
        var test=document.querySelector(".cart-img-icon"); 
        

        if(next==false)
        {
            if (avg < 60) 
            {
                $(rows[i].cells[7]).text(Math.round(avg)).css("backgroundColor", "red").css("color", "white");
            }
            
            else 
            {
                $(rows[i].cells[7]).text(Math.round(avg)).css("backgroundColor", '').css("color",'');
            }
        }

        if(next==true)
        {
            if (avg >=93&&avg <=100) 
            {
                $(rows[i].cells[7]).text("A").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=90&&avg <=92) 
            {
                $(rows[i].cells[7]).text("A-").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=87&&avg <=89) 
            {
                $(rows[i].cells[7]).text("B+").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=83&&avg <=86) 
            {
                $(rows[i].cells[7]).text("B").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=80&&avg <=82) 
            {
                $(rows[i].cells[7]).text("B-").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=77&&avg <=79) 
            {
                $(rows[i].cells[7]).text("C+").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=73&&avg <=76) 
            {
                $(rows[i].cells[7]).text("C").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=70&&avg <=72) 
            {
                $(rows[i].cells[7]).text("C-").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=67&&avg <=69) 
            {
                $(rows[i].cells[7]).text("D+").css("backgroundColor", '').css("color", '');
            }
            else if (avg >=63&&avg <=66) 
            {
                $(rows[i].cells[7]).text("D").css("backgroundColor", '').css("color", '');
            }

            else if (avg >=60&&avg <=62) 
            {
                $(rows[i].cells[7]).text("D-").css("backgroundColor", '').css("color", '');
            }
            
            else 
            {
                $(rows[i].cells[7]).text("F").css("backgroundColor", 'red').css("color",'white');
            }
        }
    }
}, 100)






$("#TABLE td:Last-child").click(function change() 
    {
        if(!next)
        {
            next=true;
        }
        else
        {
            next=false
        }
    })






$("#addRow").click(function add()
{

var tbodyRef = document.getElementById('TABLE');

var newRow = tbodyRef.insertRow();


var numCols = tbodyRef.rows[0].cells.length;

for(var i=0; i<numCols; i++)
{
    var newCell = newRow.insertCell();
    newCell.contentEditable = 'true';
}
})


$("#delRow").click(function go()
{
    document.getElementById("TABLE").deleteRow(-1);
})

$(document).on("click", "#TABLE tr td:first-child", function() 
{
    $(this).closest('tr').remove();
});



$("#addCol").click(function ADDc()
{
    var table = document.getElementById('TABLE');

    for (var i = 0; i < table.rows.length; i++) 
    {
        var lastCellIndex = table.rows[i].cells.length - 1;
        var newCell = table.rows[i].insertCell(lastCellIndex); 
        newCell.contentEditable = 'true'; 
    }
    count++;
    
})


$("#delCol").click(function DELc()
{
    var table = document.getElementById('TABLE');

    for (var i = 0; i < table.rows.length; i++) 
    {
        var lastCellIndex = table.rows[i].cells.length - 2; 
        table.rows[i].deleteCell(lastCellIndex);
    }
    count--;

})

// var tableData;

$("#SaveTable").click(function Savede()
{
    alert("Table Saved");
     // Get all table data
    const tableData = [];
    const rows = document.getElementById("TABLE").rows;
    for (let i = 0; i < rows.length; i++) 
    {
        const rowData = [];
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) 
        {
            rowData.push(cells[j].textContent);
        }
        tableData.push(rowData);
    }
  // Convert data to JSON string
    const jsonData = JSON.stringify(tableData);
    
  // Save data to localStorage
    localStorage.setItem("tableData", jsonData);
})


$("#LoadTable").click(function LOADed(savedTable)
{
    alert("Table Loaded");

     // Get data from localStorage
    var jsonData = localStorage.getItem("tableData");
    if (jsonData) 
    {
        var tableData = JSON.parse(jsonData);
    
        // Clear existing table data 
        var tableBody = document.getElementById("TABLE").getElementsByTagName("tbody")[0];
        tableBody.innerHTML = "";
    
        // Add loaded data back to the table
        for (var rowData of tableData) 
        {
            var row = document.createElement("tr");
            for (var cellData of rowData) 
            {
                var cell = document.createElement("td");
                cell.textContent = cellData;
                row.appendChild(cell);
            }

            tableBody.appendChild(row);
        }
    }
})
