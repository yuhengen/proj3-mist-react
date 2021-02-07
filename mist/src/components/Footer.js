import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FooterPage() {
    return (
        <footer className="footer d-flex flex-column justify-content-center align-items-center p-3 mt-3" style={{ backgroundColor: '#343a40' }}>
            <div>
                <FontAwesomeIcon icon={['fab', 'apple']} />
            </div>
            <div>
                <span> &copy; 2021 MiST</span>
            </div>
            <div>
                <span>Powered by MiST Corp.</span>
            </div>
            <div className="m-2 d-flex">
                <a href="#" className="mr-5">Privacy Policy</a>
                <a href="#" className="mr-5 ml-5">Legal</a>
                <a href="#" className="ml-5">Agreement</a>
            </div>
        </footer>
    )
}