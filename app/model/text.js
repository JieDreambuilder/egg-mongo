module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const TextSchema = new Schema({
        content: {
            type: String
        },
        path: {
            type: String
        },
        lastTime: {
            type: Number
        }
    })

    const Text = mongoose.model('Texts', TextSchema)

    initTextData(Text)

    return Text
}

/**
 * 初始化一个测试文本
 * @param {Object} Text 
 */
function initTextData(Text) {
    Text.find({}, (err, doc) => {
        if (err) {
            console.log(err)
            console.log('init text failed')
        } else if (!doc.length) {
            new Text({
                content: '我是初始化内容',
                path: 'test',
                lastTime: Date.now()
            }).save()
        } else {
            console.log('-------------init Text successfully--------------')
        }
    })
}