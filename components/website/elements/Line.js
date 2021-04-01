import { COLOR } from "components/website/constants/Constants";
export default function Line ({
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    bgColor="#F2F1EB"
}){
    return <div className="line">
        <div className="_line"></div>
        <style jsx>{`
            .line{
                padding-top: ${paddingTop};
                padding-bottom: ${paddingBottom};
                padding-left: ${paddingLeft};
                padding-right: ${paddingRight};
            }
            ._line{
                height: 1px;
                width: 100%;
                background-color: ${bgColor};
                margin-top: ${marginTop};
                margin-bottom: ${marginBottom};
                margin-left: ${marginLeft};
                margin-right: ${marginRight};
            }
        `}</style>
    </div>
}