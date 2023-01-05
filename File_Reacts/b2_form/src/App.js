import react,{ useState } from "react";
import reactDom from "react-dom";

function App(props) {
  const [user, setUser] = useState({
    name : "",
    password: "",
    age: 0
  });

  function handleSubmit(event){
    event.preventDefault();
    console.log("submit");
    console.log(user);
  }

  const handleChange = event =>{
    // event = JSON.parse(event);
    // console.log(event);
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]:value
    })
    console.log(user)
  }

  return (
    <div className="container">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <legend>Form title</legend>
        <div className="form-group">

          <input 
          type="text" 
          className="form-control" 
          placeholder="UserName"
          name="name"
          value={user.name}
          onChange={(e)=>handleChange(e)}
          />
          <br/>

          <input 
          type="password"
          className="form-control" 
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          />
          <br/>

          <input 
          type="number" 
          className="form-control" 
          style={{width:"100px"}}
          min={0} step={1} 
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleChange}
          />

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>      
    </div>
    
    );
  }
  export default App;
  