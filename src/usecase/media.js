const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

class mediaUseCase {
  constructor(mediaRepository) {
    this.mediaRepository = mediaRepository;
  }

  async upload(file) {
    const result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const originalFileName = file.filename;
    const metadata = await sharp(file.path).metadata();
    const fileType = metadata.format;

    const smallFileName = (Math.random() * (100000 - 1) + 1).toString(36).substring(7) + "." + fileType;
    const smallDestinationPath = path.resolve(file.destination, "", smallFileName);

    const largeFileName = (Math.random() * (100000 - 1) + 1).toString(36).substring(7) + "." + fileType;
    const largeDestinationPath = path.resolve(file.destination, "", largeFileName);

    await sharp(file.path).resize(1000).jpeg({ quality: 90 }).toFile(smallDestinationPath);
    await sharp(file.path).resize(500).jpeg({ quality: 90 }).toFile(largeDestinationPath);

    fs.unlinkSync(file.path);

    const createData = {
      name: originalFileName,
      mimeType: fileType,
      small: smallFileName,
      large: largeFileName,
    };

    const data = await this.mediaRepository.createMedia(createData);

    result.data = data;
    result.isSuccess = true;
    result.statusCode = 200;

    return result;
  }

  async createMedia(createData) {
    const result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const data = await this.mediaRepository.createMedia(createData);

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = data;

    return result;
  }
}

module.exports = mediaUseCase;
