import 'package:redstone/redstone.dart' as app;
import 'package:shelf/shelf.dart' as shelf;
import 'package:shelf/shelf_io.dart' as shelf;
import 'package:shelf_cors/shelf_cors.dart' as shelf_cors;

@app.Route("/head/e/")
helloWorld() => "Hello, World!  Hello dart !";
@app.Route("/register/")
register() => "you are a new menmber";
@app.Route("/data/")
getdata() {
  return getDataFromDB();
}

@app.Route("data/add",methods: const [app.POST])
addUser(@app.Body(app.TEXT) String userDate){
  String data = userDate;
  return data;
}


String getDataFromDB(){
  //to get data from DB.
  return '''["name1","name2","name3","name4"]''';
}

main() {
  shelf.Middleware middleware = shelf_cors.createCorsHeadersMiddleware();
  app.setupConsoleLog();
  app.addShelfMiddleware(middleware);
  app.start(port: 90);
}

