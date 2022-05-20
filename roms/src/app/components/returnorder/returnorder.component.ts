import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-returnorder',
  templateUrl: './returnorder.component.html',
  styleUrls: ['./returnorder.component.scss']
})
export class ReturnorderComponent implements OnInit {
	  currentUser: Object = {};

  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      userName: [''],
      contactNumber: [''],
      cardNumber: [''],
      isPriorityRequest: [''],
	  componentType: [''],
      componentName: [''],
      quantity: ['']
    });
  }

  ngOnInit(): void {
  }
  returnOrder() {
    this.authService.returnOrder(this.signupForm.value).subscribe((res) => {
        this.router.navigate(['processing-details'],{queryParams:{requestId:res.requestId,processingCharge:res.processingCharge,packageAndDeliveryCharge:res.packageAndDeliveryCharge,dateOfDelivery:res.dateOfDelivery,data:res}});
    });
  }

}
