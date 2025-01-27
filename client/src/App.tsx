/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { FavouritesProvider, SearchProvider } from "./context";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <SearchProvider>
      <FavouritesProvider>
        <AppRouter />
      </FavouritesProvider>
    </SearchProvider>
  );
}

export default App;
