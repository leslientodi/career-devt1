function selectProgram() {
        const text= document.querySelector('.program');
    let program = text.value;
     program = program.toUpperCase();


    if (program === 'GENERAL SCIENCE') {

    document.querySelector('.program-info').innerHTML =
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    
    <div>
        
        <ul>
            <li class="courses"><h3>Elective Subjects</h3></li>
            <li class="courses"><label>Physics</label><input class='physics' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>Chemistry</label><input class='chemistry' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>E-Maths</label><input class='emaths' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>Biology</label><input class='biology' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>ICT</label><input class='ict' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>Agriculture</label><input class='agric' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>Geography</label><input class='geography' type='number' min='1' max='9'></li>
        </ul>
        
    
       
    
       
       <ul>
            <li class="courses"><h3>Core Subjects</h3></li>
            <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9'></li>
            <br>
            <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9'></li>
       </ul>
       
    </div>
    <button onclick="careerScience();">submit</button>`
   
    

    }else if (program === 'GENERAL ARTS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2>
    
    <div>
       <ul>
            <h3>Elective Subjects</h3>
            <li class="courses"><label>Government</label><input class='government' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>History</label><input class='history' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>E-Maths</label><input class='emaths' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Economics</label><input class='economics' type='number' min='1' max='9'></li>
        </ul>
        <ul>    
            <li class="courses"><h3>Core Subjects</h3>
            <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9'></li>
        </ul>
    </div>
    <button onclick="careerGeneralArts();">Submit</button>`;
    }
    else if (program === 'BUSINESS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <div>
        <ul>
            <li class="courses"><h3>Elective Subjects</h3>
            <li class="courses"> <label>Financial Accounting</label><input class='fa' type='number' min='1' max='9'></li><br>
            <li class="courses"> <label>Business Management</label><input class='bm' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>E-Maths</label><input class='emaths' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Economics</label><input class='economics' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Cost Accounting</label><input class='costing' type='number' min='1' max='9'></li>
        </ul>
        <ul>
            <li class="courses"><h3>Core Subjects</h3>
            <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9'></li>
        </ul>
    </div>
    <button onclick="careerBusiness();">Submit</button>`;
    }
    else if (program === 'HOME ECONOMICS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <div>
        <ul>
            <li class="courses"><h3>Elective Subjects</h3></li>
            <li class="courses"><label>Catering and Sewing</label><input class='cas' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Food and Nutrition</label><input class='fan' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Management in Living</label><input class='mil' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Biology</label><input class='biology' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Chemistry</label><input class='chemistry' type='number' min='1' max='9'></li>
        </ul>
        <ul>
            <li class="courses"><h3>Core Subjects</h3></li>
            <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9'></li>
        </ul>
    </div>
    <button onclick="careerHomeEcons();">Submit</button>`;
    }
    else if (program === 'VISUAL ARTS') {

    document.querySelector('.program-info').innerHTML = 
    `<p>You are offering ${program}<p> <h2>Now Enter Your Grades</h2> 
    <div>
        <ul>
            <li class="courses"><h3>Elective Subjects</h3></li>
            <li class="courses"><label>General knowledge in Art</label><input class='gka' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Textiles</label><input class='textiles' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Picture making</label><input class='picture' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Ceramics & Sculpture</label><input class='ceramics' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Basketry</label><input class='basketry' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Graphic Design</label><input class='graphic' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Leather work</label><input class='leather' type='number' min='1' max='9'></li>
        </ul>
        <ul>
            <li class="courses"><h3>Core Subjects</h3>
            <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9'></li><br>
            <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9'></li>
        </ul>
    </div>
    <button onclick="careerVisualArts();">Submit</button>`;
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
    if (chemistryGrade < 3  && intScienceGrade < 3 && cmathsGrade === "1" && englishGrade < 3 && emathsGrade < 3 && englishGrade > 0 && emathsGrade > 0 && chemistryGrade > 0  && intScienceGrade > 0){
        if (biologyGrade === '1' && physicsGrade > 1){
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
        else if (physicsGrade === '1' && biologyGrade > 1){
            
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
        else {
            document.querySelector('.entire').innerHTML = `
                <h2>Select your field of interest</h2>
                <select class="fields-HM">
                   <option>Heat and Mechanics</option>
                   <option>Electricity</option>
                   <option>Strength Of Materials</option>
                   <option>Thermodynamics</option>
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
                    else if (sb.selectedIndex === 4){
                        document.querySelector('.entire').innerHTML=`
                        <h2>Bsc Human Biology(Medicine) </h2>`;
                    }
                    else if (sb.selectedIndex === 5){
                        document.querySelector('.entire').innerHTML=`
                        <h2>Bsc Pharmacy</h2>`;
                    }
                    else if (sb.selectedIndex === 6){
                        document.querySelector('.entire').innerHTML=`
                        <h2>Bsc Biomedical Engineering</h2>`;
                    }
                    else {
                        console.log('invalid')
                    }
                }
        }
            
                
        
        
            

        
    }
    
    else if (physicsGrade === '1' && emathsGrade === '1' || ictGrade === '1' && physicsGrade < 3 && emathsGrade < 3 && physicsGrade > 0 && emathsGrade > 0 ) {
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
    else if (chemistryGrade === '1' && cmathsGrade < 3 && intScienceGrade < 3 && physicsGrade < 3 && cmathsGrade > 0 && intScienceGrade > 0 && physicsGrade > 0){
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
    else if (physicsGrade < 4 && emathsGrade < 4 && englishGrade < 4 && emathsGrade > 0 && englishGrade > 0 && physicsGrade > 0|| ictGrade === '1' && physicsGrade < 4 && emathsGrade < 4 && englishGrade < 4 && emathsGrade > 0 && englishGrade > 0 && physicsGrade > 0) {
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
    else if (intScienceGrade === '1' && biologyGrade < 3 && chemistryGrade < 3 && cmathsGrade < 3 && biologyGrade > 0 && chemistryGrade > 0 && cmathsGrade > 0 ){
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
    else if (intScienceGrade === '1' && biologyGrade < 3 && biologyGrade > 0 || geographyGrade === '1') {
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

function careerGeneralArts (){
    const governmentInput = document.querySelector('.government');
    governmentGrade = governmentInput.value;
    
    const historyInput = document.querySelector('.history');
    historyGrade = historyInput.value;
    const emathsInput = document.querySelector('.emaths');
    emathsGrade = emathsInput.value;
    const economicsInput = document.querySelector('.economics');
    economicsGrade = economicsInput.value;
   

   
    const cmathsInput = document.querySelector('.cmaths');
    cmathsGrade = cmathsInput.value;
    const englishInput = document.querySelector('.english');
    englishGrade = englishInput.value;
    const intScienceInput = document.querySelector('.intScience');
    intScienceGrade = intScienceInput.value;
    const socialInput = document.querySelector('.social');
    socialGrade = socialInput.value;
    
    if (governmentGrade === '1' && englishGrade=== '1' && socialGrade === '1' && historyGrade < 3 && historyGrade > 0 ){
        document.querySelector('.entire').innerHTML=`
        <h2>LLB LAW</h2>`
    }

    else if (cmathsGrade < 3 && economicsGrade < 3 && cmathsGrade > 0 && economicsGrade > 0){
        document.querySelector('.entire').innerHTML=`
        <h2>Bsc Economics</h2>`
    }
    else {
        document.querySelector('.entire').innerHTML=`
        No Career matches your info`
    }

};

function careerBusiness (){
    const faInput = document.querySelector('.fa');
    faGrade = faInput.value;
    
    const bmInput = document.querySelector('.bm');
    bmGrade = bmInput.value;
    const emathsInput = document.querySelector('.emaths');
    emathsGrade = emathsInput.value;
    const economicsInput = document.querySelector('.economics');
    economicsGrade = economicsInput.value;
    const costingInput = document.querySelector('.costing');
    costingGrade = costingInput.value;
    
   
    const cmathsInput = document.querySelector('.cmaths');
    cmathsGrade = cmathsInput.value;
    const englishInput = document.querySelector('.english');
    englishGrade = englishInput.value;
    const intScienceInput = document.querySelector('.intScience');
    intScienceGrade = intScienceInput.value;
    const socialInput = document.querySelector('.social');
    socialGrade = socialInput.value;

    if (bmGrade === '1' && emathsGrade < 3 && cmathsGrade < 3 && faGrade < 3 && costingGrade < 3 && emathsGrade > 0 && cmathsGrade > 0 && faGrade > 0 && costingGrade > 0){
        document.querySelector('.entire').innerHTML=`
        <h2>Business Administration(Banking/Accounting/Finance)</h2>`

    }
    else if (economicsGrade === '1' ){
        document.querySelector('.entire').innerHTML=`
         <h2>Economics</h2>`

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
    else {
        document.querySelector('.entire').innerHTML=`
        No Career matches your info`
    }
};

function careerHomeEcons(){
    const casInput = document.querySelector('.cas');
    casGrade = casInput.value;
    const fanInput = document.querySelector('.fan');
    fanGrade = fanInput.value;
    const milInput = document.querySelector('.mil');
    milGrade = milInput.value;
    const biologyInput = document.querySelector('.biology');
    biologyGrade = biologyInput.value;
    const chemistryInput = document.querySelector('.chemistry');
    chemistryGrade = chemistryInput.value;
    
    
   
    const cmathsInput = document.querySelector('.cmaths');
    cmathsGrade = cmathsInput.value;
    const englishInput = document.querySelector('.english');
    englishGrade = englishInput.value;
    const intScienceInput = document.querySelector('.intScience');
    intScienceGrade = intScienceInput.value;
    const socialInput = document.querySelector('.social');
    socialGrade = socialInput.value;

    if (casGrade === '1' && milGrade < 3 && milGrade > 0){
        document.querySelector('.entire').innerHTML=`
         <h2>Fashion Design</h2>
         <h2>BA Industrial Arts</h2>`
    }
    else if (fanGrade === '1' && chemistryGrade < 4 && chemistryGrade > 0){
        document.querySelector('.entire').innerHTML=`
         <h2>Bsc Dietetics</h2>
         <h2>Bsc food science</h2>`
    }
    else if (biologyGrade === '1' && intScienceGrade < 4 && cmathsGrade < 4 && intScienceGrade > 0 && cmathsGrade > 0){
        document.querySelector('.entire').innerHTML = `
        <h2>Select your field of interest</h2>
        <select class="fields-HM">
           
           <option>Physiology</option>
           <option>Reproduction</option>
           

           
        
        
        
        
        </select>
        <button class="submit"
        
        >Submit</button>`

        const btn = document.querySelector('.submit');
        const sb = document.querySelector('.fields-HM');

        btn.onclick = (event) => {
            if (sb.selectedIndex === 0){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Nursing</h2>`;
            }
            else if (sb.selectedIndex === 1){
                document.querySelector('.entire').innerHTML=`
                <h2>Bsc Midwifery</h2>
                `;
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
    else {
        document.querySelector('.entire').innerHTML=`
        No Career matches your info`
    }

}


function careerVisualArts (){
    const gkaInput = document.querySelector('.gka');
    gkaGrade = gkaInput.value;
    
    const textilesInput = document.querySelector('.textiles');
    textilesGrade = textilesInput.value;
    const pictureInput = document.querySelector('.picture');
    pictureGrade = pictureInput.value;
    const ceramicsInput = document.querySelector('.ceramics');
    ceramicsGrade = ceramicsInput.value;
    const graphicInput = document.querySelector('.graphic');
    graphicGrade = graphicInput.value;
    const basketryInput = document.querySelector('.basketry');
    basketryGrade = basketryInput.value;
    const leatherInput = document.querySelector('.leather');
    leatherGrade = leatherInput.value;
    
    
   
    const cmathsInput = document.querySelector('.cmaths');
    cmathsGrade = cmathsInput.value;
    const englishInput = document.querySelector('.english');
    englishGrade = englishInput.value;
    const intScienceInput = document.querySelector('.intScience');
    intScienceGrade = intScienceInput.value;
    const socialInput = document.querySelector('.social');
    socialGrade = socialInput.value;

    if (gkaGrade < 3 && gkaGrade > 0){
        document.querySelector('.entire').innerHTML=`
        <h2>BA Fine Arts</h2>`
    }
    else if (textilesGrade < 3 && textilesGrade > 0 || pictureGrade < 3 && pictureGrade > 0 || ceramicsGrade < 3 && ceramicsGrade > 0 || leatherGrade < 3 && leatherGrade > 0 || basketryGrade < 3 && basketryGrade > 0){
        document.querySelector('.entire').innerHTML=`
        <h2>BA Industrial Arts</h2>`

    }
    else if (graphicGrade < 3 && graphicGrade > 0){
        document.querySelector('.entire').innerHTML=`
        <h2>BA Communication Design</h2>`
    } 
    
    else {
        document.querySelector('.entire').innerHTML=`
        No Career matches your info`
    }

}

