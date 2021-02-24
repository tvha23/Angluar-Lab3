import { Component, OnInit } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { NgModule } from "@angular/core";
@NgModule({
  exports: [MatGridListModule]
})
@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
