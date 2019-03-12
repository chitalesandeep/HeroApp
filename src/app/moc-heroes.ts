import { Hero } from "./hero";
import { Movie } from "./movie";

export const Heroes : Hero[] = [
    {'id':1,'name':'Sandeep','dob':'1988-05-02'},
    {'id':2,'name':'Amit','dob':'1988-04-25'},
    {'id':3,'name':'Pranali','dob':'1989-11-11'},
    {'id':4,'name':'Ritesh','dob':'1991-05-08'},
    {'id':5,'name':'Akshada','dob':'1988-05-12'},
    {'id':6,'name':'Sayra','dob':'1990-12-02'}
];


export const MoviesList : Movie[] = [
    {'id':1,'hero_id':1,'movie_name':'Jai ho','released_on':'2016-05-02','Likes':500,'Dislikes':500},
    {'id':2,'hero_id':1,'movie_name':'Race 3','released_on':'2018-04-12','Likes':500,'Dislikes':500},
    {'id':3,'hero_id':2,'movie_name':'Inception','released_on':'2017-11-06','Likes':500,'Dislikes':500},
    {'id':4,'hero_id':2,'movie_name':'Shutter Iceland','released_on':'2016-05-02','Likes':500,'Dislikes':500},
    {'id':5,'hero_id':3,'movie_name':'Ramleela','released_on':'2018-04-20','Likes':500,'Dislikes':500},
    {'id':6,'hero_id':4,'movie_name':'Mauli','released_on':'2018-05-28','Likes':500,'Dislikes':500},
    {'id':7,'hero_id':5,'movie_name':'Django','released_on':'2017-12-12','Likes':500,'Dislikes':500},
    {'id':8,'hero_id':3,'movie_name':'Pokran','released_on':'2018-10-18','Likes':500,'Dislikes':500},
];