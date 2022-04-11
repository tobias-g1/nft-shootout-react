import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./terms.scss";
import DocumentMeta from "react-document-meta";
import { Content } from "antd/lib/layout/layout";

function TermsPageComponent(props: any) {
  const title: string = "Terms & Conditions";
  const meta: any = {
    title,
    description: "TBA",
    meta: {},
  };

  return (
    <div
      className="page-wrapper"
      style={{ backgroundImage: "url(/assets/img/background.png)" }}
    >
      <DocumentMeta {...meta} />
      <PageHeaderComponent header={title} />
      <Content>
        <div className="text-block">
          <h3>1. Terms</h3>
          <p>
            By accessing the website at{" "}
            <a href="https://quello.io">https://quello.io</a>, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>
          <h3>2. Use Licence</h3>
          <ol type="a">
            <li>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Quello's website for
              personal, non-commercial transitory viewing only. This is the
              grant of a licence, not a transfer of title, and under this
              licence you may not:
              <ol type="i">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on Quello's website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or "mirror" the
                  materials on any other server.
                </li>
              </ol>
            </li>
            <li>
              This licence shall automatically terminate if you violate any of
              these restrictions and may be terminated by Quello at any time.
              Upon terminating your viewing of these materials or upon the
              termination of this licence, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </li>
          </ol>
          <h3>3. Disclaimer</h3>
          <ol type="a">
            <li>
              The materials on Quello's website are provided on an 'as is'
              basis. Quello makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </li>
            <li>
              Further, Quello does not warrant or make any representations
              concerning the accuracy, likely results, or reliability of the use
              of the materials on its website or otherwise relating to such
              materials or on any sites linked to this site.
            </li>
          </ol>
          <h3>4. Limitations</h3>
          <p>
            In no event shall Quello or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on Quello's website, even if Quello or a Quello
            authorised representative has been notified orally or in writing of
            the possibility of such damage. Because some jurisdictions do not
            allow limitations on implied warranties, or limitations of liability
            for consequential or incidental damages, these limitations may not
            apply to you.
          </p>
          <h3>5. Accuracy of materials</h3>
          <p>
            The materials appearing on Quello's website could include technical,
            typographical, or photographic errors. Quello does not warrant that
            any of the materials on its website are accurate, complete or
            current. Quello may make changes to the materials contained on its
            website at any time without notice. However Quello does not make any
            commitment to update the materials.
          </p>
          <h3>6. Links</h3>
          <p>
            Quello has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Quello of the
            site. Use of any such linked website is at the user's own risk.
          </p>
          <h3>7. Modifications</h3>
          <p>
            Quello may revise these terms of service for its website at any time
            without notice. By using this website you are agreeing to be bound
            by the then current version of these terms of service.
          </p>
          <h3>8. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of United Kingdom and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </p>
          <h3>9. Account Creation</h3>
          <p>
            During account creation, in order to prevent abuse & spam a
            verification of your phone number is required. Your data won't be
            used for any other purpose than that. Only one account can be
            created per number provided.
          </p>
          <p>
            In the process of account creation a meta-information will be put
            into your account, which will suggest default beneficiaries when
            creating questions and answers on Quello or any other post on any
            other Hive application.
          </p>
          <p>
            The default beneficiaries meta-information can be changed or removed
            entirely on a blockchain level at any time.
          </p>
          <p>
            The default beneficiaries meta-information proposes sharing a total
            of 5% of your rewards with accounts which referred you, funded the
            operation and provided this service.
          </p>
          <h3>10. Beneficiaries</h3>
          <p>
            Quello may add a beneficiary up to 5% on all questions and answers
            post on quello.io. This doesn't include any beneficiaries added in
            relation to account creation or included within the referral
            program.
          </p>
          <p>
            Quello may revise these terms of service for its website at any time
            without notice. By using this website you are agreeing to be bound
            by the then current version of these terms of service.
          </p>
          <p>Last updated: 17th July 2020</p>
        </div>
      </Content>
    </div>
  );
}

export default TermsPageComponent;
