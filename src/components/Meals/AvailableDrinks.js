import { nanoid } from "nanoid";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import Bier from "../../assets/bier.png";
import SchwarzeJohanisbeere from "../../assets/schwarzejohannisbeere.png";
import Mineralwasser from "../../assets/mineralwasser.png";
import Apfelsaft from "../../assets/apfelsaft.png";

const DUMMY_MEALS = [
    {
      id: nanoid(),
      image: Apfelsaft,
      name: <div dangerouslySetInnerHTML={{__html: 'Glas Apfelsaft <sup>7</sup>'}} />,
      description: "0,4 Liter, naturtrüb. Auf Wunsch auch als Schorle.",
      price: 1.99,
    },
    {
      id: nanoid(),
      image: SchwarzeJohanisbeere,
      name: <div dangerouslySetInnerHTML={{__html: 'Glas Schwarze-Johannisbeerensaft'}} />,
      description: "0,4 Liter. Auf Wunsch auch als Schorle.",
      price: 1.99,
    },
    {
      id: nanoid(),
      image: Mineralwasser,
      name: <div dangerouslySetInnerHTML={{__html: 'Glas Mineralwasser'}} />,
      description: "0,4 Liter. Still, Medium oder Sprudel.",
      price: 17.99,
    },
    {
      id: nanoid(),
      image: Bier,
      name: <div dangerouslySetInnerHTML={{__html: 'Flasche Bier'}} />,
      description: "0,3 Liter, mit Glas oder aus der Flasche.",
      price: 12.99,
    },
  ];

const AvailableDrinks = () => {

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

export default AvailableDrinks;