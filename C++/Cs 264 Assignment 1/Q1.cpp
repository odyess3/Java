#include <iostream>

int main()
{    
    // Declare a variable to store the number as a string
    std::string nums;
    
    // Read the number from the user and store it in the variable
    std::getline(std::cin >> std::ws, nums);

    // Declare a variable to store the start
    int start = 0;
    
    // Check if the number is negative
    if(nums.at(0) == '-') 
    {
        std::cout << '-';
        start = 1;
    }

    
    // Use a loop to print the characters in reverse order
    for(int i = nums.length() - 1; i >= start; i--) 
    {
        std::cout << nums[i];
    }
}

