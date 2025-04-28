import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product';
import { Link } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text bgGradient={'linear(to-r, blue.400, blue)'} textAlign={'center'} fontSize={'30'} fontWeight={'bold'} bgClip={'text'}>
          Current Products 🚀
        </Text>
 
        <SimpleGrid columns={{base: 1, sm: 2, md: 3}} spacing={8} w={'full'}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize={'xl'} textAlign={'center'} color={'gray.500'} fontWeight={'bold'}>
            No products found
            <Link to={'/create'}>
              <Text _hover={{textDecoration: 'underline'}} color={'blue.400'} as={'span'}>
                Click here to create a product
              </Text>
            
            </Link>
          </Text>
        )}
      </VStack>

    </Container>
  )
}

export default HomePage