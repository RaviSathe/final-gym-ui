import { Component } from '@angular/core';

@Component({
  selector: 'app-all-trainer-list',
  templateUrl: './all-trainer-list.component.html',
  styleUrl: './all-trainer-list.component.scss'
})
export class AllTrainerListComponent {
  selectedStateOption: string | null = null;
  selectedCityOption: string | null = null;
  stateDropdown = false;
  cityDropdown = false;
  trainerInfo: string = 'I am specialize in various areas, such as weight loss, strength training, sports performance, rehabilitation, and wellness. My goal is to help clients improve their physical fitness, health, and quality of life.';
  maxLength: number = 100; // Set the maximum length for visible content
  showFullInfo: boolean = false;

  personalTrainerTypes:string[]  = [
    "General Fitness Trainers",
    "Strength Training",
    "Weight Loss Trainer",
    "Fat Loss Trainer",
    "Functional Fitness Trainers",
    // "Sports-Specific Trainers",
    // "Rehabilitation and Corrective Exercise Trainers",
    // "Special Population Trainers",
    // "Bodybuilding and Physique Coaches",
    // "Youth Fitness Trainers",
    // "Group Fitness Instructors",
    // "Lifestyle and Wellness Coaches",
    // "Online Personal Trainers",
    // "Nutrition Coaches",
    // "Holistic Health Coaches",
    // "Performance Enhancement Specialists"
  ];

  indianStates = [
    { name: "Andhra Pradesh", code: "AP" },
    { name: "Arunachal Pradesh", code: "AR" },
    { name: "Assam", code: "AS" },
    { name: "Bihar", code: "BR" },
    { name: "Chhattisgarh", code: "CG" },
    { name: "Goa", code: "GA" },
    { name: "Gujarat", code: "GJ" },
    { name: "Haryana", code: "HR" },
    { name: "Himachal Pradesh", code: "HP" },
    { name: "Jharkhand", code: "JH" },
    { name: "Karnataka", code: "KA" },
    { name: "Kerala", code: "KL" },
    { name: "Madhya Pradesh", code: "MP" },
    { name: "Maharashtra", code: "MH" },
    { name: "Manipur", code: "MN" },
    { name: "Meghalaya", code: "ML" },
    { name: "Mizoram", code: "MZ" },
    { name: "Nagaland", code: "NL" },
    { name: "Odisha", code: "OD" },
    { name: "Punjab", code: "PB" },
    { name: "Rajasthan", code: "RJ" },
    { name: "Sikkim", code: "SK" },
    { name: "Tamil Nadu", code: "TN" },
    { name: "Telangana", code: "TG" },
    { name: "Tripura", code: "TR" },
    { name: "Uttar Pradesh", code: "UP" },
    { name: "Uttarakhand", code: "UK" },
    { name: "West Bengal", code: "WB" },
    { name: "Andaman and Nicobar Islands", code: "AN" },
    { name: "Chandigarh", code: "CH" },
    { name: "Dadra and Nagar Haveli and Daman and Diu", code: "DN" },
    { name: "Lakshadweep", code: "LD" },
    { name: "Delhi", code: "DL" },
    { name: "Puducherry", code: "PY" }
  ];
  
  maharashtraState = [
    { city: "Navi Mumbai", code: "NM" },
    { city: "Thane", code: "TH" },
    { city: "Panvel", code: "PL" },
    { city: "Mumbai", code: "MU" },
    { city: "Andheri", code: "AD" }
  ];

  toggleStateDropdown() {
    this.stateDropdown = !this.stateDropdown;
  }

  toggleCityDropdown() {
    this.cityDropdown = !this.cityDropdown;
  }

  selectStateOption(state: any) {
    this.selectedStateOption = state.name;
    this.stateDropdown = false;
  }

  selectCityOption(city: any) {
    this.selectedCityOption = city.city;
    this.cityDropdown = false;
  }

  

  get isLongText(): boolean {
    return this.trainerInfo.length > this.maxLength;
  }

  toggleTrainerInfoMore(): void {
    const infoElements = document.getElementsByClassName("third-tr-fil-right-short-info");
    this.showFullInfo = !this.showFullInfo;
    if (infoElements.length > 0) {
      const info = infoElements[0] as HTMLElement;
      if (this.showFullInfo) {
        info.style.width = "90%";
      } else {
        info.style.width = "60%";
      }
    }
  }

  
  
  

}
