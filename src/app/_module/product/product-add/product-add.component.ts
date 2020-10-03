import { Component, OnInit } from '@angular/core';

import bsCustomFileInput from 'bs-custom-file-input';
import { Select2Plugin } from "select2";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  select2plugin: Select2Plugin;

  constructor() { }

  ngOnInit(): void {
    bsCustomFileInput.init();
    $(".select2").select2();
    $('.select2bs4').select2({
      theme: 'bootstrap4'
    })
  }

}
