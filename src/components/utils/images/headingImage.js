import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LinkedinLogoImg from '../../../images/linkedin.svg'
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeadingImage = ({ classNameParent, image, width }) => {


  return (
    <div className={classNameParent} style={{width, overflow:"none", position:"absolute", margin: '-11px 0 0 -58px'}}>
      {image}
    </div>
  )
}

HeadingImage.propTypes = {
  className: PropTypes.string,
}

export default HeadingImage
