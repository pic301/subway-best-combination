import React, {  useEffect, useCallback, useRef } from 'react';

const DaumPostcode =(props) => {
  const {
    onComplete,
    autoMapping,
    defaultQuery,
    maxSuggestItems,
    shorthand,
    showMoreHName,
    submitMode,
    useSuggest,
    width,
    ...rest
  } = props;


  const postcodeEl = useRef(null);

  const initiate = useCallback(
    (refEl) => {
      const Postcode = new window.daum.Postcode({
        oncomplete: function oncomplete(data) {
          handleData(data);
        },
        autoMapping,
        maxSuggestItems,
        shorthand,
        submitMode,
        useSuggest,
        width,
      });
      
      Postcode.embed(refEl, { q: defaultQuery,autoClose: false 
       
    });
    },
    [
      autoMapping,
      maxSuggestItems,
      shorthand,
      submitMode,
      useSuggest,
      width,
    ],
    
  );
  const handleData = data => {

  };

  useEffect(() => {
    const scriptId = 'daum_postcode_script';
    
      initiate(postcodeEl.current);
    
  }, [initiate]);
  return (
    <div
      ref={postcodeEl}
    >
    </div>
  );
}
export default DaumPostcode;

DaumPostcode.defaultProps = {
  autoMapping: true,
  maxSuggestItems: 10,
  shorthand: true,
  submitMode: true,
  useSuggest: true,
  width: '100%',
};
