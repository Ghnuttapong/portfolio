import React from 'react'
import { Card, CardBody, Box, Text } from "@chakra-ui/react";

function ExperienceComponent() {
    return (
        <>
            <Text as="b" my={2}>Experience</Text>
                <Card borderRadius={0} variant="filled">
                    <CardBody>
                        <Text as='b'>Internship</Text>
                        <Box>
                            <Text fontSize='md'>Versatile Haus Company Limited {'(2 month)'}</Text>
                            <Text fontSize='sm'>{'- Backend Developer'}</Text>
                        </Box>
                    </CardBody>
                </Card>
        </>
    )
}

export default ExperienceComponent
