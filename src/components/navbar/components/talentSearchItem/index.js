import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import messageIcon from '../../../../assets/images/messageIcon.png';
import { FiMessageSquare } from 'react-icons/fi';

const TalentSearchItem = ({ item }) => {
  return (
    <Flex align="center" mb={2} px={4}>
      <Box mr={2}>
        <img
          src={item.profileImage}
          style={{ borderRadius: '100%' }}
          alt="avatar"
          width={24}
          height={24}
        />
      </Box>
      <Text fontSize="14">{item?.name}</Text>
      <Box ml="auto">
        <FaStar color="#8077F6" />
      </Box>
      <Box ml={2} mr={2}>
        <Text fontSize="12">{item?.rating}/5</Text>
      </Box>
      <Box ml={2} mr={2}>
        <FiMessageSquare />
      </Box>
      <Text fontSize="12">{item?.coments}</Text>
    </Flex>
  );
};

export default TalentSearchItem;
