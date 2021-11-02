import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public counter: number = 9;

  public phyPoints: number = 0;
  public menPoints: number = 0;
  public spiPoints: number = 0;

  public pPoints: number = 0;
  public mPoints: number = 0;
  public sPoints: number = 0;


  public subSkillsPhysical = [
    {id: "mstr", skillName: "Muscle Strenght", value: 0},
    {id: "flx", skillName: "Flexebility", value: 0},
    {id: "mend", skillName: "Muscle Endurance", value: 0},
    {id: "fit", skillName: "Fittness", value: 0}
  ]
  public subSkillsMental = [
    {id: "mem", skillName: "Memory", value: 0},
    {id: "per", skillName: "Perception", value: 0},
    {id: "cre", skillName: "Creativity", value: 0},
    {id: "conc", skillName: "Concentration", value: 0}
  ]
  public subSkillsSpirit = [
    {id: "wpow", skillName: "Will Power", value: 0},
    {id: "sh", skillName: "Spirit Hearing", value: 0},
    {id: "si", skillName: "Spirit Intuition", value: 0},
    {id: "med", skillName: "Meditation", value: 0}
  ]

  public skills = [
    {
      id: "phi",
      mainSkillName: "Physical",
      mainSkillValue: 0
    },
    {
      id: "men",
      mainSkillName: "Mental",
      mainSkillValue: 0
    },
    {
      id: "spi",
      mainSkillName: "Spirit",
      mainSkillValue: 0
    },
  ]

  constructor() { }

  ngOnInit(): void { 
  }

  public getPoints(){
    this.skills.map((skill) => {
      if (skill.id === "phi") { 
        this.phyPoints = skill.mainSkillValue*2
        this.pPoints = skill.mainSkillValue*2
      };
      if (skill.id === "men") { 
        this.menPoints = skill.mainSkillValue*2 
        this.mPoints = skill.mainSkillValue*2
      };
      if (skill.id === "spi") { 
        this.spiPoints = skill.mainSkillValue*2 
        this.sPoints = skill.mainSkillValue*2
      };
    })
  }

  public increment(id: string){
    if(this.counter > 0){
      this.skills.map((skill) => {
        if(skill.id === id){ 
          skill.mainSkillValue = skill.mainSkillValue + 1;
          this.counter--;
          this.getPoints();
        }
      })
    }
  }

  public decrement(id: string){
    if (this.counter < 9) {
      this.skills.map((skill) => {
        if(skill.id === id){
          if (skill.mainSkillValue > 0) {
            skill.mainSkillValue = skill.mainSkillValue - 1;
            this.counter++;
            this.getPoints();
          }
        }
      })
    }
  }

  //subSkills

  //physical
  public subIncrementPhy(id: string){
    if (this.phyPoints > 0) {
      this.subSkillsPhysical.map((subSkill) => {
        if (subSkill.id === id) {
          subSkill.value = subSkill.value +1;
          this.phyPoints--
        };
      }); 
    }
  }
  public subDecrementPhy(id: string){
    if (this.phyPoints < this.pPoints) {
      this.subSkillsPhysical.map((subSkill) => {
        if (subSkill.id === id) {
          subSkill.value = subSkill.value -1;
          this.phyPoints++
        };
      });
    }
  }

  //mental
  public subIncrementMen(id: string){
    if (this.menPoints > 0) {
      this.subSkillsMental.map((subSkill) => {
        if (subSkill.id === id) {
          subSkill.value = subSkill.value +1;
          this.menPoints--
        };
      });
    }
  }
  public subDecrementMen(id: string){
    if (this.menPoints < this.mPoints) {
      this.subSkillsMental.map((subSkill) => {
        if (subSkill.id === id) {
          subSkill.value = subSkill.value -1;
          this.menPoints++
        };
      });
    }
  }
  
  //Spiritual
  public subIncrementSpi(id: string){
    if (this.spiPoints > 0) {
      this.subSkillsSpirit.map((subSkill) => {
        if (subSkill.id === id) {
          subSkill.value = subSkill.value +1;
          this.spiPoints--
        };
      });
    }
  }
  public subDecrementSpi(id: string){
    if (this.spiPoints > this.sPoints) {
      this.subSkillsSpirit.map((subSkill) => {
        if (subSkill.id === id) {
          subSkill.value = subSkill.value -1;
          this.spiPoints++
        };
      });
    }
  }

}
