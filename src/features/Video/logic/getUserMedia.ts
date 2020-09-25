export const getUserMedia = async (
    constraints: MediaStreamConstraints,
): Promise<MediaStream | undefined> => {
    try {
        console.log(constraints);
        const mediaStream = await navigator.mediaDevices.getUserMedia(
            constraints,
        );

        return mediaStream;
    } catch (e) {
        console.log(e);
    }
};
