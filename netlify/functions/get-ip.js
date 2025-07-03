exports.handler = async (event, context) => {
    const xff = event.headers['client-ip']; // or x-forwarded-for

    const ip = xff ? xff.split(',')[0].trim() : 'IP not found';

    return {
        statusCode: 200,
        body: JSON.stringify({ ip })
    };
}