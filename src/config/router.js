import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TrangChu from '../pages/trangchu/trangchu';
import LoginPage from '../pages/login/login';
import KhoaDaoTao from '../pages/khoadaotao/khoadaotao';
import GioiThieu from '../pages/gioithieu/gioithieu';
import Blog from '../pages/blog/blog';
import TuyenDung from '../pages/tuyendung/tuyendung';
import LienHe from '../pages/lienhe/lienhe';
import Profile from '../pages/profile/profile';
import Auth from '../services/auth';
import Logout from '../pages/log out/logout';
import Detail from '../components/tinchitiet/Detail';


const MainRouter = () => (
	<main>    
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={TrangChu}></Route>
				<Route path='/login' exact component={LoginPage}></Route>
				<Route path='/khoadaotao' exact component={KhoaDaoTao}></Route>
				<Route path='/gioithieu' exact component={GioiThieu}></Route>
				<Route path='/tuyendung' exact component={TuyenDung}></Route>
				<Route path='/blog' exact component={Blog}></Route>
				<Route path='/lienhe' exact component={LienHe}></Route>
				<Route path='/blog/:slug.:id.html' exact component={Detail}></Route>
				<Route path='/profile' render={
					() => (
						<Auth sai='/login' dung={
							<Profile></Profile>
						}></Auth>)
				}></Route>
					<Route path='/logout' exact component={Logout}></Route>
			</Switch>
		</BrowserRouter>
	</main>
)

// const MainRouter = () => {
//     return(
//         <BrowserRouter>
//             <Switch>
//                 <Route path='/' exact component={Home}></Route>
//                 <Route path='/login' exact component={LoginPage}></Route>
//                 <Route path='/profile' exact component={Profile}></Route>
//                 <Route path='/dashboard' exact component={Dashboard}></Route>
//             </Switch>
//         </BrowserRouter>
//     )
// }

export default MainRouter