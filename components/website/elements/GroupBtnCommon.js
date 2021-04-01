export default function GroupButton ({
    handleClick,
    nameBtn = "Start",
    showPressEnter=true,
    margin="0",
    marginBottom="30px"
}){
    const onClickBtn = () => {
        if(handleClick){
            handleClick();
        }
    }
    return <p className="groupButton">
        <span onClick={onClickBtn}>{nameBtn}</span>
        {
            showPressEnter == true 

            ? <span className="pressEnter">Press 
                <strong>Enter</strong> 
            </span>

            :<></>
        }
        <style jsx>{`
            .groupButton{
                text-align: center;
                margin: ${margin};
                margin-bottom: ${marginBottom};
            }
        `}</style>
    </p>
}