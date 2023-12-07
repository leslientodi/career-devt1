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
    <p><label>Geography</label><input class='geography' type='number' min='1' max='9'></p>
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
    const geographyInput = document.querySelector('.geography');
    geographyGrade = geographyInput.value;
    if (chemistryGrade === "1" && biologyGrade === "1" && intScienceGrade < 3 && cmathsGrade === "1" && englishGrade < 3){
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Human Anatomy</option>
           <option>Organic Chemistry</option>
           <option>Lab Equipments</option>


           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Human Biology(Medicine) </h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Pharmacy</h2>`;
            }
            else if (sb.selectedIndex === 2){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Biomedical Engineering</h2>`;
            }
        
            else {
                console.log('invalid')
            }
        }
    }
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
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Mechanical Engineering</h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Electrical Engineering</h2>`;
            }
            else if (sb.selectedIndex === 2){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Civil Engineering</h2>`;
            }
            else if (sb.selectedIndex === 3){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Aerospace Engineering</h2>`;
            }
            else {
                console.log('invalid')
            }
        }


    }
    else if (physicsGrade === '1' && emathsGrade === '1' || ictGrade === '1' && physicsGrade < 3 && emathsGrade < 3 ) {
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           <option>Satellites</option>
           <option>Computers</option>
           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Telecommunication Engineering</h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Computer Engineering</h2>`;
            }
        
            else {
                console.log('invalid')
            }
        }
    }
    else if (chemistryGrade === '1' && cmathsGrade < 3 && intScienceGrade < 3 && physicsGrade < 3){
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Physical Chemistry</option>
           <option>Organic Chemistry</option>
           <option>Inorganic Chemistry</option>

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Chemical Engineering </h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Petroleum Engineering</h2>`;
            }
            else if (sb.selectedIndex === 2){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Biochemistry</h2>`;
            }
        
            else {
                console.log('invalid')
            }
        }
    }
    else if (physicsGrade < 4 && emathsGrade < 4 && englishGrade < 4 || ictGrade === '1' && physicsGrade < 4 && emathsGrade < 4 && englishGrade < 4) {
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Hacking</option>
           <option>Computers</option>
           <option>Data and Statistics</option>

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Cybersecurity </h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Computer Science</h2>`;
            }
            else if (sb.selectedIndex === 2){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Data Science</h2>`;
            }
        
            else {
                console.log('invalid')
            }
        }
    }
    else if (intScienceGrade === '1' && biologyGrade < 3 && chemistryGrade < 3 && cmathsGrade < 3 ){
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Human Eye</option>
           <option>Dentition</option>
           <option>Animal life</option>
           <option>Plant Anatomy</option>
           <option>The skin</option>
           <option>The brain and cognitive abilities</option>
           <option>Food and Nutrition</option>
           

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Optometry</h2>
                `;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Dentistry</h2>`;
            }
            else if (sb.selectedIndex === 2){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Vertinary</h2>`;
            }
            else if (sb.selectedIndex === 3){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Horticulture/h2>`;
            }
            else if (sb.selectedIndex === 4){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Dermatology</h2>`;
            }
            else if (sb.selectedIndex === 5){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Psychology</h2>`;
            }
            else if (sb.selectedIndex === 6){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Food Science</h2>;
                <h2>Bsc Dietetics</h2>`;
            }
            else {
                console.log('invalid')
            }
        }
    }
    
    else if (cmathsGrade === '1' && emathsGrade === '1'){
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Statistics</option>
           <option>General Mathematics</option>
           

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Statistics</h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Mathematics</h2>`;
            }
       
        
            else {
                console.log('invalid')
            }
        }
    }
    else if (intScienceGrade === '1' && biologyGrade < 3 || geographyGrade === '1') {
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Landscapes and Topography</option>
           <option>Weather and Climate</option>
           <option>Rocks and Minerals</option>
           

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Geomatics</h2>
                <h2>Bsc Land Surveying</h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Meteorology</h2>`;
            }
            else if (sb.selectedIndex === 2){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Geology</h2>`;
            }
            
            else {
                console.log('invalid')
            }
        }
    }
    else if (englishGrade === "1" && socialGrade === "1"){
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>The Constitution</option>
           <option>Politics</option>
           <option>Societal norms</option>
           <option>Human affairs</option>
           

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Llb Law</h2>
                `;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Political Science</h2>`;
            }
            else if (sb.selectedIndex === 2){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Sociology</h2>`;
            }
            else if (sb.selectedIndex === 3){
                document.querySelector('.entire').innerHTML=`
                <h2>BA Journalism</h2>`;
            }
            
            else {
                console.log('invalid')
            }
        }
    }
    
    else if (agricGrade === "1"){
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Animal husbandry</option>
           <option>Crop production</option>
           

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Dairy and meat production</h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Agriculture</h2>;
                <h2>Bsc Agricultural Engineering</h2>`;
            }
       
        
            else {
                console.log('invalid')
            }
        }

    }
    else {
        document.querySelector('.entire').innerHTML = `
        No fields matching your results
        
        `
    }
    



};



