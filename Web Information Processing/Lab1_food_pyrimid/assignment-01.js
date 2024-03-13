function change() // no ';' here
{
    var elem = document.getElementById("ages");

    if (elem.innerHTML =="5+") 
    {
        elem.innerHTML  = "1-4";

        let count6 =0;
        document.getElementById("count-6").innerHTML=count6;

        var el6 = document.getElementById("lvl6");
        var height6 = el6.offsetHeight;
        var newHeight6 = "120" ;
        el6.style.height = newHeight6 + 'px';
        

        let count5 =0;
        document.getElementById("count-5").innerHTML=count5;

        var el5 = document.getElementById("lvl5");
        var height5 = el5.offsetHeight;
        var newHeight5 = "120" ;
        el5.style.height = newHeight5 + 'px';

        let count4 =0;
        document.getElementById("count-4").innerHTML=count4;

        var el4 = document.getElementById("lvl4");
        var height4 = el4.offsetHeight;
        var newHeight4 = "120" ;
        el4.style.height = newHeight4 + 'px';

        let count3 =0;
        document.getElementById("count-3").innerHTML=count3;

        var el3 = document.getElementById("lvl3");
        var height3 = el3.offsetHeight;
        var newHeight3 = "120" ;
        el3.style.height = newHeight3 + 'px';

        let count2 =0;
        document.getElementById("count-2").innerHTML=count2;

        var el2 = document.getElementById("lvl2");
        var height2 = el2.offsetHeight;
        var newHeight2 = "120" ;
        el2.style.height = newHeight2 + 'px';

        let count1 =0;
        document.getElementById("count-1").innerHTML=count1;

        var el1 = document.getElementById("lvl1");
        var height1 = el1.offsetHeight;
        var newHeight1 = "120" ;
        el1.style.height = newHeight1 + 'px';



        

var color6= document.getElementById("count-6")
color6.style.backgroundColor = 'green';

    document.getElementById("button-6M").onclick= function()
    

    {
        if(count6>0)
        {
            count6 -=1;
        

            document.getElementById("count-6").innerHTML=count6;

            var el6 = document.getElementById("lvl6");
            var height6 = el6.offsetHeight;
            var newHeight6 = height6 - 5;
            el6.style.height = newHeight6 + 'px';

            
        }

        if(count6<1)
        {
            color6.style.backgroundColor = 'green';
        }

    }
    

    document.getElementById("button-6P").onclick= function()
    {
        count6 +=1;

        document.getElementById("count-6").innerHTML=count6;

        var el6 = document.getElementById("lvl6");
        var height6 = el6.offsetHeight;
        var newHeight6 = height6 + 5;
        el6.style.height = newHeight6 + 'px';

        if(count6>0)
        {
            color6.style.backgroundColor = 'red';
        }
    }

    


    





var color5= document.getElementById("count-5")
color5.style.backgroundColor = 'green';


document.getElementById("button-5M").onclick= function()
{
    if(count5>0)
    {
        count5 -=1;
        
        document.getElementById("count-5").innerHTML=count5;

        var el5 = document.getElementById("lvl5");
        var height5 = el5.offsetHeight;
        var newHeight5 = height5 - 5;
        el5.style.height = newHeight5 + 'px';

        if(count5<2)
        {
            color5.style.backgroundColor = 'green';
        }
    }
}
document.getElementById("button-5P").onclick= function()
{
    count5 +=1;

    document.getElementById("count-5").innerHTML=count5;

    var el5 = document.getElementById("lvl5");
    var height5 = el5.offsetHeight;
    var newHeight5 = height5 + 5;
    el5.style.height = newHeight5 + 'px';

    if(count5>1)
        {
            color5.style.backgroundColor = 'red';
        }
}



var color4= document.getElementById("count-4")
color4.style.backgroundColor = 'orange';


document.getElementById("button-4M").onclick= function()
{
    if(count4>0)
    {
        count4 -=1;
        document.getElementById("count-4").innerHTML=count4;

        var el4 = document.getElementById("lvl4");
        var height4 = el4.offsetHeight;
        var newHeight4 = height4 - 5;
        el4.style.height = newHeight4 + 'px';

        if(count4>3)
        {
            color4.style.backgroundColor = 'red';
        }
        else if(count4<2)
        {
            color4.style.backgroundColor = 'orange';

        }
        else
        {
            color4.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-4P").onclick= function()
{
    count4 +=1;
    document.getElementById("count-4").innerHTML=count4;

    var el4 = document.getElementById("lvl4");
    var height4 = el4.offsetHeight;
    var newHeight4 = height4 + 5;
    el4.style.height = newHeight4 + 'px';

    if(count4>3)
    {
        color4.style.backgroundColor = 'red';
    }
    else if(count4<2)
    {
        color4.style.backgroundColor = 'orange';

    }
    else
    {
        color4.style.backgroundColor = 'green';

    }
}



var color3= document.getElementById("count-3")
color3.style.backgroundColor = 'orange';


document.getElementById("button-3M").onclick= function()
{
    if(count3>0)
    {
    
        count3 -=1;
        document.getElementById("count-3").innerHTML=count3;

        var el3 = document.getElementById("lvl3");
        var height3 = el3.offsetHeight;
        var newHeight3 = height3 - 5;
        el3.style.height = newHeight3 + 'px';

        if(count3>3)
        {
            color3.style.backgroundColor = 'red';
        }
        else if (count3<1)
        {
            color3.style.backgroundColor = 'orange';
        }
        else
        {
            color3.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-3P").onclick= function()
{
    count3 +=1;
    document.getElementById("count-3").innerHTML=count3;

    var el3 = document.getElementById("lvl3");
    var height3 = el3.offsetHeight;
    var newHeight3 = height3 + 5;
    el3.style.height = newHeight3 + 'px';

        if(count3>3)
        {
            color3.style.backgroundColor = 'red';
        }
        else if(count3<1)
        {
            color3.style.backgroundColor = 'orange';
        }
        else
        {
            color3.style.backgroundColor = 'green';

        }
}




var color2= document.getElementById("count-2")
color2.style.backgroundColor = 'orange';

document.getElementById("button-2M").onclick= function()
{
    if(count2>0)
    {
        count2 -=1;
        document.getElementById("count-2").innerHTML=count2;

        var el2 = document.getElementById("lvl2");
        var height2 = el2.offsetHeight;
        var newHeight2 = height2 - 5;
        el2.style.height = newHeight2 + 'px';

        if(count2>5)
        {
            color2.style.backgroundColor = 'red';
        }
        else if(count2<3)
        {
            color2.style.backgroundColor = 'orange';
        }
        else
        {
            color2.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-2P").onclick= function()
{
    count2 +=1;
    document.getElementById("count-2").innerHTML=count2;

    var el2 = document.getElementById("lvl2");
    var height2 = el2.offsetHeight;
    var newHeight2 = height2 + 5;
    el2.style.height = newHeight2 + 'px';

        if(count2>5)
        {
            color2.style.backgroundColor = 'red';
        }
        else if(count2<3)
        {
            color2.style.backgroundColor = 'orange';
        }
        else
        {
            color2.style.backgroundColor = 'green';

        }
}



var color1= document.getElementById("count-1")
color1.style.backgroundColor = 'orange';

document.getElementById("button-1M").onclick= function()
{
    if(count1>0)
    {
        count1 -=1;
        document.getElementById("count-1").innerHTML=count1;

        var el1 = document.getElementById("lvl1");
        var height1 = el1.offsetHeight;
        var newHeight1 = height1 - 5;
        el1.style.height = newHeight1 + 'px';

        if(count1>7)
        {
            color1.style.backgroundColor = 'red';
        }
        else if(count1<5)
        {
            color1.style.backgroundColor = 'orange';
        }
        else
        {
            color1.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-1P").onclick= function()
{
    count1 +=1;
    document.getElementById("count-1").innerHTML=count1;

    var el1 = document.getElementById("lvl1");
    var height1 = el1.offsetHeight;
    var newHeight1 = height1 + 5;
    el1.style.height = newHeight1 + 'px';

        if(count1>7)
        {
            color1.style.backgroundColor = 'red';
        }
        else if(count1<5)
        {
            color1.style.backgroundColor = 'ornage';
        }
        else
        {
            color1.style.backgroundColor = 'green';

        }
}




// Get the current date



// Toggles the passed button from OFF to ON and vice-versa.






}
    else 
    {
        elem.innerHTML  = "5+";

        let count6 =0;
        document.getElementById("count-6").innerHTML=count6;

        var el6 = document.getElementById("lvl6");
        var height6 = el6.offsetHeight;
        var newHeight6 = "120" ;
        el6.style.height = newHeight6 + 'px';
        

        let count5 =0;
        document.getElementById("count-5").innerHTML=count5;

        var el5 = document.getElementById("lvl5");
        var height5 = el5.offsetHeight;
        var newHeight5 = "120" ;
        el5.style.height = newHeight5 + 'px';

        let count4 =0;
        document.getElementById("count-4").innerHTML=count4;

        var el4 = document.getElementById("lvl4");
        var height4 = el4.offsetHeight;
        var newHeight4 = "120" ;
        el4.style.height = newHeight4 + 'px';

        let count3 =0;
        document.getElementById("count-3").innerHTML=count3;

        var el3 = document.getElementById("lvl3");
        var height3 = el3.offsetHeight;
        var newHeight3 = "120" ;
        el3.style.height = newHeight3 + 'px';

        let count2 =0;
        document.getElementById("count-2").innerHTML=count2;

        var el2 = document.getElementById("lvl2");
        var height2 = el2.offsetHeight;
        var newHeight2 = "120" ;
        el2.style.height = newHeight2 + 'px';

        let count1 =0;
        document.getElementById("count-1").innerHTML=count1;

        var el1 = document.getElementById("lvl1");
        var height1 = el1.offsetHeight;
        var newHeight1 = "120" ;
        el1.style.height = newHeight1 + 'px';



var color6= document.getElementById("count-6")
color6.style.backgroundColor = 'green';

    document.getElementById("button-6M").onclick= function()
    

    {
        if(count6>0)
        {
            count6 -=1;
        

            document.getElementById("count-6").innerHTML=count6;

            var el6 = document.getElementById("lvl6");
            var height6 = el6.offsetHeight;
            var newHeight6 = height6 - 5;
            el6.style.height = newHeight6 + 'px';

            
        }

        if(count6<1)
        {
            color6.style.backgroundColor = 'green';
        }

    }
    

    document.getElementById("button-6P").onclick= function()
    {
        count6 +=1;

        document.getElementById("count-6").innerHTML=count6;

        var el6 = document.getElementById("lvl6");
        var height6 = el6.offsetHeight;
        var newHeight6 = height6 + 5;
        el6.style.height = newHeight6 + 'px';

        if(count6>0)
        {
            color6.style.backgroundColor = 'red';
        }
    }

    


    





var color5= document.getElementById("count-5")
color5.style.backgroundColor = 'green';


document.getElementById("button-5M").onclick= function()
{
    if(count5>0)
    {
        count5 -=1;
        
        document.getElementById("count-5").innerHTML=count5;

        var el5 = document.getElementById("lvl5");
        var height5 = el5.offsetHeight;
        var newHeight5 = height5 - 5;
        el5.style.height = newHeight5 + 'px';

        if(count5<2)
        {
            color5.style.backgroundColor = 'green';
        }
    }
}
document.getElementById("button-5P").onclick= function()
{
    count5 +=1;

    document.getElementById("count-5").innerHTML=count5;

    var el5 = document.getElementById("lvl5");
    var height5 = el5.offsetHeight;
    var newHeight5 = height5 + 5;
    el5.style.height = newHeight5 + 'px';

    if(count5>1)
        {
            color5.style.backgroundColor = 'red';
        }
}




var color4= document.getElementById("count-4")
color4.style.backgroundColor = 'orange';


document.getElementById("button-4M").onclick= function()
{
    if(count4>0)
    {
        count4 -=1;
        document.getElementById("count-4").innerHTML=count4;

        var el4 = document.getElementById("lvl4");
        var height4 = el4.offsetHeight;
        var newHeight4 = height4 - 5;
        el4.style.height = newHeight4 + 'px';

        if(count4>3)
        {
            color4.style.backgroundColor = 'red';
        }
        else if(count4<2)
        {
            color4.style.backgroundColor = 'orange';

        }
        else
        {
            color4.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-4P").onclick= function()
{
    count4 +=1;
    document.getElementById("count-4").innerHTML=count4;

    var el4 = document.getElementById("lvl4");
    var height4 = el4.offsetHeight;
    var newHeight4 = height4 + 5;
    el4.style.height = newHeight4 + 'px';

    if(count4>3)
    {
        color4.style.backgroundColor = 'red';
    }
    else if(count4<2)
    {
        color4.style.backgroundColor = 'orange';

    }
    else
    {
        color4.style.backgroundColor = 'green';

    }
}



var color3= document.getElementById("count-3")
color3.style.backgroundColor = 'orange';


document.getElementById("button-3M").onclick= function()
{
    if(count3>0)
    {
    
        count3 -=1;
        document.getElementById("count-3").innerHTML=count3;

        var el3 = document.getElementById("lvl3");
        var height3 = el3.offsetHeight;
        var newHeight3 = height3 - 5;
        el3.style.height = newHeight3 + 'px';

        if(count3>5)
        {
            color3.style.backgroundColor = 'red';
        }
        else if (count3<3)
        {
            color3.style.backgroundColor = 'orange';
        }
        else
        {
            color3.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-3P").onclick= function()
{
    count3 +=1;
    document.getElementById("count-3").innerHTML=count3;

    var el3 = document.getElementById("lvl3");
    var height3 = el3.offsetHeight;
    var newHeight3 = height3 + 5;
    el3.style.height = newHeight3 + 'px';

        if(count3>5)
        {
            color3.style.backgroundColor = 'red';
        }
        else if(count3<3)
        {
            color3.style.backgroundColor = 'orange';
        }
        else
        {
            color3.style.backgroundColor = 'green';

        }
}




var color2= document.getElementById("count-2")
color2.style.backgroundColor = 'orange';

document.getElementById("button-2M").onclick= function()
{
    if(count2>0)
    {
        count2 -=1;
        document.getElementById("count-2").innerHTML=count2;

        var el2 = document.getElementById("lvl2");
        var height2 = el2.offsetHeight;
        var newHeight2 = height2 - 5;
        el2.style.height = newHeight2 + 'px';

        if(count2>7)
        {
            color2.style.backgroundColor = 'red';
        }
        else if(count2<5)
        {
            color2.style.backgroundColor = 'orange';
        }
        else
        {
            color2.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-2P").onclick= function()
{
    count2 +=1;
    document.getElementById("count-2").innerHTML=count2;

    var el2 = document.getElementById("lvl2");
    var height2 = el2.offsetHeight;
    var newHeight2 = height2 + 5;
    el2.style.height = newHeight2 + 'px';

        if(count2>7)
        {
            color2.style.backgroundColor = 'red';
        }
        else if(count2<5)
        {
            color2.style.backgroundColor = 'orange';
        }
        else
        {
            color2.style.backgroundColor = 'green';

        }
}



var color1= document.getElementById("count-1")
color1.style.backgroundColor = 'orange';

document.getElementById("button-1M").onclick= function()
{
    if(count1>0)
    {
        count1 -=1;
        document.getElementById("count-1").innerHTML=count1;

        var el1 = document.getElementById("lvl1");
        var height1 = el1.offsetHeight;
        var newHeight1 = height1 - 5;
        el1.style.height = newHeight1 + 'px';

        if(count1>7)
        {
            color1.style.backgroundColor = 'red';
        }
        else if(count1<5)
        {
            color1.style.backgroundColor = 'orange';
        }
        else
        {
            color1.style.backgroundColor = 'green';

        }
    }
}
document.getElementById("button-1P").onclick= function()
{
    count1 +=1;
    document.getElementById("count-1").innerHTML=count1;

    var el1 = document.getElementById("lvl1");
    var height1 = el1.offsetHeight;
    var newHeight1 = height1 + 5;
    el1.style.height = newHeight1 + 'px';

        if(count1>7)
        {
            color1.style.backgroundColor = 'red';
        }
        else if(count1<5)
        {
            color1.style.backgroundColor = 'ornage';
        }
        else
        {
            color1.style.backgroundColor = 'green';

        }
}
    }
}











function test() 
{
    var q = new Date();
    var date = new Date(q.getFullYear(),q.getMonth(),q.getDate());
    var mydate = new Date(document.getElementById("date").value);

    if(date > mydate || date < mydate) 
    {
        alert("Current Date is not the User Date");
    }
    else
    {
        alert("Good job");

    }
}