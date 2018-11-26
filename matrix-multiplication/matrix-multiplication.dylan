Module: matrix-multiplication
Synopsis: 
Author: Chris Odegard
Copyright: 2018

define class <matrix> (<object>)
  slot value :: <integer>;
  slot rows :: <integer>;
  slot cols :: <integer>;
  slot multiplier :: <integer>;
  slot name :: <string>;
end class <matrix>;

define method initialize (m :: <matrix>, #key multiplier)
  next-method();
  format-out("creating matrix... \n");
  let m = make(<vector>, size: 3, fill: 0);
  for (index from 0 below m.size)
    let j = make(<vector>, size: 3, fill: 0);
    for(index from 0 below j.size)
      let upperbound :: <integer> = 100 * multiplier;
      let rando :: <integer> = random(upperbound);
      element-setter(rando, j, index);
      let e :: <integer> = element(j, index);
      format-out(concatenate(integer-to-string(e), "\n"));
    end for;
    element-setter(j, m, index);
  end for;
end method;

begin
  let m :: <matrix> = make(<matrix>, multiplier: 5);
  exit-application(0);
end;


