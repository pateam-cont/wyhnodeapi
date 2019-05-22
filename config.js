var env=process.env.NODE_ENV || 'development';

if(env == "development")
{
    process.env.PORT = 3001
    process.env.DB_USER = "chetan"
    process.env.DB_PASS = "pass,123"
    process.env.DB_SERVER = "10.192.65.222\\SQLEXPRESS"
    process.env.DB_DATABASE = "WYH_UAT"

    //UAT
    process.env.DMS_URL = "http://mahindradealerworld.com/DMSContextREST/rest/"
    process.env.WYH_URL = "https://wyh-uat.azurewebsites.net/WYHServiceLive/WYHService.asmx?WSDL"
    process.env.WEBSITE_URL="https://wyh-uat.azurewebsites.net"
}
else{

}