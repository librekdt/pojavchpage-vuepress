(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{295:function(e,a,r){"use strict";r.r(a);var o=r(6),n=Object(o.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-pojavlauncher-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-pojavlauncher-from-source"}},[e._v("#")]),e._v(" Getting PojavLauncher from source")]),e._v(" "),a("h2",{attrs:{id:"pojavlauncher-can-be-built-from-source-on-linux-if-you-re-on-windows-you-can-use-wsl-or-cygwin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pojavlauncher-can-be-built-from-source-on-linux-if-you-re-on-windows-you-can-use-wsl-or-cygwin"}},[e._v("#")]),e._v(" "),a("em",[e._v("PojavLauncher can be built from source on Linux. If you're on Windows, you can use WSL or Cygwin.")])]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("To build PojavLauncher itself you'll need only "),a("code",[e._v("openjdk-8-jdk")]),e._v(" or higher package installed."),a("br"),e._v("\nBuilding gl4es requires Android NDK (optional).")]),e._v(" "),a("h2",{attrs:{id:"building"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[e._v("#")]),e._v(" Building")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the repository:"),a("br"),e._v(" "),a("code",[e._v("git clone https://github.com/PojavLauncherTeam/PojavLauncher")])])]),e._v(" "),a("li",[a("p",[e._v("Update translations:"),a("br"),e._v(" "),a("code",[e._v("cd PojavLauncher && chmod +x scripts/languagelist_updater.sh && bash scripts/languagelist_updater.sh")])])]),e._v(" "),a("li",[a("p",[e._v("Get and build gl4es fork (optional):"),a("br"),e._v(" "),a("code",[e._v("git clone https://github.com/PojavLauncherTeam/gl4es && cd gl4es && $ANDROID_NDK_HOME/ndk-build NDK_PROJECT_PATH=. APP_BUILD_SCRIPT=./Android.mk NDK_DEBUG=1 && cp -R libs/* app_pojavlauncher/src/main/jniLibs/ && cd ..")])])]),e._v(" "),a("li",[a("p",[e._v("Get JRE:"),a("br"),e._v("\nDownload "),a("code",[e._v("jre8-pojav")]),e._v(" artifact from "),a("a",{attrs:{href:"https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/actions?query=is%3Asuccess+branch%3Abuildjre8",target:"_blank",rel:"noopener noreferrer"}},[e._v("autobuilds"),a("OutboundLink")],1),e._v(" and unpack it's contents into "),a("code",[e._v("app_pojavlauncher/src/main/assets/components/jre")]),e._v(" directory.")])]),e._v(" "),a("li",[a("p",[e._v("Build & install GLFW:"),a("br"),e._v(" "),a("code",[e._v("mkdir -p out && chmod +x gradlew && ./gradlew clean && ./gradlew :jre_lwjgl3glfw:build && rm app_pojavlauncher/src/main/assets/components/lwjgl3/lwjgl-glfw-classes.jar && cp jre_lwjgl3glfw/build/libs/jre_lwjgl3glfw-3.2.3.jar app_pojavlauncher/src/main/assets/components/lwjgl3/lwjgl-glfw-classes.jar")])])]),e._v(" "),a("li",[a("p",[e._v("Build the launcher:"),a("br"),e._v(" "),a("code",[e._v("./gradlew :app_pojavlauncher:assembleDebug && mv app_pojavlauncher/build/outputs/apk/debug/app_pojavlauncher-debug.apk out/app-debug.apk")])])])]),e._v(" "),a("p",[e._v("You should now have a new .apk file sitting in "),a("code",[e._v("out")]),e._v(" directory. Go ahead and install this on your device and you're all good to go!")])])}),[],!1,null,null,null);a.default=n.exports}}]);