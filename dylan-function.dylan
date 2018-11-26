define function f (a, b :: <integer>, #rest args, #key bar:: <string> = 0 ) end;

define class <foo> (<object>)
end;

define class <vehicle> (<object>)
  slot serial-number :: <integer>,
    required-init-keyword: sn:;
  slot owner :: <string>,
    init-keyword: owner:,  // optional
    init-value: "Northern Motors";
end class <vehicle>;

define generic g (a :: <foo>, b) => (s :: <string>);

define method g (a :: <foo>, b) => (s :: <string>)
    "g(<foo>,<object>)"
end;

define method g (a :: <foo>, b :: <bar>) => (s :: <string>)
    "g(<foo>,<bar>)"
end;

