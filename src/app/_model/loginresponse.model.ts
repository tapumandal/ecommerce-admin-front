
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "./user.model";
export class Loginresponse {
    jwt: string
    user: User
}
