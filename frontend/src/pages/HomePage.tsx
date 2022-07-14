import React from 'react'

import { Heading } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Heading as={"h1"} fontWeight="bold" fontSize="4xl">
      Welcome to the FullStack Blog App implemented using React as a frontend framework and Express as a backend platform that is connected to PostgreSQL database.
    </Heading>
  )
}
