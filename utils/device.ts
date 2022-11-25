type DeviceType = 'iOS' | 'AOS' | 'desktop';

export function getUserDevice(): DeviceType {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('android') > -1) {
        return 'AOS';
    } else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
        return 'iOS';
    } else {
        return 'desktop';
    }
}

export function getDeeplinkUrl(requestKey: string): string {
    const device = getUserDevice();
    return device === 'iOS'
        ? `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${requestKey}`
        : `intent://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${requestKey}#Intent;scheme=kakaotalk;package=com.kakao.talk;end`;
}
