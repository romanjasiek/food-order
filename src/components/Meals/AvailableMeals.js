import { nanoid } from "nanoid";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: nanoid(),
      name: "🌶️ Vegetarische Frikadellen mit Kartoffeln und Apfelmus",
      description: "Ein wunderbares, würziges und leicht scharfes Herbstgericht.",
      price: 22.99,
    },
    {
      id: nanoid(),
      name: "Kürbis-Knödel mit Salbei-Butter",
      description: "Nicht nur an Halloween ein echtes Highlight!",
      price: 16.99,
    },
    {
      id: nanoid(),
      name: "✨ Rote-Bete-Tarte mit Minze und überbackenem Ziegenkäse",
      description: "Gesünder geht es kaum. Empfehlung des Hauses.",
      price: 17.99,
    },
    {
      id: nanoid(),
      name: "Cremiges Pilzrisotto",
      description: "Ein köstliches Wohlfühlessen.",
      price: 12.99,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
                                                key={meal.id} 
                                                name={meal.name} 
                                                description={meal.description} 
                                                price={meal.price}/>);

    return <section className="meals">
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
};

export default AvailableMeals;