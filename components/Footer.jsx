import React from 'react'

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}

export default function Footer() {
    return (
        <p className="text-center" style={FooterStyle}>Designed & coded by <a href="https://pornhub.com" target="_blank" rel="noopener noreferrer">Amare Dayrit</a></p>
    )
}
