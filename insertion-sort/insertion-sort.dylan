Module: insertion-sort

define function main
    (name :: <string>, arguments :: <vector>)
  let v = #[45,55,77,89,76,2,34,544,34,24,0,9,5,67];
  insertion-sort!( v );
  exit-application(0);
end function main;

// exclamation point means that we are modifying the argument in place
define function insertion-sort! 
    // (input values) => (return values)
    (v :: <vector>) => (v :: <vector>)

  let counter :: <integer> = 0;

  // below = v.size - 1 
  for (j from 1 below v.size)
    let key = v[j];
    let i = j - 1;

    while (i >= 0 & v[i] > key)
      v[i + 1] := v[i];
      i := i - 1;
      format-out( "v :: %s", v );
      counter := counter + 1;
    end while;
    
    v[i + 1] := key;
    counter := counter + 1;

  end for;
  
  format-out( "steps = %s", counter );
  
  // Return the last expression
  v;

end insertion-sort!;

main(application-name(), application-arguments());

