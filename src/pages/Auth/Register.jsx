import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    if (!agree) {
      alert('Please agree to terms to continue')
      return
    }
    alert(`Registering ${fullName}`)
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <header className="auth-header">
          <h1>Create account</h1>
          <p>Join FlightApp to start booking smarter</p>
        </header>

        <form className="auth-card" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

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

          <div className="field">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="field" style={{display:'flex', alignItems:'center', gap:'8px', marginTop: '14px'}}>
            <input id="agree" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <label htmlFor="agree" style={{margin:0}}>I agree to the Terms and Privacy Policy</label>
          </div>

          <button className="cta-primary" type="submit">Register</button>

          <div className="auth-meta">
            <span>Already have an account? <Link to="/login">Log in</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register


