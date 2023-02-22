export const getIndex = (req, res) => {
    res.sendFile('../views/index.html', { root: '.' });
};
