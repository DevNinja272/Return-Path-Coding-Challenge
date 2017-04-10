/*************/
/* Factories */
/*************/

myApp.factory('EmailFactory', function($http) 
{
    return {
        fetch: function() {
            return $http.get('mock_rp_data.json');;
        },
    };
});
