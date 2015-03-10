procedure insert(var A: INTARRAY; x: integer; var n: integer);
begin
	n:= n+1;
	A[n] := x;
	bubbleUp (A,n)
end; (* insert *)
