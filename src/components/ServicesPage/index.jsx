import React, { useState, useEffect } from "react";
import Landing from "../Landing";
import Blogs from "../Blogs";
import ECommerce from "../ECommerce";
import Institutional from "../Institutional";

import "./styles.css";

const ServicesPage = () => {
    const [selectedComponent, setSelectedComponent] = useState("servicos");
    const [loading, setLoading] = useState(false);

    const components = ["servicos", "blog", "ecommerce", "institutional"];

    const handleButtonClick = (component) => {
        setLoading(true);
        setTimeout(() => {
            setSelectedComponent(component);
            setLoading(false);
        }, 300); // 300 milissegundos de atraso
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(true);
            setTimeout(() => {
                setSelectedComponent(prev => {
                    const currentIndex = components.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % components.length;
                    return components[nextIndex];
                });
                setLoading(false);
            }, 400);
        }, 8000);

        return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <div className="services-main-container" id="service-section">
            <div className="switch-service-container">
                <button
                    className={`switch-service-button ${
                        selectedComponent === "servicos" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("servicos")}
                >
                    Landing Page
                </button>
                <button
                    className={`switch-service-button ${
                        selectedComponent === "blog" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("blog")}
                >
                    Blog Page
                </button>
                <button
                    className={`switch-service-button ${
                        selectedComponent === "ecommerce" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("ecommerce")}
                >
                    E-Commerce
                </button>
                <button
                    className={`switch-service-button ${
                        selectedComponent === "institutional" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("institutional")}
                >
                    Institutional Page
                </button>
            </div>
            <div className={`services-container ${loading ? "fade-out" : "fade-in"}`}>
                {
                    {
                        servicos: <Landing />,
                        blog: <Blogs />,
                        ecommerce: <ECommerce />,
                        institutional: <Institutional />,
                    }[selectedComponent]
                }
            </div>
        </div>
    );
};

export default ServicesPage;
