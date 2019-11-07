import React, { useState, useEffect } from "react"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBBtn,
} from "mdbreact"
import { useStaticQuery, graphql } from "gatsby"
import NavButton from "../utils/button/navButton"

const Header = React.memo(({ refs, siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [navCollapse, setNavCollapse] = useState("")
  const [navColor, setNavColor] = useState("")
  const [navShadow, setNavShadow] = useState({ boxShadow: "none" })
  const executeScroll = myRef => {
    console.log(myRef)
    window.scrollTo({
      top: myRef.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    })
  }

  const data = useStaticQuery(graphql`
    query headerQuery {
      allDataJson {
        nodes {
          navbar {
            name
            link
            ref
          }
        }
      }
    }
  `).allDataJson.nodes[0].navbar

  useEffect(() => {
    window.onscroll = function() {
      setAtTop(window.pageYOffset < 80)
    }
  }, [])

  useEffect(() => {
    setNavCollapse(atTop ? "" : "top-nav-collapse")
    setNavColor(atTop ? "" : "grey darken-1")
    setNavShadow(atTop ? { boxShadow: "none" } : {})
  }, [atTop])

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <MDBNavbar
      color={navColor}
      dark
      expand="md"
      className={`sticky-top scrolling-navbar fadeIn ${navCollapse}`}
      style={{
        zIndex: 1,
        transition:
          "background 0.5s ease-in-out, padding 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
        ...navShadow,
      }}
    >
      <div className="container">
        <MDBNavbarBrand>
          <img
            alt="logo"
            className="mr-3"
            style={{ width: "1.5rem" }}
            src={"/icons/lightning.svg"}
          ></img>
          <strong className="white-text">{siteTitle}</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} className="pr-0" />
        <MDBCollapse
          id="navbarCollapse"
          style={{ transition: "height 0.3s ease-out" }}
          isOpen={isOpen}
          navbar
        >
          {/* <MDBNavbarNav left>
          </MDBNavbarNav> */}
          <MDBNavbarNav right>
            {data.map(item => (
              <MDBNavItem
                key={item.name}
                onClick={() => executeScroll(refs[item.ref])}
                className="mr-2"
              >
                <NavButton size="sm" color="white">
                  {item.name}
                </NavButton>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </div>
    </MDBNavbar>
  )
})

export default Header
