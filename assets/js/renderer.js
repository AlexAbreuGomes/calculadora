document.addEventListener('DOMContentLoaded',function(){
    let linkSobre = document.querySelector('#link-sobre');
    if(linkSobre){
        linkSobre.addEventListener('click',function(){
            window.api.send('abrir-janela-sobre')
        })
    }
    })
    
    document.addEventListener('DOMContentLoaded',function(){
        let fecharSobre = document.querySelector('#fechar-sobre');
        if(fecharSobre){
            fecharSobre.addEventListener('click',function(){
                window.api.send('fechar-janela-sobre')
            })
        }
        })