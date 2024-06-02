type UIType = {
    darkMode?: boolean;
    animation?: AnimationType;
}

type AnimationType = {
    enabled?: boolean;
    duration?: Numbers;
    delay?: Numbers;
}

type Numbers = 100 | 200 | 250 | 300 | 500 | 750 | 1000 | number
