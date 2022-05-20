import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
    import { Location } from '@angular/common';

@Component({
  selector: 'app-processingdetails',
  templateUrl: './processingdetails.component.html',
  styleUrls: ['./processingdetails.component.scss']
})
export class ProcessingdetailsComponent implements OnInit {
	requestId: string |null;
	processingCharge: string |null;
	packageAndDeliveryCharge: string |null;
	dateOfDelivery: string |null;

  constructor(public authService: AuthService,
    private actRoute: ActivatedRoute, private router:Router) {
		  this.requestId=this.actRoute.snapshot.queryParamMap.get("requestId");
		  this.processingCharge=this.actRoute.snapshot.queryParamMap.get("processingCharge");
		  this.packageAndDeliveryCharge=this.actRoute.snapshot.queryParamMap.get("packageAndDeliveryCharge");
		  this.dateOfDelivery=this.actRoute.snapshot.queryParamMap.get("dateOfDelivery");
	}

  ngOnInit(): void {
  }
  
  cancelOrder() {
        this.router.navigate(['return-order']);
  }
  
  confirmOrder() {
        this.router.navigate(['confirm-processing'],{queryParams:{requestId:this.requestId}});
  }

}
