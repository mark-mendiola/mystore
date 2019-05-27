import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { faTimes, faCloudUploadAlt, faTintSlash } from '@fortawesome/free-solid-svg-icons';
import { ImportProductsService } from '../services/import-products.service';

@Component({
  selector: 'app-import-products',
  templateUrl: './import-products.component.html',
  styleUrls: ['./import-products.component.scss']
})
export class ImportProductsComponent implements OnInit {

  pageTitle = 'Import Products';

  files = [];
  currentFilePct = [];

  faTimes = faTimes;
  faCloudUploadAlt = faCloudUploadAlt;

  constructor(
    private svc: ImportProductsService,
    private loc: Location
  ) { }

  ngOnInit() {
  }

  processFiles(files: any): void {
    const that = this;

    this.prepareFiles(files);

    Array.from(this.files).forEach((file, index) => {
      this.svc.processFile(file, (total) => {
        that.currentFilePct[index] = 'Done adding ' + (total - 1) + ' products';
      });
    });
  }

  prepareFiles(files: any): void {
    const that = this;

    Array.from(files).forEach((file, index) => {
      that.files.push(file);
      that.currentFilePct[index] = '';
    });
  }

  goBack(): void {
    this.loc.back();
  }

}
