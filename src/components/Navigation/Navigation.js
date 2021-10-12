import * as React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby';

const Nav = styled.nav`
    background-color: #0facf1;
    width: 100%;
    z-index: 9;
`;

const Logo = styled.h1`
    font-weight: 700;
    text-transform: uppercase;

    a {
        text-decoration: none;
        color: #ffffff;
    }
`;

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
      flex-direction: column;
      max-height: 0;
      transition: max-height .4s ease-in;
      overflow: hidden;
      max-height: ${({ open }) => open ? '500px' : '0'};
    }

`;

const NavListItem = styled.li`
    margin-left: 20px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
    
    a {
        text-align: center;
        display: block;
        text-decoration: none;
        color: #ffffff;
        padding: 10px 0px;
        transition: .4s;

        &.active, &:hover {
            box-shadow: inset 0 -5px 0 0 #ffffff;
        }
    }
`;

const StyledBurger = styled.button`
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    visibility: hidden;

    @media (max-width: 768px) {
        visibility: visible;
    }

    &:focus {
        outline: none;
    }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Nav>
            <Burger open={open} setOpen={setOpen} />
            <NavWrapper className="wrapper">
                <Logo><Link to="/" id="logo">DENTAL CLINIC</Link></Logo>
                <NavList open={open} setOpen={setOpen}>
                    <NavListItem>
                        <Link to="/" activeClassName="active">Home</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to="/about" activeClassName="active">About</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to="/articles" activeClassName="active">Articles</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to="/gallery" activeClassName="active">Gallery</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to="/contact" activeClassName="active">Contact</Link>
                    </NavListItem>
                </NavList>
            </NavWrapper>
        </Nav>
    );
}

export default Navigation
