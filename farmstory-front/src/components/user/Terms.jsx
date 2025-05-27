import React, { useEffect, useState } from "react";
import { getTerms } from "../../api/userAPI";

export const Terms = () => {
  const [termsText, setTermsText] = useState("");
  const [privacyText, setPrivacyText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTerms();

        setTermsText(data.terms);
        setPrivacyText(data.privacy);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="terms">
      <h2 className="tit">사이트 이용약관</h2>
      <table border="1">
        <tbody>
          <tr>
            <td>
              <textarea name="terms" value={termsText} readOnly></textarea>
              <label>
                <input type="checkbox" className="terms" />
                &nbsp;동의합니다.
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="tit">개인정보 취급방침</h2>
      <table border="1">
        <tbody>
          <tr>
            <td>
              <textarea name="privacy" value={privacyText} readOnly></textarea>
              <label>
                <input type="checkbox" className="privacy" />
                &nbsp;동의합니다.
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <a href="./login.html" className="btn btnCancel">
          취소
        </a>
        <a href="./register.html" className="btn btnNext">
          다음
        </a>
      </div>
    </section>
  );
};
