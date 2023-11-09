import {MainScreen, MainScreenProps} from '../../pages/main-screen/main-screen';

type AppProps = {
  mainProps: MainScreenProps;
}
function App(props: AppProps) {
  return (
    <MainScreen {...props.mainProps}/>
  );
}

export default App;
