#include <iostream>
#include <string>
using namespace std;

int main()
{
   long n = 50, c, first = 0, second = 1, next;

 
   for ( c = 0 ; c < n ; c++ )
   {
      if ( c <= 1 )
         next = c;
      else
      {
         next = first + second;
         first = second;
         second = next;
      }
      cout << next << endl;
   }
 
   return 0;
}
