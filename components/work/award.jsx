import React from 'react'
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaGoogleDrive } from "react-icons/fa";
import NextLink from "next/link";

function AwardComponent() {
  return (
    <>
      <Text as={"b"} my={2}>Award</Text>
      <NextLink href="https://drive.google.com/drive/folders/1efKOMryGN3vK85umL8v7hoE_EUYqCg92?usp=sharing" target="_blank">
        <Button colorScheme='blue'>
          <Flex gap={2} alignItems="center">
            <FaGoogleDrive size={20} />
            Google Drive
          </Flex>
        </Button>
      </NextLink>
    </>
  )
}

export default AwardComponent