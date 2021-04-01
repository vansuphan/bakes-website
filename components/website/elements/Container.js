function Container({children, className}) {
    return <div className={`container ` + className}>
        {children}
        <style jsx>{`

            .container{
                max-width: 1220px;
                width: 100%;
                padding: 0 20px;
                margin-left: auto;
                margin-right: auto;

            }
            .container.center{
                display: flex;
                justify-content: center;
                align-items: center;
            }

            @media only screen and (max-width:599px){
                
            }
            @media only screen and (min-width:1439px){
                .container{
                    max-width: 1260px;
                    width: 100%;
                    padding: 0 20px;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        `}</style>
    </div>;
  }
  
  export default Container;
  