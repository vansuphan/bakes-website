import {useState, useEffect} from "react";
import {COLOR, FONTS} from "components/website/constants/Constants";
export default function FilterProducts ({
    className,
}) {

    const handleFilterItems = (value) => {
        console.log("VALUE : ",value)
        setIndexFilter(value)
    }

    const [indexFilter, setIndexFilter] = useState(0);

    const listFilter = () => {
    
        return  <div className="filterList">
                    <span onClick={()=>handleFilterItems(0)} 
                    className={indexFilter === 0 ? "active" : ""}>{"Tất cả"}</span>
                    <span onClick={()=>handleFilterItems(1)} 
                    className={indexFilter === 1 ? "active" : ""}>{"Bánh mới"}</span>
                    <span onClick={()=>handleFilterItems(2)} 
                    className={indexFilter === 2 ? "active" : ""}>{"Combo"}</span>
                    <span onClick={()=>handleFilterItems(3)} 
                    className={indexFilter === 3 ? "active" : ""}>{"Bánh ngọt"}</span>
                    <span onClick={()=>handleFilterItems(4)} 
                    className={indexFilter === 4 ? "active" : ""}>{"Bánh mặn"}</span>
                    <span onClick={()=>handleFilterItems(5)} 
                    className={indexFilter === 5 ? "active" : ""} >{"Đặt tiệc"}</span>
                    <span onClick={()=>handleFilterItems(6)} 
                    className={indexFilter === 6 ? "active" : ""} >{"Customizable"}</span>
                    <span onClick={()=>handleFilterItems(7)} 
                    className={indexFilter === 7 ? "active" : ""} >{"Thức uống"}</span>
                    <span onClick={()=>handleFilterItems(8)} 
                    className={indexFilter === 8 ? "active" : ""} >{"Quà tặng"}</span>
                    <style jsx>{`
                        .filterList{
                            display: flex;
                            flex-direction: column;
                            overflow: hidden;
                            overflow-y: auto;
                            max-height: 400px;
                            span{
                                text-transform: uppercase;
                                padding: 5px 0;
                                margin: 5px 0;
                                opacity: 0.4;
                                cursor: pointer;
                                transition: 0.3s;
                                margin-left: -25px;
                                font-size: 16px;
                                &:hover{
                                    opacity: 1;
                                    margin-left: 0px;
                                }
                                &::before{
                                    content: "";
                                    display: inline-block;
                                    width: 20px;
                                    height: 2px;
                                    background-color: ${COLOR.BLACK} ;
                                    margin-top: auto;
                                    margin-bottom: auto;
                                    border-radius: 2px;
                                    margin-right: 5px;
                                    margin-bottom: 1%;
                                }
                            }
                            .active{
                                opacity: 1;
                                margin-left: 0px;
                            }
                        }
                    `}</style>
            </div>
      }
    return <div className={className ? className +  " filterProducts" : "filterProducts"}>
        {
            listFilter()
        }
        <style jsx>{`
            .filterProducts{

            }
        `}</style>
    </div>
}