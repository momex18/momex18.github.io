import someRoutes from "./Router";
import { useRoutes } from "hookrouter";



function Main() {
  const mainRoutes = useRoutes(someRoutes);

  return (
    <div className="SuperMain">
      {mainRoutes}
    </div>
  )
}

export default Main;
