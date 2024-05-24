var Cirlce = ["circle2", "circle3", "circle4", "circle5"];//buttonColors
var pattern = []; //gamePatern
var Userpattern =[]; //userClickedPattern
var next =false;
var level =0;
var count=0;

var good =0;
var tops =0;


var timerInterval; 
var timerCount = 0; 




document.getElementById("middle").onclick=function()
{
    if(!next)
    {
        $("#number").text("Level "+ level);
        document.getElementById('go').style.backgroundColor='green';
        setTimeout(start)
        next = true;
    }
}


function start() 
{
    setTimeout(function() 
        {
            Next();
        }, 3000);
}


$(".SC").click(function() // the button i clicked 
{
    clearInterval(timerInterval);
    timerCount=0;
    startTimer();
    updateTimerDisplay();

    good++;
    if(good<10)
    {
        $("#right").text("0"+good);
    }
    else
    {
        $("#right").text(good);
    }

    if(tops<=good)
    {
        tops=good;
    }

    if(tops<10)
    {
        $("#left").text("0"+tops);
    }
    else
    {
        $("#left").text(tops);
    }
    

    var pickcircle = $(this).attr("id"); // gets the id of the button i clicked
    Userpattern.push (pickcircle);

    correct(Userpattern.length-1);
});  


function startTimer() 
{
    timerInterval = setInterval(function() 
    {
        timerCount++;
        updateTimerDisplay();
        if(timerCount==5)
        {
            $("#number").text("Game Over , Press Start to start again");
            Over();
        }
    }, 1000); // Update timer every second (1000 milliseconds)
}


function updateTimerDisplay() 
{
    $("#timer").text("Time: " + timerCount + "s");
}

function correct(level)
{
    if(Userpattern[level] === pattern[level])
    {
        if(Userpattern.length === pattern.length)
        {
            clearInterval(timerInterval);
            timerCount=0;
            updateTimerDisplay();

            setTimeout(function()
            {
                Next();
            }, 1000);
        }
    }
    
    else
    {
        $("#number").text("Game Over , Press Start to start again");
        Over();
    }
}


function Next()
{
    Userpattern = [];
    level++;
    $("#number").text("Level "+ level);
    
    var rndInt = Math.floor(Math.random() * 4) ;
    var newcircle = Cirlce[rndInt];
    pattern.push(newcircle);

    let t=600;
    for (let i = 0; i < pattern.length; i++) 
    {
        (function(i) 
        {
            setTimeout(function() 
            {
                if(pattern.length>=13)
                {
                    if(pattern[i]=="circle2")
                    {
                        if(pattern[i]==="circle2")
                        {
                            $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 255, 0)'}).animate({backgroundColor:'rgb(3, 109, 3)'}),200;
                        }
    
                        if(pattern[i]==="circle3")
                        {
                            $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 0, 0)'}).animate({backgroundColor:'rgb(148, 0, 0)'}),200;
                        }
    
                        if(pattern[i]==="circle4")
                        {
                            $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 255, 0)'}).animate({backgroundColor:'rgb(151, 151, 0)'}),200;
                        }
    
                        if(pattern[i]==="circle5")
                        {
                            $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 0, 255)'}).animate({backgroundColor:'rgb(3, 3, 133)'}),200;
                        }
                    }
                    t=150;
                }

                else if(pattern.length>=9)
                {
                    if(pattern[i]==="circle2")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 255, 0)'}).animate({backgroundColor:'rgb(3, 109, 3)'}),400;
                    }

                    if(pattern[i]==="circle3")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 0, 0)'}).animate({backgroundColor:'rgb(148, 0, 0)'}),400;
                    }

                    if(pattern[i]==="circle4")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 255, 0)'}).animate({backgroundColor:'rgb(151, 151, 0)'}),400;
                    }

                    if(pattern[i]==="circle5")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 0, 255)'}).animate({backgroundColor:'rgb(3, 3, 133)'}),400;
                    }
                    t=300;
                }

                else if(pattern.length>=5)
                {
                    if(pattern[i]==="circle2")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 255, 0)'}).animate({backgroundColor:'rgb(3, 109, 3)'}),600;
                    }

                    if(pattern[i]==="circle3")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 0, 0)'}).animate({backgroundColor:'rgb(148, 0, 0)'}),600;
                    }

                    if(pattern[i]==="circle4")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 255, 0)'}).animate({backgroundColor:'rgb(151, 151, 0)'}),600;
                    }

                    if(pattern[i]==="circle5")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 0, 255)'}).animate({backgroundColor:'rgb(3, 3, 133)'}),600;
                    }
                    t=450;
                }

                else
                {
                    if(pattern[i]==="circle2")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 255, 0)'},400).animate({backgroundColor:'rgb(3, 109, 3)'},400);
                    }

                    if(pattern[i]==="circle3")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 0, 0)'},400).animate({backgroundColor:'rgb(148, 0, 0)'},400);
                    }

                    if(pattern[i]==="circle4")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(255, 255, 0)'},400).animate({backgroundColor:'rgb(151, 151, 0)'},400);
                    }

                    if(pattern[i]==="circle5")
                    {
                        $("#" + pattern[i]).animate({backgroundColor:'rgb(0, 0, 255)'},400).animate({backgroundColor:'rgb(3, 3, 133)'},400);
                    }
                }
                
            }, i * t);
        })(i);
    }
}


function Over()
{
    good =0;

    $("#right").text("0"+good);
    document.getElementById('go').style.backgroundColor='red';
    clearInterval(timerInterval);
    timerCount=0;
    updateTimerDisplay();
    Blinking()
    level=0;
    $("#number").text("Game Over , Press Start to start again");
    pattern = [];
    next = false;
}

function Blinking()
{
    if (count ==5)
    {
        return;
    }

    $("#" + Cirlce[0]).animate({backgroundColor:'rgb(0, 255, 0)'}).animate({backgroundColor:'rgb(3, 109, 3)'});
    $("#" + Cirlce[1]).animate({backgroundColor:'rgb(255, 0, 0)'}).animate({backgroundColor:'rgb(148, 0, 0)'});
    $("#" + Cirlce[2]).animate({backgroundColor:'rgb(255, 255, 0)'}).animate({backgroundColor:'rgb(151, 151, 0)'});
    $("#" + Cirlce[3]).animate({backgroundColor:'rgb(0, 0, 255)'}).animate({backgroundColor:'rgb(3, 3, 133)'});
    count++;
    Blinking()
}
