var open=document.getElementById('open');
var clos=document.getElementById('clos');
var conter=document.querySelector('.conter');

open.addEventListener('click',function(){
    conter.classList.add('new');
    open.stely.display='flexd';
});
clos.addEventListener('click',function(){
    conter.classList.remove('new');
});