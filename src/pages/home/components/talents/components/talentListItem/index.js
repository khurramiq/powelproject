import { Box, Flex, Text, Button, Avatar } from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';

const TalentListItem = ({ talent, setSelectedTalent }) => {
  return (
    <Box
      p={2}
      borderWidth="1px"
      borderColor="gray.300"
      borderRadius="20px"
      width="100%"
      my={2}
      textAlign="left"
    >
      <Flex justifyContent="space-between">
        <Box maxW="33%">
          <Flex>
            <Avatar
              src={talent?.profileImage}
              size="md"
              borderWidth="2px"
              borderColor="white"
            />
            <Flex flexDirection="column" ml={4}>
              <Text fontSize="16" fontWeight="700">
                {talent?.name}
              </Text>
              <Text fontSize="12" fontWeight="400" color="gray.500" mb={2}>
                {talent?.desc}
              </Text>
              <Text fontSize="18" fontWeight="700" mb={2}>
                $75/hour
              </Text>
              <Flex alignItems="center">
                <FiMessageSquare size={16} />
                <Text ml={1} fontSize="12" fontWeight="500">
                  {talent?.coments}
                </Text>
                <Text
                  cursor="pointer"
                  ml={1}
                  fontSize="12"
                  fontWeight="500"
                  color="gray.500"
                  onClick={() => setSelectedTalent(talent)}
                >
                  Comments
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Flex>
          {talent.tags.map((tag, i) => (
            <Button
              key={i}
              fontSize="12"
              fontWeight="600"
              variant="outline"
              rounded="full"
              borderWidth="1px"
              mr={2}
            >
              {tag}
            </Button>
          ))}
          <Button variant="outline" rounded="full" borderWidth="1px">
            +3
          </Button>
        </Flex>
        <Flex alignItems="center">
          {talent.tallentImages.map((tallentImage, i) => (
            <Box
              key={i}
              borderRadius="20px"
              overflow="hidden"
              boxShadow="md"
              mr={1}
            >
              <img src={tallentImage?.image} alt="cardImg1" />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TalentListItem;
