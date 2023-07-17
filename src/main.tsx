import ReactDOM from "react-dom/client";
import App from "./App";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <div className="App">
      <h1>React Query Product List</h1>
      <App />
    </div>
  </PersistQueryClientProvider>
);
