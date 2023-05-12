/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Switch, Text } from '@chakra-ui/react';
import dolorIcon from '../../../../../../../../assets/images/dolorIcon.png';
import caretDown from '../../../../../../../../assets/images/caretDown.png';
import caretUp from '../../../../../../../../assets/images/caretUp.png';
import serviceIcon from '../../../../../../../../assets/images/serviceIcon.png';
import sortByIcon from '../../../../../../../../assets/images/sortByIcon.png';
import PriceFilter from '../priceFilter';
import SortByFilter from '../sortByFilter';
import { useState } from 'react';

const Filters = () => {
  const [sortByFilterOpen, setSortByFilterOpen] = useState(false);
  const [priceFilterOpen, setPriceFilterOpen] = useState(false);
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mt={4}
      bg="white"
      rounded="lg"
    >
      {/* Left Side */}
      <Flex alignItems="center">
        {/* Price Filter */}
        <Box position="relative">
          <Flex
            p={2}
            px={4}
            mr={2}
            alignItems="center"
            borderWidth="1px"
            rounded="full"
            borderColor="gray.200"
            cursor="pointer"
            onClick={() => setPriceFilterOpen(prev => !prev)}
          >
            <img src={dolorIcon} alt="dolorIcon" />
            <Text ml={2} fontSize="sm" color="#878F9A">
              Price per hr:
            </Text>
            <Text ml={1} mr={2} color="#090B0C">
              All
            </Text>
            <img src={priceFilterOpen ? caretUp : caretDown} alt="caretDown" />
          </Flex>

          {priceFilterOpen && (
            <PriceFilter
              priceFilterOpen={priceFilterOpen}
              setPriceFilterOpen={setPriceFilterOpen}
            />
          )}
        </Box>
        <Flex
          p={2}
          px={4}
          mr={2}
          alignItems="center"
          borderWidth="1px"
          rounded="full"
          borderColor="gray.200"
          cursor="pointer"
          position="relative"
        >
          <img src={serviceIcon} alt="serviceIcon" />
          <Text ml={2} fontSize="sm" color="#878F9A">
            Services :
          </Text>
          <Text ml={1} mr={2} color="#090B0C">
            All
          </Text>
          <img src={caretDown} alt="caretDown" />
        </Flex>
        <Box position="relative">
          <Flex
            p={2}
            px={4}
            mr={2}
            alignItems="center"
            rounded="full"
            borderWidth="1px"
            borderColor="gray.200"
            cursor="pointer"
            onClick={() => setSortByFilterOpen(prev => !prev)}
          >
            <img src={sortByIcon} alt="sortByIcon" />
            <Text ml={2} fontSize="sm" color="#878F9A">
              Sort by :
            </Text>
            <Text ml={1} mr={2} color="#090B0C">
              Rating
            </Text>
            <img src={sortByFilterOpen ? caretUp : caretDown} alt="caretDown" />
          </Flex>
          {sortByFilterOpen && (
            <SortByFilter
              sortByFilterOpen={sortByFilterOpen}
              setSortByFilterOpen={setSortByFilterOpen}
            />
          )}
        </Box>
      </Flex>

      {/* Right Side */}
      <Flex alignItems="center">
        {/* Available Switch */}
        <Flex alignItems="center" mr={4}>
          <Switch size="md" isChecked={true} />
          <Text ml={2} fontSize="sm">
            Available to work
          </Text>
        </Flex>
        {/* Pro Talent Switch */}
        <Flex alignItems="center">
          <Switch size="md" isChecked={false} />
          <Text ml={2} fontSize="sm">
            Pro talent
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Filters;
