import { Box, Flex, Text, Button, IconButton } from '@chakra-ui/react';
import { FiGrid, FiList, FiFilter } from 'react-icons/fi';
import Filters from './components/filters';

const TalentsNav = ({
  data,
  viewToggle,
  setViewToggle,
  sortOpen,
  setSortOpen,
}) => {
  return (
    <Box p={4} bg="white">
      <Flex align="center" justify="space-between">
        {/* Talents Heading and Count */}
        <Flex align="center">
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Talents
          </Text>
          <Text fontSize="sm" color="gray.500">
            {data.length}
          </Text>
        </Flex>

        {/* Grid and List Buttons */}
        <Flex align="center">
          <Button
            bg={viewToggle === 'Grid' ? 'gray.100' : null}
            colorScheme="gray"
            variant="ghost"
            _hover={{ bg: 'gray.100' }}
            _focus={{ boxShadow: 'none' }}
            mr={2}
            leftIcon={<FiGrid />}
            onClick={() => setViewToggle('Grid')}
          >
            Grid
          </Button>
          <Button
            bg={viewToggle === 'List' ? 'gray.100' : null}
            colorScheme="gray"
            variant="ghost"
            _hover={{ bg: 'gray.100' }}
            _focus={{ boxShadow: 'none' }}
            mr={2}
            leftIcon={<FiList />}
            onClick={() => setViewToggle('List')}
          >
            List
          </Button>

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
                : null
            }
            onClick={() => setSortOpen(prev => !prev)}
          />
        </Flex>
      </Flex>
      {sortOpen && <Filters />}
    </Box>
  );
};

export default TalentsNav;
