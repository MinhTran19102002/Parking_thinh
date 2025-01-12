import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import React, { Suspense, useContext, useMemo } from 'react';
import { Layout, Modal, theme } from 'antd';
import { useEffect } from 'react';
import { publicRoutes } from '../routes/routes';
import Sider from '../components/Navbar';
import Loading from '../components/Loading';
import Header from '../components/Header';

function Main({ }) {
    const currRoute = useMemo(() => {
        let rs = publicRoutes;
        return rs;
    });


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider routes={currRoute} />
            <Layout className="px-4 d-flex flex-column align-item-center" >
                <Header className="border-1" />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        {currRoute.map((route, ix) => {
                            if (route.children) {
                                return route.children.map((subRoute) => <Route {...subRoute} key={subRoute.key} />);
                            }
                            return <Route {...route} key={'route' + ix} />;
                        })}
                        <Route path="*" element={<Navigate to={currRoute[1].path} />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Layout>
    )
}


export default Main;