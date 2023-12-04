function selectProgram() {
        const text= document.querySelector('.program');
    let program = text.value;
     program = program.toUpperCase();


    if (program === 'GENERAL SCIENCE') {

    document.querySelector('.program-info').innerHTML =
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <h3>Elective Subjects</h3>
    <p><label>Physics</label><input type='number' min='1' max='9'></p>
    <p><label>Chemistry</label><input type='number' min='1' max='9'></p>
    <p><label>E-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>Biology</label><input type='number' min='1' max='9'></p>
    <p><label>ICT</label><input type='number' min='1' max='9'></p>
    <p><label>Agriculture</label><input type='number' min='1' max='9'></p>
    <h3>Core Subjects</h3>
    <p><label>C-Maths</label><input type='number' min='1' max='9'></p>
    <p><label>English</label><input type='number' min='1' max='9'></p>
    <p><label>Int-Science</label><input type='number' min='1' max='9'></p>
    <p><label>Social Studies</label><input type='number' min='1' max='9'></p>
    <button>Submit</button>`

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
