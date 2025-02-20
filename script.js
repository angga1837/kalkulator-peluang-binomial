function peluang(){
    let n = parseInt(document.getElementById("input-n").value);
    let x = parseInt(document.getElementById("input-x").value);
    let p = parseFloat(document.getElementById("input-p").value);
    let q = parseFloat(document.getElementById("input-q").value);
    var Peluang = parseFloat((factorial(n)/(factorial(x)*factorial(n-x))) * pangkat(p, x) * pangkat(q, n-x)) ;
    document.getElementById("hasil").innerHTML = Peluang;
    console.log(Peluang);


    function pangkat(a,b){
        hasilpangkat = 1
        for (let i = 1; i <= b; i++ ){
            hasilpangkat = hasilpangkat * a;
        }
        return hasilpangkat
    }
    function factorial(p){
        let total = 1;
        for (let i = p; i > 0; i-- ){
            total = total * i;
            
        };
        return total;
    }
    
}