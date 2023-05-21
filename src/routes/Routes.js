import {
	BrowserRouter,
	Route,
	Routes as ReactDomRoutes,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import ToDoApp from "../pages/ToDoList/ToDoApp";
import PokeApi from "../pages/PokeApi/PokeApi"



const Routes = () => {
	

	return (
		<BrowserRouter>
			
				<Layout>
					<ReactDomRoutes>
						<Route path="/" element={<Home />} />

                        <Route path="ToDoApp">
							<Route index element={<ToDoApp/>} />
							<Route path=":ToDoApp" element={<ToDoApp/>} />
						</Route>
                            
                        <Route path="PokeApi">
                            <Route index element={<PokeApi/>} />
							<Route path=":PokeApi" element={<PokeApi/>} />
                        </Route>

						
					</ReactDomRoutes>
				</Layout>
			
		</BrowserRouter>
	);
};

export default Routes;