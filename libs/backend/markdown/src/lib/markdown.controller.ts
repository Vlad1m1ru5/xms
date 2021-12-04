import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import 'multer';
import { ObjectID } from 'typeorm';
import { CreateMarkdownDto } from './dto/create-markdown.dto';
import { UpdateMarkdownDto } from './dto/update-markdown.dto';
import { MarkdownService } from './markdown.service';

@Controller('markdown')
export class MarkdownController {
  constructor(private readonly markdownService: MarkdownService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File) {
    const createMarkdownDto = new CreateMarkdownDto();
    createMarkdownDto.md = file.buffer.toString();
    createMarkdownDto.name = file.originalname;

    return this.markdownService.create(createMarkdownDto);
  }

  @Get()
  findAll() {
    return this.markdownService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectID) {
    return this.markdownService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarkdownDto: UpdateMarkdownDto
  ) {
    return this.markdownService.update(+id, updateMarkdownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.markdownService.remove(+id);
  }
}
