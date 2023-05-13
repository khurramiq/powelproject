/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Switch, Text } from '@chakra-ui/react';
import dolorIcon from '../../../../../../../../assets/images/dolorIcon.png';
import caretDown from '../../../../../../../../assets/images/caretDown.png';
import caretUp from '../../../../../../../../assets/images/caretUp.png';
import serviceIcon from '../../../../../../../../assets/images/serviceIcon.png';
import sortByIcon from '../../../../../../../../assets/images/sortByIcon.png';
import circleCross from '../../../../../../../../assets/images/circleCross.png';
import PriceFilter from '../priceFilter';
import SortByFilter from '../sortByFilter';
import { useState } from 'react';

const Filters = ({ data, filteredData, setFilteredData }) => {
  const [sortByFilterOpen, setSortByFilterOpen] = useState(false);
  const [priceFilterOpen, setPriceFilterOpen] = useState(false);
  const [sortByText, setSortByText] = useState('Rating');
  const [priceRange, setPriceRange] = useState([10, 100]);
  const [priceFilterText, setPriceFilterText] = useState('All');

  const resetAll = () => {
    setFilteredData(data.sort((a, b) => b.rating - a.rating));
    setPriceRange([10, 100]);
    setSortByText('Rating');
    setPriceFilterText('All');
  };
  const resetPossible = () => {
    if (priceFilterText !== 'All') {
      return true;
    }
    return false;
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mt={4}
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
            variant="outline"
            borderWidth="1px"
            colorScheme="gray"
            rounded="full"
            cursor="pointer"
            onClick={() => setPriceFilterOpen(prev => !prev)}
          >
            <img
              src={dolorIcon}
              alt="dolorIcon"
              style={{ background: '#fff' }}
            />
            <Text ml={2} fontSize="sm" color="#878F9A">
              Price per hr:
            </Text>
            <Text ml={1} mr={2} fontSize="14" fontWeight="600">
              {priceFilterText}
            </Text>
            {priceFilterText !== 'All' && (
              <img
                src={circleCross}
                alt="circleCross"
                style={{ marginRight: '8px', backgroundColor: '#fff' }}
              />
            )}
            {/* <img
              src={priceFilterOpen ? caretUp : caretDown}
              alt="caretDown"
              style={{ backgroundColor: '#fff' }}
            /> */}
            {priceFilterOpen ? (
              <i className="fal fa-angle-up" style={{ fontSize: '18px' }}></i>
            ) : (
              <i className="fal fa-angle-down" style={{ fontSize: '18px' }}></i>
            )}
          </Flex>

          {priceFilterOpen && (
            <PriceFilter
              priceFilterOpen={priceFilterOpen}
              setPriceFilterOpen={setPriceFilterOpen}
              setPriceFilterText={setPriceFilterText}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              data={data}
              setFilteredData={setFilteredData}
              sortByText={sortByText}
            />
          )}
        </Box>
        <Flex
          p={2}
          px={4}
          mr={2}
          alignItems="center"
          variant="outline"
          borderWidth="1px"
          colorScheme="gray"
          rounded="full"
          cursor="pointer"
          position="relative"
        >
          <img
            src={serviceIcon}
            alt="serviceIcon"
            style={{ background: '#fff' }}
          />
          <Text ml={2} fontSize="sm" color="#878F9A">
            Services :
          </Text>
          <Text ml={1} mr={2} fontSize="14" fontWeight="600">
            All
          </Text>
          <i className="fal fa-angle-down" style={{ fontSize: '18px' }}></i>
        </Flex>
        <Box position="relative">
          <Flex
            p={2}
            px={4}
            mr={2}
            alignItems="center"
            rounded="full"
            variant="outline"
            borderWidth="1px"
            colorScheme="gray"
            cursor="pointer"
            onClick={() => setSortByFilterOpen(prev => !prev)}
          >
            <img
              src={sortByIcon}
              alt="sortByIcon"
              style={{ background: '#fff' }}
            />
            <Text ml={2} fontSize="sm" color="#878F9A">
              Sort by :
            </Text>
            <Text ml={1} mr={2} fontSize="14" fontWeight="600">
              {sortByText}
            </Text>
            {sortByFilterOpen ? (
              <i className="fal fa-angle-up" style={{ fontSize: '18px' }}></i>
            ) : (
              <i className="fal fa-angle-down" style={{ fontSize: '18px' }}></i>
            )}
          </Flex>
          {sortByFilterOpen && (
            <SortByFilter
              sortByFilterOpen={sortByFilterOpen}
              setSortByFilterOpen={setSortByFilterOpen}
              data={data}
              setFilteredData={setFilteredData}
              sortByText={sortByText}
              setSortByText={setSortByText}
              priceRange={priceRange}
              priceFilterText={priceFilterText}
            />
          )}
        </Box>
        {resetPossible() && (
          <Flex
            p={2}
            px={4}
            mr={2}
            alignItems="center"
            variant="outline"
            borderWidth="1px"
            colorScheme="gray"
            rounded="full"
            cursor="pointer"
            position="relative"
            onClick={() => resetAll()}
          >
            <Text ml={1} mr={2} fontSize="14" fontWeight="600">
              Reset all
            </Text>
          </Flex>
        )}
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
