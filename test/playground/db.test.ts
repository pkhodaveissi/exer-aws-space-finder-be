import { APIGatewayProxyEvent } from 'aws-lambda';
import {handler}  from '../../services/SpacesTable/Create';

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        name: 'Centraal Station', //203b81af-7855-4d9d-9132-713d38187645
        location: 'Rotterdam',
    },
    // body: {
    //     location: 'Rotterdam',
    // }
} as any;

handler(event as any, {} as any).then((res) => {
    console.log(res.body);
    const items = JSON.parse(res.body);
    console.log(items);
}).catch(console.log);
