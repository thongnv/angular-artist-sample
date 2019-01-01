import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const artists = [
      {
        id: 1,
        name: 'KARIK',
        slug: 'karik',
        songs: [
          'Tất Cả Tại Anh - Karik, Emma',
          'Phiêu Vị Thanh Xuân - Trúc Nhân, Suni Hạ Linh, Karik',
          'Một Mình Có Sao Đâu (Beat) - Đàm Vĩnh Hưng, Karik',
          'Yêu Đơn Phương (Beat) - OnlyC, Karik',
          'Yêu Đơn Phương - OnlyC, Karik',
          'Một Mình Có Sao Đâu - Đàm Vĩnh Hưng, Karik',
          'Vô Thường - Karik, Orange',
        ]
      },
      // { id: 2, name: 'Narco', slug: 'chau-khai-phong' },
      // { id: 3, name: 'Bombasto', slug: 'chau-khai-phong' },
      // { id: 4, name: 'Celeritas', slug: 'chau-khai-phong' },
      // { id: 5, name: 'Magneta', slug: 'chau-khai-phong' },
      // { id: 6, name: 'RubberMan' },
      // { id: 7, name: 'Dynama' },
      // { id: 8, name: 'Dr IQ' },
      // { id: 9, name: 'Magma' },
      // { id: 10, name: 'Tornado' }
    ];
    return {artists};
  }
}
