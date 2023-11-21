// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import { TextField, Select, MenuItem, Grid, Card, CardContent, Typography, Avatar, Button } from '@mui/material';
// import Nav from './Nav';

// const Items = ({searchitem,sortOption,handleclick}) => {
//   const [repos, setRepos] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const[searchitem,setsearchitem]=React.useState('')
//   const [sortOption, setSortOption] = useState('stars')

//     const handleSearch = async () => {
//         try {
//           const response = await axios.get(
//             `https://api.github.com/search/repositories?q=${searchitem}&sort=${sortOption}`
//           );
//           setRepos(response.data.items);
//           setShowResults(true);
//           console.log(repos,'repos')
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
// function handleclick(){
//     handleSearch()
//     setShowResults(true)

// }

//     return (
//       <>
// <Nav handleSearch={handleSearch}/>

// <Grid className='main' container spacing={2} justifyContent="center">

// {showResults && (
//         <Grid item xs={12}>
//           <Grid className='lower-div' container spacing={3}>
//             {repos.map((repo) => (
//               <Grid className='singlediv' key={repo.id} item xs={12} sm={6} md={4}>
//                 <Card style={{ height: '100%' }}>
//                   <CardContent>
//                     <Avatar alt="Avatar" src={repo.owner.avatar_url} />
//                     <Typography variant="h6">{repo.name}</Typography>
//                     <Typography><strong>Stars:</strong> {repo.stargazers_count}</Typography>
//                     <Typography><strong>Description:</strong> {repo.description || 'No description'}</Typography>
//                     <Typography><strong>Language:</strong> {repo.language || 'N/A'}</Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       )}

//         </Grid>
//       </>
     
  
//     );
// }

// export default Items;
