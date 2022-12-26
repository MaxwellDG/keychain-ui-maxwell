import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, Route, Routes, Outlet, BrowserRouter} from 'react-router-dom';
import Gallery from './pages/gallery';

//SVGs
import House from 'src/assets/svgs/Icons/house';
import Images from 'src/assets/svgs/Icons/images';
import Information from 'src/assets/svgs/Icons/information';

// Pages
import { Keychain } from './pages/keychain';

// Mobile Pages

export default function AppRoutes() {

    // To show mobile warning if screen size is smaller than 1224px
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

    // const bypassMobileWarning = useRecoilValue(bypassMobileWarningAtom);
    // const setBypassMobileWarning = useSetRecoilState(bypassMobileWarningAtom);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="about" element={<About />} />
                    {/* <Route path="keychain" element={<Keychain />} /> */}

                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
);
}

function Layout() {
    return (
    <div className="bg-backgroundBlack flex flex-1 flex-col">
        <Outlet />
        <div className="bg-gradient-to-b from-headerBackgroundGray to-backgroundBlack p-0.5"/>
            <nav className="bg-backgroundBlack py-2">
                <ul className="flex flex-row justify-evenly">
                    <li>
                        <NavLink className="relative flex flex-col justify-center items-center cursor-pointer" to="/">
                            {({ isActive }) => (
                                <>
                                    <div className={`absolute -top-3 left-0 right-0 h-1 w-full ${isActive ? 'bg-activePink' : 'bg-transparent'}`}/>
                                    <House color={`${isActive ? "#BE7DFF" : "#73788A"}`}/>
                                    <p className={`${isActive ? 'text-activePink' : 'text-inactiveGray'} font-blenderprobold`}>Home</p>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="relative flex flex-col justify-center items-center cursor-pointer" to="/gallery">
                            {({ isActive }) => (
                                <>
                                    <div className={`absolute -top-3 left-0 right-0 h-1 w-full ${isActive ? 'bg-activePink' : 'bg-transparent'}`}/>
                                    <Images color={`${isActive ? "#BE7DFF" : "#73788A"}`}/>
                                    <p className={`${isActive ? 'text-activePink' : 'text-inactiveGray'} font-blenderprobold`}>Gallery</p>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="relative flex flex-col justify-center items-center cursor-pointer" to="/about">
                            {({ isActive }) => (
                                <>
                                    <div className={`absolute -top-3 left-0 right-0 h-1 w-full ${isActive ? 'bg-activePink' : 'bg-transparent'}`}/>
                                    <Information color={`${isActive ? "#BE7DFF" : "#73788A"}`}/>
                                    <p className={`${isActive ? 'text-activePink' : 'text-inactiveGray'} font-blenderprobold`}>About</p>
                                </>
                            )}
                        </NavLink>
                    </li>
                    {/* <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li> */}
                </ul>
            </nav>
        {/* <hr /> */}
    </div>
);
}

function Home() {
    return (
        <div className="flex flex-1">
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div className="flex flex-1">
            <h2>About</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <NavLink to="/">Go to the home page</NavLink>
            </p>
        </div>
    );
}
