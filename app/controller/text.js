const Controller = require('egg').Controller

class TextController extends Controller {

    /**
     * 获取texts
     */
    async getTextList() {
        const { ctx, service} = this  // 从this获取service
        const text = await service.text.find() 

        ctx.body = {
            code: 0,
            msg: 'success',
            data: text
        }
    }

    /**
     * 根据id获取文本
    */
    async getTextByPath() {
        const { ctx, service } = this
        const text = await service.text.findOne(ctx.query.path)

        ctx.body = {
            code: 0,
            msg: 'success',
            data: text
        }
    }

    /**
     * 有id，更新
     * 无id，创建这条记录
    */
    async updateTextByPath() {
        const { ctx } = this
        const { path, content, id } = ctx.request.body

        // const res = await service.text.update({
        //     path,
        //     content
        // })

        const info = {
            path,
            content,
            id
        }
        const res = id ? await this.updateRecord(info) : await this.createRecord(info)
        
        ctx.body = {
            code: 0,
            msg: 'success',
            data: res
        }
    }

    async updateRecord(info) {
        return await this.ctx.service.text.updateOne(info.id, info)
    }

    async createRecord(info) {
        return await this.ctx.service.text.create(info)
    }
}

module.exports = TextController
