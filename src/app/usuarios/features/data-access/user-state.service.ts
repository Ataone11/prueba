import { inject, Injectable } from "@angular/core";
import { User } from "../../../shared/interfaces/user.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductsService } from "./user.service";
import { map } from "rxjs";
interface State{
  users: User[]
  status: 'loading' | 'success' | 'error'

}
@Injectable()
export class ProductsStateService{

private productsService = inject(ProductsService)
private initialState: State = {
  users: [],
  status: 'loading' as const
}
state = signalSlice({
  initialState: this.initialState,
  sources: [
      this.productsService
      .getUser()
      .pipe(map((users) => ({users, status: 'success' as const}))),
  ]
})


}

