import {ApolloProvider} from "@apollo/client";
import client from "../config/gql-confiq";
import './App.css';
import Student from "./Student"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ApolloProvider client={client}>
    <Student />
  </ApolloProvider>
      </header>
     
    </div>
  );
}

export default App;
