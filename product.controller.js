import Product from "../schemas/product.schema.js";
import { ApiError } from "../utils/custom-error.js";
import { successRes } from "../utils/success_response.js";
import { errorRes } from "../utils/error-response.js";

class ProductController {

    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            return successRes(res, product, 201);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findAll(_req, res) {
        try {
            const products = await Product.find().populate("categoryId");
            return successRes(res, products);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findOne(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) throw new ApiError("Product not found", 404);
            return successRes(res, product);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async update(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!product) throw new ApiError("Product not found", 404);

            return successRes(res, product);

        } catch (error) {
            return errorRes(res, error);
        }
    }

    async remove(req, res) {
        try {
            const deleted = await Product.findByIdAndDelete(req.params.id);

            if (!deleted) throw new ApiError("Product not found", 404);

            return successRes(res, { message: "Deleted successfully" });

        } catch (error) {
            return errorRes(res, error);
        }
    }
}

export default new ProductController();
