import asset from "plugins/assets/asset";
import COLOR from "components/website/constants/Color";
import { Form, Input, Button, Checkbox } from 'antd';
import ButtonCommon from "components/website/buttons/ButtonCommon";
export default function FormForgetPassword({ 
    setShowFormForget=()=>null,
}) {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <div className="formLogin">
        <div className="form">
            <p className="textCenter top">
                <span>
                    Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
                </span>
            </p>
            <Form
                name="formLogin"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"

                    rules={[
                        {
                            type: 'email',
                            message: 'Email sai định dạng!',
                        },
                        {
                            required: true,
                            message: 'Vui lòng nhập Email!',
                        },
                    ]}
                >
                    <Input placeholder="Nhập địa chỉ Email (*)" />
                </Form.Item>
                <Form.Item className="inputNoneStyle">
                    <Button className="btnNoneStyle" type="primary" htmlType="submit">
                        <ButtonCommon colorRevert={true} text={"Lấy lại mật khẩu"} width={"100%"} >  </ButtonCommon>
                    </Button>
                </Form.Item>
            </Form>
        </div>
        <div className="optionAccount textCenter" >
            <span onClick={()=>setShowFormForget(false)}>Quay lại tại đây</span>
        </div>
        
        <style jsx>{`
            .formLogin{
                width: 100%;
                padding: 20px;
                max-width: 450px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: ${COLOR.GRAY_MAIN};
                padding: 40px 25px 20px;
                margin-bottom: 50px;
                .listSocialLogin{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        display: block;
                        width: 130px;
                        margin: 0 10px;
                    }
                }
                .textCenter{
                    position: relative;
                    z-index: 2;
                    font-size: 16px;
                    span{
                        position: relative;
                        padding: 0 10px;
                        background-color: ${COLOR.GRAY_MAIN};
                        z-index: 2;
                    }
                }
                .textCenter.top{
                    padding: 20px 10px;
                    padding-top: 0;
                }
                .optionAccount{
                    display: flex;
                    justify-content: center;
                    span{
                        cursor: pointer;
                        transition: 0.2s;
                        opacity: 1;
                        &:hover{
                            opacity: 0.6;
                        }
                    }
                }
            }
        `}</style>
    </div>

}