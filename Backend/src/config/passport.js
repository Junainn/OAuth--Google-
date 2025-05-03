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
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = new User({
            name: profile.displayName,
            googleId: profile.id,
          });

          await user.save();
          
        }
        
        
        return done(null, user);
      } catch (err) {
        console.error(err); 
        return done(err, false); 
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