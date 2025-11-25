 
export function errorRes(res, error) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    
    return res.status(statusCode).json({
        status: 'error',
        message
    });
} 
 
 
 

