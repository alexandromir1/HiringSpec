import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="h-[11%] w-full bg-body w-screen">
            <header class='fixed w-full bg-body'>
                <div class='container w-9/12 big:w-11/12 flex mx-auto pt-[21px] justify-between' style={{color:"white"}}>
                    <Link to="/about" class='font-bold text-xl hover:text-btn ease-in-out duration-300 hover:scale-125'>HiringSpec</Link>
                    <nav class='big:hidden'>
                        <ul class='flex items-center font-medium text-base'>
                            <li class='mr-10 hover:scale-125 ease-in-out duration-300'>
                                <Link to='/'>Кого нанимаем</Link>
                            </li>
                            <li class='mr-10 hover:scale-125 ease-in-out duration-300'>
                                <Link to='/'>Как работаем</Link>
                            </li>
                            <li class='hover:scale-125 ease-in-out duration-300'>
                                <Link to='/'>Связаться с нами</Link>
                            </li>
                        </ul>
                    </nav>
                    <div class='big:hidden w-44 h-16 border border-white rounded-xl flex justify-center items-center hover:text-black ease-in-out duration-300 hover:bg-btn'>
                        <Link to='#' class='font-semibold text-sm hover:text-base ease-in-out duration-300'>Оставить заявку</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home