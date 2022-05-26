import React, { useState } from 'react';
import './styles.css';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("") 

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit", {email, password});
    };


    return(
     <div id="login"> 
       <h1 className="title">Login do Sistema</h1>
          <form className="form"  onSubmit={handleSubmit}>
               <div className="field">
                   <label htmlFor="email">Email</label>
                   <input 
                   type="email" 
                   name="email" 
                   id="email" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)}
                   />
               </div>

               <div className="field"> 
                  <label htmlFor="Password">Senha</label>
                  <input 
                  type="Password" 
                  name="Password" 
                  id="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div className="actions">
                  <button type="submit">Entrar</button>
              </div>

            </form>    
          </div>
    )

}

export default LoginScreen;