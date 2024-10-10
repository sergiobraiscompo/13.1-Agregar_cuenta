import React from "react";
import classes from "./movements-list-item.component.module.css"
import { MovementVm } from "../movements-list.vm";

interface Props {
  movementItem: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>

      <span className={`${classes.dataCell} ${classes.center}`}>
        {movementItem.transaction.toLocaleDateString()}
      </span>

      <span className={`${classes.dataCell} ${classes.center}`}>
        {movementItem.transaction.toLocaleDateString()}
      </span>

      <span className={`${classes.dataCell} ${classes.justify}`}>
        {movementItem.description}
      </span>

      <span className={`${classes.dataCell} ${classes.center} ${movementItem.amount < 0 ? classes.negativeAmount : ""}`}> {movementItem.amount} €</span>
      <span className={`${classes.dataCell} ${classes.center} ${movementItem.balance < 0 ? classes.negativeAmount : ""}`}> {movementItem.balance} €</span>
    </div>
  );
};
