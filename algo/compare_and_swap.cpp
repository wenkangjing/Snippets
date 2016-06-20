// pseudo code

// un thread safe set()
int set(int* loc, int newval)
{
	*loc = newval;
}

// compare the old value then set
int compare_and_swap (int* loc, int oldval, int newval)
{
  int val = *loc;
  if (val == oldval)
     *reg = newval;
  return val;
}

// return bool
bool compare_and_swap (int *accum, int *dest, int newval)
{
  if ( *accum == *dest ) {
      *dest = newval;
      return true;
  }
  return false;
}