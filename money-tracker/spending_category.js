class SpendingCategoryManager {
    constructor() {
        this.categories = [];
    }

    // Add a new category
    addCategory(category) {
        category = category.trim();

        if (category === "") {
            console.log("Category cannot be empty.");
            return;
        }

        if (this.categories.includes(category)) {
            console.log("Category already exists.");
            return;
        }

        this.categories.push(category);
        console.log(`"${category}" added successfully.`);
    }

    // Display all categories
    viewCategories() {
        if (this.categories.length === 0) {
            console.log("No categories available.");
            return;
        }

        console.log("\nSpending Categories:");
        this.categories.forEach((category, index) => {
            console.log(`${index + 1}. ${category}`);
        });
    }

    // Update an existing category
    updateCategory(oldCategory, newCategory) {
        const index = this.categories.indexOf(oldCategory);

        if (index === -1) {
            console.log("Category not found.");
            return;
        }

        if (this.categories.includes(newCategory)) {
            console.log("Category already exists.");
            return;
        }

        this.categories[index] = newCategory;
        console.log("Category updated successfully.");
    }

    // Delete a category
    deleteCategory(category) {
        const index = this.categories.indexOf(category);

        if (index === -1) {
            console.log("Category not found.");
            return;
        }

        this.categories.splice(index, 1);
        console.log("Category deleted successfully.");
    }
}

// ----------------------------
// Example Usage
// ----------------------------

const manager = new SpendingCategoryManager();

manager.addCategory("Food");
manager.addCategory("Travel");
manager.addCategory("Shopping");

manager.viewCategories();

manager.updateCategory("Travel", "Transportation");

manager.viewCategories();

manager.deleteCategory("Shopping");

manager.viewCategories();