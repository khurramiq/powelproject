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

const PriceFilter = ({ priceFilterOpen, setPriceFilterOpen }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPriceFilterOpen);
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
        bg="white"
        rounded="lg"
        position="absolute"
        top="50"
        left="0"
        borderWidth="1px"
        borderColor="gray.200"
        zIndex="100"
        width="400px"
        ref={wrapperRef}
      >
        <Text fontWeight="bold">Price</Text>
        <RangeSlider
          aria-label={['min', 'max']}
          colorScheme="#E2E8F0"
          defaultValue={[10, 30]}
          mt={4}
        >
          <RangeSliderTrack bg="#E2E8F0">
            <RangeSliderFilledTrack bg="#090B0C" />
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
          <Text>$0</Text>
          <Text>$10,000</Text>
        </Flex>
        <Flex mt={4}>
          <Flex align="left" mr={4} direction="column">
            <Text>From:</Text>
            <Input />
          </Flex>
          <Flex align="left" direction="column">
            <Text>To:</Text>
            <Input />
          </Flex>
        </Flex>
        <Flex mt={4}>
          <Button
            width="50%"
            colorScheme="white"
            bg="white"
            mr={2}
            color="#090B0C"
            borderWidth="1px"
            borderColor="gray.200"
            onClick={() => setPriceFilterOpen(false)}
          >
            Cancel
          </Button>
          <Button
            ml={1}
            width="50%"
            colorScheme="purple"
            bg="#8077F6"
            onClick={() => setPriceFilterOpen(false)}
          >
            Apply
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default PriceFilter;
