import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Author } from '../author/author.model';

@ObjectType()
export class Books {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => Author, {nullable:true})
    author?: Author | null;
}
