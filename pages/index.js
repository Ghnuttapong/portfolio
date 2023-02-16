import { AttachmentIcon, LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { saveAs } from "file-saver";
import NextLink from "next/link";
import Image from "next/image";
import Profile from "../public/image/profile.JPG";
import ReactTypingEffect from "react-typing-effect";
import Head from "next/head";


export default function HomePage() {
  const saveFileCV = () => {
    saveAs(
      "https://w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "nuttapong.pdf"
    );
  };
  return (
    <>
      <Head>
        <title>GNP | Gnuttapong</title>
      </Head>
      <div className="flexCenter">
          <Flex pt={{base:3, md:0 }} direction="column" alignItems="center" justifyContent="center">
            <Text fontSize="3xl" as="b">
              <ReactTypingEffect text={["Hi, I'm Nuttapong."]} />
            </Text>
            <Box
              my={10}
              height={300}
              width={300}
              rounded="full"
              border="2px"
              overflow="hidden"
            >
              <Image
                src={Profile}
                height={300}
                width={300}
                alt="Picture of the author"
              />
            </Box>
            <Box px={{ base: 20, sm: 10, lg: 60 }} textAlign="center">
              <Text fontSize="xl">Full Stack & Backend Developer</Text>
              <Text fontSize="sm">{`As a Full Stack and Backend Developer, I am passionate about building innovative and scalable web applications. which solves complex problems and improves the user experience with expertise in various technologies.`}</Text>
            </Box>
            <Flex gap={2} mt={10}>
              <Button rightIcon={<AttachmentIcon />} onClick={saveFileCV}>
                Download CV
              </Button>
              <NextLink href="/work">
                <Button rightIcon={<LinkIcon />}>Portfolio</Button>
              </NextLink>
            </Flex>
          </Flex>
      </div>
    </>
  );
}
