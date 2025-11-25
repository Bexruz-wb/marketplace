export async function successRes(res, data, message = 'Success') {
    return res.status(statusCode).json({
        status: 'success',
        message,
        data
    });
}