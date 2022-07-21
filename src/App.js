import AOS from 'aos';
import 'aos/dist/aos.css';
import { lazy, Suspense, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Art from './Components/ArtDetails/Art';
import Footer from "./Components/Footer/Footer"
import Four from './Components/FourOFour/Four';
import HomePage from "./Pages/HomePage"


const Collectionpage = lazy(() => import('./Pages/Collectionpage'))
const TeamPage = lazy(() => import('./Pages/TeamPage'))

function App() {

	useEffect(() => {
		AOS.init(
			{
				duration: 1000,
				easing: 'ease',
				once: true,
				mirror: false,
			}
		);
	}, [])

	return (

		<div className='mx-auto'>

			<Routes>

				<Route path={'/'} element={<HomePage />} />
				<Route path={'/collections'} element={
					<Suspense>
						<Collectionpage />
					</Suspense>
				} />

				<Route path={'/team'} element={
					<Suspense>	
						<TeamPage />
					</Suspense>
				} />

				<Route path={'/YTP21/assets/nft/:id'} element={<Art />} />
				<Route path={'*'} element={<Four />} />

			</Routes>

			<Footer />



		</div>


	)
}

export default App
