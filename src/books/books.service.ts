import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { title } from 'process';
import { PrismaService } from 'src/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
   constructor(private prisma : PrismaService){}

  // create(createBookDto: Prisma.BooksCreateInput) {
  //   return this.prisma.books.create({
  //     data: createBookDto,
  //   });
  // }

  create(createBookDto: Prisma.BooksUncheckedCreateInput) {
    return this.prisma.books.create({
      data: createBookDto,
    });
  }

  // findAll() {
  //   return this.prisma.books.findMany();
  // }


  findAll() {
    return this.prisma.books.findMany(
      {
        include: {
          author : true
        }
      }
    );
  }
  // findOne(id: number) {
  //   return this.prisma.books.findUnique({ 
  //     where: {id},
  //   });
  // }

  findOne(bookswhereUniqueInput : Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({ 
      where: bookswhereUniqueInput
    });
  }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return this.prisma.books.update({
  //     where:{
  //       id:id,
  //     },
  //     data:{
  //       id:updateBookDto.id,
  //       title:updateBookDto.title
  //     }
  //   });
  // }

  update(where: Prisma.BooksWhereUniqueInput, data: Prisma.BooksUpdateInput) {
      return this.prisma.books.update({
        where,
        data
      });
    }



  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where
    });
  }
}
