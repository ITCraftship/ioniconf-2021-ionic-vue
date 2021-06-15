import createApp from './server-main';

export default function () {
    const {app, router} = createApp();

    return {
        app,
        router
    };
}