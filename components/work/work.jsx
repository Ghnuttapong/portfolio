import React from 'react'
import { Button, Card, CardBody, CardFooter, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import Image from 'next/image';
import PortcookieConent from '../../public/image/work/cookieConsent.png';
import Link from 'next/link';

const GridCard = ({ title, pathImage, content, link = "" }) => {
    return (
        <GridItem _hover={{
            boxShadow: 'xl'
        }}>
            <Card direction="row" overflow="hidden" borderRadius={0} variant="outline">
                <Stack>
                    <CardBody>
                        <Image src={pathImage} alt={title} objectFit="cover" />
                        <Heading size='md'>{title}</Heading>
                        <Text py='2'>{content}</Text>
                    </CardBody>
                    {link.length > 1 &&
                        <CardFooter>
                            <Link href={link} ><Button variant='link'>Link here</Button></Link>
                        </CardFooter>
                    }
                </Stack>
            </Card>
        </GridItem>
    )
}

function WorkComponent() {
    return (
        <>
            <Text my={2} as="b">Work</Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                <GridCard link={'https://next-auth-lemon.vercel.app/'} title="Next js" content="i learned from this project is library next-auth authentication with Oauth and cookie-consent on website." pathImage={PortcookieConent} />
            </Grid>

        </>
    )
}

export default WorkComponent
