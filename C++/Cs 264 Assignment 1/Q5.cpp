#include <iostream>

int main()
{
    // Declare a boolean variable to store the number 
    bool isPower = false;
    
    // Declare a variable to store the number
    int number;
    
    // Read the number from the user and store it in the variable
    std::cin >> number;
    
    // Check if the number is a power of two by modding it by 2, and dividing it by 2 until it is no longer divisible by 2
    while (number % 2 == 0)
    {
        number /= 2;
    }

    // Check if the number is 1
    if(number == 1)
    {
        isPower = true;
    }

    
    // Check the boolean variable and print the result
    if (isPower) 
    {
        std::cout << "true";
    } 
    
    else 
    {
        std::cout << "false";
    }

}