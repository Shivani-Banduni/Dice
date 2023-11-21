// Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Button,
  Select
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Navbar = ({ callback }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchitem, setSearchItem] = useState('');
  const [sortOption, setSortOption] = useState('stars');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchitem}&sort=${sortOption}`
      );

      let sortedData = response.data.items;

      // Sorting the fetched data based on sortOption
      if (sortOption === 'stars') {
        sortedData.sort((a, b) => a.stargazers_count - b.stargazers_count);
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
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <AppBar className='appbar' position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Item 1</MenuItem>
          <MenuItem onClick={handleClose}>Item 2</MenuItem>
          <MenuItem onClick={handleClose}>Item 3</MenuItem>
        </Menu>

        <div className='search-div' style={{ flexGrow: 1, maxWidth: 300 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '5px' }}>
              <SearchIcon style={{ color: 'blue' }} />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
        </div>

        <Button
          onClick={handleSearch}
          variant="outlined"
          style={{
            color: 'blue',
            border: '2px solid white',
            background: 'white',
            marginLeft: '8px',
          }}
          className='btn'
        >
          Search
        </Button>

        <div className='sort-div'>
          <Select
            value={sortOption}
            onChange={handleSortChange}
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
