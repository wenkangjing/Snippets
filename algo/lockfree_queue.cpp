// normal way
EnQueue(node* q)
{
	p=tail;
	p->next=q;
	tail=q;
}

// lock free 
EnQueue(node* q)
{
	do
	{
		p = tail;
	} while(CAS(p->next, NULL, q) != TRUE)

	CAS(tail, p, q);
}

// better
EnQueue(node* q) 
{
    p = tail;
    oldp = p
    do {
        while (p->next != NULL)
            p = p->next;
    } while( CAS(p.next, NULL, q) != TRUE); 
 
    CAS(tail, oldp, q); 
}