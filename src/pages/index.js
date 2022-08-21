import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import * as SVG from "../components/svg";

const links = [
  {
    text: "Main Reel",
    url: "https://www.youtube.com/watch?v=zgBO-dcmQco",
  },
  {
    text: "Stills",
    url: "https://photos.app.goo.gl/NDj53ZVHe7s71Rvy9",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Email", url: "mailto:team@20stops.com" },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/zinlioren/",
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.intro}>
      <h1>
      Ran Xin <span className={styles.textGray}>is a Cinematographer, Colorist. <br />Currently based in San Francisco. <br />He has over 6 years of work experience on feature films, short films, commercials, pitch deck, and weddings.</span>
      </h1>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
            target={"_blank"}
          >
          <h1><div className={styles.flex}>{link.text} <div className={styles.arrowDesktop}><SVG.ArrowUpRight height={36}/></div><div className={styles.arrowMobile}><SVG.ArrowUpRight height={28}/></div></div></h1>
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a className={styles.listItemLink} href={`${link.url}${utmParameters}`} target={"_blank"}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
