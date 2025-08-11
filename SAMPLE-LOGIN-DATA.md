# Sample Login Credentials for QuickCourt

## Test Users

### Admin User
- **Email**: admin@quickcourt.com
- **Password**: admin123
- **Role**: Admin
- **Access**: Full system access, user management, facility approval

### Facility Owner
- **Email**: owner@quickcourt.com  
- **Password**: owner123
- **Role**: Facility Owner
- **Access**: Manage facilities, courts, bookings

### Regular User
- **Email**: user@quickcourt.com
- **Password**: user123
- **Role**: User
- **Access**: Browse venues, make bookings, manage profile

## Quick Test Steps

1. **Start the application**:
   ```bash
   npm run dev
   ```

2. **Visit**: http://localhost:3000

3. **Login with any of the above credentials**

4. **Test Features**:
   - Browse venues at `/venues`
   - View bookings at `/booking`
   - Check profile at `/profile`

## Database Status
- ✅ Sample users created with hashed passwords
- ✅ Sample facilities and courts available
- ✅ Time slots generated for booking
- ✅ Sample reviews added

All users are pre-verified and ready to use!