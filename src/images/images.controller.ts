import { Controller, Get, Res, Query, HttpException, HttpStatus } from '@nestjs/common';
import * as BlueBird from "bluebird";
import { Response } from 'express';
import * as pathLib from 'path';

const RESOURCES_PATH = pathLib.join(__dirname, '../resources/');

@Controller('images')
export class ImagesController {
  @Get()
  async get(@Res() res: Response, @Query('filePath') filePath: string): Promise<void> {
    try {
      const path = pathLib.join('images', filePath);
      const sendFileAsync = BlueBird.promisify(res.sendFile, { context: res });
      await sendFileAsync(path, { root: RESOURCES_PATH });
    } catch (err) {
      throw new HttpException('Error sending image file', HttpStatus.BAD_REQUEST);
    };
  }
}

