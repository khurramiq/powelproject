/* eslint-disable react-hooks/exhaustive-deps */
import { Box, useColorMode } from '@chakra-ui/react';
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

const SortByFilter = ({
  sortByFilterOpen,
  setSortByFilterOpen,
  data,
  setFilteredData,
  sortByText,
  setSortByText,
  priceRange,
  priceFilterText,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setSortByFilterOpen);

  const sortByRating = () => {
    if (priceFilterText === 'All') {
      setFilteredData(data.sort((a, b) => b.rating - a.rating));
    } else {
      const tempData = data.filter(
        obj =>
          obj.hourlyRate >= priceRange[0] && obj.hourlyRate <= priceRange[1]
      );
      setFilteredData(tempData.sort((a, b) => b.rating - a.rating));
    }
  };
  const sortByPricePerHour = () => {
    if (priceFilterText === 'All') {
      setFilteredData(data.sort((a, b) => b.hourlyRate - a.hourlyRate));
    } else {
      const tempData = data.filter(
        obj =>
          obj.hourlyRate >= priceRange[0] && obj.hourlyRate <= priceRange[1]
      );
      setFilteredData(tempData.sort((a, b) => b.hourlyRate - a.hourlyRate));
    }
  };
  const sortByTopRated = () => {
    if (priceFilterText === 'All') {
      setFilteredData(
        data.sort((a, b) =>
          a.topRated === b.topRated ? 0 : a.topRated ? -1 : 1
        )
      );
    } else {
      const tempData = data.filter(
        obj =>
          obj.hourlyRate >= priceRange[0] && obj.hourlyRate <= priceRange[1]
      );
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
        variant="outline"
        borderWidth="1px"
        colorScheme="gray"
        rounded="md"
        zIndex="100"
        style={
          colorMode === 'dark'
            ? { background: '#090B0C' }
            : { background: '#fff' }
        }
      >
        <Box
          p={2}
          cursor="pointer"
          onClick={() => {
            setSortByText('Rating');
            sortByRating();
            setSortByFilterOpen(false);
          }}
          css={sortByText === 'Rating' ? { fontWeight: 'bold' } : null}
        >
          Rating
        </Box>
        <Box
          p={2}
          cursor="pointer"
          onClick={() => {
            setSortByText('Price per hr');
            sortByPricePerHour();
            setSortByFilterOpen(false);
          }}
          css={sortByText === 'Price per hr' ? { fontWeight: 'bold' } : null}
        >
          Price per hr
        </Box>
        <Box
          p={2}
          cursor="pointer"
          onClick={() => {
            setSortByText('Top rated');
            sortByTopRated();
            setSortByFilterOpen(false);
          }}
          css={sortByText === 'Top rated' ? { fontWeight: 'bold' } : null}
        >
          Top rated
        </Box>
      </Box>
    </>
  );
};

export default SortByFilter;
