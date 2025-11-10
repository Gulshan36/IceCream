# Clerk Authentication Setup Guide

## 🔐 Clerk Integration

Your Namaste Bharat Ice Cream app now has Clerk authentication integrated!

## 📋 Setup Instructions

### 1. Create a Clerk Account
1. Go to [clerk.com](https://clerk.com) and sign up
2. Create a new application
3. Choose your authentication methods (Email, Google, Facebook, etc.)

### 2. Get Your API Keys
1. In your Clerk dashboard, go to **API Keys**
2. Copy your **Publishable Key**

### 3. Configure Environment Variables
1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

2. Add your Clerk Publishable Key:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

### 4. Restart Development Server
```bash
npm run dev
```

## ✨ Features Implemented

### Desktop Navbar
- **UserButton**: Shows user avatar when logged in
- **Sign In Button**: Opens Clerk modal for login
- **Sign Up Button**: Opens Clerk modal for registration
- Auto-hides Sign In/Sign Up when user is logged in

### Mobile Menu
- Sign In and Sign Up buttons
- UserButton for logged-in users
- Same modal experience as desktop

### Authentication Flow
1. Click "Login" or "Sign Up"
2. Clerk modal opens with authentication form
3. After authentication, user avatar appears
4. Click avatar to access profile, settings, and sign out

## 🎨 Clerk Modal Customization

The Clerk modals are already styled to match your pink/purple theme. You can further customize in `src/components/Navbar.tsx`.

## 🔒 Protected Routes (Optional)

To protect routes (require login), wrap them with `SignedIn`:

```tsx
<Route 
  path="/profile" 
  element={
    <SignedIn>
      <Profile />
    </SignedIn>
  } 
/>
```

## 🚀 Next Steps

1. ✅ Clerk is installed and configured
2. ✅ Login/Signup buttons integrated
3. ✅ UserButton added for logged-in users
4. 🔧 Add your Clerk API key to `.env`
5. 🎨 (Optional) Customize Clerk theme in dashboard
6. 🔐 (Optional) Add protected routes

## 📚 Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk React SDK](https://clerk.com/docs/references/react/overview)
- [Clerk Components](https://clerk.com/docs/components/overview)

---

**Note**: The old `/login` and `/signup` pages are still in your project but are no longer needed. Clerk handles authentication via modals. You can delete these pages if desired.
