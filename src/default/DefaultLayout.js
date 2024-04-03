import React from 'react'
import '../App.css'
import AppContent from '../component/AppContent'

function DefaultLayout() {
    return (
        <div className='mainpage wrapper'>
            <div>
                <div>
                    <AppContent />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout