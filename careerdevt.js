function selectProgram() {
        const text= document.querySelector('.program');
    let program = text.value;
     program = program.toUpperCase();


    if (program === 'GENERAL SCIENCE') {

    document.querySelector('.program-info').innerHTML =
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <h3>Elective Subjects</h3>
    <p><label>Physics</label><input class='physics' type='number' min='1' max='9'></p>
    <p><label>Chemistry</label><input class='chemistry' type='number' min='1' max='9'></p>
    <p><label>E-Maths</label><input class='emaths' type='number' min='1' max='9'></p>
    <p><label>Biology</label><input class='biology' type='number' min='1' max='9'></p>
    <p><label>ICT</label><input class='ict' type='number' min='1' max='9'></p>
    <p><label>Agriculture</label><input class='agric' type='number' min='1' max='9'></p>
    <h3>Core Subjects</h3>
    <p><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9'></p>
    <p><label>English</label><input class='english' type='number' min='1' max='9'></p>
    <p><label>Int-Science</label><input class='intScience' type='number' min='1' max='9'></p>
    <p><label>Social Studies</label><input class='social' type='number' min='1' max='9'></p>
    <button onclick="careerScience();">submit</button>`

    }else if (program === 'GENERAL ARTS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <h3>Elective Subjects</h3>
    <p><label>Government</label><input type='number' min='1' max='9'></p>
    <p><label>History</label><input type='number' min='1' max='9'></p>
    <p><label>E-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>Economics</label><input type='number' min='1' max='9'></p>
    
    <h3>Core Subjects</h3>
    <p><label>C-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>English</label><input type='number' min='1' max='9'></p>
    <p><label>Int-Science</label><input type='number' min='1' max='9'></p>
    <p><label>Social Studies</label><input type='number' min='1' max='9'></p>
    <button>Submit</button>`;
    }
    else if (program === 'BUSINESS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <h3>Elective Subjects</h3>
    <p><label>Financial Accounting</label><input type='number' min='1' max='9'></p>
    <p><label>Business Management</label><input type='number' min='1' max='9'></p>
    <p><label>E-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>Economics</label><input type='number' min='1' max='9'></p>
    <p><label>Cost Accounting</label><input type='number' min='1' max='9'></p>
  
    <h3>Core Subjects</h3>
    <p><label>C-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>English</label><input type='number' min='1' max='9'></p>
    <p><label>Int-Science</label><input type='number' min='1' max='9'></p>
    <p><label>Social Studies</label><input type='number' min='1' max='9'></p>
    <button>Submit</button>`;
    }
    else if (program === 'HOME ECONOMICS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <h3>Elective Subjects</h3>
    <p><label>Catering and Sewing</label><input type='number' min='1' max='9'></p>
    <p><label>Food and Nutrition</label><input type='number' min='1' max='9'></p>
    <p><label>Management in Living</label><input type='number' min='1' max='9'></p>
    
    <h3>Core Subjects</h3>
    <p><label>C-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>English</label><input type='number' min='1' max='9'></p>
    <p><label>Int-Science</label><input type='number' min='1' max='9'></p>
    <p><label>Social Studies</label><input type='number' min='1' max='9'></p>
    <button>Submit</button>`;
    }
    else if (program === 'VISUAL ARTS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <h3>Elective Subjects</h3>
    <p><label>Painting</label><input type='number' min='1' max='9'></p>
    <p><label>Drawing</label><input type='number' min='1' max='9'></p>
    <p><label>Printmaking</label><input type='number' min='1' max='9'></p>
    <p><label>Sculpture</label><input type='number' min='1' max='9'></p>
    <p><label>Photography</label><input type='number' min='1' max='9'></p>
    <p><label>Design</label><input type='number' min='1' max='9'></p>
    <p><label>Crafts</label><input type='number' min='1' max='9'></p>
    <h3>Core Subjects</h3>
    <p><label>C-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>English</label><input type='number' min='1' max='9'></p>
    <p><label>Int-Science</label><input type='number' min='1' max='9'></p>
    <p><label>Social Studies</label><input type='number' min='1' max='9'></p>
    <button>Submit</button>`;
    } 
    else {
    console.log('invalid');
    }



    text.value=''



}

function careerScience () {
    
    const physicsInput = document.querySelector('.physics');
    physicsGrade = physicsInput.value;
    
    const chemistryInput = document.querySelector('.chemistry');
    chemistryGrade = chemistryInput.value;
    const emathsInput = document.querySelector('.emaths');
    emathsGrade = emathsInput.value;
    const biologyInput = document.querySelector('.biology');
    biologyGrade = biologyInput.value;

    const ictInput = document.querySelector('.ict');
    ictGrade = ictInput.value;
    
    const agricInput = document.querySelector('.agric');
    agricGrade = agricInput.value;
    const cmathsInput = document.querySelector('.cmaths');
    cmathsGrade = cmathsInput.value;
    const englishInput = document.querySelector('.english');
    englishGrade = englishInput.value;
    const intScienceInput = document.querySelector('.intScience');
    intScienceGrade = intScienceInput.value;
    const socialInput = document.querySelector('.social');
    socialGrade = socialInput.value;

    if (physicsGrade === '1' && cmathsGrade === '1') {
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           <option>Heat and Mechanics</option>
           <option>Electricity</option>
           <option>Strength Of Materials</option>
           <option>Thermodynamics</option>
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Mechanical Engineering</h2>`;
            };
        }


    }




};



//DEE BATTERIES