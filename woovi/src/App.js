import logo from './/Logo.png';
import './App.css';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import TextField from './Components/text-field';

function App() {
  return (
    <div className="App">
      <Box sx={{width:"100%"}}>
      <Stack spacing={2} alignItems={"center"}>
        <img src={logo} style={{width:123}}/>
          <TextField text={"João, como você quer pagar?"} />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
