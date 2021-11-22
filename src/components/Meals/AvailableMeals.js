import { nanoid } from "nanoid";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import Faecherkartoffeln from "../../assets/faecherkartoffeln.png";
import Kuerbisknoedel from "../../assets/kuerbisknoedel.png";
import Pilzrisotto from "../../assets/pilzrisotto.png";
import VeggieFrikadellen from "../../assets/veggiefrikadellen.png";

const DUMMY_MEALS = [
    {
      id: nanoid(),
      image: VeggieFrikadellen,
      name: <div dangerouslySetInnerHTML={{__html: '🌶️ Vegetarische Frikadellen mit Kartoffeln und Apfelmus <sup>1, 2, 5</sup>'}} />,
      description: "Ein wunderbares, würziges und leicht scharfes Herbstgericht.",
      price: 22.99,
    },
    {
      id: nanoid(),
      image: Kuerbisknoedel,
      name: <div dangerouslySetInnerHTML={{__html: 'Kürbis-Knödel mit Salbei-Butter <sup>1, 2</sup>'}} />,
      description: "Nicht nur an Halloween ein echtes Highlight!",
      price: 16.99,
    },
    {
      id: nanoid(),
      image: Faecherkartoffeln,
      name: <div dangerouslySetInnerHTML={{__html: '✨ Fächerkartoffeln mit Pesto und gebackener Roter Bete <sup>2, 3, 5</sup>'}} />,
      description: "Empfehlung des Hauses.",
      price: 17.99,
    },
    {
      id: nanoid(),
      image: Pilzrisotto,
      name: <div dangerouslySetInnerHTML={{__html: 'Cremiges Pilzrisotto <sup>1, 2, 4</sup>'}} />,
      description: "Ein köstliches Wohlfühlessen.",
      price: 12.99,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
                                                key={meal.id} 
                                                id={meal.id}
                                                image={meal.image}
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