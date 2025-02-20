function peluang(){
    let n = parseInt(document.getElementById("input-n").value);
    let x = parseInt(document.getElementById("input-x").value);
    let p = parseInt(document.getElementById("input-p").value);
    let q = parseInt(document.getElementById("input-q").value);
    var Peluang = (factorial(n)/(factorial(x)*factorial(n-x))) * pangkat(p, x)  ;
    document.getElementById("hasil").innerHTML = Peluang;
    console.log(Peluang);


    function pangkat(a,b){
        for (let i = )
    }
    function factorial(x){
        let total = 1;
        for (let i = x; i > 0; i-- ){
            total = total * i;
            
        };
        return total;
    }
    
}