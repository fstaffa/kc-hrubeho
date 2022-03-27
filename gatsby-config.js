/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "*/": [
            "permissions-policy: accelerometer = (), camera = (), geolocation = (), gyroscope = (), magnetometer = (), microphone = (), payment = (), usb = (), interest - cohort=()",
            "content-security-policy-report-only: default-src 'self'; script-src 'self' 'inline' https://static.cloudflareinsights.com https://maps.googleapis.com; font-src https://fonts.googleapis.com/",
            "referrer-policy: strict-origin-when-cross-origin"
          ]
        }
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
        },
      },
    },
    "gatsby-transformer-sharp",
  ],
}
