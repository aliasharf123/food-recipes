export function categoryToEmoji(strCategory: string): string {
    const categoryEmojis: { [key: string]: string } = {
        "Beef": "🥩",
        "Breakfast": "🍳",
        "Chicken": "🍗",
        "Dessert": "🍰",
        "Goat": "🐐",
        "Lamb": "🐑",
        "Miscellaneous": "🍽️",
        "Pasta": "🍝",
        "Pork": "🐖",
        "Seafood": "🐟",
        "Side": "🥗",
        "Starter": "🥪",
        "Vegan": "🌱",
        "Vegetarian": "🥦",
    };

    return categoryEmojis[strCategory] || "❓";  // Default emoji for unknown categories
}
