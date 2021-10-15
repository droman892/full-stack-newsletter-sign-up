// in this file, new data will be created to pass to frontend

exports.testController = (req, res) => {
    res.json({
        testList: ['test 1', 'test 2', 'test 3']
    })
}