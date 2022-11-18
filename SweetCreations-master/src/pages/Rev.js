import './Recipes.css'

export default function Review() {
    function handleClick() {
        const userName = document.querySelector('input[id="userName"]')
        const userRev = document.querySelector('textarea[id="userRev"]')
        const ul = document.querySelector('#myUL')
        var un = userName.value;
        var ur = userRev.value;
          if((un !== '') && (ur !== '')){
              const createEl = document.createElement('li');
              ul.appendChild(createEl);
              createEl.innerHTML = un + ': \n' + ur;
              //createEl.innerHTML = ur;
              userName.value = '';
              userRev.value = '';
          }
      }
      
      return (
        <>
        <div id="div_list">
          <h2>Leave a Review</h2>
          Name: <input type="text" name="item" id="userName"/>
          <br></br>
          <br></br>
          Review: <textarea rows="4" cols="50" 
            type="text" 
            name="review" 
            id='userRev'
            /*value={inputs.review || ""}
            onChange={handleChange}*/
          />
          <br></br>
          <button id="addBtn" class="butt" onClick={handleClick}>Submit</button>
        </div>
        <ul id="myUL" class='list'></ul>
        </>
      )
}