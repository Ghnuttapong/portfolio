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
        <Flex width="max" justifyContent="center" flexDirection="column">
          <Box>
            <Flex gap={3} my="4">
              {ContactIcons &&
                ContactIcons.map((_, key) => {
                  const Icon = ContactIcons[key].icon;
                  return (
                    <NextLink
                      key={key}
                      target="_blank"
                      href={ContactIcons[key].link}
                    >
                        <Icon size={20} />
                    </NextLink>
                  );
                })}
              <NextLink href="/"></NextLink>
            </Flex>
          </Box>
          <Box>
            <Text fontSize={"sm"} userSelect="none" letterSpacing={2}>
              {<p>&copy;Gnuttapong 2023</p>}
            </Text>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
}

export default Footer;
