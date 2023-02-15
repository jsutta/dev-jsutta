import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "../components/Container";
import Layout from "../components/Layout";
import {
  Box,
  Img,
  Heading,
  Badge,
  HStack,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const Page = ({ data }) => {
  const page = data.nodePage;

  return (
    <Layout>
      <Box
        pt={30}
        width={`100%`}
        background={mode(`gray.100`, `gray.600`)}
        borderBottomWidth="1px"
      >
        <Container mt="0">
          <Box as="section" bg={mode("gray.50", "inherit")} py="24" width={`800px`}>
            <Box
              maxW={{ base: "xl", md: "7xl" }}
              mx="auto"
              px={{ base: "6", md: "8" }}
            >
              <Box>
                {/* <Stack
                  spacing={{ base: "4", md: "6" }}
                  direction={{ base: "column", md: "row" }}
                  textTransform="uppercase"
                  fontSize="xs"
                  letterSpacing="wider"
                  fontWeight="semibold"
                >
                  <Badge
                    colorScheme="blue"
                    variant="solid"
                    alignSelf="flex-start"
                  >
                    Page
                  </Badge>
                  <HStack
                    divider={<StackDivider h="3" alignSelf="center" />}
                    spacing="3"
                    color={mode("gray.600", "gray.400")}
                  >
                    {page.relationships.field_tags.map((tag) => (
                      <Box key={tag.id}>{tag.name}</Box>
                    ))}
                  </HStack>
                </Stack> */}
                <Heading size="xl" mt="6" mb="4">
                  {page.title}
                </Heading>
              </Box>
              {/* <Box
                pos="relative"
                cursor="pointer"
                className="group"
                h="400px"
                overflow="hidden"
              >
                <Img
                  as={GatsbyImage}
                  image={
                    page.relationships.field_media_image.relationships.thumbnail.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  w="full"
                  h="full"
                  objectFit="cover"
                  htmlWidth="672"
                  htmlHeight="448"
                  alt={page.relationships.field_media_image.thumbnail.alt}
                  transition="all 0.2s"
                  _groupHover={{ transform: "scale(1.05)" }}
                />
              </Box> */}
              <Box mt={5}>
                <div
                  dangerouslySetInnerHTML={{ __html: page.body.processed }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    nodePage(id: { eq: $id }) {
      id
      title
      body {
        processed
      }
    }
  }
`;

export default Page;
