import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { StarIcon, CalendarIcon } from '@chakra-ui/icons';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Review = () => {
  return (
    <Box borderWidth="1px" borderColor="gray.200" rounded="md" p={4} mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Flex alignItems="center">
          <StarIcon color="#8077F6" mr={1} />
          <Text fontSize="lg" fontWeight="bold">
            5.0
          </Text>
          <Text fontSize="sm" color="gray.500" ml={1}>
            /5
          </Text>
        </Flex>
        <IconButton
          icon={<BsThreeDotsVertical />}
          variant="ghost"
          size="sm"
          aria-label="More Options"
        />
      </Flex>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Gift Giving Website
      </Text>
      <Text fontSize="sm" color="#5D6974" mb={2}>
        Yevhen produced a wireframe, UI and design style guide for a custom
        e-commerce site. He did the work on time and with a great design eye.
        Nice design touch.
      </Text>
      <Flex alignItems="center">
        <CalendarIcon color="gray.500" mr={2} />
        <Text fontSize="sm">March 09, 2023 11:00 AM</Text>
      </Flex>
    </Box>
  );
};

export default Review;
