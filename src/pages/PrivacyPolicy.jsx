import React from "react";
import SectionTitle from "../components/common/sectiontitletext/SectionTitle";
import Layout from "./pagecontainer/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <Layout>
       <Helmet>
        <title>ISPL T10 | Privacy Policy</title>
        <meta
          name="description"
          content="This is the home page of our website."
        />
        <meta name="keywords" content="home, main, index" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="This is the home page of our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta
          property="og:image"
          content="https://www.example.com/home-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page" />
        <meta
          name="twitter:description"
          content="This is the home page of our website."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/home-image.jpg"
        />
        <link rel="canonical" href="https://www.example.com/" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XX2NZ7QWK"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4XX2NZ7QWK');
        `}
        </script>
      </Helmet>
      <SectionTitle titleText="Privacy Policy" />
      <div className="contentWraps">
        <p>
          <i>
            This document is an electronic record in terms of Information
            Technology Act, 2000 and rules made thereunder and as the same may
            be amended from time to time. Being a system generated electronic
            record, it does not require any physical or digital signature.
          </i>
        </p>
        <p>
          Greetings from Indian Street Premier League T10 (ISPL) (
          <i>hereinafter referred to as the</i> <strong>Website</strong> ). The
          Website is owned by CCS Sports LLP, having its registered address at
          Unit No.206, Kamla Spaces, Khira Nagar, S.V. Road, Santacruz West,
          Mumbai 400054, Maharashtra, India.
        </p>
        <p>
          By accessing the Website from any computer, computer device, mobile,
          smartphone or any electronic device, you expressly agree to be bound
          by this Privacy Policy (<i>hereinafter referred to as the</i>{" "}
          <strong>Privacy Policy</strong> ).
        </p>
        <p>
          We respect the privacy of our Website users and the confidentiality of
          the information provided by them and have developed this Privacy
          Policy to demonstrate our commitment to protecting the same. This
          Privacy Policy describes the type of information we collect, purpose,
          usage, storage and handling of such information, and disclosure
          thereof. We encourage you to read this Privacy Policy carefully when
          (i) using our Website from any computer, computer device, mobile,
          smartphone or any electronic device, or (ii) availing any products or
          services offered on or through the Website. By using our Website you
          are accepting the practices described in this Privacy Policy.
        </p>

        <ol>
          <li>
            What information do we collect :
            <ol>
              <li>
                When you use the Website, we collect your personal and
                non-personal information. Your personal information helps us to
                collect information that can directly identify you such as your
                name, address, email address, phone number ("
                <strong>personal information</strong>"). We also collect your
                non-personal information that does not directly identify you. By
                using the Website, you are authorizing us to collect, parse,
                store, process, disclose, disseminate and retain such
                information as envisaged herein. Your personal information shall
                not be made public or made available to other users without your
                explicit permission.
              </li>
              <li>
                When you use the Website, you may be asked to allow us to
                collect your location information from the device/computer when
                you use the Website. In addition, we may collect and store any
                personal information you provide while using our Website or in
                some other manner. If you contact us for customer service or
                other inquiry, you provide us with the content of that
                communication.
              </li>
              <li>
                If you place an order for any products or services from the
                Website, we collect information that you provide to us such as
                your contact and postal details, shipping, billing, and payment
                information (such as credit card, debit card or bank account
                details). You may also have the option to store credit card,
                debit card or other payment information to make it easier to
                purchase products or avail services from our Website in the
                future.
              </li>
              <li>
                We neither knowingly collect any information nor promote our
                Website to any minor under the age of 18 (eighteen) years. If
                you are less than 18 (eighteen) years old or a minor in any
                other jurisdiction from where you access our Website, we request
                that you do not submit information to us. If we become aware
                that a minor has registered with us and provided us with
                personal information, we may take steps to terminate such
                persons registration and delete their account with us.
              </li>
              <li>
                We use various tools and technologies, including cookies, to
                collect your personal information and non-personal information
                from the device from which you access the Websites and learn
                about your activities taking place under your account when you
                use our Website. Such non-personal information could include
                your IP address, device ID and type, your browser type and
                language, operating system used by your device, access times,
                your device/computer geographic location and the referring
                website address. We may use web beacons and other similar
                technologies to track your use of our Website and to deliver or
                communicate with cookies.
              </li>
            </ol>
          </li>
          <li>
            How we use the information we collect
            <p>We may use information that we collect from you to:</p>
            <ol>
              <li>
                deliver and improve our products and services, and manage our
                business;
              </li>
              <li>
                manage your account and provide you with customer support;
              </li>
              <li>
                perform research and analysis about your use of, or interest in,
                our or other users products, services, or content or such
                products, services, or content as may be available on or through
                the Website;
              </li>
              <li>
                communicate with you by email, postal mail, telephone and/or
                mobile devices about products or services that may be of
                interest to you either from us or other users or such products,
                services, or content as may be available on or through the
                Website;
              </li>
              <li>
                develop, display, and track content and advertising tailored to
                your interests on our Website;
              </li>
              <li>perform website or mobile application analytics;</li>
              <li>
                enforce or exercise any rights in our Website Terms and
                Conditions available at the link &nbsp;
                <Link to="/terms-condition">
                  https://ispl-t10.com/terms-condition
                </Link>{" "}
                ;
              </li>
              <li>
                perform functions or services as otherwise described to you at
                the time of collection; and
              </li>
              <li>
                resolve disputes, troubleshoot problems, detect and protect us
                against any activity not expressly authorized under the Website
                Terms & Conditions available at the link&nbsp;
                <Link to="/terms-condition">
                  https://ispl-t10.com/terms-condition
                </Link>
              </li>
            </ol>
          </li>
          <li>
            With whom we share your information
            <ol>
              <li>
                When you register with our Website, your profile details (or
                information you have provided us directly or through your social
                media login account, if permitted) may be accessible and
                viewable by other Website users.
              </li>
              <li>
                We do not share your personal information with others except as
                indicated in this Privacy Policy or unless you have opted to
                reveal your personal information in your profile on the Website.
              </li>
              <li>
                We may also disclose your personal information (i) for complying
                with applicable laws, requests or orders from law enforcement
                agencies, appropriate authorities (such as without limitation,
                child protection agencies, court officials, expert professional
                investigative agencies and the like) or for any legal process;
                (ii) for enforcing the Website Terms and Conditions available at
                the link &nbsp;
                <Link to="/terms-condition">
                  https://ispl-t10.com/terms-condition
                </Link>{" "}
                (iii) for protecting or defending ours, any Website users or any
                third party's rights or property; (iv) for supporting any fraud/
                legal investigation/ verification checks; or (v) in connection
                with a corporate transaction, including but not limited to sale
                of our business, merger, consolidation, or in the unlikely event
                of bankruptcy.
              </li>
              <li>
                We may use and share your non-personal information we collect
                under any of the above circumstances, including with third
                parties to develop and deliver targeted advertising on our
                Website and on websites and/or applications of third parties,
                and to undertake analysis thereof. We may combine non-personal
                information we collect with additional non-personal information
                collected from other sources. We also may share aggregated,
                non-personal information, or personal information in hashed,
                non-human readable form, with third parties, including advisors,
                sponsors, advertisers and investors, for the purpose of
                conducting general business analysis or other business purposes.
              </li>
            </ol>
          </li>
          <li>
            How can you access or control your information
            <ol>
              <li>
                If you have a Website account with us, you can review and update
                your personal information by opening and editing your profile
                details. In addition, we give you the control to opt out of
                having your personal information shared, via the Website
                settings. If you logout of your Website account, we may retain
                certain information associated with your account for analytical
                purposes and recordkeeping purposes or as required by law, as
                well as to prevent fraud, enforce our Website Terms and
                Conditions available at the link
                https://ispl-t10.com/terms-condition, take actions we deem
                necessary to protect the integrity of our Website or other
                Website users, or take other actions otherwise permitted by law.
                In addition, if certain information has already been provided to
                third parties as described in this Privacy Policy, retention of
                that information will be subject to those third parties'
                policies.
              </li>
              <li>
                You can choose not to provide us with certain information;
                however this may result in you being unable to use certain
                features of our Website. Our Website may also deliver
                notifications to your email and/or mobile device. You can
                disable these notifications by changing your Website account
                settings.
              </li>
              <li>
                You are solely liable and responsible for any information you
                provide and/or share using the Website.
              </li>
            </ol>
          </li>
          <li>
            How do we protect your personal information
            <p>
              We adopt reasonable security practices and procedures to help
              safeguard your personal information under our control from
              unauthorized access. However, you acknowledge that no Internet
              transmission or system or server can be 100% secure. Therefore,
              although we take all reasonable steps to secure your personal
              information, we do not promise or guarantee the same, and you
              should not expect that your personal information, or other
              communications while using the Website will always remain secure
              and safeguarded by us. You should always exercise caution while
              providing, sharing or disclosing your personal information using
              the Website.
            </p>
          </li>
          <li>
            Children's Privacy
            <p>
              Although our Website is a general audience Website, we try our
              best to restrict the use of our Website to individuals aged 18
              (eighteen) years and above. We do not knowingly collect, maintain
              or use personal information from children under the age of 18
              (eighteen) years.
            </p>
          </li>
          <li>
            Changes to this Privacy Policy
            <p>
              We may occasionally update this Privacy Policy. When we post
              changes to this Privacy Policy, we will revise the "last updated"
              date. We recommend that you check our Website from time to time to
              keep yourself updated of any changes in this Privacy Policy or any
              of our other Website related terms and policies.
            </p>
          </li>
          <li>
            Grievance Officer
            <p>
              In accordance with Information Technology Act, 2000 and rules made
              there under, the name and contact details of the Grievance Officer
              are provided below:
            </p>
            <ul>
              <li>Name: Kaustubh Pawar</li>
              <li>
                Email:{" "}
                <Link to="mailto:support@ispl-t10.com">
                  support@ispl-t10.com
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li>
            Contact Us :
            <p>
              Please contact us by email on{" "}
              <Link to="mailto:support@ispl-t10.com">support@ispl-t10.com</Link>{" "}
              for any questions or comments regarding these Terms or pertaining
              to the Website.
            </p>
          </li>
        </ol>
        <h4>
          Last Updated on:{" "}
          <strong>
            30<sup>th</sup> November 2023
          </strong>
        </h4>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
