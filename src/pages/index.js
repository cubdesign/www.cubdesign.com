import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h1>Always a new thing. </h1>

        <p>
            WWD Lead Engineer:<br/>
            <a href="https://github.com/cubdesign">https://www.wwdjapan.com/</a>
        </p>
        <p>
            Github:<br/>
            <a href="https://github.com/cubdesign">https://github.com/cubdesign</a>
        </p>
        <p>Twitter:<br/>
            <a href="https://twitter.com/cubdesign">https://twitter.com/cubdesign</a>
        </p>
        <p>
            Facebook:<br/>
            <a href="https://www.facebook.com/cubdesign">https://www.facebook.com/cubdesign</a>
        </p>
        <p>
            LinkedIn:<br/>
            <a href="https://www.linkedin.com/in/takeo-tamura/">https://www.linkedin.com/in/takeo-tamura/</a>
        </p>
        <p>
            Instagram:<br/>
            <a href="https://www.instagram.com/cubdesign">https://www.instagram.com/cubdesign</a>
        </p>

    </Layout>
)

export default IndexPage
