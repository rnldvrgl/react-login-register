import React from 'react'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link href="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
