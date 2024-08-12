<template>
  <v-container fluid style="margin-top: 10%; background-color: #e1e4f5">
    <v-row>
      <div class="section-head">
        <h3 class="subtitle"></h3>
        <h2 class="title">BullsSignals Checkout</h2>
        <p class="text">Get ready to unlock your trading potential!</p>
      </div>
    </v-row>
    <v-row style="width: 90%; margin: 0 auto">
      <!-- Checkout Form -->
      <v-col
        cols="12"
        md="6"
        style="
          padding: 5%;
          background-color: #fff;
          border-radius: 15px 0 0 15px;
        "
      >
        <v-form id="checkout_form">
          <!-- Email Address -->
          <v-row class="mb-4">
            <v-col cols="12">
              <p>Email Address *</p>
              <v-text-field
                style="background-color: #fff !important"
                class="field"
                v-model="email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- First Name -->
          <v-row class="mb-4">
            <v-col cols="12" style="margin-top: -5%">
              <p>First Name *</p>
              <v-text-field
                style="background-color: #fff !important"
                class="field"
                v-model="firstName"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Last Name -->
          <v-row class="mb-4">
            <v-col cols="12" style="margin-top: -5%">
              <p>Last Name *</p>
              <v-text-field
                style="background-color: #fff !important"
                class="field"
                v-model="lastName"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Country -->
          <v-row class="mb-4">
            <v-col cols="12" style="margin-top: -5%">
              <p>Country *</p>
              <v-select
                v-model="selectedCountry"
                :items="countries"
                required
              ></v-select>
            </v-col>
          </v-row>
          <!-- Address -->
          <v-row class="mb-4">
            <v-col cols="12" style="margin-top: -5%">
              <p>Street Address *</p>
              <v-text-field
                style="background-color: #fff !important"
                class="field"
                v-model="street"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-4">
            <v-col cols="12" style="margin-top: -5%">
              <p>Town/City *</p>
              <v-text-field
                style="background-color: #fff !important"
                class="field"
                v-model="city"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-4">
            <v-col cols="12" style="margin-top: -5%">
              <p>Zip Code *</p>
              <v-text-field
                style="background-color: #fff !important"
                class="field"
                v-model="postal"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Phone -->
          <v-row class="mb-4">
  <v-col cols="12" style="margin-top: -5%">
    <p>Phone Number *</p>
    <v-row>
      <v-col cols="3">
        <!-- Dropdown for country code -->
        <v-select
          v-model="selectedCountryCode"
          :items="countries"
          item-value="code"
          item-text="name"
          label="Country Code"
          outlined
          required
        ></v-select>
      </v-col>
      <v-col cols="9">
        <!-- Text field for phone number -->
        <v-text-field
          style="background-color: #fff !important"
          class="field"
          v-model="phoneNumber"
          label="Number"
          required
        ></v-text-field>
      </v-col>
    </v-row>
  </v-col>
</v-row>


          <!-- Coupon Code -->
          <v-row class="mb-4 purchase">
            <v-col cols="12" style="margin-top: -5%">
              <p>Coupon</p>
              <v-text-field
                style="background-color: #fff !important"
                class="field"
                v-model="coupon"
                label="Coupon Code"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Terms & Conditions Checkbox -->
        </v-form>
      </v-col>

      <!-- Purchase Button -->
      <v-col
        cols="12"
        md="6"
        class="text-center"
        style="padding: 5%; border-radius: 0 15px 15px 0"
      >
        <div class="pac">
          <div class="pack">
            <div class="package">
              <div class="d-flex flex-column">
                <h3
                class="title subtitle"
                  style="
                    font-size: 16px;
                    color: white;
                    text-transform: capitalize !important;
                  "
                >
                  {{ $route.query.name }}
                </h3>
                <h2 style="font-size: 50px; color: #66cc33">
                  <span class="currency-logo">
                    <img
                      v-if="$route.query.currency === 'eur'"
                      src="/public/currency/icons8-european-currency-241.png"
                      alt="EUR"
                    />
                    <img
                      v-else-if="$route.query.currency === 'usd'"
                      src="/public/currency/icons8-us-dollar-241.png"
                      alt="USD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'gbp'"
                      src="/public/currency/icons8-british-pound-241.png"
                      alt="GBP"
                    />
                    <img
                      v-else-if="$route.query.currency === 'aud'"
                      src="/public/currency/icons8-australian-dollar-241.png"
                      alt="AUD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'cad'"
                      src="/public/currency/icons8-canadian-dollar-241.png"
                      alt="CAD"
                    />
                  </span>
                  {{ $route.query.price }}
                </h2>
                <a tyle="font-size: 16px;">{{ $route.query.currency }} </a>
              </div>
            </div>
          </div>
        </div>
        <v-row>
          <v-col>
            <ul class="list" style="margin: 10%">
              <li
                class="list-item wow fadeInUp"
                data-wow-duration="0.3s"
                data-wow-delay="0.3s"
                style="padding: 5px 0"
              >
                <span class="left-align">Package Price:</span>
                <span class="align-right">
                  <span class="currency-logo1">
                    <img
                      v-if="$route.query.currency === 'eur'"
                      src="/public/currency/icons8-european-currency-241.png"
                      alt="EUR"
                    />
                    <img
                      v-else-if="$route.query.currency === 'usd'"
                      src="/public/currency/icons8-us-dollar-241.png"
                      alt="USD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'gbp'"
                      src="/public/currency/icons8-british-pound-241.png"
                      alt="GBP"
                    />
                    <img
                      v-else-if="$route.query.currency === 'aud'"
                      src="/public/currency/icons8-australian-dollar-241.png"
                      alt="AUD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'cad'"
                      src="/public/currency/icons8-canadian-dollar-241.png"
                      alt="CAD"
                    />
                  </span>
                  {{ $route.query.price }}</span
                >
              </li>
              <li
                class="list-item wow fadeInUp"
                data-wow-duration="0.3s"
                data-wow-delay="0.3s"
                style="padding: 5px 0"
              >
                <span class="left-align">Coupon Discount:</span>
                <span class="align-right">
                  <span class="currency-logo1">
                    <img
                      v-if="$route.query.currency === 'eur'"
                      src="/public/currency/icons8-european-currency-241.png"
                      alt="EUR"
                    />
                    <img
                      v-else-if="$route.query.currency === 'usd'"
                      src="/public/currency/icons8-us-dollar-241.png"
                      alt="USD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'gbp'"
                      src="/public/currency/icons8-british-pound-241.png"
                      alt="GBP"
                    />
                    <img
                      v-else-if="$route.query.currency === 'aud'"
                      src="/public/currency/icons8-australian-dollar-241.png"
                      alt="AUD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'cad'"
                      src="/public/currency/icons8-canadian-dollar-241.png"
                      alt="CAD"
                    />
                  </span>
                  <span class="align-right" id="coupon_price">0.00</span>
                </span>
              </li>
              <li
                class="list-item wow fadeInUp"
                data-wow-duration="0.3s"
                data-wow-delay="0.3s"
                style="padding: 5px 0"
              >
                <span class="left-align">Previous Purchases:</span>
                <span class="align-right" id="previous">
                  <span class="currency-logo1">
                    <img
                      v-if="$route.query.currency === 'eur'"
                      src="/public/currency/icons8-european-currency-241.png"
                      alt="EUR"
                    />
                    <img
                      v-else-if="$route.query.currency === 'usd'"
                      src="/public/currency/icons8-us-dollar-241.png"
                      alt="USD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'gbp'"
                      src="/public/currency/icons8-british-pound-241.png"
                      alt="GBP"
                    />
                    <img
                      v-else-if="$route.query.currency === 'aud'"
                      src="/public/currency/icons8-australian-dollar-241.png"
                      alt="AUD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'cad'"
                      src="/public/currency/icons8-canadian-dollar-241.png"
                      alt="CAD"
                    /> </span
                  >0.00</span
                >
              </li>
              <li
                class="list-item wow fadeInUp"
                data-wow-duration="0.3s"
                data-wow-delay="0.3s"
                style="padding: 5px 0"
              >
                <span class="left-align">Total:</span>
                <span class="align-right" id="total">
                  <span class="currency-logo1">
                    <img
                      v-if="$route.query.currency === 'eur'"
                      src="/public/currency/icons8-european-currency-241.png"
                      alt="EUR"
                    />
                    <img
                      v-else-if="$route.query.currency === 'usd'"
                      src="/public/currency/icons8-us-dollar-241.png"
                      alt="USD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'gbp'"
                      src="/public/currency/icons8-british-pound-241.png"
                      alt="GBP"
                    />
                    <img
                      v-else-if="$route.query.currency === 'aud'"
                      src="/public/currency/icons8-australian-dollar-241.png"
                      alt="AUD"
                    />
                    <img
                      v-else-if="$route.query.currency === 'cad'"
                      src="/public/currency/icons8-canadian-dollar-241.png"
                      alt="CAD"
                    /> </span
                  >{{ $route.query.price }}</span
                >
              </li>
            </ul>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
              @click="purchase"
              color="#66CB33"
              height="50px"
              style="border-radius: 25px; color: white"
              >Purchase</v-btn
            >
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col cols="12">
            <div style="display: inline-flex; align-items: center; width: 70%">
              <input
                type="checkbox"
                id="agreeCheckbox"
                style="margin-top: -12%"
              />
              <label for="agreeCheckbox" style="color: white"
                >By purchasing you hereby agree to our
                <a href="/terms" style="color: #acb3bf">terms and conditions</a
                >, <a href="/privacy" style="color: #acb3bf">privacy policy</a>,
                and <a href="/disclaimer" style="color: #acb3bf">disclaimer</a>.
              </label>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import https from "https";
import querystring from "querystring";

export default {
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      selectedCountry: "",
      countries: [
    { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
    { name: "Aland Islands", code: "+358", flag: "🇦🇽" },
    { name: "Albania", code: "+355", flag: "🇦🇱" },
    { name: "Algeria", code: "+213", flag: "🇩🇿" },
    { name: "American Samoa", code: "+1-684", flag: "🇦🇸" },
    { name: "Andorra", code: "+376", flag: "🇦🇩" },
    { name: "Angola", code: "+244", flag: "🇦🇴" },
    { name: "Anguilla", code: "+1-264", flag: "🇦🇮" },
    { name: "Antarctica", code: "+672", flag: "🇦🇶" },
    { name: "Antigua and Barbuda", code: "+1-268", flag: "🇦🇬" },
    { name: "Argentina", code: "+54", flag: "🇦🇷" },
    { name: "Armenia", code: "+374", flag: "🇦🇲" },
    { name: "Aruba", code: "+297", flag: "🇦🇼" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Austria", code: "+43", flag: "🇦🇹" },
    { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
    { name: "Bahamas", code: "+1-242", flag: "🇧🇸" },
    { name: "Bahrain", code: "+973", flag: "🇧🇭" },
    { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
    { name: "Barbados", code: "+1-246", flag: "🇧🇧" },
    { name: "Belarus", code: "+375", flag: "🇧🇾" },
    { name: "Belgium", code: "+32", flag: "🇧🇪" },
    { name: "Belize", code: "+501", flag: "🇧🇿" },
    { name: "Benin", code: "+229", flag: "🇧🇯" },
    { name: "Bermuda", code: "+1-441", flag: "🇧🇲" },
    { name: "Bhutan", code: "+975", flag: "🇧🇹" },
    { name: "Bolivia", code: "+591", flag: "🇧🇴" },
    { name: "Bonaire, Sint Eustatius and Saba", code: "+599", flag: "🇧🇶" },
    { name: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦" },
    { name: "Botswana", code: "+267", flag: "🇧🇼" },
    { name: "Bouvet Island", code: "+47", flag: "🇧🇻" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "British Indian Ocean Territory", code: "+246", flag: "🇮🇴" },
    { name: "Brunei Darussalam", code: "+673", flag: "🇧🇳" },
    { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
    { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
    { name: "Burundi", code: "+257", flag: "🇧🇮" },
    { name: "Cambodia", code: "+855", flag: "🇰🇭" },
    { name: "Cameroon", code: "+237", flag: "🇨🇲" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Cape Verde", code: "+238", flag: "🇨🇻" },
    { name: "Cayman Islands", code: "+1-345", flag: "🇰🇾" },
    { name: "Central African Republic", code: "+236", flag: "🇨🇫" },
    { name: "Chad", code: "+235", flag: "🇹🇩" },
    { name: "Chile", code: "+56", flag: "🇨🇱" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Christmas Island", code: "+61", flag: "🇨🇽" },
    { name: "Cocos (Keeling) Islands", code: "+61", flag: "🇨🇨" },
    { name: "Colombia", code: "+57", flag: "🇨🇴" },
    { name: "Comoros", code: "+269", flag: "🇰🇲" },
    { name: "Congo", code: "+242", flag: "🇨🇬" },
    { name: "Congo, Democratic Republic of the Congo", code: "+243", flag: "🇨🇩" },
    { name: "Cook Islands", code: "+682", flag: "🇨🇰" },
    { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
    { name: "Cote D'Ivoire", code: "+225", flag: "🇨🇮" },
    { name: "Croatia", code: "+385", flag: "🇭🇷" },
    { name: "Cuba", code: "+53", flag: "🇨🇺" },
    { name: "Curacao", code: "+599", flag: "🇨🇼" },
    { name: "Cyprus", code: "+357", flag: "🇨🇾" },
    { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
    { name: "Denmark", code: "+45", flag: "🇩🇰" },
    { name: "Djibouti", code: "+253", flag: "🇩🇯" },
    { name: "Dominica", code: "+1-767", flag: "🇩🇲" },
    { name: "Dominican Republic", code: "+1-809", flag: "🇩🇴" },
    { name: "Ecuador", code: "+593", flag: "🇪🇨" },
    { name: "Egypt", code: "+20", flag: "🇪🇬" },
    { name: "El Salvador", code: "+503", flag: "🇸🇻" },
    { name: "Equatorial Guinea", code: "+240", flag: "🇬🇶" },
    { name: "Eritrea", code: "+291", flag: "🇪🇷" },
    { name: "Estonia", code: "+372", flag: "🇪🇪" },
    { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
    { name: "Falkland Islands (Malvinas)", code: "+500", flag: "🇫🇰" },
    { name: "Faroe Islands", code: "+298", flag: "🇫🇴" },
    { name: "Fiji", code: "+679", flag: "🇫🇯" },
    { name: "Finland", code: "+358", flag: "🇫🇮" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "French Guiana", code: "+594", flag: "🇬🇫" },
    { name: "French Polynesia", code: "+689", flag: "🇵🇫" },
    { name: "French Southern Territories", code: "+262", flag: "🇹🇫" },
    { name: "Gabon", code: "+241", flag: "🇬🇦" },
    { name: "Gambia", code: "+220", flag: "🇬🇲" },
    { name: "Georgia", code: "+995", flag: "🇬🇪" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "Ghana", code: "+233", flag: "🇬🇭" },
    { name: "Gibraltar", code: "+350", flag: "🇬🇮" },
    { name: "Greece", code: "+30", flag: "🇬🇷" },
    { name: "Greenland", code: "+299", flag: "🇬🇱" },
    { name: "Grenada", code: "+1-473", flag: "🇬🇩" },
    { name: "Guadeloupe", code: "+590", flag: "🇬🇵" },
    { name: "Guam", code: "+1-671", flag: "🇬🇺" },
    { name: "Guatemala", code: "+502", flag: "🇬🇹" },
    { name: "Guernsey", code: "+44", flag: "🇬🇬" },
    { name: "Guinea", code: "+224", flag: "🇬🇳" },
    { name: "Guinea-Bissau", code: "+245", flag: "🇬🇼" },
    { name: "Guyana", code: "+592", flag: "🇬🇾" },
    { name: "Haiti", code: "+509", flag: "🇭🇹" },
    { name: "Heard Island and Mcdonald Islands", code: "+672", flag: "🇭🇲" },
    { name: "Holy See (Vatican City State)", code: "+379", flag: "🇻🇦" },
    { name: "Honduras", code: "+504", flag: "🇭🇳" },
    { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
    { name: "Hungary", code: "+36", flag: "🇭🇺" },
    { name: "Iceland", code: "+354", flag: "🇮🇸" },
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩" },
    { name: "Iran, Islamic Republic of", code: "+98", flag: "🇮🇷" },
    { name: "Iraq", code: "+964", flag: "🇮🇶" },
    { name: "Ireland", code: "+353", flag: "🇮🇪" },
    { name: "Isle of Man", code: "+44", flag: "🇮🇲" },
    { name: "Israel", code: "+972", flag: "🇮🇱" },
    { name: "Italy", code: "+39", flag: "🇮🇹" },
    { name: "Jamaica", code: "+1-876", flag: "🇯🇲" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "Jersey", code: "+44", flag: "🇯🇪" },
    { name: "Jordan", code: "+962", flag: "🇯🇴" },
    { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
    { name: "Kenya", code: "+254", flag: "🇰🇪" },
    { name: "Kiribati", code: "+686", flag: "🇰🇮" },
    { name: "Korea, Democratic Peoples Republic of", code: "+850", flag: "🇰🇵" },
    { name: "Korea, Republic of", code: "+82", flag: "🇰🇷" },
    { name: "Kosovo", code: "+383", flag: "🇽🇰" },
    { name: "Kuwait", code: "+965", flag: "🇰🇼" },
    { name: "Kyrgyzstan", code: "+996", flag: "🇰🇬" },
    { name: "Lao Peoples Democratic Republic", code: "+856", flag: "🇱🇦" },
    { name: "Latvia", code: "+371", flag: "🇱🇻" },
    { name: "Lebanon", code: "+961", flag: "🇱🇧" },
    { name: "Lesotho", code: "+266", flag: "🇱🇸" },
    { name: "Liberia", code: "+231", flag: "🇱🇷" },
    { name: "Libyan Arab Jamahiriya", code: "+218", flag: "🇱🇾" },
    { name: "Liechtenstein", code: "+423", flag: "🇱🇮" },
    { name: "Lithuania", code: "+370", flag: "🇱🇹" },
    { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
    { name: "Macao", code: "+853", flag: "🇲🇴" },
    { name: "Macedonia, the Former Yugoslav Republic of", code: "+389", flag: "🇲🇰" },
    { name: "Madagascar", code: "+261", flag: "🇲🇬" },
    { name: "Malawi", code: "+265", flag: "🇲🇼" },
    { name: "Malaysia", code: "+60", flag: "🇲🇾" },
    { name: "Maldives", code: "+960", flag: "🇲🇻" },
    { name: "Mali", code: "+223", flag: "🇲🇱" },
    { name: "Malta", code: "+356", flag: "🇲🇹" },
    { name: "Marshall Islands", code: "+692", flag: "🇲🇭" },
    { name: "Martinique", code: "+596", flag: "🇲🇶" },
    { name: "Mauritania", code: "+222", flag: "🇲🇷" },
    { name: "Mauritius", code: "+230", flag: "🇲🇺" },
    { name: "Mayotte", code: "+262", flag: "🇾🇹" },
    { name: "Mexico", code: "+52", flag: "🇲🇽" },
    { name: "Micronesia, Federated States of", code: "+691", flag: "🇫🇲" },
    { name: "Moldova, Republic of", code: "+373", flag: "🇲🇩" },
    { name: "Monaco", code: "+377", flag: "🇲🇨" },
    { name: "Mongolia", code: "+976", flag: "🇲🇳" },
    { name: "Montenegro", code: "+382", flag: "🇲🇪" },
    { name: "Montserrat", code: "+1-664", flag: "🇲🇸" },
    { name: "Morocco", code: "+212", flag: "🇲🇦" },
    { name: "Mozambique", code: "+258", flag: "🇲🇿" },
    { name: "Myanmar", code: "+95", flag: "🇲🇲" },
    { name: "Namibia", code: "+264", flag: "🇳🇦" },
    { name: "Nauru", code: "+674", flag: "🇳🇷" },
    { name: "Nepal", code: "+977", flag: "🇳🇵" },
    { name: "Netherlands", code: "+31", flag: "🇳🇱" },
    { name: "Netherlands Antilles", code: "+599", flag: "🇦🇳" },
    { name: "New Caledonia", code: "+687", flag: "🇳🇨" },
    { name: "New Zealand", code: "+64", flag: "🇳🇿" },
    { name: "Nicaragua", code: "+505", flag: "🇳🇮" },
    { name: "Niger", code: "+227", flag: "🇳🇪" },
    { name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { name: "Niue", code: "+683", flag: "🇳🇺" },
    { name: "Norfolk Island", code: "+672", flag: "🇳🇫" },
    { name: "Northern Mariana Islands", code: "+1-670", flag: "🇲🇵" },
    { name: "Norway", code: "+47", flag: "🇳🇴" },
    { name: "Oman", code: "+968", flag: "🇴🇲" },
    { name: "Pakistan", code: "+92", flag: "🇵🇰" },
    { name: "Palau", code: "+680", flag: "🇵🇼" },
    { name: "Palestinian Territory, Occupied", code: "+970", flag: "🇵🇸" },
    { name: "Panama", code: "+507", flag: "🇵🇦" },
    { name: "Papua New Guinea", code: "+675", flag: "🇵🇬" },
    { name: "Paraguay", code: "+595", flag: "🇵🇾" },
    { name: "Peru", code: "+51", flag: "🇵🇪" },
    { name: "Philippines", code: "+63", flag: "🇵🇭" },
    { name: "Pitcairn", code: "+872", flag: "🇵🇳" },
    { name: "Poland", code: "+48", flag: "🇵🇱" },
    { name: "Portugal", code: "+351", flag: "🇵🇹" },
    { name: "Puerto Rico", code: "+1-787", flag: "🇵🇷" },
    { name: "Qatar", code: "+974", flag: "🇶🇦" },
    { name: "Reunion", code: "+262", flag: "🇷🇪" },
    { name: "Romania", code: "+40", flag: "🇷🇴" },
    { name: "Russian Federation", code: "+7", flag: "🇷🇺" },
    { name: "Rwanda", code: "+250", flag: "🇷🇼" },
    { name: "Saint Barthelemy", code: "+590", flag: "🇧🇱" },
    { name: "Saint Helena, Ascension and Tristan da Cunha", code: "+290", flag: "🇸🇭" },
    { name: "Saint Kitts and Nevis", code: "+1-869", flag: "🇰🇳" },
    { name: "Saint Lucia", code: "+1-758", flag: "🇱🇨" },
    { name: "Saint Martin (French part)", code: "+590", flag: "🇲🇫" },
    { name: "Saint Pierre and Miquelon", code: "+508", flag: "🇵🇲" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784", flag: "🇻🇨" },
    { name: "Samoa", code: "+685", flag: "🇼🇸" },
    { name: "San Marino", code: "+378", flag: "🇸🇲" },
    { name: "Sao Tome and Principe", code: "+239", flag: "🇸🇹" },
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
    { name: "Senegal", code: "+221", flag: "🇸🇳" },
    { name: "Serbia", code: "+381", flag: "🇷🇸" },
    { name: "Seychelles", code: "+248", flag: "🇸🇨" },
    { name: "Sierra Leone", code: "+232", flag: "🇸🇱" },
    { name: "Singapore", code: "+65", flag: "🇸🇬" },
    { name: "Sint Maarten (Dutch part)", code: "+1-721", flag: "🇸🇽" },
    { name: "Slovakia", code: "+421", flag: "🇸🇰" },
    { name: "Slovenia", code: "+386", flag: "🇸🇮" },
    { name: "Solomon Islands", code: "+677", flag: "🇸🇧" },
    { name: "Somalia", code: "+252", flag: "🇸🇴" },
    { name: "South Africa", code: "+27", flag: "🇿🇦" },
    { name: "South Georgia and the South Sandwich Islands", code: "+500", flag: "🇬🇸" },
    { name: "South Sudan", code: "+211", flag: "🇸🇸" },
    { name: "Spain", code: "+34", flag: "🇪🇸" },
    { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
    { name: "Sudan", code: "+249", flag: "🇸🇩" },
    { name: "Suriname", code: "+597", flag: "🇸🇷" },
    { name: "Svalbard and Jan Mayen", code: "+47", flag: "🇸🇯" },
    { name: "Swaziland", code: "+268", flag: "🇸🇿" },
    { name: "Sweden", code: "+46", flag: "🇸🇪" },
    { name: "Switzerland", code: "+41", flag: "🇨🇭" },
    { name: "Syrian Arab Republic", code: "+963", flag: "🇸🇾" },
    { name: "Taiwan", code: "+886", flag: "🇹🇼" },
    { name: "Tajikistan", code: "+992", flag: "🇹🇯" },
    { name: "Tanzania, United Republic of", code: "+255", flag: "🇹🇿" },
    { name: "Thailand", code: "+66", flag: "🇹🇭" },
    { name: "Timor-Leste", code: "+670", flag: "🇹🇱" },
    { name: "Togo", code: "+228", flag: "🇹🇬" },
    { name: "Tokelau", code: "+690", flag: "🇹🇰" },
    { name: "Tonga", code: "+676", flag: "🇹🇴" },
    { name: "Trinidad and Tobago", code: "+1-868", flag: "🇹🇹" },
    { name: "Tunisia", code: "+216", flag: "🇹🇳" },
    { name: "Turkey", code: "+90", flag: "🇹🇷" },
    { name: "Turkmenistan", code: "+993", flag: "🇹🇲" },
    { name: "Turks and Caicos Islands", code: "+1-649", flag: "🇹🇨" },
    { name: "Tuvalu", code: "+688", flag: "🇹🇻" },
    { name: "Uganda", code: "+256", flag: "🇺🇬" },
    { name: "Ukraine", code: "+380", flag: "🇺🇦" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "Uruguay", code: "+598", flag: "🇺🇾" },
    { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },
    { name: "Vanuatu", code: "+678", flag: "🇻🇺" },
    { name: "Venezuela", code: "+58", flag: "🇻🇪" },
    { name: "Vietnam", code: "+84", flag: "🇻🇳" },
    { name: "Virgin Islands, British", code: "+1-284", flag: "🇻🇬" },
    { name: "Virgin Islands, U.S.", code: "+1-340", flag: "🇻🇮" },
    { name: "Wallis and Futuna", code: "+681", flag: "🇼🇫" },
    { name: "Western Sahara", code: "+212", flag: "🇪🇭" },
    { name: "Yemen", code: "+967", flag: "🇾🇪" },
    { name: "Zambia", code: "+260", flag: "🇿🇲" },
    { name: "Zimbabwe", code: "+263", flag: "🇿🇼" }
],
      street: "",
      city: "",
      postal: "",
      phone: "",
      coupon: "",
      agree: false,
      shopperResultUrl: "",
      checkoutId: "", // Add your checkoutId here
    };
  },
  computed: {
    
    emailError() {
      return this.email ? "" : "Email is Required";
    },
    firstNameError() {
      return this.firstName ? "" : "First name is required";
    },
    lastNameError() {
      return this.lastName ? "" : "Last name is required";
    },
    countryError() {
      return this.selectedCountry ? "" : "Country is required";
    },
    streetError() {
      return this.street ? "" : "Street address is required";
    },
    cityError() {
      return this.city ? "" : "City is required";
    },
    postalError() {
      return this.postal ? "" : "Zip code is required";
    },
    phoneError() {
      return this.phone ? "" : "Phone number is required";
    },
    countryCodesWithFlags() {
    return this.countryCodes.map(country => ({
      ...country,
      nameWithFlag: `${country.flag} ${country.name} (${country.code})`
    }));
  },
  },
  methods: {
    purchase() {
      const path = "/v1/checkouts";
      const params = new URLSearchParams();
      params.append("entityId", "8a8294174f170997014f17e5b2f90a88");
      params.append("amount", "92.00");
      params.append("currency", "EUR");
      params.append("paymentType", "DB");

      const options = {
        port: 443,
        host: "test.solidpayments.net",
        path: path,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Bearer OGE4Mjk0MTc0ZjE3MDk5NzAxNGYxN2U1YjMwZTBhOGN8ZTdzUEhuM25oOA==",
        },
      };

      const postRequest = https.request(options, (res) => {
        const buf = [];
        res.on("data", (chunk) => {
          buf.push(Buffer.from(chunk));
        });
        res.on("end", () => {
          const jsonString = Buffer.concat(buf).toString("utf8");
          const response = JSON.parse(jsonString);
          if (response.redirectUrl) {
            // Open a new window or tab with the redirect URL
            window.open(response.redirectUrl, "_blank");
          } else {
            console.error("Payment initiation failed:", response);
          }
        });
      });

      postRequest.on("error", (error) => {
        console.error("Error in payment initiation:", error);
      });

      postRequest.write(params.toString());
      postRequest.end();
      zz;
    },
  },
};
</script>

<style scoped>
.text-center {
  background: rgb(101, 77, 207);
  background: linear-gradient(
    90deg,
    rgba(101, 77, 207, 1) 0%,
    rgba(111, 58, 185, 1) 50%,
    rgba(153, 59, 222, 1) 100%
  );
}
a {
  color: #acb3bf !important;
}
.align-right {
  float: right;
  text-align: right;
}
h3.title {
  text-transform: capitalize !important;
}

.pac {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(101, 77, 207);
  background: linear-gradient(
    90deg,
    rgba(101, 77, 207, 1) 0%,
    rgba(111, 58, 185, 1) 50%,
    rgba(148, 84, 222, 1) 100%
  );
  width: 350px;
  height: 350px;
  margin: 0 auto;
  color: white;
}

.pack {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(101, 77, 207);
  background: linear-gradient(
    90deg,
    rgba(101, 77, 207, 1) 0%,
    rgba(111, 58, 185, 1) 50%,
    rgba(172, 100, 231, 1) 100%
  );
  width: 300px;
  height: 300px;
  margin: 0 auto;
  color: white;
}

.package {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(101, 77, 207);
  background: linear-gradient(
    90deg,
    rgba(101, 77, 207, 1) 0%,
    rgba(111, 58, 185, 1) 33%,
    rgba(230, 136, 255, 1) 100%
  );
  width: 250px;
  height: 250px;
  margin: 0 auto;
  color: white;
}
.currency-logo1 img {
  height: 20px;
  margin-top: -5%;
  margin: 0 5px 5px 0;
}
.currency-logo img {
  height: 50px;
  margin-top: -15%;
}

.list-item {
  text-align: left;
  color: white;
}
.section-head {
  margin-top: 0% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3,
p {
  color: black;
}

.text {
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  color: #5d5779;
  line-height: 28px;
  text-decoration: none;
  transform: none;
  font-family: "Open Sans";
  letter-spacing: 0;
}

.error-message {
  color: red; /* You can adjust this color */
  font-size: 12px; /* You can adjust this size */
  margin-top: 5px; /* You can adjust the spacing */
}
.v-input__details {
  display: none;
}
</style>
