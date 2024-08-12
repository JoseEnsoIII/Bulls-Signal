<template>
    <section class="history-section" style="margin-top: -15%;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <div class="upper-content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <h2 class="title" style="margin-bottom: 50px">Privacy Policy</h2>
                        <div v-html="policyText" class="text about_services privacy"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            policyText: `<h4 style="color:#6342ff" class="lass">Information We Collect</h4>
<p style="text-align:left;padding-bottom:5%" class="text privacy">1. <strong>Personal Identification Information:</strong><br>
We may collect personal identification information from users in various ways, including when users visit our website, subscribe to our services, fill out a form, or interact with our site features. Users may be asked for their name, email address, phone number, and other relevant information.</p>

<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">2. <strong>Non-Personal Identification Information:</strong><br>
We may collect non-personal identification information about users whenever they interact with our website. Non-personal identification information may include the browser name, the type of computer or device, and technical information about users' means of connection to our website.</p>

<h4 style="color:#6342ff" class="lass">How We Use Collected Information</h4>
<p  style="text-align:left;padding-bottom:5%" class="text privacy">1. <strong>To Improve Customer Service:</strong><br>
Information you provide helps us respond to your customer service requests and support needs more efficiently.</p>

<p  style="text-align:left;padding-bottom:5%" class="text privacy">2. <strong>To Personalize User Experience:</strong><br>
We may use information in the aggregate to understand how our users as a group use the services and resources provided on our website.</p>

<p  style="text-align:left;padding-bottom:5%" class="text privacy">3. <strong>To Improve Our Site:</strong><br>
We continually strive to improve our website based on the feedback and information we receive from you.</p>

<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">4. <strong>To Send Periodic Emails:</strong><br>
We may use the email address to send information and updates pertaining to your subscription or other related products and services. It may also be used to respond to your inquiries, questions, and/or other requests.</p>

<h4 style="color:#6342ff" class="lass">How We Protect Your Information</h4>
<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">We adopt appropriate data collection, storage, and processing practices, as well as security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our website.</p>

<h4 style="color:#6342ff" class="lass">Sharing Your Personal Information</h4>
<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.</p>

<h4 style="color:#6342ff" class="lass">Third-Party Websites</h4>
<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">Users may find advertising or other content on our website that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our website. Browsing and interaction on any other website, including websites that have a link to our site, is subject to that website's policies and terms.</p>

<h4 style="color:#6342ff" class="lass">Changes to this Privacy Policy</h4>
<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">We have the discretion to update this Privacy Policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes and to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically andbecome aware of modifications.</p>

<h4 style="color:#6342ff" class="lass">Your Acceptance of these Terms</h4>
<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">By using this website, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our website. Your continued use of the website following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes.</p>

<h4 style="color:#6342ff" class="lass">Contact Us</h4>
<p  style="text-align:left;padding-bottom:5%" class="text about_services privacy">If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us at support@BullsSignals.com.</p>`,
        };
    },
};
</script>
<style scoped>
h4{
    padding-top:5% ;
}

</style>
