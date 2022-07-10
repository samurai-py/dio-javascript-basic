function soma(x,y) {
    var som = 0;
    for(var i = x; i <= y; i++){
      som += i;
    }
    return som;
  }
  
  
  const A = parseInt(gets());
  const B = parseInt(gets());
  const total = soma(A,B);             ;
  print(total);