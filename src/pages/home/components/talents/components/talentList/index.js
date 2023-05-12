import { Box } from '@chakra-ui/react';
import React from 'react';
import TalentListItem from '../talentListItem';

const TalentList = ({ data, setSelectedTalent }) => {
  return (
    <Box maxW="1200px" mx="auto">
      {data.map((talent, i) => (
        <TalentListItem
          key={i}
          talent={talent}
          setSelectedTalent={setSelectedTalent}
        />
      ))}
    </Box>
  );
};

export default TalentList;
