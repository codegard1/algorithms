Module: kinds-of-coins
Synopsis: 
Author: 
Copyright: 

define function first-denomination 
    (kinds-of-coins :: <integer>) => (denomination :: <integer>)


define function main
    (name :: <string>, arguments :: <vector>)
  format-out("Hello, world!\n");
  exit-application(0);
end function main;

main(application-name(), application-arguments());
