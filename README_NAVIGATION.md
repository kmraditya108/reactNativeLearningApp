# React-Navigation


https://reactnavigation.org/docs/hello-react-navigation

```bash
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
```
>**Note**: You can use `yarn add` or `npm install`.

---------------------------------------------------------------------------------------------------------------------------------

>**Note**: Still we need few more dependent library yarn add react-native-screens react-native-safe-area-context

---------------------------------------------------------------------------------------------------------------------------------
## yarn add react-native-screens
Without react-native-screens you will get the below error screen
<br/>
<img src="https://github.com/kmraditya108/RNLearningApp/blob/main/assets/react-navigation-screen.png" width="250">









---------------------------------------------------------------------------------------------------------------------------------
## yarn add react-native-safe-area-context
Without react-native-screens you will get the below error screen
<br/>
<img src="https://github.com/kmraditya108/RNLearningApp/blob/main/assets/react-native-safe-area-context.png" width="250">




---------------------------------------------------------------------------------------------------------------------------------
Modify android/app/src/main/java/<your package name>/**MainActivity.kt** or **MainActivity.java** file as below:


**Java::** 

`
public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
`

---------------------------------------------------------------------------------------

**Kotlin::**
`
class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
`


---------------------------------------------------------------------------------------

**Note :** for iOS —   $ `npx pod-install ios`

---------------------------------------------------------------------------------------
Without modify MainActivity we will get the below error

<img src="https://github.com/kmraditya108/RNLearningApp/blob/main/assets/MainActivity.png" width="250">
