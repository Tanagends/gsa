'use client';

import Link from "next/link";

const links = [
    {
        name:"About Us",
        link:'/#about-us'
    },
    {
        name:"Media",
        link:'/media'
    },
    {
        name:"Programs",
        link:'/programs'
    },
    {
        name:"Toolkit",
        link:'/toolkit'
    },
    {
        name:"Join US",
        link:'/#join-us'
    },
    {
        name:"Contact Us",
        link:'/#contact-us'
    },
]

//to handle click of item


const Navbar = () => {
    let n:number = 0;
  return (
    <header>
        <nav className="flex px-2 bg-main-500 text-white font-bold navbar">
            <Link 
                    href="/"
                    className="block mr-auto p-1 selected Home"
                    onClick={ () =>{
                    document.getElementsByClassName('selected')[0].classList.remove('selected')
                    const button = document.getElementsByClassName('Home');
                    button[0].classList.add('selected');
                }}><div className="flex gap-1 w-fit rounded-xl bg-white p-3 shadow-md shadow-black"><span className="text-main3 block">G</span><span className="text-main2 block">S</span><span className="text-main-600 block">A</span></div>
            </Link>
            <ul className="sm:flex m-0 p-0 hidden nav-ul">
                {links.map((item) => <li 
                key={`item.name-${n++}`}
                onClick={ () => {
                    const sidebar = document.getElementById('sidebar');
                    if(sidebar?.classList.contains('sidebar-active')){
                        sidebar?.classList.remove('sidebar-active'); 
                    }    
                    document.getElementsByClassName('selected')[0].classList.remove('selected')
                    const button = document.getElementsByClassName(item.name);
                    button[0].classList.add('selected');
                }}
                className={`${item.name} m-0 p-0 display-animate nav-list-item -translate-y-full`}>
                <Link key={`link-${n++}`} href={item.link} className="block p-4 hover:text-main2 transition-all duration-300 active:scale-95">{item.name}</Link></li>
            )}
            </ul>
            <button 
            className="btn p-4 hover:text-main2 display-animate sm:hidden -translate-y-full"
            onClick = {() => {
                const sidebar = document.getElementById('sidebar');
                if(!sidebar?.classList.contains('sidebar-active')){
                    sidebar?.classList.add('sidebar-active');
                }
                else{
                    sidebar?.classList.remove('sidebar-active'); 
                }
            }}
            >
                <span className="bi bi-menu-button-wide-fill"></span>
                </button>
        </nav>
        <nav id="sidebar" className="sidebar w-[250px] origin-top bg-main-400 fixed right-4 top-16 z-50 py-6 px-10 transition-all ease duration-500 scale-y-0 shadow-md shadow-black">
            <ul>
                {links.map((item) => <li 
                className="side-item" 
                key={`side-item-${n++}`}
                onClick = {() => {
                    const sidebar = document.getElementById('sidebar');
                    if(sidebar?.classList.contains('sidebar-active')){
                        sidebar?.classList.remove('sidebar-active'); 
                        }
                    }
                }
                >
                <Link href={item.link} className="side-item-link">{item.name}</Link>
                </li>)}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
