import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagin = (props) => {
  const {count, limit, setPage} = props
  const lastPage = localStorage.getItem('@pokemon_lastPage')

  const getPage = (e,value) => {
    localStorage.setItem('@pokemon_lastPage', value)
    setPage(value)
  }

  return (
    <Stack spacing={2}>
      <Pagination count={Math.ceil(count/limit)} onChange={getPage} defaultPage={()=>parseInt(lastPage)} variant="outlined" shape="rounded" />
    </Stack>
  );
}

export default Pagin