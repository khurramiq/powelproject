import { Box, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import headerLeftIcon1 from '../../assets/images/headerLeftIcon1.png';
import headerLeftIcon2 from '../../assets/images/headerLeftIcon2.png';
import headerRightIcon1 from '../../assets/images/headerRightIcon1.png';
import headerRightIcon2 from '../../assets/images/headerRightIcon2.png';
import headerDarkLeftIcon1 from '../../assets/images/headerDarkLeftIcon1.png';
import headerDarkLeftIcon2 from '../../assets/images/headerDarkLeftIcon2.png';
import headerDarkRightIcon1 from '../../assets/images/headerDarkRightIcon1.png';
import headerDarkRightIcon2 from '../../assets/images/headerDarkRightIcon2.png';

const Header = ({ searchText, filteredData }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="relative"
      rounded="lg"
      p={searchText ? 10 : 4}
      textAlign="center"
      maxW="1200px"
      mx="auto"
      css={
        colorMode === 'light'
          ? { background: '#FBFBFC' }
          : { background: '#121619' }
      }
    >
      <img
        src={colorMode === 'light' ? headerLeftIcon1 : headerDarkLeftIcon1}
        alt="headerLeftIcon1"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      <img
        src={colorMode === 'light' ? headerLeftIcon2 : headerDarkLeftIcon2}
        alt="headerLeftIcon2"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      <img
        src={colorMode === 'light' ? headerRightIcon1 : headerDarkRightIcon1}
        alt="headerRightIcon1"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
      <img
        src={colorMode === 'light' ? headerRightIcon2 : headerDarkRightIcon2}
        alt="headerRightIcon2"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
      <Text fontSize="xl" fontWeight="bold">
        {!searchText ? 'Welcome, John ✋' : 'Search resultes'}
      </Text>
      <Text fontSize="sm" color="#5D6974" mt={2}>
        {!searchText
          ? "Let's Explore DKSH's top talent"
          : `${filteredData?.length} talents found according to your request`}
      </Text>
      {!searchText && (
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
      )}
    </Box>
  );
};
export default Header;
