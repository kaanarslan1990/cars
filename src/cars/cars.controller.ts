import { Controller, Get, Post, Req, Body, Param, Request} from '@nestjs/common';

@Controller('cars')
export class CarsController {
    // GET  /cars  => gets a list of cars
    @Get()
    findAll(@Req() request: Request): {} {
        return [{make: 'honda', model: 'accord'},
            {make: 'subaru', model: 'outback'},
            {make: 'fiat', model: '123 spider'}];
    }

    // POST /cars => creates a new car based on the bundle of data you sent it
    @Post()
    async create(@Body() carParams) {
        return `I got your post request ! 
    You want to create a ${carParams.make}`;
    }

    // GET /cars/:id => gets one car based on the id you sent it as a wildcard
    @Get(':id')
    findOne(@Req() request: Request): {} {
        return {id: 25, make: 'tesla', model: 'model x'}
    }


    // POST /cars/:id => updates a car based on a bundle of data to update a car
    @Post(':id')
    async update(@Body() carParams, @Param() params) {
        return `I got your post request ! 
    You want to edit a ${carParams.make} belonging to
    ${params.id}`;
    }

    // POST /cars/:id/delete => deletes a car... all you need is an ID !
    // we only need an ID because that's all we need to send to the database
    // to identify the record to delete
    @Post(':id/delete')
    async delete(@Param() params) {
        return `planning to delete ${params.id}`;
    }


}


/*
GET  /cars  => gets a list of cars
POST /cars => creates a new car based on the bundle of data you sent it
GET /cars/:id => gets one car based on the id you sent it as a wildcard
POST /cars/:id => updates a car based on a bundle of data to update a car
POST /cars/:id/delete => deletes a car
*/
