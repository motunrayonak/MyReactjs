import './App.css';

function App() {
  return (
    <div>
      <h2>LIONS CLUB CONVENSION - OSOGBO 2025</h2>
      <p>The annual Lions club convension held in osogbo brought together dedicated members from accross nigeria to share ideas, celebrate service, and plan for future inpact.</p>

      <br/>
      <p>
        Learn more About Lions Club
     <a href = "https://en.wikipedia.org/wiki/lions_clubs_international">Lion History</a> 
      </p>

      <div>
        <h4>Convension Hightligh</h4>
        <ol>
          <li>Opening Ceremony & Parade</li>
          <li>Community Service Awards</li>
          <li>Youth Empowerment Forum</li>
        </ol>

        <h4>What I Packed</h4>
        <ul>
                  <li>Activity Jacket</li>
                  <li>Membership Badge</li>
                  <li>clothes</li>
                  <li>Sunshade</li>
                  <li>Money</li>
                  <li>notebook and pen</li>
                  <li>Provisions</li>
          </ul>

          <h4> Full Event Schedule</h4>
          <table border = "1">
            <thead>
              <tr>
                <th> Day </th>
                <th> Activities </th>
                <th> Location </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> Day 1</td>
                <td>
                  Registration <br />
                  Sport Activities <br />
                  Visit To Amala Spot <br />
                  Welcome Night 
                </td>
                <td> Osogbo city/Leo Hall</td>
              </tr>

              <tr>
                <td>Day 2</td>
                <td>
                  Osogbo Sacred Groove <br />
                  Parade <br />
                  Cultural Night
                </td>
                <td>Osogbo Groove/ Freedom Park/Leo Hall</td>
              </tr>

              <tr>
                <td>Day 3</td>
                <td>
                 Delegatory Meeting <br />
                  Trip To Erin Ijesha <br />
                  Dinner & Award Night
                </td>
                <td> Meeting Hall/ Erin Ijesha</td>
              </tr>

              <tr>
                <td>Day 4</td>
                <td>Departure</td>
              </tr>
            </tbody>

            </table>

      </div>

      <h4>Tell Us About Your Convention Experience</h4>
      <form>
        <fieldset>
          <legend>Participant Feedback</legend>

          <label>Name</label>
          <input type ="text" placeholder = "Enter your name"/> <br/> <br/>

          <label>Email</label>
          <input type = "text" Placeholder = "Enter your Email"/> <br/> <br/>

          <label> Share Your Experience:</label><br/>
          <textarea rows="4" cols="40" placeholder="Type here..."></textarea> <br/> <br/>
          
          <label>How Would You Rate The Convention?</label> <br/>
          <input type ="radio" name = "rating"/> Excellent
          <input type = "radio" name = "rating"/> Good
          <input type = "radio" name = "rating"/> Fair
          <br/> <br/>

          <label> What Aspect Did You Enjoy?</label> <br/>
          <input type ="checkbox"/> Networking
          <input type = "checkbox"/> Seminars
          <input type = "checkbox"/> Cultural Displays
          <br/> <br/>

          <label> Arrival Date:</label>
          <input type = "date"/> <br/> <br/>

          <label> Membership level:</label>
          <select>
            <option value ="new member">New Member</option>
            <option value = "Reguar member">Regular member</option>
            <option value = "District officer"> District Officer</option>
            </select> <br/><br/>

            <input type = "Submit" value = "Submit Feedback"/>

          </fieldset>
      </form>

    </div>
  );
}

export default App;
