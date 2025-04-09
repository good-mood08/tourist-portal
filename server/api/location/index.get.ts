import prisma from "~/lib/prisma"

export default eventHandler(()=>{
    return prisma.location.findMany({
        include:{
            location_tag:{
                include:{
                    tag:{
                        select:{tag:true,id:true}
                    }
                }
            },
            location_image:{
                include:{
                    image:{
                        select:{
                            src:true
                        }
                    }
                }
            }
        }
    })
})