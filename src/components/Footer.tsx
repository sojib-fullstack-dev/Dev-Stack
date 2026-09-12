
import fotterimg from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div>
            <div className='border-t border-gray-200 mt-20'>
                <div className='md:flex justify-around my-20 divider-vertical  p-5'>
                    <div className='space-y-4'>
                        <img src={fotterimg} alt="" />
                        <p>Curated tools, technologies, and resources for developers building <br />
                            modern software.</p>
                        <ul className='md:flex gap-6 items-center'>
                            <li className='font-bold'><a href="">Github</a></li>
                            <li className='font-bold'><a href="">Twitter</a></li>
                            <li className='font-bold'><a href="">Linkedln</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>PRODUCT</h2>
                        <ul className='mt-4 space-y-2'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>COMPANY</h2>
                        <ul className='mt-4 space-y-2'>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>LEGAL</h2>
                        <ul className='mt-4 space-y-2'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="mx-8 border-b border-gray-200"></div>
                </div>
                <div className="mx-12 border-b border-gray-200"></div>
                <div className='flex justify-between gap-4 items-center container mx-auto py-6'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-4 items-center'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>

            </div>
        </div>

    );
};


export default Footer;