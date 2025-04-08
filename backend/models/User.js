import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true }, // fixed typo: 'require' -> 'required'
    email: { type: String, required: true },
    password: { type: String, required: true }
});

// Export the User model
export default mongoose.model('User', UserSchema);
