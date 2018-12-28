Module: matrix-multiplication
Synopsis: 
Author: Chris Odegard
Copyright: 2018

define class <matrix> (<object>)
  slot value :: <vector>;
  slot rows :: <integer>;
  slot cols :: <integer>;
  slot multiplier :: <integer>;
  slot name :: <string>;
end class <matrix>;

define method initialize (m :: <matrix>, #key multiplier = 5, name = "Matrix")
  next-method();
  format-out("creating matrix... \n");
  m.rows := 3;
  m.cols := 3;
  m.name := name;
  let i = make(<vector>, size: m.rows, fill: 0);
  for (index from 0 below i.size)
    let j = make(<vector>, size: m.cols, fill: 0);
    for(index from 0 below j.size)
      let upperbound :: <integer> = 100 * multiplier;
      let rando :: <integer> = random(upperbound);
      element-setter(rando, j, index);
    end for;
    element-setter(j, i, index);
  end for;
  m.value := i;
end method;

define method print-matrix (m :: <matrix>)
  format-out(concatenate("\n", m.name, "\n"));
  for (index from 0 below m.rows)
    format-out("[");
    let j = element(m.value, index);
    for (index from 0 below m.cols)
      format-out(integer-to-string(element(j, index)));
      if (index < (j.size - 1))
        format-out(",  ");
      end if;
    end for;
    format-out("]\n");
  end for;
end method;

begin
  let m :: <matrix> = make(<matrix>);
  print-matrix(m);
  exit-application(0);
end;


