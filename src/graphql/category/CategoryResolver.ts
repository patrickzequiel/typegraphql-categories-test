import { Query, Resolver } from 'type-graphql';
import Category from './Category';
import CategorySchema from '../../model/CategorySchema';
//first, create a search inside the database
//when we want to search, use a query
//input, we mutate


//to define that this class became a resolver, we need to import the resolver class
@Resolver(Category) //this class will be a resolver for the Category class
class CategoryResolver {

    @Query(() => [Category]) //to say that this will be a function of search
    async categories() { //this name will be the same of the searchs
        const categories = await CategorySchema.find(); //this will search all categories
        return categories; //this will return all categories
    }
}

export default CategoryResolver;