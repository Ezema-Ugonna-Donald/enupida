import 'dart:io';

import 'package:flutter/material.dart';
import 'dart:async';
import 'package:webview_flutter/webview_flutter.dart';

void main() => runApp(const MaterialApp(home: Enupida ()));

class Enupida extends StatefulWidget {
  const Enupida({Key? key}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  @override
  State<Enupida> createState() => _EnupidaState();
}

class _EnupidaState extends State<Enupida> {
  // int _counter = 0;

  final Completer <WebViewController> _dende = Completer <WebViewController> ();

  @override
  void initstate ()
  {
    super.initState();
    if (Platform.isAndroid)
    {
      WebView.platform = SurfaceAndroidWebView ();
    }
    else if (Platform.isIOS)
    {
      // WebView.platform = SurfaceIOSWebView ();
    }
    else
    {

    }
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: const Text("enupida"),
        // leading: IconButton (new Image.asset(AssetImage: new Image(image: "./../web/icons/enupida-icon-192.png"))),
      ),
      body: SingleChildScrollView (
        child: Center (
          child: Column (
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text(
                'You have pushed the button this many times:',
              ),
              WebView (
                initialUrl: "../web/",
                javascriptMode: JavascriptMode.unrestricted,
                onWebViewCreated: (WebViewController webViewDende) {
                  _dende.complete (webViewDende);
                },
              ),
            ],
          ),
        ),
      ),
      // floatingActionButton: FloatingActionButton(
      //   onPressed: _incrementCounter,
      //   tooltip: 'Increment',
      //   child: const Icon(Icons.add),
      // ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
