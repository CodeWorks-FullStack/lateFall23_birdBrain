import { AccountController } from "./controllers/AccountController.js";
import { BirdWatchersController } from "./controllers/BirdWatchersController.js";
import { BirdsController } from "./controllers/BirdsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [BirdsController, BirdWatchersController],
    view: 'app/views/BirdsView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




