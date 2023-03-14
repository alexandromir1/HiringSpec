import React from 'react'
import Hiring from './../styles/imgs/svg.png'

const Main = () => {
    return (
        <main class='w-screen h-full bg-body pt-28 big:pt-0 truncate big:mt-[-1px] overflow-hidden'>
                <div class='container mx-auto h-full big:pt-20'>
                    <div class='flex justify-center big:flex-wrap big:mt-[-1px]'>
                        <div style={{color:"black"}} class='flex-col flex bg-white rounded-[32px] items-center big: big:items-center biger:mr-20 md:mr-0'>
                            <img class='pt-[34px] px-[88px] big:px-[10px] big:pt-[10px]' src={Hiring}></img>
                            <h2 class="font-main text-[80px] font-bold uppercase pt-[20px] text-center big:text-6xl">hiring<p />spec</h2>
                        </div>
                        <div style={{color:"black"}} class='bg-btn rounded-[32px] big:w-[330px] biger:w-[424px] md:w-[330px] md:pt-4 md:mt-14 biger:flex-col biger:text-center items-center ml-8 big:ml-0 big:mt-5 big:h-full pl-14 big:pl-0 biger:scale-110'>
                            <h2 class='font-rail font-semibold text-[60px] big:text-5xl leading-[60px] pt-12 big:pt-2 big:pl-3 mr-[226px] big:mr-[0px] biger:pl-0 big:pr-[0px] big:w-screen biger:w-full'>Полный цикл <p />рекрутинга</h2>
                            <h3 class='pt-10 biger:pl-0 big:pt-5 big:pl-4 text-xl big:w-[345px] w-[450px] h-[124px] break-words whitespace-normal font-rail font-medium big:mb-1 mb-16 biger:w-full'>Поиск, отбор и привлечение кандидатов на ваши вакансии в Казахстане и Узбекистане</h3>
                            <div class='bg-black w-44 h-16 border big:w-[240px] md:w-[240px] biger:w-[170px] biger:mx-auto biger:mb-12 md:mb-8 biger:mt-4 md:mt-2 big:ml-[45px] text-white border-black hover:border-white rounded-xl flex justify-center items-center hover:text-black ease-in-out duration-300 hover:bg-white'>
                                <a href='#' class='font-semibold text-sm hover:text-base ease-in-out duration-300 '>Оставить заявку</a>
                            </div>
                        </div>
                    </div>
                    <div class='container'>
                        <div>

                        </div>
                    </div>
                </div>
            </main>
    )
}

export default Main