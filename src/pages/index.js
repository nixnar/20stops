import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import * as SVG from "../components/svg";

const links = [
  {
    text: "Reel",
    url: "https://www.youtube.com/watch?v=zgBO-dcmQco",
    description: "Reel is currently out of date, new reel work in progress"
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

const brandlogos = [
  { filepath: "https://i.imgur.com/TMx2kcj.png",
    width: '120px'},
  { filepath: "https://i.imgur.com/PL20VBh.png",
  width: '40px',
  height: '60px' },
  { filepath: "https://i.imgur.com/d4UnJry.png" },
  { filepath: "https://i.imgur.com/LNkvraa.png" },
  { filepath: "https://i.imgur.com/k4ZcXeC.png",
    width: '120px'},
  { filepath: "https://i.imgur.com/dtrjFj2.png" },
  { filepath: "https://i.imgur.com/TjAjoH4.png" },
  { filepath: "https://i.imgur.com/vYXhlIU.png" },
  { filepath: "https://i.imgur.com/HMUmann.png" },
  { filepath: "https://i.imgur.com/TG69k3q.png",
    width: '52px',
    height: '52px' },
  { filepath: "https://i.imgur.com/rgiJfNq.png",
    width: '64px',
    height: '64px' },
  { filepath: "https://i.imgur.com/j2v4imq.png",     
    width: '68px',
    height: '68px' },
]

const moreLinks = [
  { text: "Email", url: "mailto:ran@20stops.com" },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/zinlioren/",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/ranxin20stops/",
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Ran Xin" />
    <div className={styles.intro}>
      <h1>
      Ran Xin <span className={styles.textGray}>is a Cinematographer, Colorist. <br />Currently based in San Francisco. <br />He has over 8 years of work experience on feature films, short films, commercials, pitch decks, and weddings.<br />He provides full service in house production, delivering video and image content for a fraction of what competing market charge.</span>
      </h1>
    </div>

    <div className={styles.listItemLink}>Clients</div>
    <div className={styles.flex}>
      {brandlogos.map(logo => (
        <React.Fragment key={logo.filepath}>
          <img className={styles.img} style={{width: logo.width, height: logo.height}} src={logo.filepath} layout="constrained" placeholder="blurred"/>
        </React.Fragment>
      ))}
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
