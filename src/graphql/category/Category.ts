import { Field, ObjectType } from "type-graphql";

@ObjectType() //this class will be a type in graphql
class Category {
    @Field() //this field will be a field in graphql
    name: String;
    @Field()
    descreption: String;
    @Field()
    _id: String; //will be generate by mongo
}

export default Category;