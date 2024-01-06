import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'
import HorizontalScrollBar from './HorizontalScrollBar'
import HorizontalScroll from 'react-horizontal-scrolling';
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'50px'}}}>
      <Typography variant='h3' mb={5}>
         Exercises that target the same muscle group
      </Typography>
      <Stack flexWrap='wrap' justifyContent='space-around'  sx={{p:'2', position:'realtive' ,flexDirection:{lg:'row', sm:'col'},}}>
      {targetMuscleExercises.length ? targetMuscleExercises.map((item)=>(<ExerciseCard exercise={item}/>)) 
      : <Loader/>}
      </Stack>
      <Typography variant='h3' mb={5} mt={10}>
         Exercises that use the same equipment
      </Typography>
      <Stack flexWrap='wrap'justifyContent='space-around' sx={{p:'2', position:'realtive' ,flexDirection:{lg:'row', sm:'col'}, mt:{lg:'0', xs:'50px'}}}>
      {equipmentExercises.length ? equipmentExercises.map((item)=>(<ExerciseCard exercise={item}/>))
      : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
