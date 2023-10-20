import Link from 'next/link'
import React from 'react'

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url('/bg.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <h1 className="text-center main-title">login / register page</h1>
            <p className="text-center main-para">join us now and don&apos;t waste time</p>
            <div className="text-center buttons">
                <Link href="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link href="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}
