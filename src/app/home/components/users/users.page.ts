import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.page.html',
    styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.fetchAll();
    }

    fetchAll = () => {
        this.userService.getAll().subscribe(perf => {
            this.users = perf;
        });
    }

}
