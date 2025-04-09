import prisma from "~/lib/prisma"

export default eventHandler(async(event) => {
    const {tag} = await readBody(event)
    return  await prisma.tag.create({
        data:{
            tag
        }
    })
})