import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './LoadingScreen.css'

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress color="inherit" variant="determinate" {...props} />
        </Box>
    );
}

const LoadingScreen = () => {
    const [progress, setProgress] = useState(10);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);

        if (progress === 100) {
            clearInterval(timer);
            setIsLoaded(true);
        }

        return () => {
            clearInterval(timer);
        };
    }, [progress]);

    useEffect(() => {
        if (isLoaded) {
            navigate('/home');
        }
    }, [isLoaded, navigate]);

    return (
        <div id="loadingScreenContainer">
            <div id="headingLoadingScreen">
                <div id="creatViseHeading">Creatvise</div>
                <div id="zoneHeading">ZONE</div>
            </div>
            <div id="loadingBar">
                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel value={progress} />
                </Box>
            </div>
        </div>
    );
};

export default LoadingScreen;
