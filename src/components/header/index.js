import { Box, Flex, Text, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      bg="#FBFBFC"
      rounded="lg"
      p={4}
      textAlign="center"
      maxW="1200px"
      mx="auto"
    >
      <Text fontSize="xl" fontWeight="bold" color="gray.800">
        Welcome, John ✋
      </Text>
      <Text fontSize="sm" color="#5D6974" mt={2}>
        Let's Explore DKSH's top talent
      </Text>
      <Flex mt={4} justify="center">
        <Button
          colorScheme="purple"
          fontSize="12"
          fontWeight="500"
          bg="#8077F6"
          color="white"
          _hover={{ bg: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          mr={2}
        >
          All
        </Button>
        <Button
          colorScheme="purple"
          fontSize="12"
          fontWeight="500"
          color="#5D6974"
          _hover={{ color: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          variant="ghost"
          mr={2}
        >
          Interfaces
        </Button>
        <Button
          colorScheme="purple"
          color="#5D6974"
          fontSize="12"
          fontWeight="500"
          _hover={{ color: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          variant="ghost"
          mr={2}
        >
          Branding
        </Button>
        <Button
          colorScheme="purple"
          color="#5D6974"
          fontSize="12"
          fontWeight="500"
          _hover={{ color: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          variant="ghost"
          mr={2}
        >
          Illustration
        </Button>
        <Button
          colorScheme="purple"
          color="#5D6974"
          fontSize="12"
          fontWeight="500"
          _hover={{ color: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          variant="ghost"
          mr={2}
        >
          Graphics
        </Button>
        <Button
          colorScheme="purple"
          color="#5D6974"
          fontSize="12"
          fontWeight="500"
          _hover={{ color: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          variant="ghost"
          mr={2}
        >
          3D
        </Button>
        <Button
          colorScheme="purple"
          color="#5D6974"
          fontSize="12"
          fontWeight="500"
          _hover={{ color: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          variant="ghost"
          mr={2}
        >
          Animation
        </Button>
        <Button
          colorScheme="purple"
          color="#5D6974"
          fontSize="12"
          fontWeight="500"
          _hover={{ color: '#8077F6' }}
          _focus={{ boxShadow: 'none' }}
          variant="ghost"
        >
          Marketing
        </Button>
      </Flex>
    </Box>
  );
};
export default Header;
