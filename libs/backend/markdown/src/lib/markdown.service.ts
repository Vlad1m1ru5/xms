import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateMarkdownDto } from './dto/create-markdown.dto';
import { UpdateMarkdownDto } from './dto/update-markdown.dto';
import { Markdown } from './entities/markdown.entity';

@Injectable()
export class MarkdownService {
  constructor(
    @InjectRepository(Markdown)
    private readonly markdownRepository: MongoRepository<Markdown>
  ) {}

  create(createMarkdownDto: CreateMarkdownDto) {
    const markdown = this.markdownRepository.create(createMarkdownDto);
    return this.markdownRepository.save(markdown);
  }

  findAll() {
    return this.markdownRepository.find();
  }

  findOne(id: number) {
    return this.markdownRepository.findOne(id);
  }

  update(id: number, updateMarkdownDto: UpdateMarkdownDto) {
    return this.markdownRepository.update(id, updateMarkdownDto);
  }

  async remove(id: number) {
    const markdown = await this.markdownRepository.findOne(id);
    return await this.markdownRepository.remove(markdown);
  }
}
