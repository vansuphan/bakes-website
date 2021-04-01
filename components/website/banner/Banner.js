import Slider from "react-slick";
import ButtonCommon from "components/website/buttons/ButtonCommon";
import asset from "plugins/assets/asset";
import {COLOR, FONTS} from "components/website/constants/Constants";
export default function Banner({
    className,
}){
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return <div className={"bannerTop "+ className}>
        <div className="contentSlider">
            <Slider {...settings}>
            <div>
                <img src={asset("/images/slider_3.jpg")}/>
            </div>
            <div>
                <img src={asset("/images/slider_3.jpg")}/>
            </div>
            <div>
                <img src={asset("/images/slider_3.jpg")}/>
            </div>
            </Slider>
        </div>
        <div className="descriptionSlider">
            <h3>Trung Thu Bên Hồ <br /> —500,000 ₫</h3>
            <p className="description">5 vị nhà làm và 1 hộp trà.</p>
            <p>
                <ButtonCommon text="Shop" width={"100%"}>  </ButtonCommon>
            </p>
            
        </div>
        
       <style jsx>{`
            .bannerTop{
                display: flex;
                flex-direction: row;
            }
            .contentSlider{ 
                width: 73%;
            }
            .descriptionSlider{
                width:27%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                h3{
                    font-size: 3.5vw;
                    font-family: ${FONTS.GaramondPremrPro};
                    line-height: 60px;
                    font-weight: 300;
                    letter-spacing: 0.01em;
                }
                p{
                    padding-top: 10px;
                    padding-bottom: 0px;
                    font-size: 16px;
                }
                p.description{
                    padding-bottom: 10px;
                }
                h3, p{
                    text-align: left;
                    width: 100%;
                    padding-left: 35px;
                }
            }
            @media only screen and (max-width: 990px){
                .bannerTop{
                    flex-wrap: wrap;
                }
                .contentSlider{ 
                    width: 100%;
                }
                .descriptionSlider{
                    width: 100%;
                    align-items: flex-start;
                    h3{
                        font-size: 6vw;
                        letter-spacing: 0.01em;
                    }
                    p{
                        padding-top: 10px;
                        padding-bottom: 0px;
                        font-size: 16px;
                        width: 200px;
                    }
                    p.description{
                        padding-bottom: 10px;
                        width: 100%;
                    }
                    h3, p{
                        padding-left:0px;
                    }
                }
            }
            @media only screen and (max-width: 599px){
                .bannerTop{
                    flex-wrap: wrap;
                }
                .contentSlider{ 
                    width: 100%;
                }
                .descriptionSlider{
                    width: 100%;
                    h3{
                        font-size: 10vw;
                        letter-spacing: 0.01em;
                    }
                    p{
                        padding-top: 10px;
                        padding-bottom: 0px;
                        font-size: 16px;
                    }
                    p.description{
                        padding-bottom: 10px;
                    }
                    h3, p{
                        padding-left:0px;
                    }
                }
            }
       `}</style>
    </div>
}