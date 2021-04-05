import React from 'react';
import CallHeader from '../components/CallHeader';
import DestinyTips from '../components/DestinyTips';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Buzios from '../assets/buzios-small.jpg';
import Santorini from '../assets/santorini.jpg';
import FDN from '../assets/fdn.jpg';
import Ocean from '../assets/ocean-tree.jpg';

function Destiny() {
  const Text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna elit pretium sed in ac et. Vestibulum vitae sagittis lacus amet leo gravida purus felis, proin. Faucibus maecenas eu, leo purus aenean quis adipiscing aenean. In viverra orci amet tristique proin vel sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna elit pretium sed in ac et. Vestibulum vitae sagittis lacus amet leo gravida purus felis, proin. Faucibus maecenas eu, leo purus aenean quis adipiscing aenean. In viverra orci amet tristique proin vel sed, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna elit pretium sed in ac et. Vestibulum vitae sagittis lacus amet leo gravida purus felis, proin. Faucibus maecenas eu, leo purus aenean quis adipiscing aenean. In viverra orci amet tristique proin vel sed' ;
  return (
    <>
      <Header/>
      <CallHeader
        title={['E SE NOSSA DICA FOR SUA PRÓXIMA', <strong> VIAGEM?</strong>]}
        subtitle={['CONHEÇA AGORA OS LOCAIS MAIS PROCURADOS POR', <strong> TURISTAS</strong>]}
        size={'600px'}
        bg={Ocean}
      />
      <DestinyTips 
        destiny={Buzios}
        title={'BUZIOS'}
        subtitle={'RIO DE JANEIRO, BRASIL'}
        description={Text}
      />
      <DestinyTips 
        destiny={Santorini}
        title={'SANTORINI'}
        subtitle={'MAR EGEU, GRÉCIA'}
        description={Text}
      />
      <DestinyTips 
        destiny={FDN}
        title={'FERNANDO DE NORONHA'}
        subtitle={'PERNAMBUCO, BRASIL'}
        description={Text}
      />
      <Footer />
    </>
  );
}

export default Destiny;