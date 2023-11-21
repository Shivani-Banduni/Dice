import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Button  ,
  Grid,
  Select  
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const[searchitem,setsearchitem]=React.useState('')
  const [sortOption, setSortOption] = useState('stars');
  const [repos, setRepos] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchitem}&sort=${sortOption}`
      );
      setRepos(response.data.items);
      setShowResults(true);
      console.log(repos,'repos')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = () => {
    handleSearch();
  };




  const handleClose = () => {
    setAnchorEl(null);
  };






  return (
    <AppBar position="static">
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

       

        <div className='search-div'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '5px' }}>
              <SearchIcon  style={{color:"blue"}}/>
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
              onChange={(e)=>setsearchitem(e.target.value)}
            />

          </div>

        </div>
        <Button    onClick={handleButtonClick}

         varient="outlined" style={{color:'blue', border:'2px solid white', background:'white', marginLeft:'2%'}} className='btn'>Search</Button>



        <div className='sor-div'>
        <Grid item xs={12} sm={6}>
        <Select
        //  value={sortOption} onChange={handleSortChange}
          >
          <MenuItem value="stars">Stars</MenuItem>
          <MenuItem value="watchers">Watchers Count</MenuItem>
          <MenuItem value="score">Score</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="created_at">Created At</MenuItem>
          <MenuItem value="updated_at">Updated At</MenuItem>
        </Select>
      </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
