import { Box, Flex, Text, Avatar, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import profileImage1 from '../../../../assets/images/cardProfilePic1.svg';
import Review from './components/review';

const Reviews = ({ setSelectedTalent }) => {
  return (
    <>
      <Box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        left={0}
        bg="rgba(0, 0, 0, 0.24)"
        zIndex={999}
      />
      <Box
        position="fixed"
        top={4}
        right={4}
        bottom={4}
        width={400}
        bg="white"
        boxShadow="lg"
        rounded="md"
        overflowY="auto"
        p={4}
        zIndex={1000}
        css={{
          '&::-webkit-scrollbar': {
            width: '0.4em',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Reviews
          </Text>
          <IconButton
            icon={<CloseIcon />}
            variant="ghost"
            size="sm"
            aria-label="Close"
            onClick={() => setSelectedTalent(null)}
          />
        </Flex>
        <Box mb={4}>
          <Avatar name="Ryan Jackson" src={profileImage1} size="lg" mr={4} />
          <Box>
            <Text fontSize="l" fontWeight="bold">
              Ryan Jackson
            </Text>
            <Flex alignItems="center">
              <Text fontSize="lg" fontWeight="bold" mr={1}>
                4.6
              </Text>
              <Text fontSize="sm" color="gray.500">
                /5
              </Text>
            </Flex>
            <Flex alignItems="center" mt={2}>
              <Text>Comments</Text>
              <Text fontSize="sm" ml={1}>
                12
              </Text>
            </Flex>
          </Box>
        </Box>
        {/* Reviews */}
        <Review />
        <Review />
        <Review />
      </Box>
    </>
  );
};

export default Reviews;
