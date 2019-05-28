import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  test:any='one';
  fileTransfer: FileTransferObject = this.transfer.create();
  fileUrl:any = "";

  constructor(private transfer: FileTransfer,private file: File,public navCtrl: NavController) {
    

      this.download();
  }

  download() {

    this.fileTransfer.download("http://123.207.121.118/static/video.mp4", this.file.externalDataDirectory + 'video.mp4').then((entry) => {
      
      alert(entry.toURL());
      this.fileUrl = entry.toURL();
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }

}
