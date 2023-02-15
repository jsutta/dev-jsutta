import React from "react";
import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Container from "../components/Container";
//import Meta from "../components/Meta";
import ArticlePreview from "../components/ArticlePreview";

const Home = ({ data }) => {
  const articles = data.allNodeArticle.nodes;

  return (
    <Layout>
      {/* <Meta title="Umami Food Magazine" description="An example Drupal site starter." /> */}
      <Box
        pt={30}
        width={`100%`}
        background={useColorModeValue(`gray.100`, `gray.600`)}
        borderBottomWidth="1px"
      >
        <Container mt="0">
          {articles.map((article) => (
            <ArticlePreview
              key={article.id}
              title={article.title}
              path={article.langcode + article.path.alias}
              image={
                article.relationships.field_media_image.relationships.thumbnail.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt={article.relationships.field_media_image.thumbnail.alt}
              summary={
                article.body.processed.replace(/(<([^>]+)>)/gi, '').substring(0, 300) + '...'
              }
              tags={article.relationships.field_tags}
            />
          ))}
        </Container>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allNodeArticle(sort: {changed: DESC}, limit: 10) {
      nodes {
        id
        title
        created
        changed
        langcode
        body {
          processed
          value
        }
        path {
          alias
        }
        relationships {
          field_media_image {
            thumbnail {
              alt
            }
            relationships {
              thumbnail {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600)
                  }
                }
              }
            }
          }
          field_tags {
            id
            name
          }
        }
      }
    }
  }
`;

export default Home;
