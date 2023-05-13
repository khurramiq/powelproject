/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/aria-proptypes */
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useColorMode,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { FiCircle } from 'react-icons/fi';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setPriceFilterOpen) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setPriceFilterOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */

const PriceFilter = ({
  priceFilterOpen,
  setPriceFilterOpen,
  setPriceFilterText,
  priceRange,
  setPriceRange,
  data,
  setFilteredData,
  sortByText,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPriceFilterOpen);

  const handleApply = () => {
    // eslint-disable-next-line no-useless-concat
    setPriceFilterText('$' + priceRange[0] + '-' + '$' + priceRange[1]);
    const tempData = data.filter(
      obj => obj.hourlyRate >= priceRange[0] && obj.hourlyRate <= priceRange[1]
    );
    if (sortByText === 'Rating') {
      setFilteredData(tempData.sort((a, b) => b.rating - a.rating));
    } else if (sortByText === 'Price per hr') {
      setFilteredData(tempData.sort((a, b) => b.hourlyRate - a.hourlyRate));
    } else if (sortByText === 'Top rated') {
      setFilteredData(
        tempData.sort((a, b) =>
          a.topRated === b.topRated ? 0 : a.topRated ? -1 : 1
        )
      );
    }
  };
  const { colorMode } = useColorMode();

  return (
    <>
      <div
        style={
          priceFilterOpen
            ? {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }
            : null
        }
      />
      <Box
        p={4}
        rounded="lg"
        position="absolute"
        top="50"
        left="0"
        variant="outline"
        borderWidth="1px"
        colorScheme="gray"
        zIndex="100"
        width="400px"
        ref={wrapperRef}
        style={
          colorMode === 'dark'
            ? { background: '#090B0C' }
            : { background: '#fff' }
        }
      >
        <Text fontWeight="bold">Price</Text>
        <RangeSlider
          aria-label={['min', 'max']}
          colorScheme="#E2E8F0"
          value={priceRange}
          min={0}
          max={1000}
          mt={4}
          onChange={rane => setPriceRange(rane)}
        >
          <RangeSliderTrack bg="#E2E8F0">
            <RangeSliderFilledTrack
              bg={colorMode === 'dark' ? '#000' : '#090B0C'}
            />
          </RangeSliderTrack>
          <RangeSliderThumb
            boxSize={6}
            as={FiCircle}
            color="#090B0C"
            index={0}
          />
          <RangeSliderThumb
            boxSize={6}
            as={FiCircle}
            color="#090B0C"
            index={1}
          />
        </RangeSlider>
        <Flex justify="space-between">
          <Text>${priceRange[0]}</Text>
          <Text>${priceRange[1]}</Text>
        </Flex>
        <Flex mt={4}>
          <Flex align="left" mr={4} direction="column">
            <Text>From:</Text>
            <Input
              type="number"
              value={priceRange[0]}
              onChange={e => {
                if (parseInt(e.target.value) <= 0 || e.target.value === '') {
                  setPriceRange([0, priceRange[1]]);
                } else {
                  setPriceRange([parseInt(e.target.value), priceRange[1]]);
                }
              }}
            />
          </Flex>
          <Flex align="left" direction="column">
            <Text>To:</Text>
            <Input
              type="number"
              value={priceRange[1]}
              onChange={e => {
                if (parseInt(e.target.value) <= 0 || e.target.value === '') {
                  setPriceRange([priceRange[0], 0]);
                } else {
                  setPriceRange([priceRange[0], parseInt(e.target.value)]);
                }
              }}
            />
          </Flex>
        </Flex>
        <Flex mt={4}>
          <Button
            width="50%"
            mr={2}
            variant="outline"
            borderWidth="1px"
            colorScheme="gray"
            onClick={() => setPriceFilterOpen(false)}
          >
            Cancel
          </Button>
          <Button
            ml={1}
            width="50%"
            colorScheme="purple"
            bg="#8077F6"
            onClick={() => {
              handleApply();
              setPriceFilterOpen(false);
            }}
          >
            Apply
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default PriceFilter;
