import myImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className=' lg:flex gap-10 my-10 items-center container mx-auto'>
            <div className='space-y-6 '>
                <h1 className='text-6xl font-bold'>Build Your Ideal<span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'> Development Stack</span></h1>
                <p className='text-md text-gray-500'>Explore frontend, backend, database, and tooling options,<br /> compare them side by side, and put together the stack that fits your <br />
                    next project.</p>
                <div className='items-center'>
                    <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white rounded-2xl mr-4">Explore Technologies</button>
                    <button className="btn rounded-2xl px-10 text-gray-500">Learn More</button>
                </div>
            </div>
            <div>
                <img src={myImg} alt="" className='w-3xl h-full' />
            </div>
        </div>
    );
};

export default Banner;