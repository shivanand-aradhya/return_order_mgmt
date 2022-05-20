import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmprocessing',
  templateUrl: './confirmprocessing.component.html',
  styleUrls: ['./confirmprocessing.component.scss']
})
export class ConfirmprocessingComponent implements OnInit {
	requestId: string |null;

  constructor(public authService: AuthService,
    private actRoute: ActivatedRoute, private router:Router) {
		  this.requestId=this.actRoute.snapshot.queryParamMap.get("requestId");
	}

  ngOnInit(): void {
  }
  
  newReturnOrder() {
        this.router.navigate(['return-order']);
  }


}
