import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-ld',
  templateUrl: './service-ld.component.html',
  styleUrls: ['./service-ld.component.css'],
  providers: [ServiceService]
})
export class ServiceLdComponent implements OnInit {

  private services: Service[];

  title = 'Services';

  constructor(private router: Router,
    private serviceService: ServiceService) { }


  listAllServices() {
    this.serviceService.listAll().subscribe(
      services => {
        this.services = services;
      },
      err => {
        console.log(err);
      }

    );
  }

  ngOnInit() {
    this.listAllServices();
  }


  editServicePage(service: Service) {
    if (service) {
      this.router.navigate(['service/update/', service.id]);
    }
  }

  redirectNewServicePage() {
    this.router.navigate(['/service/create']);
  }

  onDelete(service: Service) {
    if (service) {
      this.serviceService.deleteServiceById(service.id).subscribe(
        res => {
          this.listAllServices();
          this.router.navigate(['/service/']);
          console.log('done');
        }
      );
    }
  }


}
