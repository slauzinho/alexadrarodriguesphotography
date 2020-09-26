const path = require("path")

async function turnPostsIntoPages({ graphql, actions }) {
  // get a template for this page
  // query
  // loop over posts

  const postTemplate = path.resolve("./src/templates/Post.js")
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          titulo
          slug {
            current
          }
          categories {
            name
            slug {
              current
            }
          }
        }
      }
    }
  `)
  data.posts.nodes.forEach(post => {
    actions.createPage({
      path: `${post.categories.slug.current}/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    })
  })
}

exports.createPages = async params => {
  await turnPostsIntoPages(params)
}
