Module: time
Synopsis: 
Author: Chris Odegard
Copyright: 2019

define method encode-total-seconds 
  (hours :: <integer>, minutes :: <integer>, seconds :: <integer>)
  => (total-seconds :: <integer>)
  ((hours * 60) + minutes) * 60 + seconds;
end method;


define function main ()
  let s = encode-total-seconds(1, 1, 1);
  format-out("%s\n", s);
  exit-application(0);
end function main;

main();
