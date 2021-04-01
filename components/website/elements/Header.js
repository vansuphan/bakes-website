
import MenuList from "components/website/menu/MenuList";
import Container from "components/website/elements/Container";
import MenuCustom from "components/website/menu/CustomMenu";
import { useState, useEffect, useRef } from "react";
import useScroll from "components/website/hooks-custom/useScroll";
import { Affix } from 'antd';

export default function Header({active}){

    const { scrollX, scrollY, scrollDirection } = useScroll();
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        // console.log("scrollY", scrollY);
        // console.log("scrollDirection", scrollDirection);
        if (scrollY && scrollY >= 250) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      }, [scrollY, scrollDirection]);
    return<>
      <Affix offsetTop={0}>
          <header className={fixed === true ? "fixed" : ""}>
            <Container>
              <MenuList classActive={active}></MenuList>
              <MenuCustom classActive={active} ></MenuCustom>
            </Container>
          </header>
      </Affix>
      
      <style jsx>{`
        header{
          border-bottom: 1px solid rgba(0,0,0,0.1);
          background-color: #fff;
        }
      `}</style>
    </>
}