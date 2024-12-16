const form = document.querySelector('form');

form.addEventListener('submit',function(event){

    event.preventDefault(); // prevents the default form submission behavior

    const height = parseInt(document.querySelector('#hgt').value);
    const weight = parseInt(document.querySelector('#wgt').value);
    const result = document.querySelector("#result");

    if(height === "" || height === 0 || isNaN(height)){
        result.innerHTML= `Please give a valid height : ${height}`;
    }
    else if (weight === "" || weight === 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight : ${weight}`;
    }
    else{
        const bmi = ( weight / (( height * height ) / 10000 )).toFixed(2);
        if(bmi > 24.9){
            result.innerHTML = `<span> <strong> ${bmi} </strong>:  Over Weight</span> `;
        }else if(bmi <18.6){
            result.innerHTML = `<span><strong> ${bmi} </strong>:  Under Weight</span>`;
        } else {
            result.innerHTML = `<span><strong> ${bmi} </strong>: Normal Range</span>`; 
        }
        
    }

});
