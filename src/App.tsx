import Landing from "./routes/landing";
import { Route } from "wouter";

function App() {
  return <Route path="/" component={Landing} />;
}

export default App;
