
export const getAnimationValues = (animation?: Partial<AnimationType>): AnimationType => {
    const enabled = animation?.enabled ?? true
    return {
        enabled: enabled,
        delay: !enabled ? 0 : animation?.delay ?? 0,
        duration: !enabled ? 0 : animation?.duration ?? 250,
        properties: !enabled ? undefined : animation?.properties ?? ['opacity', 'opacity'],
    }
}

export const getDarkModeValue = (darkMode?: boolean) => (darkMode ?? false) == true ? 'dark' : '';

export const mapAnimationType = (property: AnimationProperty) => {
    if(property=='scale') return 'scale-[0.8] group-hover:scale-100'
}

export const getAnimationTransitions = (properties?: AnimationProperty[]) => {
    return `transition-[${properties?.map(p => p=='scale' ? 'transform' : 'opacity').join(',') ?? ''}]`;
}

export const getAnimationStyles = (animations: AnimationType) => {
    return animations.enabled ? 
      animations.properties?.map(type => mapAnimationType(type)).join(' ') ?? ''
     : '';

}
