import { Box, Flex, Text } from '@chakra-ui/react';
import profileImage1 from '../../../../assets/images/cardProfilePic1.svg';
import searchDropdownCatetup from '../../../../assets/images/searchDropdownCatetup.png';
import searchDropdownCaretdown from '../../../../assets/images/searchDropdownCaretdown.png';
import searchDropdownReturnIcon from '../../../../assets/images/searchDropdownReturnIcon.png';
import TalentSearchItem from '../talentSearchItem';
import ServiceSearchItem from '../serviceSearchItem';

const SearchDropdown = () => {
  return (
    <Box
      position="absolute"
      top="50"
      left="0"
      bg="white"
      rounded="md"
      boxShadow="md"
      width="100%"
      zIndex="100"
    >
      {/* Talent Search Items Heading Row */}
      <Flex align="center" justify="space-between" mb={2} px={4} mt={4}>
        <Flex align="center">
          <Text fontWeight="600" fontSize="14" mr={1}>
            Talents
          </Text>
          <Text fontSize="sm" color="gray.500">
            12
          </Text>
        </Flex>
        <Text color="#8077F6" fontSize="12" fontWeight="500">
          See All
        </Text>
      </Flex>
      {/* Talent Search Items */}
      <TalentSearchItem item={{ profileImage: profileImage1 }} />
      <TalentSearchItem item={{ profileImage: profileImage1 }} />
      <TalentSearchItem item={{ profileImage: profileImage1 }} />
      {/* Services Search Items Heading Row */}
      <Flex align="center" justify="space-between" mt={4} mb={2} px={4}>
        <Flex align="center">
          <Text fontWeight="600" fontSize="14" mr={1}>
            Services
          </Text>
          <Text fontSize="sm" color="gray.500">
            4
          </Text>
        </Flex>
        <Text color="#8077F6" fontSize="12" fontWeight="500">
          See All
        </Text>
      </Flex>
      {/* Service Search items */}
      <ServiceSearchItem />
      <ServiceSearchItem />
      <ServiceSearchItem />
      <Flex
        bg="#FBFBFC"
        rounded="md"
        p={2}
        align="center"
        justify="space-between"
        mt={2}
      >
        <Flex align="center">
          <Box bg="#EDF0F3" rounded="full" p={2} mr={2}>
            <img src={searchDropdownCatetup} alt="searchDropdownCatetup" />
          </Box>
          <Box bg="#EDF0F3" rounded="full" p={2}>
            <img src={searchDropdownCaretdown} alt="searchDropdownCaretdown" />
          </Box>
          <Text fontSize="12" fontWeight="500">
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
          <Text fontSize="12" fontWeight="500">
            To dismiss
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchDropdown;
