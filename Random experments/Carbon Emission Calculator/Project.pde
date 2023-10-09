PFont font;
PFont font2;
PImage pic;

int carbon = 0;

String paper ="";
String tin = "";

int cal =0;

int draw1 = 225;
int draw2 = 225;

String typing = "";
String saved = "";

int i =0;
int [] ar1 = new int [20];




void setup() 
{
  
  pic = loadImage("pic.jpg");

  size(500, 500);
  background(pic);
  font = createFont("Arial",16);
}


void keyPressed() 
{
  // If the return key is pressed, save the String and clear it
  if (key == '\n' ) 
  {
    saved = typing;
    ar1[i] = Integer.parseInt(typing);
    typing = "";
    i++;
  } 
    
  if (key == BACKSPACE)
  {
    typing= typing.substring(0, max(0, typing.length()-1));
  }
  
  
   if ((key >= '0' && key <= '9') || key == ' ') 
   {
    typing = typing + key;
   }
   
}

void mousePressed()
 {
   if (cal ==0)
   {
     cal =1;
   }
 }


void draw()
{
 
  
  if (cal ==1)
  {
int electic = ar1[0]*105;
int gas = ar1[1]*105;
int oil = ar1[2]*113;
int mileage = ar1[3];
int flight = ar1[4]*1100;
int flight4 = ar1[5]*4400;
int pap =0;
int tins = 0;


if(ar1[6]>0)
    {
      paper = "True";
    }
    else
    {
      paper ="False";
      pap = 184;
    }

    if(ar1[7] >0)
     {
      tin = "True";
     }
    else
     {
      tin = "False";
      tins =166;
      
     }

  background(draw1);
  int indent = 10;
  textFont(font);
  fill(0);

  text("Hit enter to input. \nROUND TO NEAREST WHOLE NUMBER", indent, 20);
  text("Input: " + typing, indent, 190);
 // text("Saved text: " + saved, indent, 230);
 
 
 text("Carbon emission produce by", 130, 250);
 
 
 text("Electricity: " + electic, indent, 270);
 text("Oil: " + gas, indent, 290);
 text("Gas: " + oil, indent, 310);
 text("Mileage: " + mileage, indent, 330);
 text("Flights : " + flight, indent, 350);
 text("Flights 4+: " + flight4, indent, 370);
 text("Paper : " + paper, indent, 390);
 text("Saved : " + tin, indent, 410);
 
  if (i == 0)
  {
    text("Whats your montlhy electirc bill", indent, 70);
  }

  if (i ==1)
  {
    text("Whats your montlhy oil bill", indent, 70);
  }

  if (i ==2)
  {
    text("Whats your montlhy gas bill", indent, 70);
  }

  if (i ==3)
  {
    text("Whats your total yearly mileage on your car", indent, 70);
  }

  if (i ==4)
  {
    text("Whats your number of flights you hav taken in the past year \n(4 hours or less) ", indent, 70);
  }

  if (i ==5)
  {
    text("Whats your number of flights you have taken in the past year \n(4 hours or more) ", indent, 70);
  }

  if (i ==6)
  {
    text("Do you recycle paper \n(0 = false) \n(1 = True)", indent, 70);
  }

  if (i ==7)
  {
    text("Do you recycle aluminum and tin \n(0 = false) \n(1 = True)", indent, 70);
  }
  
  
 carbon = electic+gas+oil+mileage+flight+flight4+pap+tins;
 text("Total carbon emission", 150, 440);
 textSize(30);
 text(carbon,210,475);


if(i==8)
{
  cal++;
}

 
}
if (cal ==2)
{
 background(draw1);
 textSize(60);
 text(carbon,155,100);
 textSize(30);
 text("Is Your Total Carbon Emission",60,130);
 
 if (carbon<20000)
 {
   text("Your carbon footprint is extremely low", 15, 250);
   text("Amazing job!!", 160,280);
 }
 
 if (carbon>=20000 && carbon<35000)
 {
   text("Your carbon footprint is quite small ", 30,250);
   text("keep up the good work",90,280);
 }
 
 if (carbon>=35000&&carbon<=65000)
 {
   text("Your carbon footprint is considered" ,30 , 250); 
   text("average", 190,280);
   text("keep on doing, what your doing", 50, 310);
 }
 
 if(carbon>65000)
 {
   text("Your carbon footprint is unhealthily", 30,250);
   text("high", 210,280);
   text("Might want to cut back a bit on fumes", 5,310);
 }

}

}