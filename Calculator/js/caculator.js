const ac = document.getElementById('ac');
const am = document.getElementById('am');
const phantram = document.getElementById('phantram');
const chia = document.getElementById('chia');
const bay = document.getElementById('bay');
const tam = document.getElementById('tam');
const chin = document.getElementById('chin');
const nhan = document.getElementById('nhan');
const bon = document.getElementById('bon');
const nam = document.getElementById('nam');
const sau = document.getElementById('sau');
const tru = document.getElementById('tru');
const mot = document.getElementById('mot');
const hai = document.getElementById('hai');
const ba = document.getElementById('ba');
const cong = document.getElementById('cong');
const khong = document.getElementById('khong');
const phay = document.getElementById('phay');
const bang = document.getElementById('bang');

const ketqua = document.getElementById('ketqua');

ac.addEventListener("click", function(){
    document.getElementById('ketqua').value += 0;
});

am.addEventListener("click", function(){
    document.getElementById('ketqua').value += '-';
});

phantram.addEventListener("click", function(){
    document.getElementById('ketqua').value += '%';
});

chia.addEventListener("click", function(){
    document.getElementById('ketqua').value += '/';
});

bay.addEventListener("click", function(){
    document.getElementById('ketqua').value += 7;
});

tam.addEventListener("click", function(){
    document.getElementById('ketqua').value += 8;
});

chin.addEventListener("click", function(){
    document.getElementById('ketqua').value += 9;
});

nhan.addEventListener("click", function(){
    document.getElementById('ketqua').value += '*';
});

bon.addEventListener("click", function(){
    document.getElementById('ketqua').value += 4;
});

nam.addEventListener("click", function(){
    document.getElementById('ketqua').value += 5;
});

sau.addEventListener("click", function(){
    document.getElementById('ketqua').value += 6;
});

tru.addEventListener("click", function(){
    document.getElementById('ketqua').value += '-';
});

mot.addEventListener("click", function(){
    document.getElementById('ketqua').value += 1;
});

hai.addEventListener("click", function(){
    document.getElementById('ketqua').value += 2;
});

ba.addEventListener("click", function(){
    document.getElementById('ketqua').value += 3;
});

cong.addEventListener("click", function(){
    document.getElementById('ketqua').value += '+';
});

khong.addEventListener("click", function(){
    document.getElementById('ketqua').value += 0;
});

phay.addEventListener("click", function(){
    document.getElementById('ketqua').value += ',';
});

bang.addEventListener("click", function(){
    const phepTinh = document.getElementById('ketqua').value;
    console.log( phepTinh);
});