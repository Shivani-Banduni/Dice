// Searchbar.js
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import Navbar from './Getdata';

const Searchbar = () => {
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const callback = ({ repos }) => {
    setData(repos);
    setShowResults(true);
  };

  return (
    <>
      <Navbar callback={callback} />
      <Grid
        className='main'
        container
        spacing={2}
        justifyContent="center"
        sx={{ padding: '16px' }}
      >
        {showResults && (
          <Grid item xs={12}>
            <Grid className='lower-div' container spacing={3}>
              {data.map((repo) => (
                <Grid
                  className='singlediv'
                  key={repo.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Card style={{ height: '100%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <CardContent>
                      <Avatar style={{ height: '20vh', width: '20vh', marginLeft: '30%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} alt="Avatar" src={repo.owner.avatar_url} />
                      <Typography style={{ color: 'blue' }} variant="h4">{repo.name}</Typography>
                      <Typography>
                        <strong>Stars:</strong> {repo.stargazers_count}
                      </Typography>
                      <Typography>
                        <strong>Description:</strong>{' '}
                        {repo.description || 'No description'}
                      </Typography>
                      <Typography>
                        <strong>Language:</strong> {repo.language || 'N/A'}
                      </Typography>
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
