document.getElementById('btnEmp').addEventListener('click', ()=>{
    const cod = 44
    if(document.getElementById('senha').value == cod){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }
})