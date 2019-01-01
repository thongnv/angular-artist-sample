import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() artist: Artist;

  newSong: string;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private modalService: NgbModal,
    private songModel: NgbActiveModal
  ) {
  }

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artistService.getArtist(id)
      .subscribe(artist => this.artist = artist);
  }

  deleteSong(songName) {
    console.log('delete', songName);
    const index = this.artist.songs.indexOf(songName);
    if (index !== -1) {
      this.artist.songs.splice(index, 1);
    }
    // this.artistService.deleteSong(this.artist, songName);
  }

  addSong(content) {
    // show popup to add song
    this.songModel = this.modalService.open(content);
  }

  onSubmit(addSongForm: NgForm) {
    console.log(addSongForm.value);
    this.artist.songs.push(addSongForm.value.newSong);
    this.songModel.close();
  }
}

