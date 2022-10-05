
const saveBtn =  document.querySelector('input[type=button]');
const dl =  document.querySelector('dl');
const input_box = document.querySelector('input[type=text]');

dl.style.transition ='all 1s cubic-bezier(0.075, 0.82, 0.165, 1)'

let stylesheets = document.styleSheets;

console.log(stylesheets);



saveBtn.addEventListener('click', function () {
    let input_text =  input_box.value;    
    let regExpCheck = input_text.match(/\w{1}\s?/gm);

    if (input_text.length != 0 && regExpCheck ) {
        
        let docFragment =document.createDocumentFragment();

        let dd = document.createElement('dd');
        dd.style.transition = 'all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1)';
        
        dd.textContent = input_text;
        docFragment.appendChild(dd)
        dl.appendChild(docFragment);
        
        input_box.value = '';
        
        let z =0;
        dd.addEventListener('click',function () {
            if (z == 0) {
                this.style.textDecoration = "line-through";
                this.style.textDecorationColor= 'red';
                this.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
                this.style.color = 'white'
                let docFragment = document.createDocumentFragment();
                docFragment.appendChild(this)
                this.classList.toggle('dd_anim') 
                dl.appendChild(docFragment);

                return z+=1  
            }
            
            if (z==1) {
                this.style.textDecoration = "none";
                this.style.backgroundColor = 'wheat';
                this.style.color = '#333'
                let docFragment = document.createDocumentFragment();
                this.classList.toggle('dd_anim') 

                
                docFragment.appendChild(this)
                dl.appendChild(docFragment)
                return z-=1   
            }
        }
        
        )


    }else{
        // let popup = document.createElement()
    }

    
    
})



document.documentElement.addEventListener('keypress', e =>{

    let keyPressed = e.key

    if (keyPressed =='Enter') {
        saveBtn.click()
    }
})



    
    
   