import React from 'react'

function PaymentSuccess() {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon" aria-hidden>✅</div>
        <h2>Payment successful</h2>
        <p>Your booking is confirmed. Your boarding pass is ready.</p>
        <div className="success-actions">
          <a className="bar-btn" href="/boarding-pass">View boarding pass</a>
          <a className="bar-btn alt" href="/main">Back to home</a>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess


