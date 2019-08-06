const Dev = require('../Models/Dev')

module.exports = {
    async store(req,res){
        const { user } = req.headers
        const { devId } = req.params

        try {
            const loggedDev = await Dev.findById(user)
            const targetDev = await Dev.findById(devId)
            
            if(!targetDev){
                return res.status(404)
                .json({error:'User not a exists'})
            }

            loggedDev.deslikes.push(targetDev._id)
            await loggedDev.save()
            return res.json({ loggedDev })
        
        } catch (error) {
            return res.status(500)
            .json({error:'Error 500'})  
        }
    }
}