import {useState, useEffect} from "react";
import {COLOR, FONTS} from "components/website/constants/Constants";
export default function FilterProductsMobile ({
    className,
}) {

    const [indexFilter, setIndexFilter] = useState(0);
    const [valueText, setValueText] = useState("Bạn cần tìm gì?");
    const [status, setStatus] = useState(false);

    const handleFilterItems = (index, text) => {
        console.log("VALUE : ", text)
        setIndexFilter(index);
        setValueText(text);
        setStatus(!status);
    }

    const listFilter = () => {
    
        return  <div className= {status === true ? "filterListMobile show" : "filterListMobile"}>

                    <span className={status === true ? "valueSelected active show" : "valueSelected active hide"} onClick={()=>setStatus(!status)}>{valueText}</span>

                    <span onClick={()=>handleFilterItems(1, "Bánh mới")} 
                    className={indexFilter === 1 ? "active" : ""}>{"Bánh mới"}</span>

                    <span onClick={()=>handleFilterItems(2, "Combo")} 
                    className={indexFilter === 2 ? "active" : ""}>{"Combo"}</span>

                    <span onClick={()=>handleFilterItems(3, "Bánh ngọt")} 
                    className={indexFilter === 3 ? "active" : ""}>{"Bánh ngọt"}</span>

                    <span onClick={()=>handleFilterItems(4, "Bánh mặn")} 
                    className={indexFilter === 4 ? "active" : ""}>{"Bánh mặn"}</span>

                    <span onClick={()=>handleFilterItems(5, "Đặt tiệc")} 
                    className={indexFilter === 5 ? "active" : ""} >{"Đặt tiệc"}</span>

                    <span onClick={()=>handleFilterItems(6, "Customizable")} 
                    className={indexFilter === 6 ? "active" : ""} >{"Customizable"}</span>

                    <span onClick={()=>handleFilterItems(7, "Thức uống")} 
                    className={indexFilter === 7 ? "active" : ""} >{"Thức uống"}</span>

                    <span onClick={()=>handleFilterItems(8, "Quà tặng")} 
                    className={indexFilter === 8 ? "active" : ""} >{"Quà tặng"}</span>

                    
                    <style jsx>{`
                        .filterListMobile.show{
                            height: 400px;
                            /* overflow-y: auto; */
                        }
                        .filterListMobile{
                            display: flex;
                            flex-direction: column;
                            overflow: hidden;
                            /* overflow-y: auto; */
                            /* max-height: 400px; */
                            height: 50px;
                            border-radius: 30px;
                            border: 1px solid rgba(0,0,0,0.5);
                            padding: 20px 10px;
                            padding-top: 10px;
                            transition: 0.3s;
                            span{
                                text-transform: uppercase;
                                text-align: center;
                                padding: 5px 0;
                                margin: 5px 0;
                                opacity: 0.4;
                                cursor: pointer;
                                transition: 0.3s;
                                font-size: 16px;
                                border-bottom: 1px solid rgba(0,0,0,0.1);
                                &:hover{
                                    opacity: 1;
                                    margin-left: 0px;
                                }
                            }
                            .valueSelected{
                                padding-bottom: 20px;
                                margin-top: 0;
                            }
                            .valueSelected.active{
                                font-weight: 500;
                                position: relative;
                                
                            }
                            .valueSelected.active.show{
                                transition: 0.3s;
                                &::after{
                                    transition: 0.3s;
                                    position: absolute;
                                    content: '\f106';
                                    font-family: FontAwesome;
                                    right: 20px;
                                    top: 30%;
                                    transform: translate(0, -50%);
                                    font-size: 20px;
                                }
                            }
                            .valueSelected.active.hide{
                                transition: 0.3s;
                                &::after{
                                    transition: 0.3s;
                                    position: absolute;
                                    content: '\f107';
                                    font-family: FontAwesome;
                                    right: 20px;
                                    top: 30%;
                                    transform: translate(0, -50%);
                                    font-size: 20px;
                                }
                            }
                            .active{
                                transition: 0.3s;
                                opacity: 1;
                                font-weight: bold;
                            }
                        }
                    `}</style>
            </div>
        }

    return <div className={className ? className +  " filterProductsMoblie" : "filterProductsMobile"}>
        {
            listFilter()
        }
        <style jsx>{`
            .filterProducts{

            }
        `}</style>
    </div>
}