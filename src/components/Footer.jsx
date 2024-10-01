import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">MK Traders</h2>
                        <p className="text-gray-400">
                            At MK Traders, we pride ourselves on being a leading importer of high-quality agro products sourced from the finest farms of India, Pakistan, and China.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
                            <FontAwesomeIcon icon={faPhone} className="text-green-500 text-xl md:mr-4" />
                            <p className="text-gray-400">+94 76 24 25 678</p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-xl md:mr-4" />
                            <a href="mailto:rasproject@gmail.com" className="text-gray-400 hover:text-green-500">
                                rasproject@gmail.com
                            </a>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="https://www.facebook.com/share/HnmWzUNj8FrZSBiD/?mibextid=LQQJ4d"
                                className="text-blue-500 hover:text-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                                href={`https://wa.me/${+94777276471}?text=Hello!%20This%20is%20a%20dummy%20message.`}
                                className="text-green-500 hover:text-green-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                            <a
                                href="home"
                                className="text-pink-500 hover:text-pink-700"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Website Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-white">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="about-us" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-white">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="products" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-white">Products</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4 lg:px-0 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Our Location</h3>
                        <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 text-xl md:mr-4" />
                            <p className="text-gray-400">
                                No :- Colombo Gold Centre, N.H.M.Abdul Cader Mawatha.
                            </p>
                        </div>
                        <div className="mb-4">
                            <iframe
                                title="MK Traders Location"
                                src="https://www.google.com/map/"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>
                <div className="text-center text-gray-400">
                    © {currentYear} All rights reserved. Development with <span className="text-pink-500">❤</span> by{' '}
                    <a
                        href="https://mkabdulazees.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:underline"
                    >
                        Raskan
                    </a>.
                </div>

            </div>
        </footer>
    );
};

export default Footer;