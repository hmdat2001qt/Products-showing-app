import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useProductStore } from '../store/product'


const ProductCard = ({product}) => {
    const {bg} = useColorModeValue('white', 'gray.800')
    const {textColor} = useColorModeValue('gray.800', 'white')
    const toast = useToast()
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {deleteProduct, updateProduct} = useProductStore()
    const [updatedProduct, setUpdatedProduct] = useState(product)
    const handleDeleteProduct = async() => {
        const {success, message} = await deleteProduct(product._id)
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
    }
    const handleUpdateProduct = async (pid, updatedProduct) => {
      const {success, message} = await updateProduct(pid, updatedProduct)
      if(!success) {
        toast({
          title: 'Error',
          description: 'Product updated',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
        
      } else {
        toast({
          title: 'Success',
          description: 'Product updated',
          status: 'success',
          duration: 3000,
          isClosable: true
        })
      }
    }
  return (
    <Box
        shadow={'md'}
        rounded={'lg'}
        overflow={'hidden'}
        bg={bg}
        transition={'all 0.3s'}
        _hover={{transform: 'translateY(-5px)', shadow: 'xl'}}



    >
        <Image src={product.image} alt={product.name} h='48' w={'full'} objectFit={'cover'}/>
        <Box p={4}>
          <Heading as={'h3'} size={'md'} mb={2}>
              {product.name}
          </Heading>
          <Text fontSize={'xl'} fontWeight={'bold'} mb={4} color={textColor}>
              ${product.price}
          </Text>
          <HStack spacing={2}>
              <IconButton icon={<EditIcon/>} onClick={onOpen} colorScheme='blue'/>
              <IconButton icon={<DeleteIcon/>} onClick={() => handleDeleteProduct(product._id)} colorScheme='red'/>

          </HStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Update Product
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <VStack spacing={4}>
              <Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>

              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme={'blue'} mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                Update
              </Button>
              <Button variant={'ghost'} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

    </Box>
  )
}

export default ProductCard