type UIType = {
    darkMode?: boolean;
    animation?: Partial<AnimationType>;
}

type AnimationType = {
    enabled: boolean;
    duration: Numbers;
    delay: Numbers;
    properties?: AnimationProperty[]
}

type AnimationProperty = 'opacity' | 'scale'

type Numbers = 100 | 200 | 250 | 300 | 500 | 750 | 1000 | number
