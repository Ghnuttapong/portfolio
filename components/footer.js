import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { SiGmail, SiGithub, SiInstagram, SiFacebook } from "react-icons/si";

const ContactIcons = [
  { icon: SiGmail, link: "/", name: "Ggnuttapong@gmail.com" },
  {
    icon: SiGithub,
    link: "https://github.com/Ghnuttapong",
    name: "Ghnuttapong",
  },
  {
    icon: SiInstagram,
    link: "https://www.instagram.com/ntp.wp/",
    name: "ntp.wp",
  },
  {
    icon: SiFacebook,
    link: "https://www.facebook.com/nuttapong.wipa/",
    name: "nuttapong wipa",
  },
];

function Footer() {
  return (
    <footer id="footer">
      <Box py={4} px={10} bg="black" textColor="white">
        <Flex justifyContent="space-between">
          <Box>
            <Text
              fontSize={"2xl"}
              userSelect="none"
              as="b"
            >
             Copyright: Gnuttapong
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={"2xl"}
              textDecoration="underline"
              userSelect="none"
              as="b"
            >
              Contact
            </Text>
            <Flex direction="column" rowGap={2} mt="4">
              {ContactIcons &&
                ContactIcons.map((_, key) => {
                  const Icon = ContactIcons[key].icon;
                  return (
                    <NextLink
                      key={key}
                      target="_blank"
                      href={ContactIcons[key].link}
                    >
                      <Flex alignItems="center" gap={2}>
                        <Icon size={18} />
                        {" : "} {ContactIcons[key].name}
                      </Flex>
                    </NextLink>
                  );
                })}
              <NextLink href="/"></NextLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
}

export default Footer;
