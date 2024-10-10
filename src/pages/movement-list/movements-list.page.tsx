import React from "react";
import { MovementVm } from "./movements-list.vm";
import { getMovementsList } from "./api";
import { mapMovementListFromApiToVm } from "./movements-list.mapper";
import classes from "./movements-list.page.module.css"
import { AppLayout } from "@/layouts";
import { MovementListTableComponent } from "./components";
import { useParams } from "react-router-dom";


export const MovementListPage: React.FC = () => {
    const [movementsList, setMovementsList] = React.useState<MovementVm[]>([]);
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
      if (id) {
        try {
          getMovementsList(id).then((result) =>
            setMovementsList(mapMovementListFromApiToVm(result))
          );
        } catch (error) {
            throw new Error("Error while charging movements");
        }
      }
  }, []);
  
    return (
      <AppLayout>
        <div className={classes.root}>
          <div className={classes.headerContainer}>
            <h1>Mis cuentas</h1>
            <button>AGREGAR NUEVA CUENTA</button>
          </div>
          <MovementListTableComponent movementList={movementsList} />
        </div>
      </AppLayout>
    );
};
