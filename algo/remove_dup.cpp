// Given a sorted array, remove the duplicates in place such that each element appear only once
// and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.
// For example, Given input array A = [1,1,2],

// Your function should return length = 2, and A is now [1,2].

int remove_dup(int A[])
{
	int i = 0, j = 0;
	while(i < A.len())
	{
		if(A[i++] == A[j])
			continue;

		A[++j] = A[i];

		return j;
	}
}


int remove_dup(int A[])
{
	int i = 0, j = 0;
	while(i < A.len())
	{
		if(A[i++] != A[j])
			A[++j] = A[i];
	}
	return j;
}

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        
    }
};

// Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?
// For example, Given sorted array A = [1,1,1,2,2,3],
// Your function should return length = 5, and A is now [1,1,2,2,3].

int remove_dup(int A[])
{
	int i = 0, j = 0, dup = 0;
	while(i < A.len())
	{
		if(A[i++] != A[j] && dup == 2)
		{
			A[++j] = A[i];
			dup = 0;
		}
		else
			dup++;
	}
	return j;
}