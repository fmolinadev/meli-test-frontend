/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { SearchProvider } from "./context/useSearch.context";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
}

export default App;
