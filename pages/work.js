import { Box, Card, CardBody, CardHeader, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React, { Fragment } from "react";

const H1 = ({ children }) => {
  return (
    <Text fontSize="2xl" as="b">
      {children}
    </Text>
  );
};

const ExperienceCard = ({ company , children }) => {
  return (
    <Card>
        <CardHeader><Text as={"b"}>{ company}</Text></CardHeader>
        <CardBody>
            { children }
        </CardBody>
    </Card>
  );
};

function Work() {
  return (
    <Fragment>
      <Head>
        <title>GNP | Work</title>
      </Head>
      <Box p={10}>
        <Box>
          <H1>Experience</H1>
          <Grid my={2} templateColumns={{base: "repeat(2, 1fr)", md:"repeat(3, 1fr)" ,  lg:"repeat(5, 1fr)"}} gap={6}>
            <GridItem>
              <ExperienceCard company={"versatile haus company limited."}>test<Text></Text></ExperienceCard>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <H1>Works</H1>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Work;
