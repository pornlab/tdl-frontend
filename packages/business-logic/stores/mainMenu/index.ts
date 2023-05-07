import { types } from "mobx-state-tree";
import { MainItem } from "./models";

export const MainMenu = types.model({
    list: types.array(MainItem),
});