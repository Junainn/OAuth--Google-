import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./env.js";
import User from "../models/user.model.js"; 

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile); // You’ll see user info here
        
        // Check if user already exists
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If user doesn't exist, create a new one
          user = new User({
            name: profile.displayName,
            googleId: profile.id,
          });

          await user.save();
          done(null,user.id);
        }
        else{
          done(null,user.id);
        }
        console.log("USER INFO : ",user);
        
        // If user is found or created, pass the user info to done()
        return done(null, user);
      } catch (err) {
        console.error(err); // Handle any errors
        return done(err, false); // Pass error to done() if there's an issue
      }
    }
  )
);


passport.serializeUser((user,done)=>{
  done(null,user.id); 
});

passport.deserializeUser(async(id,done)=>{
  const user = await User.findById(id); 
  if(!user) return done(null,false); 
  done(null,user);
})