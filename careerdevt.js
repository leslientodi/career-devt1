function selectProgram() {
        const text= document.querySelector('.program');
    const program = text.value;


    if (program === 'General Science') {

    document.querySelector('.program-info').innerHTML =
    `<p>You are offering General Science<p> <h2>Now Enter Your Grades</h2> 
    <label>Physics</label>
    <input type='number' min='1' max='9'>`;

    }else if (program === 'General Arts') {

    document.querySelector('.program-info').innerHTML = '<p>You are offering General Arts</p>';
    }
    else if (program === 'Business') {

    document.querySelector('.program-info').innerHTML = '<p>You are offering Business</p>';
    }
    else if (program === 'Home Economics') {

    document.querySelector('.program-info').innerHTML = '<p>You are offering Home Economics</p>';
    }
    else if (program === 'Visual Arts') {

    document.querySelector('.program-info').innerHTML = '<p>You are offering Visual Arts</p>';
    } 
    else {
    console.log('invalid');
    }



    text.value=''



}
