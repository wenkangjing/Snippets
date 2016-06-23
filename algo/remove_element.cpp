// Given an array and a value, remove all instances of that value in place and return the new length.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

int remove_element(int a[], int val)
{
	int i = 0,j = 0;
	while(i < a.length())
	{
		if (a[i++] == val)
			continue;
		a[j++] = a[i];
	}
	return j;
}