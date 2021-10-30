import React from 'react';
import logo from '../../../images/logo.png'
const Footer = () => {
    return (
        <>
            <div className="pt-5 pb-3 text-white" style={{ backgroundColor: '#284b63', }}>
                <div className="row container mx-auto" data-aos="fade-up"
                    data-aos-duration="600">
                    <div className="col text-start">
                        <img src={logo} alt="" style={{ width: '120px' }} />
                        <p className="mt-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta unde atque necessitatibus voluptatibus. Vero perspiciatis nulla repellendus blanditiis sunt, similique reprehenderit ex corporis qui reiciendis neque tempora! Numquam dolorem quo impedit, commodi libero doloremque quia sunt? Obcaecati praesentium adipisci, explicabo cupiditate quis ratione, placeat modi id eaque itaque quasi neque? Blanditiis, ipsa! Exercitationem modi, tenetur quae necessitatibus suscipit, officiis, nesciunt nam facere iusto eum quisquam maxime aliquam veniam fugit.</p>
                    </div>
                    <div className="col text-start ps-5">
                        <h3>Our Socail Media</h3>
                        <a className="text-white fs-5 text-decoration-none" href="#">Facebook</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Twitter</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Linkedin</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Instagram</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Youtube</a>
                    </div>
                    <div className="col text-start">
                        <h3>Our sub workshops</h3>
                        <a className="text-white fs-5 text-decoration-none" href="#">Road No. 25</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Kandir Par</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Ullar Puskani</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Harikhula</a><br />
                        <a className="text-white fs-5 text-decoration-none" href="#">Amtala</a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#17354a' }}>
                <p className="text-center py-4 text-white m-0">© Copyright of this site 2022 all rights resived by The Quick Start Workshop</p>
            </div>
        </>
    );
};

export default Footer;