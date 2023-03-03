import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthorCreateWithoutBooksInput {

    @Field(() => String, {nullable:false})
    name!: string;
}
