import BlogCategoryRel from "../model/blogCategoryRel.junction.model.js";
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

export async function insertIntoCategoryRel(req, res, next) {
  try {
    const { category_id, blog_id } = req.body;

    const newRel = new BlogCategoryRel({
      blog: blog_id,
      category: category_id,
    });
    await newRel.save();
    return successHandler(res, newRel, 201, `New RElationship created`);
  } catch (e) {
    failureHandler(res, 400, e?.message);
  }
}

// blog with category

// i. blogs
// each blogs category

// N + 1 problem

// BlogCategoryRel --> findmany({blog}) category --> category ra blog populate

// left joins (aggregate lookup)
