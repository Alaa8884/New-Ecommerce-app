import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "@routes/AppRouter";
import { store, persistor } from "@store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
