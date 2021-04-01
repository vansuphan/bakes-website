import {useState, useEffect} from "react";
import {COLOR, FONTS} from "components/website/constants/Constants";
export default function FilterProductStatus ({
    className,
}) {

    const handleFilterItems = (value) => {
        // console.log("VALUE : ",value)
        setIndexFilter(value)
    }

    const [indexFilter, setIndexFilter] = useState(0);

    const listFilter = () => {
        return  <div className="filterProductStatus">
                    <span onClick={()=>handleFilterItems(0)} 
                    className={indexFilter === 0 ? "active" : ""}>{"Có sẵn"}</span>
                    <span onClick={()=>handleFilterItems(1)} 
                    className={indexFilter === 1 ? "active" : ""}>{"Đặt trước"}</span>

                    <style jsx>{`
                        .filterProductStatus{
                            display: flex;
                            span{
                                padding: 10px 0;
                                margin-bottom: 10px;
                                opacity: 0.4;
                                cursor: pointer;
                                transition: 0.3s;
                                font-size: 2.5vw;
                                font-family: ${FONTS.GaramondPremrPro};
                                &:hover{
                                    opacity: 1;
                                }
                            }

                            span:nth-child(2){
                                margin-left: 10px;
                                padding-left: 10px;
                                position: relative;
                                &::after{
                                    content: "";
                                    width: 1px;
                                    height: 70%;
                                    position: absolute;
                                    left: 0;
                                    top: 50%;
                                    transform: translate(0, -50%);
                                    background-color: #000;
                                    opacity: 0.5;
                                }
                            }

                            .active{
                                opacity: 1;
                            }
                        }
                        @media only screen and (max-width: 768px){
                            .filterProductStatus{
                                margin-top: 20px;
                                span{
                                    font-size: 6.5vw;
                                    &:hover{
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                    `}</style>
            </div>
      }
    return <div className={className ? className +  " filterListProductStatus" : "filterListProductStatus"}>
        {
            listFilter()
        }
        <style jsx>{`
            .filterListProductStatus{

            }
        `}</style>
    </div>
}