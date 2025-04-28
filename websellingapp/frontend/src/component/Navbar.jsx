import { Button, Container, Flex, HStack, IconButton, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { MoonIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons'


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={'1140px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} h={16} flexDir={{ base: 'column', sm: 'row' }}>
            <Text fontSize={{base: '22', sm: '28'}} textTransform={'uppercase'} textAlign={'center'} bgClip={'text'} bgGradient='linear(to-r, cyan.500, blue.400)'>
                
                <Link to={'/'}>Product Store 🛒</Link>
            </Text>
            <HStack spacing={2}>
                <Link to={'/create'}>
                    <IconButton icon={<PlusSquareIcon fontSize={20}/>}></IconButton>
                </Link>

                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon/> : <SunIcon size={20}/>}
                </Button>

            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar