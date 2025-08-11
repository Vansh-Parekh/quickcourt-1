# QuickCourt Application Test Cases

## Authentication Tests

### Login Tests
1. **Valid Login - User**
   - Email: `user@quickcourt.com`, Password: `user123`
   - Expected: Redirect to `/home`

2. **Valid Login - Facility Owner**
   - Email: `owner@quickcourt.com`, Password: `owner123`
   - Expected: Redirect to `/owner`

3. **Valid Login - Admin**
   - Email: `admin@quickcourt.com`, Password: `admin123`
   - Expected: Redirect to `/admin`

4. **Invalid Login**
   - Email: `wrong@email.com`, Password: `wrongpass`
   - Expected: Error message displayed

5. **Empty Fields**
   - Leave email/password empty
   - Expected: Validation error

### Signup Tests
6. **Valid Signup**
   - New email, strong password, full name
   - Expected: Success message, redirect to login

7. **Duplicate Email**
   - Use existing email from sample data
   - Expected: Error message

8. **Weak Password**
   - Password less than 6 characters
   - Expected: Validation error

## User Dashboard Tests

### Navigation Tests
9. **Home Page Access**
   - Login as user, check `/home` loads
   - Expected: Dashboard with venue cards

10. **Venues Page**
    - Navigate to `/venues`
    - Expected: List of approved facilities

11. **Profile Page**
    - Navigate to `/profile`
    - Expected: User details displayed

### Booking Flow Tests
12. **View Venue Details**
    - Click on venue card or visit `/venue/facility-1`
    - Expected: Venue details, courts, reviews

13. **Book Court - Valid**
    - Click "Book Now", select date/time/duration
    - Expected: Booking confirmation, redirect to bookings

14. **Book Court - Past Date**
    - Try booking with yesterday's date
    - Expected: Date picker should prevent past dates

15. **View My Bookings**
    - Navigate to `/booking`
    - Expected: List of user's bookings

## Facility Owner Dashboard Tests

### Dashboard Tests
16. **Owner Dashboard Access**
    - Login as owner, check `/owner` loads
    - Expected: KPIs, charts, facility overview

17. **Stats Display**
    - Check booking count, active courts, earnings
    - Expected: Correct numbers from database

### Facility Management Tests
18. **Add New Facility**
    - Fill facility form, submit
    - Expected: Facility added with PENDING status

19. **View My Facilities**
    - Check facilities tab
    - Expected: List of owner's facilities

### Court Management Tests
20. **Add New Court**
    - Select facility, add court details
    - Expected: Court added to selected facility

21. **Court Pricing**
    - Add court with different price
    - Expected: Price saved correctly

### Booking Management Tests
22. **View Facility Bookings**
    - Check bookings tab
    - Expected: All bookings for owner's facilities

23. **Booking Details**
    - Verify user name, court, time, status
    - Expected: Complete booking information

## Admin Dashboard Tests

### Overview Tests
24. **Admin Dashboard Access**
    - Login as admin, check `/admin` loads
    - Expected: Comprehensive stats, charts

25. **Statistics Accuracy**
    - Verify user count, facility count, booking count
    - Expected: Numbers match database

### Facility Approval Tests
26. **Approve Facility**
    - Find PENDING facility, click Approve
    - Expected: Status changes to APPROVED

27. **Reject Facility**
    - Find PENDING facility, click Reject
    - Expected: Status changes to REJECTED

### User Management Tests
28. **Search Users**
    - Use search box to find specific user
    - Expected: Filtered results

29. **Filter by Role**
    - Select role filter (USER/FACILITY_OWNER/ADMIN)
    - Expected: Users filtered by role

30. **Ban User**
    - Click Ban button for a user
    - Expected: User status changes to Banned

31. **Unban User**
    - Click Unban button for banned user
    - Expected: User status changes back

### Reports Tests
32. **View Reports**
    - Check reports tab
    - Expected: List of reports (sample data if none)

## API Tests

### Authentication API Tests
33. **Login API**
    - POST `/api/auth/login` with valid credentials
    - Expected: 200 status, token returned

34. **Signup API**
    - POST `/api/auth/signup` with new user data
    - Expected: 201 status, user created

### Venues API Tests
35. **Get Venues**
    - GET `/api/venues`
    - Expected: List of approved facilities

36. **Get Single Venue**
    - GET `/api/venues/facility-1`
    - Expected: Facility details with courts

### Booking API Tests
37. **Create Booking**
    - POST `/api/bookings` with valid data
    - Expected: Booking created, timeslot reserved

38. **Get User Bookings**
    - GET `/api/bookings` with user token
    - Expected: User's bookings returned

## Error Handling Tests

### Network Error Tests
39. **Offline Scenario**
    - Disconnect internet, try actions
    - Expected: Appropriate error messages

40. **Server Error**
    - Invalid API endpoints
    - Expected: 404/500 error handling

### Authorization Tests
41. **Unauthorized Access**
    - Access `/admin` without admin token
    - Expected: Redirect to login

42. **Token Expiry**
    - Use expired token
    - Expected: Redirect to login

## UI/UX Tests

### Responsive Design Tests
43. **Mobile View**
    - Test on mobile screen sizes
    - Expected: Responsive layout

44. **Tablet View**
    - Test on tablet screen sizes
    - Expected: Proper layout adaptation

### Navigation Tests
45. **Logout Functionality**
    - Click logout from any dashboard
    - Expected: Clear storage, redirect to login

46. **Role-based Navigation**
    - Verify different nav items for different roles
    - Expected: Appropriate menu items

## Data Validation Tests

### Form Validation Tests
47. **Required Fields**
    - Submit forms with empty required fields
    - Expected: Validation errors

48. **Email Format**
    - Enter invalid email formats
    - Expected: Email validation error

49. **Price Validation**
    - Enter negative prices for courts
    - Expected: Price validation error

## Performance Tests

### Load Tests
50. **Page Load Times**
    - Measure initial page load
    - Expected: Under 3 seconds

51. **API Response Times**
    - Test API endpoint response times
    - Expected: Under 1 second

## Security Tests

### Input Sanitization Tests
52. **XSS Prevention**
    - Try entering script tags in forms
    - Expected: Input sanitized

53. **SQL Injection**
    - Try SQL injection in search fields
    - Expected: Queries parameterized safely

## Integration Tests

### End-to-End Workflows
54. **Complete Booking Flow**
    - Signup → Login → Browse → Book → View Booking
    - Expected: Seamless flow completion

55. **Facility Management Flow**
    - Owner Login → Add Facility → Add Court → View Bookings
    - Expected: Complete facility setup

56. **Admin Approval Flow**
    - Owner adds facility → Admin approves → Facility visible to users
    - Expected: Approval workflow works

## Test Data Setup

### Sample Data Verification
57. **Database Seeding**
    - Run `npm run db:setup`
    - Expected: Sample users, facilities, courts created

58. **Login Credentials**
    - Verify all sample login credentials work
    - Expected: All roles accessible

## Browser Compatibility Tests

### Cross-browser Tests
59. **Chrome Testing**
    - Test all features in Chrome
    - Expected: Full functionality

60. **Firefox Testing**
    - Test all features in Firefox
    - Expected: Full functionality

## Quick Test Checklist

### 5-Minute Smoke Test
- [ ] Login as user works
- [ ] Login as owner works  
- [ ] Login as admin works
- [ ] User can view venues
- [ ] User can make booking
- [ ] Owner can add facility
- [ ] Admin can approve facility
- [ ] Logout works for all roles

### 15-Minute Regression Test
- [ ] All authentication flows
- [ ] Complete booking workflow
- [ ] Facility management features
- [ ] Admin approval process
- [ ] API endpoints respond correctly
- [ ] Role-based access control
- [ ] Form validations work
- [ ] Charts and stats display

Run these tests after any code changes to ensure application stability.