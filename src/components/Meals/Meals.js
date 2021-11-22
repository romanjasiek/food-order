import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import AvailableMealsRegular from "./AvailableMealsRegular";
import MealHeader from "./MealHeader";
import MealHeaderRegular from "./MealHeaderRegular";
import AvailableDrinks from "./AvailableDrinks";
import MealHeaderDrinks from "./MealHeaderDrinks";

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <MealHeader />
        <AvailableMeals />
        <MealHeaderRegular />
        <AvailableMealsRegular />
        <MealHeaderDrinks />
        <AvailableDrinks />
    </Fragment>
};

export default Meals;