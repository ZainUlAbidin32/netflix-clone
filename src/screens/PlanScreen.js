import React, { useState } from 'react'
import "./PlanScreen.css"

function PlanScreen() {

    const [currentPlan, setCurrentPlan] = useState(null);

    const handlePlan = (plan) => {
        setCurrentPlan(plan); 
    }
  return (
    <div className='planScreen'>
        <div className="planScreen_plans">
            <div className="planScreen_plan">
                <div className="planScreen_info">
                    <h5>Premium</h5>
                    <h6>4K + HDR</h6>
                </div>
                <button onClick={() => handlePlan("premium")} className={currentPlan === 'premium'? 'current-plan' : ''}>
                    {currentPlan === 'premium'? "Current Plan" : "Premium"}
                </button>
            </div>
            <div className="planScreen_plan">
                <div className="planScreen_info">
                    <h5>Standard</h5>
                    <h6>1080p</h6>
                </div>
                <button onClick={() => handlePlan("standard")} className={currentPlan === 'standard'? 'current-plan' : ''}>
                {currentPlan === 'standard'? "Current Plan" : "Standard"}
                </button>
            </div>
            <div className="planScreen_plan">
                <div className="planScreen_info">
                    <h5>Basic</h5>
                    <h6>720p</h6>
                </div>
                <button onClick={() => handlePlan("basic")} className={currentPlan === 'basic'? 'current-plan' : ''}>
                {currentPlan === 'basic'? "Current Plan" : "Basic"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default PlanScreen