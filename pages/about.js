import React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import cmtcLogo from "../public/image/cmtc.png";
import cicecLogo from "../public/image/cicec.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJava,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import NextImage from "next/image";

const SkillIcons = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJava,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiExpress,
];

const H1 = ({ children }) => {
  return (
    <Text textDecorationLine={"underline"} fontSize="2xl" as="b">
      {children}
    </Text>
  );
};

const DisplayEducation = ({ src, year, name }) => {
  return (
    <Box
      py={4}
      alignItems={"center"}
      display={"flex"}
      gap={2}
      flexDirection="column"
      width={300}
      textAlign="center"
    >
      <NextImage src={src} width={100} height={100} />
      <Text as={"b"}>{year}</Text>
      <Text>{name}</Text>
    </Box>
  );
};

function About() {
  return (
    <>
      <Head>
        <title>GNP | About</title>
      </Head>
      <Box p={10} textAlign="center">
          <Box mb={20} id="skill">
            <H1>My Skill</H1>
            <Flex justifyContent="center" mt={10} alignItems="center">
              <Grid templateColumns={{ base:"repeat(2, 1fr)" , sm:"repeat(3, 1fr)", md:"repeat(5, 1fr)"}} columnGap="32" rowGap="10" >
                {SkillIcons.map((_, key) => {
                  const Icon = SkillIcons[key];
                  return (
                    <GridItem>
                      <Icon size={50} />
                    </GridItem>
                  );
                })}
              </Grid>
            </Flex>
          </Box>

        <section id="education">
          <H1>Education</H1>
          <Flex gap={4} justifyContent="center" alignItems="center">
            <DisplayEducation
              src={cicecLogo}
              year="2018 - 2021"
              name="Chomthong Industrial & Community Education College."
            />
            <DisplayEducation
              src={cmtcLogo}
              year="2021 - 2023"
              name="Chiang Mai Technical College."
            />
          </Flex>
        </section>
      </Box>
    </>
  );
}

export default About;
