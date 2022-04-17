import "materialize-css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hock";
import RoutesComponet from "./routes";

function App() {
  const { token, login, logout, userId, isReady } = useAuth();
  const isAuth = Boolean(token);

  if (!isReady) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuth }}>
      {isAuth && <Navbar />}
      <div className="container">
        <RoutesComponet isAuth={isAuth} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
