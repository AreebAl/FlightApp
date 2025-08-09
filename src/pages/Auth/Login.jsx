import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder submit
    alert(`Logging in as ${email}`)
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <header className="auth-header">
          <h1>Welcome back</h1>
          <p>Log in to continue booking flights</p>
        </header>

        <form className="auth-card" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="cta-primary" type="submit">Log In</button>

          <div className="auth-meta">
            <Link to="/forgot-password">Forgot password?</Link>
            <span>
              New here? <Link to="/">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login


