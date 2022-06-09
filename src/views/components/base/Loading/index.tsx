import { FC } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

export interface LoadingProps extends BoxProps{}

export interface LoadingComponent extends FC<LoadingProps>{};

const Container = styled(Box)<LoadingProps>(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
  }
})

const Loading: LoadingComponent = props => {

  return <Container { ...props } data-testid="loading">
    <CircularProgress />
  </Container>

}

export default Loading;