import LayoutDefault from './layout/LayoutDefault';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publiclRoutes } from './router/routes';

function App() {
    return (
        <Fragment>
            <Routes>
                {publiclRoutes.map((router, index) => {
                    const Page = router.component;
                    let Layout = LayoutDefault;

                    return (
                        <Route
                            key={index + Math.random() * 2}
                            path={router.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Fragment>
    );
}

export default App;
