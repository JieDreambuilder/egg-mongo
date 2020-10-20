const Service = require('egg').Service

class TextSevice extends Service {

    /**
     * 查询所有的text
     */
    async find() {
        // 从数据库里查询
        const texts = await this.ctx.model.Text.find({})

        return Object.assign({}, {
            pageNum: 1,
            pageSize: 10,
            list: texts
        })
    }

    /**
     * 根据路径查询
     */
    async findOne(path) {
        // 从数据库里查询
        const text = await this.ctx.model.Text.findOne({
            path
        })
        return text
    }
    
    async update(info) {
        const res = await this.ctx.model.Text.findOne(info)
        return res ? await this.updateOne(info) : await this.create(info)
    }

    /**
     * 创建一条记录
    */
    async create(info) {
        return await this.ctx.model.Text.create({
            path: info.path,
            content: info.content,
            lastTime: Date.now()
        })
    }

    /**
     * 更新一条记录
    */
    async updateOne(id, info) {
        console.log('info===========', info)
        await this.ctx.model.Text.findByIdAndUpdate(id, info)
        // 查询更新后的记录
        return await this.findById(id)
    }

    async findById(id) {
        return await this.ctx.model.Text.findById(id)
    }
}

module.exports = TextSevice