import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import searchDropdownCatetup from '../../../../assets/images/searchDropdownCatetup.png';
import searchDropdownCaretdown from '../../../../assets/images/searchDropdownCaretdown.png';
import searchDropdownReturnIcon from '../../../../assets/images/searchDropdownReturnIcon.png';
import TalentSearchItem from '../talentSearchItem';
import ServiceSearchItem from '../serviceSearchItem';
import { useEffect, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setOpenSearchDropdown) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenSearchDropdown(false);
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

const SearchDropdown = ({
  searchedTalents,
  searchedServices,
  openSearchDropdown,
  setOpenSearchDropdown,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenSearchDropdown);
  const { colorMode } = useColorMode();
  return (
    <>
      <div
        style={
          openSearchDropdown
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
        position="absolute"
        top="50"
        left="0"
        rounded="md"
        boxShadow="md"
        width="100%"
        zIndex="100"
        variant="outline"
        borderWidth="1px"
        colorScheme="gray"
        style={
          colorMode === 'dark'
            ? { background: '#090B0C' }
            : { background: '#fff' }
        }
      >
        {/* Talent Search Items Heading Row */}
        <Flex align="center" justify="space-between" mb={2} px={4} mt={4}>
          <Flex align="center">
            <Text fontWeight="600" fontSize="14" mr={1}>
              Talents
            </Text>
            <Text fontSize="sm" color="gray.500">
              {searchedTalents?.length}
            </Text>
          </Flex>
          <Text color="#8077F6" fontSize="12" fontWeight="500">
            See All
          </Text>
        </Flex>
        {/* Talent Search Items */}
        {searchedTalents.map((item, i) => (
          <TalentSearchItem key={i} item={item} />
        ))}
        {/* Services Search Items Heading Row */}
        <Flex align="center" justify="space-between" mt={4} mb={2} px={4}>
          <Flex align="center">
            <Text fontWeight="600" fontSize="14" mr={1}>
              Services
            </Text>
            <Text fontSize="sm" color="gray.500">
              {searchedServices?.length}
            </Text>
          </Flex>
          <Text color="#8077F6" fontSize="12" fontWeight="500">
            See All
          </Text>
        </Flex>
        {/* Service Search items */}
        {searchedServices.map((item, i) => (
          <ServiceSearchItem key={i} item={item} />
        ))}
        <Flex
          p={2}
          align="center"
          justify="space-between"
          mt={2}
          css={
            colorMode === 'light'
              ? { background: '#FBFBFC' }
              : { background: '#121619' }
          }
        >
          <Flex align="center">
            <Box bg="#EDF0F3" rounded="full" p={2} mr={2}>
              <img src={searchDropdownCatetup} alt="searchDropdownCatetup" />
            </Box>
            <Box bg="#EDF0F3" rounded="full" p={2}>
              <img
                src={searchDropdownCaretdown}
                alt="searchDropdownCaretdown"
              />
            </Box>
            <Text fontSize="12" fontWeight="500" ml={2}>
              To navigate
            </Text>
            <Box bg="#EDF0F3" rounded="full" p={2} ml={2} mr={2}>
              <img
                src={searchDropdownReturnIcon}
                alt="searchDropdownReturnIcon"
              />
            </Box>
            <Text fontSize="12" fontWeight="500">
              To select
            </Text>
            <Box bg="#EDF0F3" rounded="full" p={2} ml={2}>
              <img
                src={searchDropdownReturnIcon}
                alt="searchDropdownReturnIcon"
              />
            </Box>
            <Text fontSize="12" fontWeight="500" ml={2}>
              To dismiss
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default SearchDropdown;
