angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('homeTabs', {
    url: '/page1',
    templateUrl: 'templates/homeTabs.html',
    abstract:true
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('homeTabs.home', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('homeTabs.messeges', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/messeges.html',
        controller: 'messegesCtrl'
      }
    }
  })

  .state('homeTabs.message', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/message.html',
        controller: 'messageCtrl'
      }
    }
  })

  .state('homeTabs.newMessage', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/newMessage.html',
        controller: 'newMessageCtrl'
      }
    }
  })

  .state('homeTabs.search', {
    url: '/page12',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeTabs.singleGame', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/singleGame.html',
        controller: 'singleGameCtrl'
      }
    }
  })

  .state('homeTabs.gameReviewes', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/gameReviewes.html',
        controller: 'gameReviewesCtrl'
      }
    }
  })

  .state('homeTabs.singleReview', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/singleReview.html',
        controller: 'singleReviewCtrl'
      }
    }
  })

  .state('homeTabs.addReview', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/addReview.html',
        controller: 'addReviewCtrl'
      }
    }
  })

  .state('allReviews', {
    url: '/page17',
    templateUrl: 'templates/allReviews.html',
    controller: 'allReviewsCtrl'
  })

  .state('homeTabs.gameGuide', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/gameGuide.html',
        controller: 'gameGuideCtrl'
      }
    }
  })

  .state('homeTabs.gameWalkThrough', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/gameWalkThrough.html',
        controller: 'gameWalkThroughCtrl'
      }
    }
  })

  .state('games', {
    url: '/page20',
    templateUrl: 'templates/games.html',
    controller: 'gamesCtrl'
  })

  .state('guides', {
    url: '/page21',
    templateUrl: 'templates/guides.html',
    controller: 'guidesCtrl'
  })

  .state('homeTabs.gamePhotos', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/gamePhotos.html',
        controller: 'gamePhotosCtrl'
      }
    }
  })

  .state('groups', {
    url: '/page23',
    templateUrl: 'templates/groups.html',
    controller: 'groupsCtrl'
  })

  .state('profile', {
    url: '/page24',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('homeTabs.userProfile', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/userProfile.html',
        controller: 'userProfileCtrl'
      }
    }
  })

  .state('page', {
    url: '/page26',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page27',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('activitiesPage', {
    url: '/page28',
    templateUrl: 'templates/activitiesPage.html',
    controller: 'activitiesPageCtrl'
  })

$urlRouterProvider.otherwise('/page27')

  

});