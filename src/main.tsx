import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "@routes/AppRouter";
import { store } from "@store/index";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
