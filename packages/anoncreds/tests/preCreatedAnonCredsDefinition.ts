import type { AnonCredsSchema, AnonCredsCredentialDefinition } from '../src'
import type { Agent } from '@credo-ts/core'

import {
  AnonCredsCredentialDefinitionRepository,
  AnonCredsCredentialDefinitionRecord,
  AnonCredsCredentialDefinitionPrivateRepository,
  AnonCredsCredentialDefinitionPrivateRecord,
  AnonCredsKeyCorrectnessProofRepository,
  AnonCredsKeyCorrectnessProofRecord,
  AnonCredsSchemaRepository,
  AnonCredsSchemaRecord,
} from '../src'

export interface PreCreatedAnonCredsDefinition {
  issuerId: string
  schemaId: string
  credentialDefinitionId: string
  schema: AnonCredsSchema
  credentialDefinition: AnonCredsCredentialDefinition
  credentialDefinitionPrivate: Record<string, unknown>
  keyCorrectnessProof: Record<string, unknown>
}

export const anoncredsDefinitionFourAttributesNoRevocation = {
  issuerId: 'credo:local',
  schemaId: 'credo:local:schema',
  schema: {
    attrNames: ['name', 'age', 'x-ray', 'profile_picture'],
    issuerId: 'credo:local',
    name: 'Schema Name',
    version: '1.0',
  },
  credentialDefinitionId: 'credo:local:credential-definition',
  credentialDefinition: {
    schemaId: 'credo:local:schema',
    type: 'CL',
    tag: 'tag',
    value: {
      primary: {
        n: '87842344067580909966277408444363440558764291045314580602104423178157687650168574137515783083011596682498205341822521253001991710247346859334528810180859983473791435685332381644914577026991714393041281837694829666531714569304773468184162608774660276917673532378461406279371224896886846757348160147731788770644133959498002831709391509696265005727328463680120246974166261055761394275422694865569909032698710268748570183248323124218946845244915570543716801261678515813121446288449349011867607329497946065954885721231542422629361446815131914336924013877550864220205030969961519116440923889700246952520655194088422125641621',
        s: '69585933262049989531552712771544223829616331466295327156038080298722180189374070456516482840961622801020714723494443598718745756648244383057833250571946737722223613081188606410505601567970530798276213073638873887801576633737868713019853656225867097144558635377369757055840931920709157858725646296685147267826571256007722846364081499274250433775662711717110199314409042413031855249695928954762979834910796160814589353096600506122969291286757421268618838169683166928720905974358968632051252055910993324549284729085615194481093897573541250546454949119655123676361798100569282690584814756985213731833425369900477564979010',
        r: {
          profile_picture:
            '56575128683798674694438915817479505443743253337801397920821780178659644249475525978455616538902613196717576377419185983361806558271595964937588266097198383747557742626643122298452847892849778439106198459852214334460776178227901022491273387950441891641330412827697345769419469610734610488537867845288260941307437489599714625775586367861738296058442092320855137842657268859685095728158784715360154463805698324194129102154806751808438104129971793369492026667323536357562703685229629441284202554058484480214222025106615592167554775568575807508278963155108517731786963397858030485522424658829639677976590390820169869073200',
          'x-ray':
            '4429491840836206101003994233508864012187564382413928818895671069835065680533992160781470074219852773674696334347362459463897817219052750340897702193572499182977701668625398683658991805121424674136311299283016970316544187267054289569198546773215031479482260322544654957142884459184428027854940027752155612590587642516903083262229065472491814384702133496471330486467581778716334335275346258314295575233074657145562994842354594364047727685371274464137633746596641017341209491890389971323547549608198696951588751716542219618047045046922380841088581474440360383774049991712109718443615259751685964351471346156235272121244',
          age: '34464133915990848076172956986942790781564627267163857153755401938865593706180491775035527094432152851977858974574438100253851735462548728758284653574676507290567672357719893117401804649043379260178019838001420596961699582539180381743668120346145550456444068023413485537682825946192917596284529912243176212005565510377698806948449760886743104231020718561242445300457942540103693783088262177855227891113931334056884150062880312049705115476533946093557482787375937331361689485176624207175023697386475938329263586935943665574075798962270178437766379821708316285530080529980490389839947669325266452879229582371214499012612',
          master_secret:
            '38372429610741422406199714249213246366906343751294294829694391582953760720225588703520388344373098717107657040147604613864354784177681288995876048599409914278200777777200222902865497493798844582456490640345000578595600902579455307860530099030170134673330079320158678476576861732706236304285512340355557179781084190373672642598913227538397256170869018401601754146174357843016398178664550573525049099758448789892809123809991955608230329192029689201174442017530466627285120998377323070166778742674557849952740275274425090754321956808458556133902289044636934452616072457362174599696240244163958071489757167161583287933012',
          name: '41014013584868046940700297249654754572274594835779951534978780509396977042415950946284051956455879784546208251194317042990838479458078414271066475371475719632527405306934369332919756609109089802754604614447544303040670620162431770312811111420364343596350095891193740183438610947019059605080151572169544146741323014803750372894372300201338270963588484184290460332439690109198731291013339195198123927997192050560232040532857696388283943458200564285681697989059451816012798203849458951987721802358355697798416266835904531418404697914286845661698786368333652847985082209238280143342495672395631692765298272162995797569740',
        },
        rctxt:
          '16464722301641371206795881649865961791391119369238144262351376759998547325193125958178365261014077529290877201871073338238175718751512634970198926263007056342978990689969456392692111606890857863410151739614242584205255933593176032937508159365740280803585540161311765279412187853100312368091670201051445665979580414179722155511904119291267556670898349452934114060252844746709342947092347639967380788646634895927915396884037865675737326202375569733497988678199054469925503315464827635110290483873502384431508621395360462662144739042917561805592212382743183474314648949079506764741523628476697466886348814972165047593874',
        z: '5086587237066022122592240466639759759197483459008844919556388558833089663388745591506920438478975788937430639765987249898508923678351803973966395842087396772473869807319134567545547452734083776130923170509623388183986706092631690714781941282838024654249896893122657288906270700076463278050469772885634503867932830785454843583497077679797341553636350691461767337121931803370579640775369014088566460120702115889992200717701648077014995999075705835588872372779039259166655013491756409300211842297643755762635305221446843135791869943423621935351723204484939009848795467272824067020396930592203947811218809406908148715719',
      },
    },
    issuerId: 'credo:local',
  } as const,
  credentialDefinitionPrivate: {
    value: {
      p_key: {
        p: '153106379864000571148244129393644359652915648228922865704034717848201257573711975410842249776774340282707070699188357941704419065506879869153368776685089864574213027860744665885495451570312654666553400664817638055640959493090117044573909597544451007424783554709810971978462054687564122167163008486609395189323',
        q: '143433513589715225570424868730460814186295248488418046236140906261945486526592961949317089992204995919813207126151675742651793874217437404477734553450968322381792085701168997166274362068275271480837971411849776482330563165130630493727303434368852578442453996929162141918876892637411876828819200099016338341721',
      },
      r_key: null,
    },
  },
  keyCorrectnessProof: {
    c: '72621053745018163420031916023482785072816409059198217131015916736131767413657',
    xz_cap:
      '850274881578391934591661770499447911869154800148299500263874916050779445823447102668092153433728656375015765761354432219755520089911283859886666553084120210133905470067151388083301645251915026254235638163102175440836675166365116199189847928985785462952520996043755101505464140075542527760998161806736989296142694393573067235176383286326575951725644122034993819063094875012621492390763412422817125174356572029013077801862332805795215683753519579718920477624121202644930350367215214542463800793998640126556548189444688653202497435188567796702113879020747139076602410012948098824390435197929923803354277522109510375297135339425621753996919972568739435217128936644723583682301802635324212980800874',
    xr_cap: [
      [
        'x-ray',
        '1100296278367416126114512007086000487210173672004285027745100265192134765694126348119800071804546191417833683034536597650783498444560501462357858121914203811865896262443584339684237285664028704415483426358202274120021100901360331693230326292769872930453947863205588147511391283413052111942623639754543386209030635141994688312217536019020434243095546229287795946750908911413788650350211962712639212413953123460971905722732358302610201494880492534115487591159817033168864766781293911971682776048128895972688381669965782573233335977210686193312708855557396035067558877812116840533952924116218659976940056925006065917183351521932413688739706531845759800108145273991896265259789151250986616381633223',
      ],
      [
        'name',
        '1151677146096660866229552030352179694035972595978702233335395687975006128403978939413169006246467335399458408482394131802327576122988237637405268441421343190774792801291831329097751565170336068794696772883820209892850219009734815871907725112585278083984281867652458685739586906528980871128998071164801243747269857073422085222151542159127826388237354141299032527656470932267274251023405017003550519552456930893356865784696302301996513660338414169071292078781459119334933746561120664611210295497231397948470931390986914679772196687087522240646219460292074148552770482278355388395737796681110209931199929480806706476777308556698464749631817995690906500982756261833089324624250299274269203350576182',
      ],
      [
        'age',
        '490485849555111356820439691896438489296519861720204752410186712625678203967649200109967435279584870327955651453267624288059390155543267829501248331008678585263675306357830624934178898869634777512470682895534391362729336070049260786094475609562591798306834498553387461357110318139093950991659181990010523915675533751860187808749896829933819117909279010917924695409599480557618560496347703841620915234353355901053204801409130456492624298763824434885338283717904287280072713671539844965263596814324792626092256082253290381738006043522929067906193260006532376530286161685137964855828105499752570878571791182869523102057556030682287740260687838931733614377639874207845451747064495433207201653436715',
      ],
      [
        'master_secret',
        '1318990044998363713649979253597193456453512785324186865141988049557895679782044929876662884599903069485547717612091908694136951560866463941672407934301199186282931811123963068701617563429544022224055681047519232144418208799948967337304668359638698743414280448724794600856698091905123534218737499559671809012990700276270677528238440369911518651808138160431877863981128424537730654234049052437112784605883147588845015206335914422630545340954573816850852796391448853146860525197976441360984340677756102030083690859325863848596316176884255652393746688428251045270549704171014813881851678909934504072584622734014858589268155080014295398398457298272419060536229446589951707101217585014491428076518636',
      ],
      [
        'profile_picture',
        '626128909514031861048611274299543488396178512804450237734576430023887274743970983888968738560062281447232501644235732190657881416295947662076218443595968416492300135536820604684825587002869836933465348240667269380721505682854695936658536043347142984963045658919215661548340875420653437468343448949143330848700282622905251500903165366616989093528387548421898172630311164792908296732119373995492469657592915994374916970385323733879692921481867888839992919173543562249790190392930924209699652327647797204082384416540630932657082008347095070625889215957989868906105233598674999715503418316871508439518805591147670972038744125173028393048388065281173594232476773594862090167445272672533232951411418',
      ],
    ],
  },
} satisfies PreCreatedAnonCredsDefinition

export async function storePreCreatedAnonCredsDefinition(
  agent: Agent,
  preCreatedDefinition: PreCreatedAnonCredsDefinition
) {
  const anoncredsCredentialDefinitionRepository = agent.context.dependencyManager.resolve(
    AnonCredsCredentialDefinitionRepository
  )
  await anoncredsCredentialDefinitionRepository.save(
    agent.context,
    new AnonCredsCredentialDefinitionRecord({
      credentialDefinitionId: preCreatedDefinition.credentialDefinitionId,
      credentialDefinition: preCreatedDefinition.credentialDefinition,
      methodName: 'local',
    })
  )

  const anoncredsCredentialDefinitionPrivateRepository = agent.context.dependencyManager.resolve(
    AnonCredsCredentialDefinitionPrivateRepository
  )
  await anoncredsCredentialDefinitionPrivateRepository.save(
    agent.context,
    new AnonCredsCredentialDefinitionPrivateRecord({
      credentialDefinitionId: preCreatedDefinition.credentialDefinitionId,
      value: preCreatedDefinition.credentialDefinitionPrivate,
    })
  )

  const anonCredsKeyCorrectnessProofRepository = agent.context.dependencyManager.resolve(
    AnonCredsKeyCorrectnessProofRepository
  )
  await anonCredsKeyCorrectnessProofRepository.save(
    agent.context,
    new AnonCredsKeyCorrectnessProofRecord({
      credentialDefinitionId: preCreatedDefinition.credentialDefinitionId,
      value: preCreatedDefinition.keyCorrectnessProof,
    })
  )

  const anonCredsSchemaRepository = agent.context.dependencyManager.resolve(AnonCredsSchemaRepository)
  await anonCredsSchemaRepository.save(
    agent.context,
    new AnonCredsSchemaRecord({
      methodName: 'local',
      schema: preCreatedDefinition.schema,
      schemaId: preCreatedDefinition.schemaId,
    })
  )

  return {
    issuerId: preCreatedDefinition.issuerId,
    schemaId: preCreatedDefinition.schemaId,
    credentialDefinitionId: preCreatedDefinition.credentialDefinitionId,
  }
}