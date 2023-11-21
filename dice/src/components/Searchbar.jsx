import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Select, MenuItem, Grid, Card, CardContent, Typography, Avatar, Button } from '@mui/material';
import Navbar from './Navbar';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState('stars');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchTerm}&sort=${sortOption}`
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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
      <>
<Navbar/>
<Grid className='main' container spacing={2} justifyContent="center">
      {/* <Grid item xs={12} sm={6}>
        <TextField
          label="Search public repositories"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginTop: '10px' }}
          onClick={handleButtonClick}
        >
          Search
        </Button>
      </Grid> */}
      {/* <Grid item xs={12} sm={6}>
        <Select value={sortOption} onChange={handleSortChange} >
          <MenuItem value="stars">Stars</MenuItem>
          <MenuItem value="watchers">Watchers Count</MenuItem>
          <MenuItem value="score">Score</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="created_at">Created At</MenuItem>
          <MenuItem value="updated_at">Updated At</MenuItem>
        </Select>
      </Grid> */}
      {showResults && (
        <Grid item xs={12}>
          <Grid className='lower-div' container spacing={3}>
            {repos.map((repo) => (
              <Grid className='singlediv' key={repo.id} item xs={12} sm={6} md={4}>
                <Card style={{ height: '100%' }}>
                  <CardContent>
                    <Avatar alt="Avatar" src={repo.owner.avatar_url} />
                    <Typography variant="h6">{repo.name}</Typography>
                    <Typography><strong>Stars:</strong> {repo.stargazers_count}</Typography>
                    <Typography><strong>Description:</strong> {repo.description || 'No description'}</Typography>
                    <Typography><strong>Language:</strong> {repo.language || 'N/A'}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
      </>
    
  );
};

export default Searchbar;
