import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AuthorCreateNestedOneWithoutBooksInput } from '../author/author-create-nested-one-without-books.input';

@InputType()
export class BooksCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    title!: string;

    @Field(() => AuthorCreateNestedOneWithoutBooksInput, {nullable:true})
    author?: AuthorCreateNestedOneWithoutBooksInput;
}
