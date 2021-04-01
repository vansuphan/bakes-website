import asset from "plugins/assets/asset";
import COLOR from "components/website/constants/Color";
import { Form, Input, Button, Checkbox } from 'antd';
import ButtonCommon from "components/website/buttons/ButtonCommon";
import {useRouter} from "next/router";
export default function FormLogin({
    setShowFormForget=()=>null,
 }) {

    const router = useRouter();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goToRegisterPage = () => router.push("/register");


    return <div className="formLogin">
        <div className="listSocialLogin">
            <img className="fb-btn" src={asset("/images/fb-btn.svg")} />
            <img className="gp-btn" src={asset("/images/gp-btn.svg")} />
        </div>
        <p className="textCenter"><span>Hoặc</span></p>
        <div className="form">
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

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu (*)" />
                </Form.Item>

                <Form.Item className="inputNoneStyle">
                    <Button className="btnNoneStyle" type="primary" htmlType="submit">
                        <ButtonCommon colorRevert={true} text={"Đăng nhập"} width={"100%"} >  </ButtonCommon>
                    </Button>
                </Form.Item>
            </Form>
        </div>
        <div className="optionAccount">
            <span onClick={()=>setShowFormForget(true)} className="underline">Quên mật khẩu</span>
            <span onClick={goToRegisterPage}>Tạo tài khoản</span>
        </div>

        <style jsx>{`
            .formLogin{
                width: 100%;
                padding: 20px;
                max-width: 500px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: ${COLOR.GRAY_MAIN};
                padding: 50px 25px 20px;
                margin-bottom: 50px;
                .listSocialLogin{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    img{
                        width: 48%;
                    }
                }
                .textCenter{
                    padding: 30px 0;
                    position: relative;
                    z-index: 2;
                    &::before {
                        content: '';
                        width: 100%;
                        height: 1px;
                        background-color: #000;
                        z-index: 1;
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translate(0, -50%);
                    }
                    span{
                        position: relative;
                        padding: 0 10px;
                        background-color: ${COLOR.GRAY_MAIN};
                        z-index: 2;
                    }
                }
                .optionAccount{
                    display: flex;
                    justify-content: space-between;
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