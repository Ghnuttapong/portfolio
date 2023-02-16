import { Container, Stack, StackDivider, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import {
  ExperienceComponent,
  WorkComponent,
  AwardComponent,
} from "../components/work/index";

function WorkPage() {
  return (
    <>
      <Head>
        <title>GNP | Work</title>
      </Head>
      <Container py={10} maxW="container.lg">
        <VStack
          divider={<StackDivider />}
          spacing={4}
          align='stretch' 
        >
          <ExperienceComponent />
          <WorkComponent />
          <AwardComponent />
        </VStack>
      </Container>
    </>
  );
}

export default WorkPage;
