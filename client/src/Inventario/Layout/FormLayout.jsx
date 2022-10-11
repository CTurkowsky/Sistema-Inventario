import { Grid, Typography } from '@mui/material';

export const FormLayout = ({ children, title = '' }) => {
  return (
    <div className='container mt-5 pt-5' >
      <h2 className='m-3 text-center'>{title} </h2>
      {children}
    </div>
  );
};
