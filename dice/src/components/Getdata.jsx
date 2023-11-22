import React, { useState, useEffect } from 'react';
import { AppBar,Toolbar,IconButton,InputBase,Menu,MenuItem,Button,Select,useMediaQuery,useTheme,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Navbar = ({ callback }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [searchitem, setSearchItem] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [initialRender, setInitialRender] = useState(true);


  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    if (sortOption !== '' && !initialRender) {
      handleSearch();
    }
  }, [sortOption, initialRender]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchitem}`
      );

      let sortedData = response.data.items;

      if (sortOption === 'stars') {
        sortedData.sort((a, b) => b.stargazers_count - a.stargazers_count);
      } else if (sortOption === 'watchers_count') {
        sortedData.sort((a, b) => b.watchers_count - a.watchers_count);
      } else if (sortOption === 'score') {
        sortedData.sort((a, b) => b.score - a.score);
      } else if (sortOption === 'name') {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === 'created_at') {
        sortedData.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      } else if (sortOption === 'updated_at') {
        sortedData.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
      }

      callback({ repos: sortedData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
      console.log('Enter key pressed!');
      
    }
  };
  return (
    <AppBar className='appbar' position="static">
      <Toolbar style={{ justifyContent: 'space-evenly' }}>
        <div className='search-div' >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '5px' }}>
              <SearchIcon style={{ color: 'blue' }} />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchItem(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>

        {!isMobile && (
          <Button
            onClick={handleSearch}
            variant="outlined"
            style={{
              color: 'blue',
              border: '2px solid white',
              background: 'white',
            }}
            className='btn'
          >
            Search
          </Button>
        )}
        <div className='sort-div'>
          <Select className='select'
            value={sortOption}
            onChange={(e) => {
              handleSortChange(e);
              setInitialRender(false);
            }}
            sx={{ minWidth: '120px' }}
          >
            <MenuItem value="stars">Stars</MenuItem>
            <MenuItem value="watchers_count">Watchers Count</MenuItem>
            <MenuItem value="score">Score</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="created_at">Created At</MenuItem>
            <MenuItem value="updated_at">Updated At</MenuItem>
          </Select>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
