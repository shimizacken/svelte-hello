export const getMediaDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();

    return devices;
};
