import Category from "../model/category.model.js";
import { failureHandler, successHandler } from "../response.handler.js";

export async function createACategory(req, res) {
  try {
    const name = req.body.categoryName;

    const newCategory = new Category({ name });
    const category = await newCategory.save();
    return successHandler(res, category, 201);
  } catch (e) {
    return failureHandler(res, 400, e.message);
  }
}

async function insertIntoCategoryRel(req, res, next) {}
