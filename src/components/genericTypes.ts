export type UIType = {
    darkMode: boolean;
    animation: Partial<AnimationType>;
}

export type AnimationType = {
    enabled: boolean;
    duration: Numbers;
    delay: Numbers;
    properties?: AnimationProperty[]
}

export type AnimationProperty = 'opacity' | 'scale'

export type Numbers = 100 | 200 | 250 | 300 | 500 | 750 | 1000 | number
