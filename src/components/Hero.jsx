// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo.svg';

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img alt="sumz_logo" src={logo} className="w-28 object-contain"/>
                <button type="button" onClick={() => window.open('https://svelte.dev')}
                        className="black_btn">
                    Svelte
                </button>
            </nav>
            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden"/>
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summarizer, an article summarizer that transforms lengthy articles into clear
                and concise summaries
            </h2>
        </header>
    );
};

export default Hero;