import { Box, Button, Container, Heading, Input, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'


const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
    })
    const toast = useToast()
    const {createProduct} = useProductStore()
    const handleAddProduct = async() => {
        
        const {success, message} = await createProduct(newProduct)
        if(!success){
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            }) 
        } else {
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
        setNewProduct({
            name: '',
            price: '',
            image: '',
        })
    }
  return (
    <Container maxW={'container.sm'}>
        <Heading as={'h1'} textAlign={'center'} fontSize={30} mb={8}>
            Create Product
        </Heading>
        <Box alignItems={'center'}>
            <VStack>
                <Input 
                placeholder='Product Name'
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <Input 
                placeholder='Price'
                name='price'
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
                <Input 
                placeholder='Image URL'
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
            </VStack>
            <Button w={'full'} colorScheme={'blue'} onClick={handleAddProduct}>
                Add Product
            </Button>
        </Box>
    </Container>
  )
}

export default CreatePage