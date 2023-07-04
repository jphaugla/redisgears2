#!js name=lib2 api_version=1.0

redis.registerFunction('my_ping', function(client){
    return client.call('ping');
});
