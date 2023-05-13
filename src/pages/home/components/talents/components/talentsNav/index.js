import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useColorMode,
  ButtonGroup,
} from '@chakra-ui/react';
import { FiGrid, FiList, FiFilter } from 'react-icons/fi';
import Filters from './components/filters';

const TalentsNav = ({
  data,
  viewToggle,
  setViewToggle,
  sortOpen,
  setSortOpen,
  filteredData,
  setFilteredData,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      p={4}
      style={
        colorMode === 'dark'
          ? { background: '#090B0C' }
          : { background: '#fff' }
      }
    >
      <Flex align="center" justify="space-between">
        {/* Talents Heading and Count */}
        <Flex align="center">
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Talents
          </Text>
          <Text fontSize="sm" color="gray.500">
            {filteredData.length}
          </Text>
        </Flex>

        {/* Grid and List Buttons */}

        <Flex align="center">
          <ButtonGroup
            p={1}
            mr={3}
            rounded="lg"
            spacing={2}
            css={
              colorMode === 'dark'
                ? { backgroundColor: '#121619' }
                : { backgroundColor: '#FBFBFC' }
            }
          >
            <Button
              bg={
                viewToggle === 'Grid'
                  ? colorMode === 'dark'
                    ? '#090B0C'
                    : 'gray.100'
                  : null
              }
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: colorMode === 'dark' ? '#090B0C' : 'gray.100' }}
              _focus={{ boxShadow: 'none' }}
              leftIcon={<FiGrid />}
              onClick={() => setViewToggle('Grid')}
            >
              Grid
            </Button>
            <Button
              bg={
                viewToggle === 'List'
                  ? colorMode === 'dark'
                    ? '#090B0C'
                    : 'gray.100'
                  : null
              }
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: colorMode === 'dark' ? '#090B0C' : 'gray.100' }}
              _focus={{ boxShadow: 'none' }}
              mr={2}
              leftIcon={<FiList />}
              onClick={() => setViewToggle('List')}
            >
              List
            </Button>
          </ButtonGroup>

          {/* Filter Icon */}
          <IconButton
            aria-label="Filter"
            icon={<FiFilter />}
            variant="ghost"
            _hover={{ bg: '#8077F6', color: '#FFFFFF' }}
            _focus={{ boxShadow: 'none' }}
            css={
              sortOpen
                ? {
                    backgroundColor: '#8077F6',
                    color: '#FFFFFF',
                  }
                : colorMode === 'dark'
                ? { backgroundColor: '#121619' }
                : null
            }
            onClick={() => setSortOpen(prev => !prev)}
          />
        </Flex>
      </Flex>
      {sortOpen && (
        <Filters
          data={data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}
    </Box>
  );
};

export default TalentsNav;
