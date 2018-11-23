Module: fizzbuzz
Synopsis:  Print "Fizz" for each number that is a multiple of 3
  Print "Buzz" for each number that is a multiple of 5
  Print "FizzBuzz" for each number that is both a multiple of 5 and a multiple of 3
Author: Chris Odegard
Copyright: 2018

define function fizzlebuzzle 
  (start :: <integer>, limit :: <integer>, do-output? :: <boolean>)
  for (i from start below limit)
    let x :: <string> = "";
    let y :: <string> = "";
    let z :: <integer> = -1;
    let by3 :: <boolean> = modulo(i, 3) == 0;
    let by5 :: <boolean> = modulo(i, 5) == 0;
    if(modulo(i, 3) == 0)
      x := "fizz";
    end if;
    if (modulo(i, 5) == 0)
      y := "buzz";
    end if;
    if (~by3 & ~by5)
      z := i;
    end if;
    if (do-output?)
      print-message(x, *standard-output*);
      print-message(y, *standard-output*);
      z ~== -1 & print-message(z, *standard-output*);
      print-message("\n", *standard-output*);
    end if;
  end for;
end function;

begin
  profiling(cpu-time-seconds, cpu-time-microseconds, allocation)
    for (n from 0 below 10000)
      fizzlebuzzle(0, 101, #t)
    end for;
  results
    format-out("\nfizzbuzz completed in %d.%s seconds and allocated %s bytes\n",
		    cpu-time-seconds, integer-to-string(cpu-time-microseconds, size: 6), allocation);
  end profiling;
end;