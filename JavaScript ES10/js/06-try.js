try {
    throw new Error('Algo salio mal');
} catch (error) {
    console.log(error);
}

// nueva forma

try {
    throw new Error('Algo salio mal');
} catch {
    console.log('Hubo un error bastante grave');
}