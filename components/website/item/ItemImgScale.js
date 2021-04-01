export default function ItemImgScale ({
    img,
    handleClick,
    href="https://www.instagram.com/bakes.saigon/",
    data,
}){
    const _handleClick = () => {
        if(handleClick){
            handleClick();
        }
    }
    return <a href={href} target="_blank" className="itemImgScale" onClick={()=>{_handleClick()}}>
       
        <img src={img} />
        
        <style jsx>{`
            .itemImgScale{
                object-fit: cover;
                overflow: hidden;
                cursor: pointer;
            }
            img{
                display: block;
                width: 100%;
                height: auto;
                &:hover{
                    transition: transform 5s ease-out;
                    transform: scale(1.1);
                }
            }
        `}</style>
    </a>
}