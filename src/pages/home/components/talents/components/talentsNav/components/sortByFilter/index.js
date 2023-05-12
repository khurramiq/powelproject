/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setSortByFilterOpen) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSortByFilterOpen(false);
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

const SortByFilter = ({ sortByFilterOpen, setSortByFilterOpen }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setSortByFilterOpen);
  return (
    <>
      <div
        style={
          sortByFilterOpen
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
        ref={wrapperRef}
        width="100%"
        position="absolute"
        top="50"
        left="0"
        bg="white"
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        zIndex="100"
      >
        <Box
          p={2}
          _hover={{ bg: 'gray.100' }}
          fontWeight="bold"
          onClick={() => setSortByFilterOpen(false)}
        >
          Rating
        </Box>
        <Box
          p={2}
          _hover={{ bg: 'gray.100' }}
          onClick={() => setSortByFilterOpen(false)}
        >
          Price per hr
        </Box>
        <Box
          p={2}
          _hover={{ bg: 'gray.100' }}
          onClick={() => setSortByFilterOpen(false)}
        >
          Top rated
        </Box>
      </Box>
    </>
  );
};

export default SortByFilter;
