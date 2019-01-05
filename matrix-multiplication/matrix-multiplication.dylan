Module: matrix-multiplication
Synopsis: 
Author: Chris Odegard
Copyright: 2018

define class <matrix> (<object>)
  slot name :: <string>, init-value: "Matrix";
  slot rows :: <integer>, init-value: 3;
  slot cols :: <integer>, init-value: 3;
  slot multiplier :: <integer>, init-value: 5;
  slot value :: <array>;
end class <matrix>;

define method initialize (m :: <matrix>, #key)
  next-method();
  format-out("creating matrix... \n");
  let dims = make(<vector>, size: cols(m), fill: rows(m));
  let v = make(<array>, dimensions: dims, fill: 0);
  for (i from 0 below rank(v))
    for(j from 0 below dimension(v, i))
      let upperbound :: <integer> = 100 * multiplier(m);
      let r :: <integer> = random(upperbound);
      format-out(interger-to-string(r))
      aref-setter(r, v, i, j, 0);
    end for;
    format-out("\n");
  end for;
  value-setter(v, m);
end method;

define method print-matrix (m :: <matrix>)
  format-out("[");
  for (i from 0 below rows(m))
    for (j from 0 below cols(m))
      format-out(integer-to-string(aref(m.value, j, i, 0)));
      if (j < (rows(m)) - 1)
        format-out(",  ");
      else 
        format-out("\n");
      end if;
    end for;
  end for;
  format-out("]\n");
  concatenate("\n", name(m), "\n");
end method;

begin
  let m :: <matrix> = make(<matrix>);
  print-matrix(m);
  exit-application(0);
end;


