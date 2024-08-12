<template>
    <v-footer padless style="background-color:  #251936; color: #FFFFFF;">
        <v-row align="center" justify="center"> <!-- Using Vuetify's grid system -->
            <v-col cols="12" margin-left="10%">
    <div style="display: flex; align-items: center;">
        <v-img src="/img/tran_logo.png" max-height="140" style="margin-left: -35%; margin-top: 2%;"></v-img>
        <a href="/terms" style="color: #fff; margin-left: -30%; display: flex; align-items: center;">Terms & Conditions</a>
        <div style="border-left: 1px solid #fff; height: 20px; margin: 0 10px;"></div> <!-- Vertical divider -->
        <a href="/contact" style="color: #fff; display: flex; align-items: center;">Contact Us</a>
        <div style="border-left: 1px solid #fff; height: 20px; margin: 0 10px;"></div> <!-- Vertical divider -->
        <a href="/about" style="color: #fff; display: flex; align-items: center;">About Us</a>
        <div style="border-left: 1px solid #fff; height: 20px; margin: 0 10px;"></div> <!-- Vertical divider -->
        <a href="/dashboard/home" style="color: #fff; display: flex; align-items: center;">My Dashboard</a>
    </div>
</v-col>





            <v-col>
                <v-divider></v-divider> <!-- Divider added here -->
                <p class="text">Copyright &copy; <a href="#" style="color: #5021BD;"> 2023</a>. All Rights Reserved By <a
                        href="contact.html" style="color: #5021BD;">BullsSignals.</a> BullSignals is owned and operated by RossoOnline OU,
                    registered at Põhja-Tallinna linnaosa,Kopli tn 27, 10412, Estonia</p>
                <br>
                <p class="text" style="text-align: center; color: #928995;">**Disclaimer**
                    <br>
                    Trading of Futures, Forex, Stocks, and other asset classes contains substantial risk and is not
                    suited for every investor. An investor could potentially lose all or more than the initial
                    investment. Risk capital is money that can be lost without jeopardising one's financial security or
                    lifestyle. Only risk capital should be used for trading, and only those with sufficient risk capital
                    should consider trading. Past performance is not necessarily indicative of future results.
                </p>
                <p style="text-align: center;">
                    <br>Hypothetical performance results have many inherent limitations, some of which are described
                    below. No representation is being made that any account will or is likely to achieve profits or
                    losses similar to those shown; in fact, there are frequently sharp differences between hypothetical
                    performance results and the actual results subsequently achieved by any particular trading program.
                    One of the limitations of hypothetical performance results is that they are generally prepared with
                    the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no
                    hypothetical trading record can completely account for the impact of financial risk on actual
                    trading. For example, the ability to withstand losses or to adhere to a particular trading program
                    in spite of trading losses is a material point which can also adversely affect actual trading
                    results. There are numerous other factors related to the markets in general or to the implementation
                    of any specific trading program that cannot be fully accounted for in the preparation of
                    hypothetical performance results and all of which can adversely affect trading results.
                </p>
                <p style="text-align: center;">
                    <br>
                    Testimonials appearing on this website may not be representative of other clients or customers and
                    are not a guarantee of future performance or success.
                </p>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style scoped>
p {
    color: #928995;
    text-align: center;
}
a {
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    color: #ffffff;
    line-height: 16px;
    text-decoration: none;
    transform: none;
    font-family: 'PoppinsLight', sans-serif;
    letter-spacing: 0.36px;
}

</style>