
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const userLocale = navigator.language || 'en-US';
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const formatter = new Intl.DateTimeFormat(userLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });

          return formatter.format(slatedDate);

          // const day = slatedDate.getDate().toString().padStart(2, "0");
          // const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          // const year = slatedDate.getFullYear();
          // return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(userLocale, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  
      function atomiGetCookie(name) {
        try {
          let cookie = {};
          document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          })
          return cookie[name];
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        
    function atomicatEvent(data) {
      try {
        data.fbp = atomiGetCookie('_fbp');
        data.fbc = atomiGetCookie('_fbc');
        data.pid = document.body.getAttribute('data-page')?.replace("_", "");
        data.uid = document.body.getAttribute('id')?.replace("_", "");
        data.event_id = getAtomiFbEventId();
        const url = 'https://apidopro.atomicat-api.com/track/fb/conversion'
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);
      }
    }
  
        
          atomicatEvent({trigger: "load", pixel: "590327420452468"})
        fbq('trackSingle', '590327420452468', 'PageView', {}, { eventID: getAtomiFbEventId() } )
        
          atomicatEvent({trigger: "load", pixel: "1590239014963184"})
        fbq('trackSingle', '1590239014963184', 'PageView', {}, { eventID: getAtomiFbEventId() } )
        
      } catch (error) {
        console.log(error)
      }
    })();