const { Media } = require("../models");

class mediaRepository {
  constructor() {
    this.MediaModel = Media;
  }

  async createMedia(data) {
    const result = await this.MediaModel.create(data);
    return result;
  }

  async deleteMedia(id) {
    const result = await this.MediaModel.destroy({
      where: { id },
    });
    return result;
  }
}

module.exports = mediaRepository;
