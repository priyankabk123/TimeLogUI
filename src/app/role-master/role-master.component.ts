import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.css']
})
export class RoleMasterComponent {
  rolename: string ='';
  errorMessage: string = '';
  roles: any[] = [];
  selectedRole: any = { roleId: null, roleName: '' }; 
  isEditing: boolean = false;
  editRoleID:  any = '';

  constructor (private router : Router, private apiService : APIService, private roleService : RoleService){}

  ngOnInit(): void{
    this.loadRoles();
  }

  loadRoles():void{
    this.roleService.getAllRoles().subscribe((data) => {
      this.roles = data;
    });
  }

// Start editing the role
editRole(role: any): void {
  console.log("role s:"+ role);
  const roleId = role.role_id; // Adjust the property name based on the response
  const roleName = role.role_name; // Adju
  this.editRoleID = role.role_id;
  this.isEditing = true;
  this.selectedRole = { ...role };  // Copy the role to avoid direct mutation
  this.rolename = roleName;
}


// Cancel editing
cancelEdit(): void {
  this.isEditing = false;
  this.selectedRole = null;
}

// Delete role by ID
deleteRole(roleId: number): void {
  if (confirm('Are you sure you want to delete this role?')) {
    const paylaod = { role_id :roleId}
    console.log(paylaod)
    this.roleService.deleteRole(paylaod).subscribe({
      next: (response) => {
        console.log('Role deleted successfully', response);
        // Remove the deleted role from the roles list
        this.loadRoles();
      },
      error: (err) => {
        console.error('Error deleting role', err);
        alert('Failed to delete the role');
      }
    });
  }
}

  insertRole(){
    console.log(this.rolename)
    if(this.rolename == "" || this.rolename == null){
      alert("Please enter role");
      return;
    }
    const paylaod = { role_name : this.rolename}
    console.log(paylaod)
    this.roleService.insertRole(paylaod).subscribe({
      next: (Response) => {
        if(Response.roleId){
          alert(Response.message);
          this.rolename = "";
          this.loadRoles();
        }else{
          alert(Response.message);
        }
      },
      error: (err)=>{
        console.log("Failed ", err.error.message);
        alert(err.error.message)
        this.errorMessage='Error Occured while adding Role'; 
      }
    })
  }

  updateRole(){
    if(this.rolename == "" || this.rolename == null){
      alert("Please enter role");
      return;
    }

    if(this.editRoleID== "" || this.editRoleID == null){
      alert("Please select role");
      return;
    }

    const paylaod ={ role_id : this.editRoleID, role_name: this.rolename}
    console.log("---Update Request : "+  paylaod);
    this.roleService.updateRole(paylaod).subscribe({
      next: (response) =>{
        if(response.roleId != null){
          alert(response.message);
          this.rolename = "";
          this.editRoleID = "";
          this.loadRoles();
        }else{
          alert(response.message)
        }
      },
      error: (err) =>{
        alert(err.error.message);
      }
    })
  }



//Main class end
}
