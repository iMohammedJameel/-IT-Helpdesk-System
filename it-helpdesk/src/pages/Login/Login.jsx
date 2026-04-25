import { useState } from "react";
import loginImg from "../../assets/loginImag.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogged, setKeepLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Left: Form */}
        <div className="login-form-side">
          <h2 className="login-title">WELCOME BACK</h2>
          <p className="login-subtitle">Login With Orchida mail</p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label>Email<span className="required">*</span></label>
              <input
                type="email"
                placeholder="example@orchida-soft.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-field">
              <label>Password<span className="required">*</span></label>
              <input
                type="password"
                placeholder="@B123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-options">
              <label className="keep-logged">
                <input
                  type="checkbox"
                  checked={keepLogged}
                  onChange={(e) => setKeepLogged(e.target.checked)}
                />
                Keep Me Logged in
              </label>
              <a href="#" className="forgot-link">Forgot Your Password?</a>
            </div>

            <button type="submit" className="login-btn">Submit</button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="login-image-side">
          <img src={loginImg} alt="Ticketing System" />
          <div className="login-image-label">Ticketing System</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
