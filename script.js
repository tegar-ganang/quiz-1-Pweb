function create_form(){  
    var np=document.getElementById("name").value;  
    var bp=document.getElementById("birthplace").value;  
    var bd=document.getElementById("birthdate").value;
    var jk=document.getElementById("kelamin").value;
    var add=document.getElementById("address").value;  
    var rt=document.getElementById("rt").value;
    var rw=document.getElementById("rw").value;  
    var pv=document.getElementById("province").value;  
    var kc=document.getElementById("kecamatan").value;
    var ds=document.getElementById("desa").value;
    var p=document.getElementById("phone").value;  
    var kp=document.getElementById("kodepos").value; 
    var a=document.getElementById("agama").value;
    var st=document.getElementById("study").value;  
    var j=document.getElementById("job").value; 
    var re=document.getElementById("relasi").value;
    var pjn=document.getElementById("pjname").value;  
    var pjs=document.getElementById("pjstudy").value;  
    var pjj=document.getElementById("pjjob").value;  
    var letters = /^[A-Za-z]+$/;  
    var number = /^[0-9]*$/ ;
 
    if(np==''||bp==''||bd==''||jk==''||add==''||rt==''||rw==''||pv==''||
    kc==''||ds==''||p==''||kp==''||a==''||st==''||j==''||re==''||pjn==''||pjs==''||pjj==''){  
        alert("Masukkan semua detail secara benar");  
    }  
    else if(!letters.test(np, bp, add, pv, kc, ds, st, j, re, pjn, pjs, pjj))  
    {  
        alert('Nama tidak valid, harus berisi alphabet');  
    }  
    else if(!number.test(p, rt, rw, kp))  
    {  
        alert('Nomor telepon tidak valid, harus berisi angka');  
    }   
    else if(document.getElementById("phone").value.length > 13)  
    {  
        alert("Panjang nomor telepon maksimum 13 karakter");  
    } 
    else if(document.getElementById("phone").value.length < 10)  
    {  
        alert("Panjang nomor telepon minimum 10 karakter");  
    } 
    else{  
        alert("Akun anda sukses terbuat... Menuju laman RSUD Solok");  
        window.location="https://rsud.solokkab.go.id/";  
    }  
    }  