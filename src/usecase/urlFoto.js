class urlFotoUseCase {
    constructor (urlFotoRepository, userRepository) {
        this.urlFotoRepository = urlFotoRepository;
        this.userRepository = userRepository;
    }

    
    async urlFotoCreate(data){
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }

        if(data.url === undefined) {
            result.reason = 'plesae insert foto';
            return result
        }

        const verifyUser = await this.userRepository.getUserById(data.userId);
        if (verifyUser === null) {
            result.reason = 'user not found!'
            return result
        }

        const verifyUrlFoto = await this.urlFotoRepository.getFotoByUserId(data.userId)
        if (verifyUrlFoto !== null) {
            await this.urlFotoRepository.deleteUrlFoto(verifyUrlFoto.id)
        }

        const urlFoto = await this.urlFotoRepository.createUrlFoto(data);

        const userUpdateValue = {
            urlFotoId: urlFoto.id 

        }
        
        await this.userRepository.updateUser(userUpdateValue, verifyUser.id);


        result.isSuccess = true;
        result.statusCode = 200;
        result.data = urlFoto
        return result
    }
}

module.exports = urlFotoUseCase;
