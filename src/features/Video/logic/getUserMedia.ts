export const getUserMedia = async (
    constraints: MediaStreamConstraints,
): Promise<MediaStream | undefined> => {
    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(
            constraints,
        );

        return mediaStream;
    } catch (e) {
        console.log(e);
    }
};
