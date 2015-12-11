
                  Media Queries

/*==================================================
=                Susy Mobile First                 =
==================================================*/

    // set global border box
    
    @include global-box-sizing(border-box); // deprecated
    
    // set main container width and break points
    
    .ms-container {
    
      @include container();
    
      @include susy-breakpoint(20em, 6) { // 320px
        // Mobile.
        color: orangered;
      }
    
      @include susy-breakpoint(30em, 8) { // 480px
        // Mobile Landscape.
        color: green;
      }
    
      @include susy-breakpoint(48em, 10) { // 768px
        // Tablet Portrait.
        @include container(46.875em); // 750px
        color: yellow;
      }
    
      @include susy-breakpoint(62em, 12) { //  992px
        //Tablet Landscape & Small Desktop.
        @include container(60.625em); // 970px
        color: dodgerblue;
      }
    
      @include susy-breakpoint(75em, 12) { // 1200px
        // Large Desktop.
        @include container(73.125em); // 1170px
        color: mediumpurple;
      }
    
    }
    
/*==================================================
=         Media Queries Breaking Points            =
==================================================*/

    ems are based on 16px

    Preferred Desktop 1124px        // 70.250em
    
    
/*==================================================
=         RETINA iPad in portrait & landscape      =      
==================================================*/

    @media only screen 
    and (min-device-width : 768px)   // 48em
    and (max-device-width : 1024px)  // 64em
    
    and (orientation : landscape)    // optional
    and (orientation : portrait)     // optional
    
    and (-webkit-min-device-pixel-ratio: 2) { /* STYLES GO HERE */ }

/*==================================================
=         iPad 1 & 2 in portrait & landscape       =     
==================================================*/

    @media only screen 
    and (min-device-width : 768px)   // 48em
    and (max-device-width : 1024px)  // 64em
    
    and (orientation : landscape)    // optional
    and (orientation : portrait)     // optional
    
    and (-webkit-min-device-pixel-ratio: 1){ /* STYLES GO HERE */ }

/*==================================================
=         iPad mini in portrait & landscape        =    
==================================================*/
    
    Same as above  - iPad 1 & 2 in portrait & landscape
    
    @media only screen 
    and (min-device-width : 768px)   // 48em
    and (max-device-width : 1024px)  // 64em
    
    and (orientation : landscape)    // optional
    and (orientation : portrait)     // optional
    
    and (-webkit-min-device-pixel-ratio: 1)  { /* STYLES GO HERE */ }

/*==================================================
=         iPhone 6 in portrait & landscape         =   
==================================================*/

    @media only screen 
    and (min-device-width : 375px)   // 23.438em
    
    and (orientation : landscape)    // optional
    and (orientation : portrait)     // optional
    
    and (max-device-width : 667px)   // 41.688em
    { /* STYLES GO HERE */ }

/*==================================================
=       iPhone 6 Plus in portrait & landscape      =      
==================================================*/

    @media only screen 
    and (min-device-width : 414px)   // 25.875em 
    
    and (orientation : landscape)    // optional
    and (orientation : portrait)     // optional
    
    and (max-device-width : 736px)   // 46em
    { /* STYLES GO HERE */ }

/*==================================================
=       iPhone 5 & 5S in portrait & landscape      =      
==================================================*/

    @media only screen 
    and (min-device-width : 320px)   // 20em
    
    and (orientation : landscape)    // optional
    and (orientation : portrait)     // optional
    
    and (max-device-width : 568px)   // 35.5em
    { /* STYLES GO HERE */}
    http://stephen.io/mediaqueries/

/*==================================================
=             Bootstrap 3 Media Queries            =
==================================================*/

    /*==========  Mobile First Method  ==========*/

    /* Custom, iPhone Retina */ 
    @media only screen and (min-width : 320px) { // 20em
        
    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) { // 30em

    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) { // 48em

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) { // 62em

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) { // 75em

    }

