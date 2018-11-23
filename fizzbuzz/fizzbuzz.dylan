Module: fizzbuzz
Synopsis:  Print "Fizz" for each number that is a multiple of 3
  Print "Buzz" for each number that is a multiple of 5
  Print "FizzBuzz" for each number that is both a multiple of 5 and a multiple of 3
Author: Chris Odegard
Copyright: 2018

begin
  // Configuration
  let start :: <integer> = 0;
  let limit :: <integer> = 100;
  profiling(cpu-time-seconds, cpu-time-microseconds)
    for (i from start below limit)
      let x :: <string> = "";
      if(modulo(i, 3) == 0)
        x := concatenate(x, "fizz");
      end if;
      if (modulo(i, 5) == 0)
        x := concatenate(x, "buzz");
      end if;
      if (modulo(i, 5) ~== 0 & modulo(i, 3) ~== 0)
        x := integer-to-string(i);
      end if;
      format-out("%s\n", x);
    end for;
  results
    format-out("\nfizzbuzz completed in %d.%s seconds\n",
		    cpu-time-seconds, integer-to-string(cpu-time-microseconds, size: 6));
  end profiling;
end;


