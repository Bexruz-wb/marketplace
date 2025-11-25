 import Category from "../schemas/category.schema.js";
import { ApiError } from "../utils/custom-error.js";
import { successRes } from '../utils/success_response.js';
import { errorRes} from "../utils/error-response.js";

class CategoryController {

    async create(req, res) {
        try {
            const { name } = req.body;

            const existsCategory = await Category.findOne({ name });
            if (existsCategory) {
                throw new ApiError('Category name already exists', 409);
            }

            const newCategory = await Category.create(req.body);
            return successRes(res, newCategory, 201);

        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findAll(_req, res) {
        try {
            const categories = await Category.find();
            return successRes(res, categories);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findOne(req, res) {
        try {
            const category = await Category.findById(req.params?.id);
            if (!category) {
                throw new ApiError('Category not found!', 404);
            }

            return successRes(res, category);

        } catch (error) {
            return errorRes(res, error);
        }
    }
}

export default new CategoryController();
