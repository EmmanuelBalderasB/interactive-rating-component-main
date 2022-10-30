let submittedNum = '';
let isClicked = false;
const btnGroup = document.getElementsByClassName("btn-group");
const submit = document.getElementById('submit');
const page1 = document.getElementById('p1');
const page2 = document.getElementById('p2');
const num = document.getElementById('num')
try {
    for (let i = 1; i < 6; i++) {
        let btn = document.getElementById(`${i}`)
        btn.style.borderRadius = '100%';
        btn.style.border = '0px';
        btn.style.marginRight = '30px';
        btn.style.width = '120px';
        btn.style.height = '60px';
        btn.style.backgroundColor = 'rgb(38,47,55';
        btn.style.color = 'hsl(217, 12%, 63%)';
        function mouseOver() {
            btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
            btn.style.color = 'hsl(0, 0%, 100%)';
        }
        function mouseOut() {
            btn.style.backgroundColor = 'rgb(38,47,55)';
            btn.style.color = 'hsl(217, 12%, 63%)';
        }
        function clicked() {
            for (let j = i; j >= 1; j--) {
                let btn2 = document.getElementById(`${j}`)
    
                btn2.removeEventListener('mouseout', mouseOut, true);
                btn2.removeEventListener('mouseover', mouseOver, true);
            }
            
            submittedNum = i;
            isClicked = true;
            num.innerHTML = i
        }        
        btn.addEventListener('mouseover', mouseOver, true);
        btn.addEventListener('mouseout', mouseOut, true);
        btn.addEventListener('click', clicked, true); 
    }
    submit.addEventListener('click', function() {
        page1.style.display = 'none';
        page2.style.display = 'block';
    })
}catch(error) {
    console.log(error);
}




