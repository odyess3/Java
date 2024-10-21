#include <iostream>
/*
int main()
{   
     just hello world
    std::cout << "Hello, World!" << '\n';
    std::cout << "End, Earth!" << '\n';
    return 0;
    
}*/


/* Variables
int main()
{
    int x;
    x = 5;

    int y=6;
    int sum = x+y;

    std::cout << x << '\n';
    std::cout << y << '\n';
    std::cout << sum << '\n';


    int age = 21;
    int year = 2023;
    int days = 7;

    double price = 10.99;
    double gpa = 2.5;
    double temp = 25.1;

    std::cout << price << '\n';


    char grade = 'A';
    char initial = 'B';
    char currency = '$';

    std::cout << initial << '\n'; 

    bool student = false;
    bool power = true;
    bool forSale = true;

    std::cout << forSale << '\n';

    std::string name = "Bro";
    std::string day = "Friday";
    std::string food = "pizza";
    std::string address= "123 fakestreet";


    std::cout << name << '\n';

    std::cout << "Hello "<< name << '\n';
    std::cout << "You are " << age << "years old" << '\n';

    return 0;
}*/


/* Constants
int main()
{
    const double PI = 3.14159;
    double radius = 10;
    double circumference = 2 * PI * radius;

    std::cout << circumference << "cm";

    return 0;
}*/

/* Namespaces allowing you to use the same name but different variables
namespace first
{
    int x =1;
}

namespace second
{
    int x =2;
}

int main()
{
    int x =0;
    
    std::cout << x << '\n';
    std::cout << first::x << '\n';
    std::cout << second::x << '\n';

    return 0;
}*/


/* Data Types
#include <vector>

//typedef std::vector<std::pair<std::string, int>> pairlist_t
//typedef std::string text_t;
//typedef int number_t; both the same thing as below
using text_t = std::string;
using number_t = int;

int main()
{
    //pairlist_t pairlist;

    std::string text = "Hello, World!";
    text_t text2 = "Hello, World!";

    number_t age = 21;



    std::cout << text2 << '\n';
    std::cout << text2 << '\n';


    return 0
}
*/


/* Operators	
int main()
{
    int student = 20;

    //student = student +1; same as bellow
    student+=2;
    student++;

    std::cout << student << '\n';

    student-=1;
    student--;

    student*=2; //student = student * 2;
    student/=2; //student = student / 2;

    int remainder = student %2;
    
    std::cout << student << '\n';

    return 0;
}*/


/* Type Casting
int main()
{
    double x = (int) 3.14;
    std::cout << x << '\n';


    char y = 100;
    std::cout << y << '\n';

    std::cout << (char) 99 << '\n';

    int correct =8;
    int questions =10;
    double score = correct / (double)questions*100; 

    std::cout << score <<"% " <<'\n';

    return 0;
}*/

int main()
{
    std::string name;
    int age;

    std::cout<< "WHats your name?: ";
    std::getline(std::cin >> std::ws, name);

    std::cout << "How old are you?: ";
    std::cin >> age;


    std::cout <<"Hello " << name << '\n';
    std::cout << "You are " << age << "years old" << '\n';

    return 0;
}