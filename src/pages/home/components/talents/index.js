import React, { useState } from 'react';
import TalentsNav from './components/talentsNav';
import { Box } from '@chakra-ui/react';
import TalentsGrid from './components/talentsGrid';
import Reviews from '../reviews';

import TalentList from './components/talentList';

const Talents = ({ data, filteredData, setFilteredData }) => {
  const [viewToggle, setViewToggle] = useState('Grid');
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <Box maxW="1200px" mx="auto">
      <TalentsNav
        data={data}
        viewToggle={viewToggle}
        setViewToggle={setViewToggle}
        sortOpen={sortOpen}
        setSortOpen={setSortOpen}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      {viewToggle === 'Grid' ? (
        <TalentsGrid
          data={filteredData}
          setSelectedTalent={setSelectedTalent}
        />
      ) : (
        <TalentList data={filteredData} setSelectedTalent={setSelectedTalent} />
      )}
      {selectedTalent && <Reviews setSelectedTalent={setSelectedTalent} />}
    </Box>
  );
};

export default Talents;
