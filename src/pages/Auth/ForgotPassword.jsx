import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Password reset link sent to ${email}`)
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <header className="auth-header">
          <h1>Forgot password</h1>
          <p>Enter your email to receive a reset link</p>
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

        <button className="cta-primary" type="submit">Send reset link</button>

        <div className="auth-meta">
          <span className="auth-note">We’ll email you a secure link to reset your password.</span>
          <Link to="/login">Back to login</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword


