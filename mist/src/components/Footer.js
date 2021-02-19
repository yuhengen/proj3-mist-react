import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FooterPage() {
    return (
        <footer className="footer d-flex flex-column justify-content-center align-items-center p-4" style={{
            backgroundColor: '#343a40',
            color: 'white'
        }}>
            <div>
                <FontAwesomeIcon icon={['fab', 'apple']} />
            </div>
            <div className="mb-3 d-flex">
                <a href="#" className="mr-5" style={{ color: 'white' }}>Privacy Policy</a>
                <a href="#" className="mr-5 ml-5" style={{ color: 'white' }}>Legal</a>
                <a href="#" className="ml-5" style={{ color: 'white' }}>Agreement</a>
            </div>
            <div className="mb-1 mt-2">
                <span> &copy; 2021 MiST</span>
            </div>
            <div className="mt-1">
                <span>Powered by MiST Corp.</span>
            </div>
        </footer>
    )
}