import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-korpa-index',
  templateUrl: './korpa-index.component.html',
  styleUrls: ['./korpa-index.component.css']
})
export class KorpaIndexComponent implements OnInit {

  constructor(private router: Router) { }
  paymentHandler:any = null;
  jelo=[
    
  
    
    {title:'Hamburger',poster:'https://scontent.fsjj2-1.fna.fbcdn.net/v/t39.30808-6/240579292_242529604424225_5960909544203286907_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=ZGXzZfgJ5FAAX-01hTZ&tn=Lr0hwJChnVYLz2Vd&_nc_ht=scontent.fsjj2-1.fna&oh=00_AT98VZgR1SFNGPm4EwmfHXgsjhe9yyVeaUcTPPNAW64hgQ&oe=61F448B3'},
  

  ];

  ngOnInit(): void {
   
    this.invokeStripe();
  }
  Navedi()
  {
    this.router.navigate(['/movies/filter']);

  }
  
  makePayment(amount:any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: 'Plati online',
      description: 'E-restoran',
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
        
      window.document.body.appendChild(script);
    }


  
  }
}