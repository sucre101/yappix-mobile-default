import { getRootView } from "@nativescript/core/application"

export const showDrawer = () => {
    let drawerNativeView = getRootView();
    if (drawerNativeView && drawerNativeView.showDrawer) {
        drawerNativeView.showDrawer();
    }
}

export const closeDrawer = () => {
    let drawerNativeView = getRootView();
    if (drawerNativeView && drawerNativeView.showDrawer) {
        drawerNativeView.closeDrawer();
    }
}
