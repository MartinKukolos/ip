exports.handler = async (event, context) => {
    const xff = event.headers['x-forwarded-for'];

    const ip = xff ? xff.split(',')[0].trim() : 'IP not found ☠️';

    return {
        statusCode: 200,
        body: JSON.stringify({ ip })
    };
}
