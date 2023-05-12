import { Box, Flex } from '@chakra-ui/react';
import TalentCard from '../talentCard';

const TalentsGrid = ({ data, setSelectedTalent }) => {
  return (
    <Box maxW="1200px" mx="auto">
      <Flex justifyContent="center" flexWrap="wrap">
        {data.map((talent, i) => (
          <Box key={i} width={{ base: '100%', md: '50%', lg: '25%' }}>
            <TalentCard talent={talent} setSelectedTalent={setSelectedTalent} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default TalentsGrid;
