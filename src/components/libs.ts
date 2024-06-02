
export const getAnimationValues = (animation?: AnimationType): AnimationType => {
    return {
        delay: animation?.delay ?? 0,
        enabled: animation?.enabled ?? true,
        duration: animation?.duration ?? 100,
    }
}

export const getDarkModeValue = (darkMode?: boolean) => (darkMode ?? false) == true ? 'dark' : '';

export const getCopyTipValue = (canCopyTip?: boolean) => canCopyTip ?? false;
