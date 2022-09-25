function Namecard(){
    return <div className="flex flex-col items-center justify-center">
        <img className="object-cover h-90 w-90" src="./icon.png" alt='icon'/>
        <div className="flex m-2 gap-2">
            <p className="text-xl">Reach Me at:</p>
            <a href="https://github.com/jacklam1211">
                <img className="object-cover h-8 w-8" src="./github.png" alt='github'/>
            </a>
            <a href="https://www.linkedin.com/in/lamkwanho/">
                <img className="object-cover h-8 w-8" src="./linkedin.svg" alt='linkedin'/>
            </a>
            <a href="mailto:kwanho.jack.lam@gmail.com">
                <img className="object-cover h-8 w-8" src="./email.png" alt='email'/>
            </a>
        </div>
    </div>
}

export default Namecard;