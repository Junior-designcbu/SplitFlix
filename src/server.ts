import express, { Application } from "express";
import socketIO, { Server as SocketIOServer } from "socket.io";
import { createServer, Server as HTTPServer } from "http";
import * as path from 'path';
 
export class Server {
 private httpServer: HTTPServer;
 private app: Application;
 private io: SocketIOServer;
 
 private readonly DEFAULT_PORT = 3000;
 
 constructor() {
   // initialize  
   this.app = express();
   this.httpServer = createServer(this.app);
   this.io = socketIO(this.httpServer);
   
   // set up static folder
   this.configureApp();
   this.configureRoutes();
   this.handleSocketConnection();
 }

 private configureApp(): void {
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  private configureRoutes(): void {
    this.app.get("/", (req, res) => {
      // res.sendFile("/index.html");
      res.sendFile("/SplitFlix");
    });
  }
 
 private handleSocketConnection(): void {
   this.io.on("connection", socket => {
     console.log("Socket connected.");
   });

   //create multiple sockets



   //connect rooms



   // multiplexing

 }


 
 public listen(callback: (port: number) => void): void {
   this.httpServer.listen(this.DEFAULT_PORT, () =>
     callback(this.DEFAULT_PORT)
   );
 }




}