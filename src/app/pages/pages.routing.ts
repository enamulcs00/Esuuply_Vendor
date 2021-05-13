import { Routes } from '@angular/router';

import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { RevenueManagementComponent } from './revenue-management/revenue-management.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './notification/notification.component';
import { VendorsComponent } from './vendors/vendors.component';
import { EventsComponent } from './events/events.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VendordetailComponent } from './vendordetail/vendordetail.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { PromocodeComponent } from './promocode/promocode.component';
import {VendorhistoryComponent } from './vendorhistory/vendorhistory.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { BannerComponent } from './banner/banner.component';
import { PrivacyComponent } from './privacy-policy/privacy.component';
import { AdminComponent } from './admin/admin.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { DriverComponent } from './driver/driver.component';
import { DriverdetailComponent } from './driverdetail/driverdetail.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AdminformComponent } from './adminform/adminform.component';
// import { UsersDetailComponent } from './users-detail/users-detail.component';
import { NotificationhistoryComponent } from './notificationhistory/notificationhistory.component';
import { VendorRequestComponent } from './vendor-request/vendor-request.component';
import { DriverRequestComponent } from './driver-request/driver-request.component';
import { ShopsrequestComponent } from './shopsrequest/shopsrequest.component';
import { ShopComponent } from './shop/shop.component';
import { UsereditComponent } from './useredit/useredit.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { EditdriverComponent } from './editdriver/editdriver.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { EdittimeslotComponent } from './edittimeslot/edittimeslot.component';
import { AddtimeslotComponent } from './addtimeslot/addtimeslot.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { FranchiseseditComponent } from './franchisesedit/franchisesedit.component';
import { FranchiseaddComponent } from './franchiseadd/franchiseadd.component';
import { FranchisedetailComponent } from './franchisedetail/franchisedetail.component';
import { FranchiserequestComponent } from './franchiserequest/franchiserequest.component';
export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'helperclasses',
        component: HelperclassesComponent,
        data: {
          title: 'Helper Classes',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Helper Classes' }
          ]
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users' }
          ]
        }
      },
      {
        path: 'useredit',
        component: UsereditComponent,
        data: {
          title: 'Edit User',
          urls: [
            { title: 'Dashboard', url: '/useredit' },
            { title: 'Edit User' }
          ]
        }
      },
      {
        path: 'users_detail',
        component: UsersDetailComponent,
        data: {
          title: 'User Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users Detail' }
          ]
        }
      },
      {
        path: 'usershistory',
        component: UserhistoryComponent,
        data: {
          title: 'User History',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'User History' }
          ]
        }
      },
      {
        path: 'vendorsrequest',
        component: VendorRequestComponent,
        data: {
          title: 'Vendors Request',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors Request' }
          ]
        }
      },
      {
        path: 'vendors',
        component: VendorsComponent,
        data: {
          title: 'Vendors',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors' }
          ]
        }
      },
      {
        path: 'addvendor',
        component: AddvendorComponent,
        data: {
          title: 'Add Vendor',
          urls: [
            { title: 'Dashboard', url: '/addvendor' },
            { title: 'Add Vendor' }
          ]
        }
      },
      {
        path: 'editvendor',
        component: EditvendorComponent,
        data: {
          title: 'Edit Vendor',
          urls: [
            { title: 'Dashboard', url: '/editvendor' },
            { title: 'Edit Vendor' }
          ]
        }
      },
      {
        path: 'vendorsdetail',
        component: VendordetailComponent,
        data: {
          title: 'Vendors Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendors Detail' }
          ]
        }
      },
      {
        path: 'foodcategories',
        component: FoodCategoriesComponent,
        data: {
          title: 'Food Categories',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Food Categories' }
          ]
        }
      },
      {
        path: 'fooditem',
        component: FoodItemsComponent,
        data: {
          title: 'Products',
          urls: [
            { title: 'Dashboard', url: '/fooditem' },
            { title: 'Products' }
          ]
        }
      }, 
      {
        path: 'events',
        component: EventsComponent,
        data: {
          title: 'Events',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Events' }
          ]
        }
      },
      {
        path: 'rewards',
        component: RewardsComponent,
        data: {
          title: 'Discount',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Discount' }
          ]
        }
      },
      {
        path: 'promocode',
        component: PromocodeComponent,
        data: {
          title: 'Promo Code',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Promo Code' }
          ]
        }
      },
      {
        path: 'Inventory',
        component: InventoryComponent,
        data: {
          title: 'Inventory',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Inventory' }
          ]
        }
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Invoice',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Invoice Page' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Profile Page' }
          ]
        }
      },
      {
        path: 'vendorHistory',
        component: VendorhistoryComponent,
        data: {
          title: 'Vendor History',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vendor History' }
          ]
        }
      },
      {
        path: 'drivers',
        component: DriverComponent,
        data: {
          title: 'Drivers',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Drivers' }
          ]
        }
      },
      {
        path: 'driveradd',
        component: AdddriverComponent,
        data: {
          title: 'Add Driver',
          urls: [
            { title: 'Dashboard', url: '/driveradd' },
            { title: 'Add Driver' }
          ]
        }
      },
      {
        path: 'driveredit',
        component: EditdriverComponent,
        data: {
          title: 'Edit Driver',
          urls: [
            { title: 'Dashboard', url: '/driveredit' },
            { title: 'Edit Driver' }
          ]
        }
      },
      {
        path: 'driversrequest',
        component: DriverRequestComponent,
        data: {
          title: 'Driver Request',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Driver Request' }
          ]
        }
      },
      {
        path: 'driversdetail',
        component: DriverdetailComponent,
        data: {
          title: 'Drivers Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Drivers Detail' }
          ]
        }
      },
      {
        path: 'franchise',
        component: FranchiseComponent,
        data: {
          title: 'Franchise',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'franchise' }
          ]
        }
      },
      {
        path: 'franchisedetail',
        component: FranchisedetailComponent,
        data: {
          title: 'Franchise Detail',
          urls: [
            { title: 'Dashboard', url: '/franchisedetail' },
            { title: 'Franchise Detail' }
          ]
        }
      },
      {
        path: 'editfranchise',
        component: FranchiseseditComponent,
        data: {
          title: 'Edit Franchise',
          urls: [
            { title: 'Dashboard', url: '/editfranchise' },
            { title: 'Edit Franchise' }
          ]
        }
      },
      {
        path: 'franchiseadd',
        component: FranchiseaddComponent,
        data: {
          title: 'Add Franchise',
          urls: [
            { title: 'Dashboard', url: '/franchiseadd' },
            { title: 'Add Franchise' }
          ]
        }
      },
      {
        path: 'timeslot',
        component: TimeslotComponent,
        data: {
          title: 'TimeSlot',
          urls: [
            { title: 'Dashboard', url: '/timeslot' },
            { title: 'Timeslot' }
          ]
        }
      },
      {
        path: 'timeslot',
        component: TimeslotComponent,
        data: {
          title: 'TimeSlot',
          urls: [
            { title: 'Dashboard', url: '/timeslot' },
            { title: 'Timeslot' }
          ]
        }
      },
      {
        path: 'edittimeslot',
        component: EdittimeslotComponent,
        data: {
          title: 'Edit TimeSlot',
          urls: [
            { title: 'Dashboard', url: '/edittimeslot' },
            { title: 'Edit Timeslot' }
          ]
        }
      },
      {
        path: 'addtimeslot',
        component: AddtimeslotComponent,
        data: {
          title: 'Add TimeSlot',
          urls: [
            { title: 'Dashboard', url: '/addtimeslot' },
            { title: 'Add Timeslot' }
          ]
        }
      },
      {
        path: 'franchiserequest',
        component: FranchiserequestComponent,
        data: {
          title: 'Franchise Request',
          urls: [
            { title: 'Dashboard', url: '/franchiserequest' },
            { title: 'Franchise Request' }
          ]
        }
      },

      {
        path: 'orderlist',
        component: OrderlistComponent,
        data: {
          title: 'Orders',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Pricing Page' }
          ]
        }
      },
      {
        path: 'orderdetail/:id',
        component: OrderdetailComponent,
        data: {
          title: 'Order Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Order Detail' }
          ]
        }
      },
      {
        path: 'banner',
        component: BannerComponent,
        data: {
          title: 'Banner',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Banner ' }
          ]
        }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: {
          title: 'Pricing',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Pricing Page' }
          ]
        }
      },

      // {
      //   path: 'usersdetail',
      //   component: UsersDetailComponent,
      //   data: {
      //     title: 'Users Detail',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Users' }
      //     ]
      //   }
      // },
      // {
      //   path: 'tours',
      //   component: ToursComponent,
      //   data: {
      //     title: 'Tours',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Tours' }
      //     ]
      //   }
      // },
      // {
      //   path: 'bikes',
      //   component: BikesComponent,
      //   data: {
      //     title: 'Bikes',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Bikes' }
      //     ]
      //   }
      // },
      // {
      //   path: 'destination',
      //   component: DestinationComponent,
      //   data: {
      //     title: 'Destination',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Destination' }
      //     ]
      //   }
      // },
      // {
      //   path: 'hotels',
      //   component: HotelsComponent,
      //   data: {
      //     title: 'Hotels',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Hotels' }
      //     ]
      //   }
      // },
      // {
      //   path: 'calculator',
      //   component: CalculatorComponent,
      //   data: {
      //     title: 'Calculator',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Caculator' }
      //     ]
      //   }
      // },
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: {
          title: 'Reviews',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Revies' }
          ]
        }
      },
      {
        path: 'revenue',
        component: RevenueManagementComponent,
        data: {
          title: 'Revenue',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Revenue' }
          ]
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Analytics' }
          ]
        }
      },
      {
        path: 'manage_admin',
        component: AdminComponent,
        data: {
          title: 'Admin',
          urls: [
            { title: 'Dashboard', url: '/manage_admin' },
            { title: 'Profile' }
          ]
        }
      },
      {
        path: 'manage_admin_form',
        //canActivate: [AuthGaurdGuard],
        component: AdminformComponent,
        data: {
          title: 'Admin Detail',
          urls: [
            { title: 'Dashboard', url: '/manage_admin' },
            { title: 'Profile' }
          ]
        }
      },
      {
        path: 'notification',
        component: NotificationComponent,
        data: {
          title: 'Notification',
          urls: [
            { title: 'Dashboard', url: '/notification' },
            { title: 'Notification' }
          ]
        }
      },
      {
        path: 'notificationhistory',
        component: NotificationhistoryComponent,
        data: {
          title: 'Notification History',
          urls: [
            { title: 'Dashboard', url: '/notification_history' },
            { title: 'Notification History' }
          ]
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          urls: [
            { title: 'Dashboard', url: '/about' },
            { title: 'About' }
          ]
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          urls: [
            { title: 'Dashboard', url: '/contact' },
            { title: 'Contact' }
          ]
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'Faq',
          urls: [
            { title: 'Dashboard', url: '/faq' },
            { title: 'Faq' }
          ]
        }
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
        data: {
          title: 'Privacy',
          urls: [
            { title: 'Dashboard', url: '/privacy' },
            { title: 'Privacy' }
          ]
        }
      },
    ]
  }
];
