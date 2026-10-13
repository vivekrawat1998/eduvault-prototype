import { h as __h, render as __render } from './preact.module.js';
const __S = (x) => (x === undefined || x === null || x === false ? '' : String(x));
const __T = (x) => !!x && !(Array.isArray(x) && x.length === 0);
class DCLogic { constructor(props) { this.props = props || {}; this.state = {}; } setState(o) { const n = typeof o === 'function' ? o(this.state) : o; Object.assign(this.state, n); schedule(); } }
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = Component.fresh();
  }
  static defaultRates() {
    return { 'Partner A': { Retail: { tui: 2500, exam: 1200 }, Electrical: { tui: 2700, exam: 1300 }, Hospitality: { tui: 2300, exam: 1100 } }, 'Partner B': { Logistics: { tui: 2200, exam: 1000 }, BFSI: { tui: 3000, exam: 1500 } }, 'Partner C': { Hospitality: { tui: 2800, exam: 1500 } }, 'Partner E': { Healthcare: { tui: 3200, exam: 1600 } } };
  }
  static fresh() {
    return {
      invoices: [
        { id: 'INV-2026-09-027', partner: 'Partner C', industry: 'Hospitality', arrAuto: true, rates: { Hospitality: { tui: 2800, exam: 1500 } }, from: 2, to: 2, heads: ['tui', 'exam'], issued: '16 Sep 2026', due: '1 Oct 2026', batches: ['STF-FNB-B09'], regs: null, overdue: true, tranches: [{ amt: 4000, date: '5 Oct 2026', utr: 'SBIN0044120', by: 'Partner C', status: 'recorded', named: [] }] },
        { id: 'INV-2026-09-031', partner: 'Partner B', industry: 'Logistics', arrAuto: true, rates: { Logistics: { tui: 2200, exam: 1000 } }, from: 2, to: 2, heads: ['tui', 'exam'], issued: '26 Sep 2026', due: '26 Oct 2026', batches: ['STF-WHS-B12'], regs: null, overdue: false, tranches: [{ amt: 15000, date: '28 Sep 2026', utr: 'ICIC0092811', by: 'Fees team', status: 'confirmed', named: [] }, { amt: 4400, date: '2 Oct 2026', utr: 'ICIC0093140', by: 'Fees team', status: 'confirmed', named: [] }, { amt: 6000, date: '5 Oct 2026', utr: 'ICIC0093377', by: 'Partner B', status: 'recorded', named: [] }] },
        { id: 'INV-2026-09-032', partner: 'Partner B', industry: 'BFSI', arrAuto: true, rates: { BFSI: { tui: 3000, exam: 1500 } }, from: 2, to: 2, heads: ['tui', 'exam'], issued: '26 Sep 2026', due: '26 Oct 2026', batches: ['SEC-BFSI-07'], regs: null, overdue: false, tranches: [{ amt: 6000, date: '30 Sep 2026', utr: 'ICIC0092990', by: 'Fees team', status: 'confirmed', named: [] }] }
      ],
      rates: Component.defaultRates(), ratePartner: 'Partner A', partnerInd: {},
      wz: null, invId: '', invFilter: 'all', payOpen: false, pay: { amt: '', date: '2026-10-06', utr: '', mode: 'priority', named: {} }, reminded: {}, allInv: false, headsOpen: false,
      calTab: 'due', prog: {}, mk: {}, rsub: 'FNB101', req: {}, screen: 'dashboard', cycleId: 'c1', tab: 'overview', role: 'assessment', stu: null, started: {}, corrected: {}, escalated: false, currReq: false, modes: {}, invSel: {}, invConf: {}, dateFixed: false, schedShared: false, notice: 0, dispatched: false, proc: true, viva: false, room: false, omr: false, grace: {}, res: 0, v1: false, v2: false, shipped: false, redo: {} };
  }
  renderVals() {
    const S = this.state;
    const set = (o) => this.setState(o);
    const G = '#1D5546', GT = '#E3EEE9', O = '#8A420A', OT = '#FBEEDF', B = '#1F4A8F', BT = '#E6EDF9', MUT = '#56605B', NT = '#EEEFEC';
    const pill = (bg, fg) => 'display:inline-block;background:' + bg + ';color:' + fg + ';padding:2px 10px;border-radius:99px;font-size:13px;font-weight:600;white-space:nowrap';
    const ok = pill(GT, G), bad = pill(OT, O), rev = pill(BT, B), neu = pill(NT, '#3D4642');
    const chip = (on) => 'min-height:40px;padding:0 14px;border-radius:99px;font-size:14px;font-weight:500;border:1px solid ' + (on ? G : '#C9CFC8') + ';background:' + (on ? G : '#FFFFFF') + ';color:' + (on ? '#FFFFFF' : '#18201D');
    const seg = (on) => 'min-height:36px;padding:0 12px;border:0;font-size:13px;font-weight:600;background:' + (on ? G : '#FFFFFF') + ';color:' + (on ? '#FFFFFF' : '#3D4642');
    const dotS = (c) => 'width:10px;height:10px;border-radius:50%;flex:none;background:' + c;
    const numDot = (st) => 'width:26px;height:26px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex:none;' + (st === 'done' ? 'background:' + G + ';color:#FFFFFF' : (st === 'cur' ? 'background:#2456A4;color:#FFFFFF' : 'background:#FFFFFF;color:' + MUT + ';border:1.5px solid #C9CFC8'));

    // 23 steps: [name, owner, phase, tab]
    const steps = [
      ['Due date and partner availability', 'Assessment team sets due date; partner confirms', 'pre', 'overview'],
      ['Curriculum in LMS and credits', 'Assessment team, flags to Academic', 'pre', 'curr'],
      ['Question paper availability', 'Assessment + Content team', 'pre', 'curr'],
      ['Fees: invoice and payments', 'Finance team bills the partner', 'pre', 'fees'],
      ['Learner data and Reg No', 'Program + Exam team, KAM approves fixes', 'pre', 'learner'],
      ['Mode of examination', 'Program team, per subject', 'pre', 'curr'],
      ['Invigilator or trainer', 'Program team', 'pre', 'sched'],
      ['Schedule subjects on partner date', 'Assessment team', 'pre', 'sched'],
      ['Generate and sign notice', 'Assessment team to Program team', 'pre', 'notice'],
      ['Exam material by mode', 'Assessment + LMS team', 'pre', 'notice'],
      ['OJL skill test and viva', 'Assessment / invigilator, if required', 'exam', 'day'],
      ['Exam room photo', 'Invigilator, required', 'exam', 'day'],
      ['Attendance sheet photo', 'Invigilator, no deadline', 'exam', 'day'],
      ['OMR sheets returned', 'Invigilator + Logistics', 'exam', 'day'],
      ['Evaluate CWA, internal, viva', 'Assessment team', 'post', 'results'],
      ['Tabulated result', 'Assessment team', 'post', 'results'],
      ['Apply grace marks', 'Assessment team, COE decides', 'post', 'results'],
      ['Board verification', 'Board / Academic team', 'post', 'results'],
      ['Publish secure PDF', 'Assessment team', 'post', 'results'],
      ['Marksheet in TrueScholar', 'Assessment team', 'post', 'marks'],
      ['Verify twice and approve', 'Assessment + Board', 'post', 'marks'],
      ['Print and courier', 'Assessment + Logistics', 'post', 'marks'],
      ['Track delivery and returns', 'Assessment + Logistics', 'post', 'marks']
    ];
    const phaseName = { pre: 'Pre-examination', exam: 'Examination', post: 'Post-examination' };
    const vColor = { 'Staffing': [GT, G], 'Sectoral': [BT, B], 'College Campus': [OT, O] };

    const base = [
      { id: 'c1', code: 'STF-RSA-B47', title: 'Retail Sales Associate, Sem 2', batch: 'RSA-B47', vertical: 'Staffing', partner: 'Partner A', location: 'Pune', students: 312, window: '', due: '18 Oct 2026', examDate: '20 to 24 Oct 2026', feeBy: '13 Oct 2026', stage: 8, ojl: true },
      { id: 'c2', code: 'STF-WHS-B12', title: 'Warehouse Associate, Sem 1', batch: 'WHS-B12', vertical: 'Staffing', partner: 'Partner B', location: 'Gurugram', students: 540, window: '', due: '1 Nov 2026', examDate: '4 to 6 Nov 2026', feeBy: '28 Oct 2026', stage: 1, ojl: true },
      { id: 'c3', code: 'SEC-BFSI-07', title: 'BFSI Customer Care, Sem 1', batch: 'BFSI-07', vertical: 'Sectoral', partner: 'Partner B', location: 'Online', students: 180, window: '', due: '8 Oct 2026', examDate: '10 Oct 2026', feeBy: '3 Oct 2026', stage: 9, ojl: false },
      { id: 'c4', code: 'CC-BBA-S3', title: 'BBA, Sem 3', batch: 'BBA-2025-S3', vertical: 'College Campus', partner: 'Medhavi campus', location: 'Campus', students: 420, window: '', due: '5 Oct 2026', examDate: '6 Oct 2026', feeBy: '29 Sep 2026', stage: 12, ojl: false },
      { id: 'c5', code: 'STF-FNB-B09', title: 'F&B Steward, Sem 2', batch: 'FNB-B09', vertical: 'Staffing', partner: 'Partner C', location: 'Bengaluru', students: 96, window: '', due: '15 Sep 2026', examDate: '24 Sep 2026', feeBy: '17 Sep 2026', stage: 14, ojl: true },
      { id: 'c6', code: 'STF-HKP-B05', title: 'Housekeeping Associate, Sem 2', batch: 'HKP-B05', vertical: 'Staffing', partner: 'Partner A', location: 'Hyderabad', students: 128, window: '', due: '1 Sep 2026', examDate: '3 Sep 2026', feeBy: '27 Aug 2026', stage: 20, ojl: true }
    ];
    const cal = [
      { batch: 'STF-ELE-B03', vertical: 'Staffing', program: 'Electrician Assistant, Sem 1', due: '2 Nov 2026', students: 210, init: 0, proposed: '9 to 11 Nov 2026', shift: 'Moved 7 days later' },
      { batch: 'STF-RSA-B52', vertical: 'Staffing', program: 'Retail Sales Associate, Sem 1', due: '6 Nov 2026', students: 186, init: 0, proposed: '6 Nov 2026', shift: 'Same as due date' },
      { batch: 'SEC-RET-04', vertical: 'Sectoral', program: 'Retail Supervisor, Sem 2', due: '20 Nov 2026', students: 140, init: 0, proposed: '25 to 27 Nov 2026', shift: 'Moved 5 days later' },
      { batch: 'STF-WHS-B12', vertical: 'Staffing', program: 'Warehouse Associate, Sem 1', due: '1 Nov 2026', students: 540, init: 4, sent: '15 Sep', proposed: '4 to 6 Nov 2026', shift: 'Moved 3 days later', cycle: 'c2' }
    ];
    const reqOf = (b) => (S.req[b.batch] !== undefined ? S.req[b.batch] : b.init);
    const extra = cal.filter((b) => reqOf(b) === 4 && !b.cycle).map((b, i) => ({ id: 'n' + i, code: b.batch, title: b.program, batch: b.batch, vertical: b.vertical, partner: '[Partner]', location: '[Location]', students: b.students, window: '', due: b.due, examDate: 'Awaiting partner', feeBy: '7 days before exam', stage: 0, ojl: b.vertical === 'Staffing' }));
    const all = base.concat(extra).map((c0) => {
      const c = Object.assign({}, c0, { stage: S.prog[c0.id] !== undefined ? S.prog[c0.id] : c0.stage });
      const si = Math.min(c.stage, 22);
      const vc = vColor[c.vertical];
      return Object.assign({}, c, {
        stepNo: c.stage >= 23 ? 23 : c.stage + 1, stepName: c.stage >= 23 ? 'All steps complete' : steps[si][0], phase: c.stage >= 23 ? 'Complete' : phaseName[steps[si][2]],
        vStyle: pill(vc[0], vc[1]), phaseStyle: rev,
        ojlLabel: c.ojl ? 'Required' : 'Not required', noOjl: !c.ojl,
        barStyle: 'height:6px;border-radius:99px;background:' + G + ';width:' + Math.min(100, Math.round((c.stage + 1) / 23 * 100)) + '%',
        open: () => set({ screen: 'cycle', cycleId: c.id, tab: 'overview', stu: null })
      });
    });
    const cy = all.find((c) => c.id === S.cycleId) || all[0];
    const goCycle = (id, tab) => () => set({ screen: 'cycle', cycleId: id, tab: tab, stu: null });
    const go = (screen) => () => set({ screen: screen });

    // Nav
    const icons = {
      dashboard: 'M3 12l9-8 9 8M5 10v10h14V10', calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
      cycles: 'M4 5h16M4 12h16M4 19h10', elig: 'M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z',
      papers: 'M6 3h9l4 4v14H6zM9 12h6M9 16h6', day: 'M4 7h4l2-3h4l2 3h4v12H4zM12 16a3 3 0 100-6 3 3 0 000 6',
      results: 'M5 20V10M12 20V4M19 20v-7', fees: 'M4 6h16v12H4zM4 10h16M8 15h3', feesNew: 'M12 5v14M5 12h14', cfees: 'M7 4h10v16H7zM10 8h4M10 12h4', marks: 'M4 4h16v16H4zM8 9h8M8 13h5M14 17l2 2 4-4'
    };
    const nav = [
      { label: 'Overview', items: [['dashboard', 'Dashboard', go('dashboard')], ['calendar', 'Exam calendar', go('calendar'), 3]] },
      { label: 'Examination', items: [['cycles', 'Exam cycles', go('cycles')], ['papers', 'Curriculum and papers', goCycle('c1', 'curr')], ['cfees', 'Batch fee status', goCycle('c1', 'fees')], ['elig', 'Learner data', goCycle('c1', 'learner'), 2], ['day', 'Exam day evidence', goCycle('c4', 'day'), 1]] },
      { label: 'Fees', items: [['fees', 'Partner fees', go('fees'), 2], ['feesNew', 'Create invoice', () => set({ screen: 'invNew', wz: null })]] },
      { label: 'Results', items: [['results', 'Results and grace', goCycle('c5', 'results')], ['marks', 'Marksheets and dispatch', goCycle('c6', 'marks')]] }
    ];
    const tabNav = { learner: 'elig', fees: 'cfees', curr: 'papers', day: 'day', results: 'results', marks: 'marks' };
    const activeNav = S.screen === 'cycle' ? (tabNav[S.tab] || 'cycles') : (S.screen === 'invNew' ? 'feesNew' : (S.screen === 'inv' ? 'fees' : S.screen));
    const navGroups = nav.map((g) => ({ label: g.label, items: g.items.map((it) => ({
      label: it[1], d: icons[it[0]], pick: it[2], hasCount: !!it[3], count: it[3],
      style: 'display:flex;align-items:center;gap:10px;width:100%;min-height:42px;padding:0 10px;border:0;border-radius:8px;font-size:14px;' + (activeNav === it[0] ? 'background:' + GT + ';color:' + G + ';font-weight:600' : 'background:transparent;color:#2B3430;font-weight:500')
    })) }));

    // Dashboard
    const roleDefs = [['assessment', 'Assessment'], ['program', 'Program'], ['finance', 'Admission and Finance'], ['content', 'Content and LMS'], ['logistics', 'Invigilator and Logistics'], ['board', 'Board and COE']];
    const roles = roleDefs.map((r) => ({ label: r[1], pick: () => set({ role: r[0] }), style: chip(S.role === r[0]) }));
    const roleLabel = roleDefs.find((r) => r[0] === S.role)[1];
    const T = {
      assessment: [
        ['Generate and sign the exam notice', 'STF-RSA-B47, steps 2 to 8 complete', 'Open notice', goCycle('c1', 'notice'), '#A9530F'],
        ['Start exam cycles for 3 batches', 'Exam calendar: due dates from 2 Nov 2026', 'Open calendar', go('calendar'), '#A9530F'],
        ['Apply grace marks and send to board', 'STF-FNB-B09, tabulation ready', 'Open results', goCycle('c5', 'results'), '#2456A4'],
        ['Record courier dispatch for exam material', 'SEC-BFSI-07 and STF-RSA-B47', 'Open material', goCycle('c1', 'notice'), '#2456A4']
      ],
      program: [
        ['Approve 2 learner data corrections', 'STF-RSA-B47, DOB and father name mismatches', 'Review', goCycle('c1', 'learner'), '#A9530F'],
        ['Confirm invigilator for Chakan site', 'STF-RSA-B47, 152 students', 'Open', goCycle('c1', 'sched'), '#2456A4'],
        ['Confirm exam mode per subject', 'STF-WHS-B12, 6 subjects', 'Open cycle', goCycle('c2', 'overview'), '#2456A4']
      ],
      finance: [
        ['Invoice Partner A for unpaid fees', 'Retail, Electrical and Hospitality: one invoice per industry', 'Create invoice', () => set({ screen: 'invNew', wz: null }), '#A9530F'],
        ['Verify 2 payments recorded by partners', 'Partner B and Partner C invoices', 'Open fees', go('fees'), '#A9530F'],
        ['1 student without Reg No (FAL pending)', 'STF-RSA-B47, documents incomplete', 'Review', goCycle('c1', 'learner'), '#A9530F'],
        ['Partner C invoice is overdue', 'INV-2026-09-027, due 1 Oct 2026', 'Open invoice', () => set({ screen: 'inv', invId: 'INV-2026-09-027', payOpen: false, invFilter: 'all' }), '#2456A4']
      ],
      content: [
        ['Upload question paper for RSA104', 'Point of sale and billing, exam 24 Oct', 'Open papers', goCycle('c1', 'curr'), '#A9530F'],
        ['Configure online exam in LMS', 'STF-RSA-B47, RSA104 online with AI proctoring', 'Open', goCycle('c1', 'notice'), '#2456A4']
      ],
      logistics: [
        ['Upload exam room photo for Hall B', 'CC-BBA-S3, required before results', 'Open', goCycle('c4', 'day'), '#A9530F'],
        ['Reconcile OMR return for Hall B', 'CC-BBA-S3, 208 of 210 received', 'Open', goCycle('c4', 'day'), '#A9530F'],
        ['Re-dispatch returned marksheet', 'STF-HKP-B05, address incomplete', 'Open', goCycle('c6', 'marks'), '#2456A4']
      ],
      board: [
        ['Verify FNB-B09 results', 'Arrives after grace marks are applied', 'Open results', goCycle('c5', 'results'), '#2456A4'],
        ['Second verification of marksheets', 'STF-HKP-B05, 128 marksheets', 'Open', goCycle('c6', 'marks'), '#A9530F']
      ]
    };
    const tasks = T[S.role].map((t) => ({ title: t[0], meta: t[1], cta: t[2], go: t[3], dotStyle: dotS(t[4]) }));
    const pipeline = [
      { label: 'Pre-examination', count: all.filter((c) => c.stage <= 9).length, hint: 'Steps 1 to 10' },
      { label: 'Examination', count: all.filter((c) => c.stage >= 10 && c.stage <= 13).length, hint: 'Steps 11 to 14' },
      { label: 'Post-examination', count: all.filter((c) => c.stage >= 14).length, hint: 'Steps 15 to 23' }
    ];

    // Calendar
    const calRows = cal.map((b) => {
      const r = reqOf(b);
      const ex = all.find((c) => c.code === b.batch || c.id === b.cycle);
      return {
        batch: b.batch, program: b.program, students: b.students, due: b.due,
        reqLabel: ['Not asked yet', 'Awaiting partner reply', 'Partner proposed a date', 'Rescheduled', 'Rescheduled'][r],
        reqStyle: [neu, bad, rev, ok, ok][r],
        reqNote: r === 0 ? 'Ask before planning the cycle' : (r === 1 ? 'Request sent ' + (b.sent || 'today') : 'Partner: ' + b.proposed),
        examDate: r >= 3 ? b.proposed : (r === 2 ? b.proposed + ' (proposed)' : b.due + ' (due date)'),
        shift: r >= 2 ? b.shift : 'Tentative until partner confirms',
        hasAction: r < 4, isStarted: r === 4,
        cta: ['', 'Record partner reply', 'Reschedule to partner date', 'Start exam cycle'][Math.min(r, 3)],
        act: () => set({ req: Object.assign({}, S.req, { [b.batch]: 4 }) }),
        openCycle: ex ? ex.open : () => {}
      };
    });

    // Calendar views
    const dkey = (c) => { const m = /(\d+)(?: to \d+)? (\w{3}) (\d{4})/.exec(c.examDate) || /(\d+) (\w{3}) (\d{4})/.exec(c.due); if (!m) return 0; return Number(m[3]) * 10000 + ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(m[2]) * 100 + Number(m[1]); };
    const upcoming = all.filter((c) => c.stage < 10).sort((x, y) => dkey(x) - dkey(y));
    const conducted = all.filter((c) => c.stage >= 10).sort((x, y) => dkey(y) - dkey(x));
    const dueCount = calRows.filter((r) => r.hasAction).length;
    const ct = S.calTab || 'due';
    const calTabs = [['due', 'Due dates', dueCount], ['up', 'Upcoming exams', upcoming.length], ['done', 'Conducted exams', conducted.length]].map((t) => {
      const on = ct === t[0];
      return { label: t[1], count: t[2], active: on ? 'true' : 'false', pick: () => set({ calTab: t[0] }), countStyle: 'margin-left:6px;font-size:12px;font-weight:700;border-radius:99px;padding:1px 8px;background:' + (on ? GT : NT) + ';color:' + (on ? G : '#3D4642'), style: 'min-height:44px;padding:0 14px;border:0;background:transparent;font-size:14px;margin-bottom:-1px;border-bottom:2px solid ' + (on ? G : 'transparent') + ';color:' + (on ? G : '#3D4642') + ';font-weight:' + (on ? '700' : '500') };
    });
    const listSrc = ct === 'up' ? upcoming : conducted;
    const calExams = listSrc.map((c) => {
      let pill, ps;
      if (ct === 'up') { const notReady = c.stage < 9; pill = c.examDate === 'Awaiting partner' ? 'Date awaiting partner' : (notReady ? 'Preparing' : 'Ready for exam'); ps = notReady ? rev : ok; }
      else { const fin = c.stage >= 23; const res = c.stage >= 19; pill = fin ? 'Marksheets delivered' : (res ? 'Result published' : (c.stage >= 14 ? 'Result in progress' : 'Evidence pending')); ps = fin || res ? ok : rev; }
      return { code: c.code, title: c.title, examDate: c.examDate, due: c.due, location: c.location, students: c.students, stepNo: c.stepNo, stepName: c.stepName, pill: pill, pillStyle: ps, open: c.open };
    });

    // Tabs and locks
    const tabDefs = [['overview', 'Stages', 0], ['curr', 'Curriculum and papers', 1], ['fees', 'Fees', 3], ['learner', 'Learner data', 4], ['sched', 'Invigilator and schedule', 6], ['notice', 'Notice and material', 8], ['day', 'Exam day', 10], ['results', 'Results', 14], ['marks', 'Marksheets', 19]];
    const tabs = tabDefs.map((t) => {
      const on = S.tab === t[0], open = cy.stage >= t[2];
      return { label: t[1], active: on ? 'true' : 'false', pick: () => set({ tab: t[0] }), style: 'min-height:44px;padding:0 12px;border:0;background:transparent;font-size:14px;margin-bottom:-1px;border-bottom:2px solid ' + (on ? G : 'transparent') + ';color:' + (on ? G : (open ? '#3D4642' : '#7A837E')) + ';font-weight:' + (on ? '700' : '500') };
    });
    const curTab = tabDefs.find((t) => t[0] === S.tab) || tabDefs[0];
    const isOpen = cy.stage >= curTab[2];
    const example = { fees: 'c1', learner: 'c1', curr: 'c1', sched: 'c1', notice: 'c1', day: 'c4', results: 'c5', marks: 'c6' };
    const exId = example[S.tab] || 'c1';
    const exCy = all.find((c) => c.id === exId);
    const lock = { step: curTab[2] + 1, cycle: exCy.code, go: goCycle(exId, S.tab) };
    const show = (k) => S.screen === 'cycle' && S.tab === k && isOpen;

    // Stages tab
    const phases = ['pre', 'exam', 'post'].map((p) => {
      const list = [];
      steps.forEach((s, i) => {
        if (s[2] !== p) return;
        const na = i === 10 && !cy.ojl;
        const done = i < cy.stage, cur = i === cy.stage;
        const st = na ? 'na' : (done ? 'done' : (cur ? 'cur' : 'todo'));
        list.push({
          name: s[0], owner: s[1], mark: st === 'done' ? '✓' : String(i + 1),
          status: { na: 'Not needed', done: 'Done', cur: 'In progress', todo: 'Not started' }[st],
          chipStyle: st === 'done' ? ok : (st === 'cur' ? rev : neu),
          nameStyle: 'display:block;font-weight:' + (cur ? '700' : '600'),
          dotStyle: numDot(st === 'na' ? 'todo' : st),
          go: () => set({ tab: s[3] })
        });
      });
      const first = steps.findIndex((s) => s[2] === p) + 1;
      return { label: phaseName[p], range: first + ' to ' + (first + list.length - 1), steps: list };
    });

    // ===== Fees engine =====
    const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
    const MON = ['Jul', 'Aug', 'Sep', 'Oct'];
    const HEADS = [['tui', 'Tuition fee', 2500, 'per month', 'per student-month'], ['exam', 'Examination fee', 1200, 'per semester', 'per student']];
    const headById = {}; HEADS.forEach((h) => { headById[h[0]] = h; });
    const FB = [
      { code: 'STF-RSA-B47', industry: 'Retail', program: 'Retail Sales Associate', sem: 2, partner: 'Partner A', active: true, ex: 1, st: [['Anjali Kumari', 'MSU/RSA/26/0318', ['Jul', 'Aug', 'Sep', 'Oct']], ['Deepak Yadav', 'MSU/RSA/26/0331', ['Sep', 'Oct']], ['Imran Khan', 'MSU/RSA/26/0342', ['Oct'], { arr: ['Mar', 'Apr'], gap: 'May to Jun 2026', rejoined: 'Jul 2026' }], ['Kavya Nair', 'MSU/RSA/26/0336', ['Oct']], ['Priya Sharma', 'MSU/RSA/26/0311', []]] },
      { code: 'STF-RSA-B52', industry: 'Retail', program: 'Retail Sales Associate', sem: 1, partner: 'Partner A', active: true, ex: 2, st: [['Ritu Mehra', 'MSU/RSA/26/0501', ['Sep', 'Oct'], { arr: ['Feb', 'Mar', 'Apr', 'May'], gap: 'Jun to Aug 2026', rejoined: 'Sep 2026' }], ['Arjun Kapoor', 'MSU/RSA/26/0502', ['Sep', 'Oct']], ['Neha Singh', 'MSU/RSA/26/0503', ['Oct']], ['Farhan Ali', 'MSU/RSA/26/0504', ['Oct']], ['Tanya Bose', 'MSU/RSA/26/0505', []]] },
      { code: 'STF-ELE-B03', industry: 'Electrical', program: 'Electrician Assistant', sem: 1, partner: 'Partner A', active: true, ex: 3, st: [['Sunil Thakur', 'MSU/ELE/26/0101', ['Sep', 'Oct']], ['Gaurav Pal', 'MSU/ELE/26/0102', ['Oct'], { arr: ['May', 'Jun'] }], ['Ajay Rawat', 'MSU/ELE/26/0103', ['Oct']], ['Mohan Lal', 'MSU/ELE/26/0104', []]] },
      { code: 'STF-HKP-B05', industry: 'Hospitality', program: 'Housekeeping Associate', sem: 2, partner: 'Partner A', active: true, ex: 4, st: [['Meena L.', 'MSU/HKP/26/0021', ['Aug', 'Sep', 'Oct']], ['Anita G.', 'MSU/HKP/26/0012', ['Oct']], ['Ravi P.', 'MSU/HKP/26/0015', []]] },
      { code: 'STF-RSA-B41', industry: 'Retail', program: 'Retail Operations', sem: 3, partner: 'Partner A', active: true, ex: 5, st: [['Pallavi Rao', 'MSU/RSA/25/0141', []], ['Kunal Shah', 'MSU/RSA/25/0142', []]] },
      { code: 'STF-RSA-B30', industry: 'Retail', program: 'Retail Operations', sem: 6, partner: 'Partner A', active: false, ex: 6, st: [] },
      { code: 'STF-WHS-B12', industry: 'Logistics', program: 'Warehouse Associate', sem: 1, partner: 'Partner B', active: true, ex: 2, st: [['Vikas Rana', 'MSU/WHS/26/0201', ['Jul', 'Aug', 'Sep']], ['Sonia Dutta', 'MSU/WHS/26/0202', ['Aug', 'Sep']], ['Manish Tiwari', 'MSU/WHS/26/0203', ['Sep']], ['Rekha Jha', 'MSU/WHS/26/0204', ['Jul', 'Aug', 'Sep']]] },
      { code: 'SEC-BFSI-07', industry: 'BFSI', program: 'BFSI Customer Care', sem: 1, partner: 'Partner B', active: true, ex: 1, st: [['Alok Mishra', 'MSU/BFS/26/0301', ['Aug', 'Sep']], ['Shruti Das', 'MSU/BFS/26/0302', ['Sep']]] },
      { code: 'STF-FNB-B09', industry: 'Hospitality', program: 'F&B Steward', sem: 2, partner: 'Partner C', active: true, ex: 3, st: [['Suresh B.', 'MSU/FNB/26/0041', ['Aug', 'Sep']], ['Lakshmi R.', 'MSU/FNB/26/0042', ['Sep']], ['Arjun M.', 'MSU/FNB/26/0070', ['Aug', 'Sep']], ['Pooja T.', 'MSU/FNB/26/0074', ['Aug', 'Sep']]] }
    ];
    // generated sample data: a large partner (about 600 students) to test scale
    (() => {
      const FN = ['Aarav', 'Diya', 'Rohan', 'Sneha', 'Meera', 'Priya', 'Karan', 'Vikram', 'Pooja', 'Aman', 'Rahul', 'Kavya', 'Sameer', 'Nisha', 'Arjun', 'Ishita', 'Manav', 'Ritika', 'Yash', 'Simran', 'Harsh', 'Anika', 'Dev', 'Tanvi', 'Kunal', 'Riya', 'Aditya', 'Sakshi', 'Varun', 'Neha'];
      const LN = ['Sharma', 'Patel', 'Das', 'Kumari', 'Iyer', 'Nair', 'Mehta', 'Singh', 'Yadav', 'Gupta', 'Verma', 'Reddy', 'Jain', 'Khan', 'Joshi', 'Rao', 'Bose', 'Pillai', 'Chauhan', 'Mishra'];
      for (let k = 0; k < 12; k++) {
        const st = [];
        for (let j = 0; j < 50; j++) {
          const i = k * 50 + j;
          const dues = i % 9 === 0 ? ['Jul', 'Aug', 'Sep', 'Oct'] : (i % 4 === 0 ? ['Sep', 'Oct'] : (i % 3 === 0 || i % 10 === 1 ? ['Oct'] : []));
          const row = [FN[i % 30] + ' ' + LN[(i * 7 + k) % 20], 'MSU/RSA/26/' + (2000 + i), dues];
          if (i % 17 === 0) row.push({ arr: ['Apr', 'May'], gap: 'Jun 2026', rejoined: 'Jul 2026' });
          st.push(row);
        }
        FB.push({ code: 'STF-RSA-B' + (60 + k), industry: 'Retail', program: k % 2 ? 'Retail Operations' : 'Retail Sales Associate', sem: (k % 2) + 1, partner: 'Partner A', active: k !== 11, ex: 6 + k, st: st });
      }
    })();
    const fbByCode = {}; FB.forEach((b) => { fbByCode[b.code] = b; });
    const DEFAULT_RATES = { tui: 2500, exam: 1200 };
    const rateOf = (partner, ind) => { const r = Object.assign({}, DEFAULT_RATES, (S.rates[partner] || {})[ind] || {}); return { tui: Math.max(0, Number(r.tui) || 0), exam: Math.max(0, Number(r.exam) || 0) }; };
    const itemsFor = (months, heads, rt, arr, arrOverride) => {
      const its = [];
      if (arrOverride !== undefined && arrOverride !== null && (arr || []).length) { if (arrOverride > 0) its.push({ amt: arrOverride, head: 'arr', m: arr.join('|') }); }
      else (arr || []).forEach((m) => its.push({ amt: rt.tui, head: 'arr', m: m }));
      months.forEach((m) => { if (heads.indexOf('tui') > -1) its.push({ amt: rt.tui, head: 'tui', m: m }); });
      if (months.length && heads.indexOf('exam') > -1) its.push({ amt: rt.exam, head: 'exam', m: '' });
      return its;
    };
    // build invoices with their students
    const invoices = S.invoices.map((inv) => {
      const studs = [];
      inv.batches.forEach((code) => {
        const b = fbByCode[code];
        b.st.forEach((s) => {
          if (inv.regs && inv.regs.indexOf(s[1]) < 0) return;
          const months = s[2].filter((m) => MON.indexOf(m) >= inv.from && MON.indexOf(m) <= inv.to);
          const arr = inv.arrAuto ? ((s[3] && s[3].arr) || []).concat(s[2].filter((m) => MON.indexOf(m) < inv.from)) : ((inv.arr && inv.arr[s[1]]) || []);
          if (!months.length && !arr.length) return;
          studs.push({ name: s[0], reg: s[1], batch: code, sem: b.sem, ex: b.ex, months: months, arr: arr, items: itemsFor(months, inv.heads, (inv.rates && inv.rates[b.industry]) || rateOf(inv.partner, b.industry), arr, inv.arrAdj ? inv.arrAdj[s[1]] : undefined) });
        });
      });
      (inv.newStudents || []).forEach((n) => { const months = [MON[inv.from]]; studs.push({ name: n.name, reg: n.reg, batch: n.batch, sem: '-', ex: 9, isNew: true, months: months, arr: [], items: itemsFor(months, inv.heads, (inv.rates && inv.rates[inv.industry]) || rateOf(inv.partner, inv.industry), []) }); });
      studs.forEach((s) => { s.total = s.items.reduce((a, x) => a + x.amt, 0); });
      return Object.assign({}, inv, { studs: studs, total: studs.reduce((a, s) => a + s.total, 0) });
    });
    const allocate = (studs, paidCount, pool, named) => {
      const pri = studs.slice().sort((a, b) => (a.ex - b.ex) || ((b.items.length - (paidCount[b.reg] || 0)) - (a.items.length - (paidCount[a.reg] || 0))));
      const order = studs.filter((s) => named.indexOf(s.reg) > -1).concat(pri.filter((s) => named.indexOf(s.reg) < 0));
      const add = {};
      for (const s of order) {
        let k = paidCount[s.reg] || 0;
        while (k < s.items.length && pool >= s.items[k].amt) { pool -= s.items[k].amt; add[s.reg] = (add[s.reg] || 0) + s.items[k].amt; k++; }
        paidCount[s.reg] = k;
        if (k < s.items.length) break;
      }
      return { add: add, credit: pool };
    };
    invoices.forEach((inv) => {
      const pc = {}; let credit = 0;
      inv.trOut = inv.tranches.map((t) => {
        if (t.status !== 'confirmed') return { add: {}, covered: 0, credit: credit };
        const r = allocate(inv.studs, pc, t.amt + credit, t.named || []);
        credit = r.credit;
        return { add: r.add, covered: Object.keys(r.add).length, sum: Object.values(r.add).reduce((a, x) => a + x, 0) };
      });
      inv.paidCount = pc; inv.credit = credit;
      inv.paidBy = {}; inv.studs.forEach((s) => { const k = pc[s.reg] || 0; inv.paidBy[s.reg] = s.items.slice(0, k).reduce((a, x) => a + x.amt, 0); });
      inv.paid = inv.tranches.filter((t) => t.status === 'confirmed').reduce((a, t) => a + t.amt, 0);
      inv.recorded = inv.tranches.filter((t) => t.status !== 'confirmed').reduce((a, t) => a + t.amt, 0);
      inv.applied = Object.values(inv.paidBy).reduce((a, x) => a + x, 0);
      inv.balance = inv.total - inv.applied;
      inv.statusKey = inv.balance <= 0 ? 'paid' : (inv.overdue ? 'overdue' : (inv.applied > 0 ? 'part' : 'sent'));
    });
    const invStatusLabel = { paid: 'Paid', overdue: 'Overdue', part: 'Partially paid', sent: 'Sent, awaiting payment' };
    const invStatusStyle = { paid: ok, overdue: bad, part: pill('#FBF3DC', '#7A5A00'), sent: rev };
    // per-student fee info across invoices
    const feeInfo = (reg) => {
      let b = null, s = null;
      FB.forEach((x) => x.st.forEach((y) => { if (y[1] === reg) { b = x; s = y; } }));
      if (!s) return null;
      const invd = {}, paidM = {}; let invIds = [];
      invoices.forEach((inv) => {
        const st = inv.studs.find((x) => x.reg === reg);
        if (!st) return;
        invIds.push(inv.id);
        st.months.concat(st.arr || []).forEach((m) => { invd[m] = true; });
        st.items.slice(0, inv.paidCount[reg] || 0).forEach((it) => { if (it.head === 'tui' || it.head === 'arr') String(it.m).split('|').forEach((x) => { paidM[x] = true; }); });
      });
      const allDues = ((s[3] && s[3].arr) || []).concat(s[2]);
      const remaining = allDues.filter((m) => !paidM[m]);
      const notInv = allDues.filter((m) => !invd[m]);
      const anyPaid = Object.keys(paidM).length > 0;
      const status = !allDues.length || !remaining.length ? 'Paid' : (notInv.length ? 'Not invoiced' : (anyPaid ? 'Part paid' : 'Pending verification'));
      return { name: s[0], reg: reg, batch: b.code, dues: allDues, arrears: (s[3] && s[3].arr) || [], remaining: remaining, notInv: notInv, invIds: invIds, status: status, blocked: remaining.length >= 3 };
    };
    const feeStStyle = (st) => (st === 'Paid' ? ok : (st === 'Not invoiced' ? bad : (st === 'Part paid' ? pill('#FBF3DC', '#7A5A00') : rev)));
    const openInv = (id) => () => set({ screen: 'inv', invId: id, payOpen: false, invFilter: 'all', invPage: 1, invQ: '' });
    const wzInit = (partner, onlyBatch, industry) => ({ step: 1, partner: partner, industry: industry || '', src: 'csv', upload: null, from: 3, to: 3, due: '30', heads: { tui: true }, batches: onlyBatch ? { [onlyBatch]: true } : null, sem: 'All', excl: {}, q: '', email: 'accounts@' + partner.toLowerCase().replace(' ', '-') + '.example', copy: 'Program manager, Fees team' });
    const startWizard = (partner, onlyBatch) => () => set({ screen: 'invNew', wz: wzInit(partner, onlyBatch, onlyBatch && fbByCode[onlyBatch] ? fbByCode[onlyBatch].industry : '') });

    // cycle fees tab
    const cfb = fbByCode[cy.code];
    const cfInfo = cfb ? cfb.st.map((s) => feeInfo(s[1])) : [];
    const cfNotInv = cfInfo.filter((f) => f.notInv.length).length;
    const cfRows = cfInfo.map((f) => {
      const last = f.invIds[f.invIds.length - 1];
      return {
        name: f.name, reg: f.reg, months: f.remaining.map((m) => (f.arrears.indexOf(m) > -1 ? m + ' (arrear)' : m)), noMonths: !f.remaining.length, amt: inr(f.remaining.length * rateOf(cfb.partner, cfb.industry).tui),
        hasInv: !!last, noInv: !last, inv: last || '', invNote: f.dues.length ? 'Not invoiced' : 'No dues', openInv: last ? openInv(last) : () => {},
        status: f.status, stStyle: feeStStyle(f.status),
        exam: f.blocked ? 'Blocked, 3+ months unpaid' : (f.remaining.length ? 'Allowed, dues pending' : 'Allowed'), exStyle: f.blocked ? bad : (f.remaining.length ? rev : ok)
      };
    });
    const cfStats = [
      ['Students with dues', cfInfo.filter((f) => f.remaining.length).length, '#18201D'],
      ['Not invoiced', cfNotInv, cfNotInv ? '#A3361F' : '#18201D'],
      ['Awaiting payment', cfInfo.filter((f) => f.status === 'Pending verification' || f.status === 'Part paid').length, '#18201D'],
      ['Paid in full', cfInfo.filter((f) => f.status === 'Paid').length, '#1D5546'],
      ['Blocked from exam', cfInfo.filter((f) => f.blocked).length, '#A3361F']
    ].map((x) => ({ label: x[0], value: x[1], style: 'font-size:26px;font-weight:700;color:' + x[2] }));
    const feeGateOk = !cfb || cfNotInv === 0;

    // Students
    const studs = [
      { id: 's1', name: 'Priya Sharma', father: 'Rajesh Sharma', dob: '12 Mar 2004', reg: 'MSU/RSA/26/0311', fee: 'Cleared', data: '' },
      { id: 's2', name: 'Rahul Verma', father: 'Sunil Verma', dob: '02 Jul 2003', reg: '', fee: 'Cleared', data: '' },
      { id: 's3', name: 'Anjali Kumari', father: 'Ramesh Prasad', dob: '19 Jan 2005', reg: 'MSU/RSA/26/0318', fee: 'Pending', data: '' },
      { id: 's4', name: 'Mohd. Arif', father: 'Mohd. Salim', dob: '05 May 2004', reg: 'MSU/RSA/26/0207', fee: 'Cleared', data: 'DOB differs from Aadhaar' },
      { id: 's5', name: 'Sneha Patil', father: 'Vijay Patil', dob: '28 Aug 2004', reg: 'MSU/RSA/26/0325', fee: 'Cleared', data: '' },
      { id: 's6', name: 'Deepak Yadav', father: 'Mahesh Yadav', dob: '14 Nov 2003', reg: 'MSU/RSA/26/0331', fee: 'Pending', data: '' },
      { id: 's7', name: 'Kavya Nair', father: 'Suresh Nair', dob: '09 Feb 2005', reg: 'MSU/RSA/26/0336', fee: 'Cleared', data: 'Father name spelling' },
      { id: 's8', name: 'Imran Khan', father: 'Aslam Khan', dob: '21 Jun 2004', reg: 'MSU/RSA/26/0342', fee: 'Cleared', data: '' }
    ];
    const eligRows = studs.map((s) => {
      const fixed = !!S.corrected[s.id];
      const mism = !!s.data && !fixed;
      const fi = s.reg ? feeInfo(s.reg) : null;
      const feeLab = fi ? fi.status + (fi.remaining.length ? ' (' + fi.remaining.length + ' mo)' : '') : 'Paid';
      const blocked = !s.reg || (fi && fi.blocked);
      return Object.assign({}, s, {
        fee: feeLab,
        regLabel: s.reg || 'Missing, FAL pending', regStyle: s.reg ? neu : bad,
        feeStyle: feeStStyle(fi ? fi.status : 'Paid'),
        dataLabel: fixed ? 'Corrected, approved' : (s.data ? 'Mismatch: ' + s.data : 'Matches documents'), dataStyle: mism ? rev : ok,
        eligLabel: blocked ? 'Blocked from LMS and exam' : (mism ? 'Correction needed' : 'Eligible'),
        eligStyle: blocked ? bad : (mism ? rev : ok),
        canCorrect: mism, correct: () => set({ corrected: Object.assign({}, S.corrected, { [s.id]: true }) }),
        open: () => set({ stu: s.id })
      });
    });
    const nBlocked = eligRows.filter((r) => r.eligStyle === bad).length;
    const nMism = eligRows.filter((r) => r.canCorrect).length;
    const eligStats = [
      { label: 'Eligible', value: cy.students - nBlocked - nMism },
      { label: 'Blocked (fees or Reg No)', value: nBlocked },
      { label: 'Data corrections pending', value: nMism },
      { label: 'Total in batch', value: cy.students }
    ];
    const journeys = {
      s4: [
        { when: 'Jan 2026', what: 'PAL issued, Retail Operations, batch RSA-B41, Nashik', by: 'Admission team' },
        { when: 'Feb 2026', what: 'FAL generated, Reg No MSU/RSA/26/0207', by: 'Documents verified' },
        { when: 'Apr 2026', what: 'Moved to batch RSA-B47, Pune', by: 'Program team. CWA for 2 modules carried over' },
        { when: 'Oct 2026', what: 'DOB on record differs from Aadhaar', by: 'Flagged in learner data check' }
      ],
      s2: [
        { when: 'Feb 2026', what: 'PAL issued, batch RSA-B47', by: 'Admission team' },
        { when: 'Pending', what: 'FAL not generated: 10th marksheet missing', by: 'Partner to upload document' }
      ]
    };
    const sel = eligRows.find((r) => r.id === S.stu);
    const stu = sel ? { name: sel.name, reg: sel.reg || 'No Reg No yet', journey: journeys[sel.id] || [{ when: 'Feb 2026', what: 'PAL and FAL issued, batch RSA-B47, Pune', by: 'Admission team' }] } : { name: '', reg: '', journey: [] };

    // Curriculum
    const subjDefs = [
      ['RSA101', 'Customer service fundamentals', 'Theory', 4, 'up', 'Offline', 'up'],
      ['RSA102', 'Store operations', 'Theory', 4, 'up', 'Offline', 'up'],
      ['RSA103', 'Visual merchandising', 'Practical', 3, 'up', 'Offline', 'missing'],
      ['RSA104', 'Point of sale and billing', 'Practical', 3, 'missing', 'Online', 'up'],
      ['RSA105', 'Retail project', 'Project', 4, 'up', 'Offline', 'up'],
      ['OJL', 'On-job learning, skill test and viva', 'OJL', 2, 'na', '', 'up']
    ];
    const modeOf = (d) => S.modes[d[0]] || d[5];
    const subjects = subjDefs.map((d) => {
      const qp = d[4] === 'missing' && S.escalated ? 'esc' : d[4];
      const m = modeOf(d);
      const cs = d[6] === 'missing' ? (S.currReq ? 'req' : 'missing') : 'up';
      return {
        code: d[0], name: d[1], type: d[2], credits: d[3],
        currLabel: { up: 'Uploaded', missing: 'Not uploaded', req: 'Upload requested' }[cs], currStyle: cs === 'up' ? ok : (cs === 'missing' ? bad : rev), canReqCurr: cs === 'missing',
        qpLabel: { up: 'Uploaded', missing: 'Missing', esc: 'Escalated, due 20 Oct', na: 'Not needed' }[qp],
        qpStyle: qp === 'up' ? ok : (qp === 'missing' ? bad : (qp === 'esc' ? rev : neu)),
        canEscalate: qp === 'missing', hasMode: !!d[5], noMode: !d[5],
        offStyle: seg(m === 'Offline'), onStyle: seg(m === 'Online'),
        setOff: () => set({ modes: Object.assign({}, S.modes, { [d[0]]: 'Offline' }) }),
        setOn: () => set({ modes: Object.assign({}, S.modes, { [d[0]]: 'Online' }) })
      };
    });
    const currUp = subjDefs.filter((d) => d[6] === 'up').length;
    const onlineList = subjDefs.filter((d) => d[5] && modeOf(d) === 'Online').map((d) => d[0]);

    // Exam locations and trainer pool
    const half = Math.ceil(cy.students / 2);
    const cityOf = cy.location === 'Online' || cy.location === 'Campus' ? 'Noida' : (cy.location.indexOf('[') === 0 ? 'Partner city' : cy.location);
    const areaNames = cy.id === 'c1' ? ['Hadapsar', 'Chakan'] : (cy.id === 'c4' ? ['Campus Hall A', 'Campus Hall B'] : ['Centre 1', 'Centre 2']);
    const locNames = cy.id === 'c4' ? ['Campus Hall A', 'Campus Hall B'] : (cy.id === 'c1' ? ['Hadapsar training centre', 'Chakan partner site'] : [cityOf + ' centre 1', cityOf + ' centre 2']);
    const pool = [
      ['t1', 'R. Kulkarni', 'Trainer (internal)', areaNames[0], true],
      ['t2', 'A. Joshi', 'Trainer (internal)', areaNames[0], true],
      ['t3', 'S. Deshmukh', 'Invigilator (external, via KAM)', areaNames[1], true],
      ['t4', 'P. Shinde', 'Trainer (internal)', areaNames[1], false],
      ['t5', 'N. Pawar', 'Trainer (internal)', cy.id === 'c1' ? 'Hinjewadi' : 'Other area', true]
    ];
    const selOf = (i) => (S.invSel[cy.id + i] !== undefined ? S.invSel[cy.id + i] : (i === 0 ? 't1' : ''));
    const confOf = (i) => (S.invConf[cy.id + i] !== undefined ? S.invConf[cy.id + i] : i === 0);
    const invRows = [0, 1].map((i) => {
      const sel = selOf(i), conf = confOf(i);
      const takenElsewhere = selOf(1 - i);
      const tr = pool.find((t) => t[0] === sel);
      const sorted = pool.slice().sort((a, b) => (b[3] === areaNames[i]) - (a[3] === areaNames[i]));
      return {
        name: locNames[i], area: areaNames[i], city: cityOf, students: i === 0 ? half : cy.students - half,
        sel: sel, locked: conf,
        opts: sorted.map((t) => ({ id: t[0], disabled: !t[4] || t[0] === takenElsewhere, label: t[1] + ', ' + t[3] + (t[3] === areaNames[i] ? ' (same area)' : ' (other area)') + (!t[4] ? ' - not available' : (t[0] === takenElsewhere ? ' - assigned to other location' : '')) })),
        change: (e) => set({ invSel: Object.assign({}, S.invSel, { [cy.id + i]: e.target.value }) }),
        detail: tr ? tr[1] + ', ' + tr[2] : 'No one selected yet',
        detail2: tr ? 'Based at ' + tr[3] + ', ' + cityOf + (tr[3] === areaNames[i] ? ', same area' : ', travels from another area') : 'Choose from the list',
        confirmed: conf, canConfirm: !conf && !!tr, empty: !conf && !tr,
        confirm: () => set({ invConf: Object.assign({}, S.invConf, { [cy.id + i]: true }) })
      };
    });
    const invAll = invRows.every((r) => r.confirmed);
    const trainerRows = pool.map((t) => {
      const at = [0, 1].filter((i) => selOf(i) === t[0]).map((i) => locNames[i] + (confOf(i) ? '' : ' (pending)'));
      return { name: t[1], phone: '[phone]', type: t[2], area: t[3], city: cityOf, avail: t[4] ? 'Available' : 'On leave', availStyle: t[4] ? ok : bad, assigned: at.length ? at.join(', ') : '-' };
    });

    // Schedule
    const sched = [
      ['RSA101', '20 Oct', '10:00 to 13:00', 'Hadapsar, Chakan'],
      ['RSA102', '21 Oct', '10:00 to 13:00', 'Hadapsar, Chakan'],
      ['RSA103', '22 Oct', '10:00 to 12:00', 'Hadapsar, Chakan'],
      ['RSA104', '23 Oct', '11:00 to 12:30', 'LMS (remote)'],
      ['RSA105', S.dateFixed ? '24 Oct' : '2 Nov', 'Submission', 'Hadapsar, Chakan']
    ];
    const schedule = sched.map((r) => {
      const out = r[1] === '2 Nov';
      const d = subjDefs.find((x) => x[0] === r[0]);
      return { code: r[0], date: r[1] + ' 2026', time: r[2], venue: r[3], mode: modeOf(d), chk: out ? 'Outside partner dates' : 'On partner dates', chkStyle: out ? bad : ok, canFix: out };
    });
    const schedBlocked = !S.dateFixed || S.schedShared;

    // Notice
    const preCheck = [
      ['Fees invoiced; students with 3+ unpaid months blocked', feeGateOk], ['Curriculum uploaded in LMS and credits verified', S.currReq], ['Question papers available or escalated', S.escalated],
      ['Learner data verified', nMism === 0], ['Mode recorded per subject', true], ['Invigilators confirmed', invAll], ['Schedule shared', S.schedShared]
    ].map((p) => ({ label: p[0], dot: dotS(p[1] ? G : '#C9CFC8') }));
    const preDone = feeGateOk && S.currReq && S.escalated && nMism === 0 && invAll && S.schedShared;
    const nLabels = ['Generate notice from cycle data', 'Send for approval, signature and stamp', 'Upload signed notice', 'Share with Program team and stakeholders'];
    const noticeSteps = nLabels.map((l, i) => ({ num: i < S.notice ? '✓' : String(i + 1), label: l, dot: numDot(i < S.notice ? 'done' : (i === S.notice ? 'cur' : 'todo')) }));
    const ctas = ['Generate notice', 'Send for signature', 'Upload signed copy', 'Share notice'];

    // Results: subject-wise marks entry
    const pfx = cy.batch.split('-')[0];
    const rStud = [['Suresh B.', '0041', 0.78], ['Lakshmi R.', '0042', 0.62], ['Manoj K.', '0057', 0.41], ['Divya S.', '0063', 0.86], ['Arjun M.', '0070', 0.58], ['Pooja T.', '0074', 0.44]].map((x) => [x[0], 'MSU/' + pfx + '/26/' + x[1], x[2]]);
    const rSubj = cy.id === 'c5'
      ? [['FNB101', 'Food service basics', 'Theory'], ['FNB102', 'Beverage service', 'Theory'], ['FNB103', 'Table setup and service', 'Practical'], ['FNB104', 'Hygiene and safety', 'Practical'], ['FNB105', 'Restaurant project', 'Practical'], ['OJL', 'On-job learning', 'OJL']]
      : [['RSA101', 'Customer service fundamentals', 'Theory'], ['RSA102', 'Store operations', 'Theory'], ['RSA103', 'Visual merchandising', 'Practical'], ['RSA104', 'Point of sale and billing', 'Practical'], ['RSA105', 'Retail project', 'Practical'], ['OJL', 'On-job learning', 'OJL']];
    const scheme = {
      Theory: [['int', 'CWA / Internal', 30, 'LMS'], ['exam', 'Theory exam', 70]],
      Practical: [['int', 'CWA / Internal', 30, 'LMS'], ['exam', 'Practical exam', 70]],
      OJL: [['int', 'CWA / Internal', 30, 'LMS'], ['viva', 'Skill test and viva', 70, 'Exam day']]
    };
    const blanks = { [rStud[4][1] + '|' + rSubj[3][0] + '|exam']: 1, [rStud[5][1] + '|' + rSubj[3][0] + '|exam']: 1 };
    const seedOf = (reg, sc, comp, max, lvl) => {
      if (blanks[reg + '|' + sc + '|' + comp]) return '';
      const h = (reg.charCodeAt(reg.length - 1) + sc.charCodeAt(sc.length - 1) * 3 + comp.length * 5) % 5 - 2;
      return String(Math.max(0, Math.min(max, Math.round(max * lvl) + h)));
    };
    const marksLocked = S.res >= 1;
    const valOf = (st, sj, c) => { const k = st[1] + '|' + sj[0] + '|' + c[0]; return S.mk[k] !== undefined ? S.mk[k] : seedOf(st[1], sj[0], c[0], c[2], st[2]); };
    const subjTotal = (st, sj) => {
      let t = 0;
      for (const c of scheme[sj[2]]) { const v = valOf(st, sj, c); const n = Number(v); if (v === '' || isNaN(n) || n > c[2] || n < 0) return null; t += n; }
      return t;
    };
    const enteredCount = (sj) => rStud.filter((st) => subjTotal(st, sj) !== null).length;
    const curSj = rSubj.find((x) => x[0] === S.rsub || (x[0] !== 'OJL' && S.rsub !== 'OJL' && x[0].slice(-3) === S.rsub.slice(-3))) || rSubj[0];
    const rSubjects = rSubj.map((sj) => {
      const n = enteredCount(sj), on = sj[0] === curSj[0], done = n === rStud.length;
      return {
        code: sj[0], name: sj[1], active: on ? 'true' : 'false', pick: () => set({ rsub: sj[0] }),
        entered: n + ' of ' + rStud.length + ' entered', pillStyle: 'display:inline-block;margin-top:6px;' + (done ? ok : bad),
        style: 'text-align:left;min-width:150px;padding:10px 12px;border-radius:10px;background:' + (on ? GT : '#FFFFFF') + ';border:' + (on ? '2px solid ' + G : '1px solid #DADFD8') + ';color:#18201D'
      };
    });
    const rCur = { code: curSj[0], name: curSj[1], type: curSj[2], comps: scheme[curSj[2]].map((c) => ({ label: c[1], max: c[2] })) };
    const rEntry = rStud.map((st) => {
      const cells = scheme[curSj[2]].map((c) => {
        const k = st[1] + '|' + curSj[0] + '|' + c[0];
        const v = valOf(st, curSj, c);
        const n = Number(v);
        const badV = v !== '' && (isNaN(n) || n > c[2] || n < 0);
        return {
          val: v, fromLms: !!c[3], src: c[3] || '', editable: !c[3], locked: marksLocked,
          aria: c[1] + ' for ' + st[0] + ', out of ' + c[2],
          change: (e) => set({ mk: Object.assign({}, S.mk, { [k]: e.target.value }) }),
          style: 'width:72px;' + (badV ? 'border-color:#A9530F;background:#FBEEDF' : (v === '' ? 'border-color:#2456A4;background:#F4F7FD' : ''))
        };
      });
      const t = subjTotal(st, curSj);
      const anyBad = cells.some((c) => c.style.indexOf('#A9530F') > -1);
      return {
        name: st[0], reg: st[1], cells, total: t === null ? '-' : String(t),
        st: anyBad ? 'Above maximum' : (t === null ? 'Marks pending' : (t >= 40 ? 'Pass' : 'Below 40')),
        stStyle: anyBad ? bad : (t === null ? rev : (t >= 40 ? ok : bad))
      };
    });
    const gradeLocked = S.res >= 2;
    const tabRows = rStud.map((st) => {
      const totals = rSubj.map((sj) => subjTotal(st, sj));
      const complete = totals.every((t) => t !== null);
      const gOf = (i) => S.grace[st[1] + '|' + rSubj[i][0]] || 0;
      const adj = totals.map((t, i) => (t === null ? null : (t < 40 ? Math.min(100, t + gOf(i)) : t)));
      const failedRaw = complete ? totals.map((t, i) => (t < 40 ? i : -1)).filter((i) => i > -1) : [];
      const failed = adj.map((t, i) => (t !== null && t < 40 ? rSubj[i][0] : null)).filter(Boolean);
      const result = !complete ? 'Marks pending' : (failed.length ? 'Fail: ' + failed.join(', ') : 'Pass');
      const graceItems = failedRaw.map((i) => ({
        code: rSubj[i][0], aria: 'Grace marks for ' + rSubj[i][0],
        opts: [0, 2, 5, 8].map((v) => ({ label: v === 0 ? '0' : '+' + v, disabled: gradeLocked || !marksLocked, pick: () => set({ grace: Object.assign({}, S.grace, { [st[1] + '|' + rSubj[i][0]]: v }) }), style: seg(gOf(i) === v) }))
      }));
      return {
        name: st[0], reg: st[1],
        subs: adj.map((t, i) => ({ val: t === null ? '-' : (gOf(i) && totals[i] < 40 ? t + ' (+' + gOf(i) + ')' : String(t)), style: t === null ? 'color:#1F4A8F;font-weight:600' : (t < 40 ? 'color:#8A420A;font-weight:700' : 'font-size:14px') })),
        total: complete ? String(adj.reduce((a, b) => a + b, 0)) : '-',
        result, resStyle: !complete ? rev : (failed.length ? bad : ok),
        hasGrace: graceItems.length > 0, noGrace: graceItems.length === 0, graceItems,
        graceNote: !complete ? 'After all marks are in' : 'Not needed'
      };
    });
    const pendingSubj = rSubj.map((sj) => [sj[0], rStud.length - enteredCount(sj)]).filter((x) => x[1] > 0);
    const allEntered = pendingSubj.length === 0;
    const resLabels = ['Evaluate all marks', 'Tabulated result', 'Grace marks applied', 'Board verification', 'Secure PDF published'];
    const resSteps = resLabels.map((l, i) => {
      const st = i < S.res ? 'done' : (i === S.res ? 'cur' : 'todo');
      return { n: 15 + i, label: l, style: 'border-radius:10px;padding:10px 12px;' + (st === 'done' ? 'background:' + GT + ';color:' + G : (st === 'cur' ? 'background:' + BT + ';color:#1F3F75' : 'background:#FFFFFF;color:#3D4642;border:1px solid #DADFD8')) };
    });
    const resCtas = ['Confirm marks and tabulate', 'Apply grace marks', 'Board: approve results', 'Publish password-protected PDF'];
    const resNotes = [
      allEntered ? 'All subject marks are entered. Confirming locks them and builds the tabulated result.' : 'Marks pending: ' + pendingSubj.map((x) => x[0] + ' (' + x[1] + ')').join(', ') + '. Enter them for every student before tabulation.',
      'Marks locked. Students who failed a subject can get grace on that subject (default 0). Choose the justification, then apply.',
      'Results submitted to the board. Corrections from the board are applied here before approval.',
      'Board approved. Publish the secure PDF to the partner and Academic team; students get notified.',
      'Published. PDF password sent separately. Marksheet creation in TrueScholar can start.'
    ];

    // Marksheets
    const locked = S.v1 && S.v2;
    const delBase = [
      ['Anita G.', '0012', 'Delivered', 'Received by partner'],
      ['Ravi P.', '0015', 'Delivered', 'Received by partner'],
      ['Meena L.', '0021', 'Returned', 'Address incomplete. Re-dispatch within 7 days'],
      ['Karthik S.', '0027', 'Undelivered', 'Partner office closed. Re-dispatch within 7 days'],
      ['Farah N.', '0030', 'In transit', 'Expected in 2 days']
    ].map((d, i) => [d[0], 'MSU/' + pfx + '/26/' + d[1], 'TS-' + pfx + '-26-' + d[1], 'BLR-773104' + (52 + i * 4), d[2], d[3]]);
    const delRows = delBase.map((d) => {
      const redone = !!S.redo[d[1]];
      const st = redone ? 'Re-dispatched' : d[4];
      return {
        name: d[0], reg: d[1], msid: d[2], trk: redone ? d[3].replace('773', '881') : d[3], status: st,
        note: redone ? 'New tracking number recorded today' : d[5],
        style: st === 'Delivered' ? ok : (st === 'Returned' || st === 'Undelivered' ? bad : rev),
        canRedo: !redone && (d[4] === 'Returned' || d[4] === 'Undelivered'),
        redo: () => set({ redo: Object.assign({}, S.redo, { [d[1]]: true }) })
      };
    });

    // ===== Fees screens =====
    const PS = Number(S.pageSize) || 25;
    const pagerOf = (list, page, setPage) => {
      const total = list.length, pages = Math.max(1, Math.ceil(total / PS)), pg = Math.min(Math.max(1, page || 1), pages), st = (pg - 1) * PS;
      return { items: list.slice(st, st + PS), info: total ? 'Showing ' + (st + 1) + ' to ' + Math.min(st + PS, total) + ' of ' + total : 'No matching students', pageLabel: 'Page ' + pg + ' of ' + pages, prevDis: pg <= 1, nextDis: pg >= pages, prev: () => setPage(pg - 1), next: () => setPage(pg + 1), first: () => setPage(1), last: () => setPage(pages) };
    };
    const segF = (on) => seg(on);
    const periodOf = (f, t) => (f === t ? MON[f] + ' 2026' : MON[f] + ' to ' + MON[t] + ' 2026');
    const openInvs = invoices.filter((i) => i.balance > 0);
    const toVerify = invoices.reduce((a, i) => a + i.tranches.filter((t) => t.status !== 'confirmed').length, 0);
    const pendStud = openInvs.reduce((a, i) => a + i.studs.filter((s) => i.paidBy[s.reg] < s.total).length, 0);
    const overdue = openInvs.filter((i) => i.overdue);
    const feeKpis = [
      { label: 'Outstanding across invoices', value: inr(openInvs.reduce((a, i) => a + i.balance, 0)), hint: openInvs.length + ' open invoices', style: 'padding:16px 18px;border-top:3px solid #C77A1E', valStyle: 'font-size:30px;font-weight:700' },
      { label: 'Payments to verify', value: String(toVerify), hint: 'recorded by partners', style: 'padding:16px 18px', valStyle: 'font-size:30px;font-weight:700;color:#C77A1E' },
      { label: 'Students pending verification', value: String(pendStud), hint: 'invoiced, not yet paid', style: 'padding:16px 18px', valStyle: 'font-size:30px;font-weight:700' },
      { label: 'Overdue', value: String(overdue.length), hint: overdue.length ? overdue.map((i) => i.partner + ', due ' + i.due).join('; ') : 'None', style: 'padding:16px 18px', valStyle: 'font-size:30px;font-weight:700;color:' + (overdue.length ? '#A3361F' : '#18201D') }
    ];
    const feeFlow = [
      { n: 1, t: 'Select students', d: 'Suggested batches with unpaid, active students' },
      { n: 2, t: 'Auto-calculate', d: 'Unpaid months times selected fee heads' },
      { n: 3, t: 'Send invoice', d: 'Students show Pending verification' },
      { n: 4, t: 'Record payments', d: 'Full or part, in any number of tranches' },
      { n: 5, t: 'Auto-update', d: 'Covered students become Paid; exam blocks lift' }
    ];
    const invList = (S.allInv ? invoices : openInvs).slice().reverse().map((i) => {
      const confirmed = i.tranches.filter((t) => t.status === 'confirmed').length;
      return {
        id: i.id, partner: i.partner, industry: i.industry || '-', period: periodOf(i.from, i.to), due: i.due, students: i.studs.length, invoiced: inr(i.total),
        paid: inr(i.applied), tr: confirmed + ' tr.', balance: inr(i.balance), status: invStatusLabel[i.statusKey], stStyle: invStatusStyle[i.statusKey],
        barStyle: 'height:6px;background:#2E7D66;width:' + Math.round(i.applied / Math.max(1, i.total) * 100) + '%', open: openInv(i.id)
      };
    });
    const PARTNERS = ['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E', 'Partner F', 'Partner G', 'Partner H'];
    const RP = S.ratePartner || 'Partner A';
    const IND_ALL = ['Retail', 'Logistics', 'Hospitality', 'BFSI', 'Electrical', 'Healthcare', 'Automotive', 'IT and ITeS'];
    const IND_DEF = { 'Partner A': ['Retail', 'Electrical', 'Hospitality'], 'Partner B': ['Logistics', 'BFSI'], 'Partner C': ['Hospitality'], 'Partner D': ['Retail', 'Automotive'], 'Partner E': ['Retail', 'Healthcare'], 'Partner F': ['IT and ITeS'], 'Partner G': ['Logistics', 'Automotive'], 'Partner H': ['Healthcare'] };
    const PI = S.partnerInd[RP] || IND_DEF[RP] || [];
    const isCustom = (p, ind) => { const r = (S.rates[p] || {})[ind]; return !!r && (Number(r.tui) !== DEFAULT_RATES.tui || Number(r.exam) !== DEFAULT_RATES.exam); };
    const indRows = PI.map((ind) => {
      const cur = (S.rates[RP] || {})[ind] || {};
      const custom = isCustom(RP, ind);
      return {
        ind: ind, batches: FB.filter((b) => b.partner === RP && b.industry === ind).length, custom: custom,
        pill: custom ? 'Custom' : 'Standard', pillStyle: custom ? rev : neu,
        reset: () => { const pr = Object.assign({}, S.rates[RP] || {}); delete pr[ind]; set({ rates: Object.assign({}, S.rates, { [RP]: pr }) }); },
        cells: HEADS.map((h) => {
          const v = cur[h[0]] !== undefined ? cur[h[0]] : DEFAULT_RATES[h[0]];
          const n = Number(v); const invalid = String(v).trim() === '' || isNaN(n) || n < 0;
          return {
            val: String(v), aria: h[1] + ' for ' + RP + ', ' + ind,
            change: (e) => set({ rates: Object.assign({}, S.rates, { [RP]: Object.assign({}, S.rates[RP] || {}, { [ind]: Object.assign({}, DEFAULT_RATES, cur, { [h[0]]: e.target.value }) }) }) }),
            style: 'width:130px;' + (invalid ? 'border-color:#A9530F;background:#FBEEDF' : (n !== DEFAULT_RATES[h[0]] ? 'border-color:#2456A4;background:#F4F7FD;font-weight:600' : ''))
          };
        })
      };
    });
    const nCustom = PI.filter((ind) => isCustom(RP, ind)).length;
    const addableInd = IND_ALL.filter((x) => PI.indexOf(x) < 0);

    // wizard
    const W = S.wz || wzInit('Partner A');
    const setW = (p) => set({ wz: Object.assign({}, W, p) });
    const headsSel = HEADS.filter((h) => W.heads[h[0]]).map((h) => h[0]);
    const invMonths = {};
    invoices.forEach((i) => i.studs.forEach((s) => { invMonths[s.reg] = (invMonths[s.reg] || []).concat(s.months, s.arr || []); }));
    const fromN = Number(W.from), toN = fromN;
    const uninv = (s) => s[2].filter((m) => MON.indexOf(m) >= fromN && MON.indexOf(m) <= toN && (invMonths[s[1]] || []).indexOf(m) < 0);
    const uninvArr = (s) => ((s[3] && s[3].arr) || []).concat(s[2].filter((m) => MON.indexOf(m) < fromN)).filter((m) => (invMonths[s[1]] || []).indexOf(m) < 0);
    const billable = (s) => uninv(s).length + uninvArr(s).length > 0;
    const partnerAll = FB.filter((b) => b.partner === W.partner);
    const pInds = (S.partnerInd[W.partner] || IND_DEF[W.partner] || []).concat(partnerAll.map((b) => b.industry)).filter((v, i, a) => a.indexOf(v) === i);
    const indDue = (ind) => partnerAll.filter((b) => b.industry === ind && b.active && b.st.some((s) => billable(s)));
    const WI = W.industry && pInds.indexOf(W.industry) > -1 ? W.industry : (pInds.find((ind) => indDue(ind).length) || pInds[0] || '');
    const pBatches = partnerAll.filter((b) => b.industry === WI);
    const sugg = pBatches.filter((b) => b.active && b.st.some((s) => billable(s)));
    const industryOpts = pInds.map((ind) => { const n = indDue(ind).length; return { v: ind, l: ind + (n ? ' (' + n + ' batch' + (n > 1 ? 'es' : '') + ' with dues)' : ' (no dues)') }; });
    const bOn = (code) => sugg.some((b) => b.code === code);
    const q = (W.q || '').toLowerCase();
    const match = (b) => !q || b.code.toLowerCase().indexOf(q) > -1 || b.program.toLowerCase().indexOf(q) > -1;
    const amtFor = (months, b, arr, ov) => itemsFor(months, headsSel, rateOf(W.partner, b.industry), arr, ov).reduce((a, x) => a + x.amt, 0);
    const adjOf = (reg) => { const v = (W.arrAdj || {})[reg]; if (v === undefined || String(v).trim() === '') return undefined; const n = Number(String(v).replace(/[^0-9.]/g, '')); return isNaN(n) ? undefined : Math.round(n); };
    const wzSuggested = sugg.filter(match).map((b) => {
      const owing = b.st.filter((s) => uninv(s).length);
      const on = bOn(b.code);
      return {
        code: b.code, program: b.program, sem: b.sem, on: on,
        industry: b.industry, rateNote: inr(rateOf(W.partner, b.industry).tui) + '/month, ' + inr(rateOf(W.partner, b.industry).exam) + '/sem',
        owe: owing.length + ' of ' + b.st.length + ' students owe ' + inr(owing.reduce((a, s) => a + amtFor(uninv(s), b), 0)),
        toggle: () => { const cur = {}; sugg.forEach((x) => { cur[x.code] = bOn(x.code); }); cur[b.code] = !on; setW({ batches: cur }); },
        style: 'display:flex;gap:10px;padding:12px;border-radius:10px;cursor:pointer;border:' + (on ? '1.5px solid #1D5546;background:#EEF5F1' : '1px solid #DADFD8;background:#FFFFFF')
      };
    });
    const wzOther = pBatches.filter((b) => sugg.indexOf(b) < 0 && match(b)).map((b) => ({ code: b.code, program: b.program, sem: b.sem, why: b.active ? 'No unpaid fees in this period' : 'Inactive batch' }));
    const selBatches = sugg.filter((b) => bOn(b.code));
    // trainee ID and Aadhaar for every student (sample data)
    const tidOf = (reg) => { const p = reg.split('/'); return 'TRN-' + p[1] + '-' + p[3]; };
    const aadOf = (reg) => { let h = 7; for (const ch of reg) h = (h * 31 + ch.charCodeAt(0)) % 1000000007; return ('4' + String(h).padStart(11, '7')).slice(0, 12); };
    const mask = (a) => (/^\d{12}$/.test(a) ? 'XXXX XXXX ' + a.slice(8) : (a || '-'));
    const allStud = [];
    FB.forEach((b) => b.st.forEach((s) => allStud.push({ b: b, s: s, tid: tidOf(s[1]), aad: aadOf(s[1]) })));
    const periodLabelW = periodOf(fromN, toN);
    const dbOn = !!W.db;
    const dbStud = [];
    partnerAll.filter((b) => b.industry === WI && b.active).forEach((b) => b.st.forEach((s) => dbStud.push({ b: b, s: s })));
    const dbPick = {};
    if (dbOn) dbStud.forEach((x) => { if (billable(x.s)) dbPick[x.s[1]] = true; });
    const UP = W.upload;
    const useCsv = true;
    let csvRows = [], csvPick = {}; const csvNew = [];
    if (useCsv && UP && UP.rows) {
      const seen = {};
      csvRows = UP.rows.map((r, i) => {
        const tid = (r.tid || '').trim().toUpperCase(), aad = (r.aad || '').replace(/\s|-/g, '');
        const hit = allStud.find((x) => x.tid === tid);
        let result, note = '', st = bad, student = '-';
        if (!tid) { result = 'Missing Trainee ID'; }
        else if (!/^\d{12}$/.test(aad)) { result = 'Invalid Aadhaar'; note = 'Must be 12 digits'; }
        else if (!hit && r.name && !seen[tid]) { result = 'New student'; note = 'Not in EduVault yet. Billed for ' + MON[fromN] + ' and added when the invoice is sent' + (r.batch ? ' (' + r.batch + ')' : ''); st = ok; student = r.name; csvNew.push({ tid: tid, aad: aad, name: r.name, batch: r.batch || '' }); seen[tid] = true; }
        else if (!hit) { result = 'Not found'; note = 'Not in EduVault. Add student_name (and batch_code) to bill as a new student'; }
        else {
          student = hit.s[0];
          if (hit.aad !== aad) { result = 'Aadhaar mismatch'; note = 'Does not match the record for ' + hit.s[0]; }
          else if (hit.b.partner !== W.partner) { result = 'Other partner'; note = hit.b.partner; st = rev; }
          else if (!hit.b.active) { result = 'Inactive student'; note = hit.b.code + ' is not active'; }
          else if (hit.b.industry !== WI) { result = 'Other industry'; note = hit.b.industry + ': bill on its own invoice'; st = rev; }
          else if (seen[tid]) { result = 'Duplicate row'; st = neu; }
          else if (!billable(hit.s)) { result = 'No dues'; note = 'Nothing uninvoiced for this month'; st = neu; }
          else if (dbPick[hit.s[1]]) { result = 'Already in list'; note = 'Fetched from EduVault in section A'; st = neu; }
          else { const na = uninvArr(hit.s).length; result = 'Will be billed'; note = uninv(hit.s).length + ' month(s)' + (na ? ' + ' + na + ' arrear month(s)' : '') + ', ' + hit.b.code; st = ok; csvPick[hit.s[1]] = true; }
          seen[tid] = true;
        }
        return { n: i + 2, tid: tid || '-', aad: mask(aad), student: student, result: result, note: note, style: st };
      });
    }
    const wzAll = [];
    const srcBatches = useCsv ? partnerAll.filter((b) => b.industry === WI && b.active) : selBatches;
    srcBatches.forEach((b) => b.st.forEach((s) => {
      const m = uninv(s), ar = uninvArr(s);
      if ((m.length || ar.length) && (dbPick[s[1]] || csvPick[s[1]])) {
        const rt = rateOf(W.partner, b.industry);
        const ov = ar.length ? adjOf(s[1]) : undefined; const arrDef = ar.length * rt.tui;
        wzAll.push({ name: s[0], reg: s[1], batch: b.code, sem: b.sem, industry: b.industry, months: m, arr: ar, arrDef: arrDef, arrRate: rt.tui, adj: ov, arrAmt: ov !== undefined ? ov : arrDef, amt: amtFor(m, b, ar, ov),
          gapNote: ar.length ? (s[3] && s[3].rejoined ? 'Rejoined ' + s[3].rejoined + ' after a break (' + s[3].gap + ', not charged). Unpaid earlier months: ' + ar.join(', ') + '.' : 'Unpaid earlier months carried forward: ' + ar.join(', ') + '.') : '' });
      }
    }));
    csvNew.forEach((n) => {
      const rt = rateOf(W.partner, WI); const m = [MON[fromN]];
      wzAll.push({ name: n.name, reg: 'NEW/' + n.tid, tid: n.tid, isNew: true, batch: n.batch || 'New', sem: '-', industry: WI, months: m, arr: [], arrDef: 0, arrRate: rt.tui, adj: undefined, arrAmt: 0, amt: itemsFor(m, headsSel, rt, []).reduce((a, x) => a + x.amt, 0), gapNote: '' });
    });
    const allDueCount = selBatches.reduce((a, b) => a + b.st.filter((s) => billable(s)).length, 0);
    const parseCsv = (text, name) => {
      const lines = String(text).replace(/\r/g, '').split('\n').map((l) => l.trim()).filter(Boolean);
      if (!lines.length) return { name: name, rows: [], error: 'The file is empty.' };
      const head = lines[0].toLowerCase().split(',').map((h) => h.replace(/["']/g, '').trim());
      const ti = head.findIndex((h) => h.indexOf('trainee') > -1), ai = head.findIndex((h) => h.indexOf('aadhaar') > -1 || h.indexOf('aadhar') > -1), ni = head.findIndex((h) => h.indexOf('name') > -1), bi = head.findIndex((h) => h.indexOf('batch') > -1);
      if (ti < 0 || ai < 0) return { name: name, rows: [], error: 'Header row must include trainee_id and aadhaar_number columns.' };
      return { name: name, rows: lines.slice(1).map((l) => { const c = l.split(',').map((x) => x.replace(/["']/g, '').trim()); return { tid: c[ti] || '', aad: c[ai] || '', name: ni > -1 ? (c[ni] || '') : '', batch: bi > -1 ? (c[bi] || '') : '' }; }), error: '' };
    };
    const sampleCsv = () => {
      const mine = allStud.filter((x) => x.b.partner === W.partner && x.b.industry === WI);
      const lines = ['trainee_id,aadhaar_number,student_name,batch_code'];
      if (W.db) { if (mine[0]) lines.push(mine[0].tid + ',' + mine[0].aad + ',' + mine[0].s[0] + ',' + mine[0].b.code); }
      else mine.forEach((x, i) => { lines.push(x.tid + ',' + (i === 8 ? x.aad.slice(0, 11) + '0' : x.aad) + ',' + x.s[0] + ',' + x.b.code); });
      const other = allStud.find((x) => x.b.partner === W.partner && x.b.industry !== WI) || allStud.find((x) => x.b.partner !== W.partner);
      if (other) lines.push(other.tid + ',' + other.aad + ',' + other.s[0] + ',' + other.b.code);
      const pre = (mine[0] ? mine[0].tid.split('-')[1] : 'NEW');
      const bc = mine[0] ? mine[0].b.code : '';
      lines.push('TRN-' + pre + '-0601,498765432101,Sana Sheikh,' + bc);
      lines.push('TRN-' + pre + '-0602,456789012345,Vivek Jain,' + bc);
      lines.push('TRN-' + pre + '-9999,412345678901,,');
      return lines.join('\n');
    };
    const setUpload = (u) => { const cur = this.state.wz || W; this.setState({ wz: Object.assign({}, cur, { upload: u, excl: {}, csvFilter: 'all' }) }); };
    const cnt = (lab) => csvRows.filter((r) => r.result === lab).length;
    const ATTN = ['Missing Trainee ID', 'Invalid Aadhaar', 'Not found', 'Aadhaar mismatch', 'Inactive student'];
    const grp = (r) => (r.result === 'Will be billed' || r.result === 'New student' ? 'billed' : (ATTN.indexOf(r.result) > -1 ? 'attn' : 'skip'));
    const nB = csvRows.filter((r) => grp(r) === 'billed').length, nA = csvRows.filter((r) => grp(r) === 'attn').length, nS = csvRows.filter((r) => grp(r) === 'skip').length;
    const cf = W.csvFilter || 'all';
    const statDef = [['billed', 'Will be billed', nB, 'Added to this invoice', '#1D5546', '#E3EEE9'], ['attn', 'Needs attention', nA, 'Fix in the file and re-upload', '#8A420A', '#FBEEDF'], ['skip', 'Skipped', nS, 'Already in list, no dues, other industry', '#3D4642', '#EEEFEC']];
    const dbDue = dbStud.filter((x) => billable(x.s));
    const dq = (W.dq || '').toLowerCase(), dbb = W.dbb || '', dff = W.dff || 'due';
    const dbAll = dbStud.map((x) => { const m = uninv(x.s), ar = uninvArr(x.s); const due = m.length + ar.length > 0; return { x: x, m: m, ar: ar, due: due, amt: due ? amtFor(m, x.b, ar) : 0 }; });
    const dbBatchCodes = dbAll.map((r) => r.x.b.code).filter((v, i, a) => a.indexOf(v) === i);
    const dbFiltered = dbAll.filter((r) => (!dq || r.x.s[0].toLowerCase().indexOf(dq) > -1 || tidOf(r.x.s[1]).toLowerCase().indexOf(dq) > -1) && (!dbb || r.x.b.code === dbb) && (dff === 'all' || (dff === 'due' ? r.due : !r.due)));
    const dbPg = pagerOf(dbFiltered, W.dpg, (n) => setW({ dpg: n }));
    const db = {
      kpis: [['Active students', dbAll.length], ['With dues', dbAll.filter((r) => r.due).length], ['No dues', dbAll.filter((r) => !r.due).length], ['Amount', inr(dbAll.reduce((a, r) => a + r.amt, 0))]].map((k) => ({ label: k[0], value: k[1] })),
      batchCount: dbBatchCodes.length,
      batches: dbBatchCodes.map((c) => { const rs = dbAll.filter((r) => r.x.b.code === c); return { code: c, sem: rs[0].x.b.sem, active: rs.length, due: rs.filter((r) => r.due).length, amt: inr(rs.reduce((a, r) => a + r.amt, 0)), rowStyle: dbb === c && W.dshow ? 'background:#EEF5F1' : '', pick: () => setW({ dshow: true, dbb: c, dpg: 1 }) }; }),
      showList: !!W.dshow, listAria: W.dshow ? 'true' : 'false', toggleLabel: W.dshow ? 'Hide student list' : 'View all ' + dbAll.length + ' students', toggleList: () => setW({ dshow: !W.dshow }),
      q: W.dq || '', setQ: (e) => setW({ dq: e.target.value, dpg: 1 }), batch: dbb, setBatch: (e) => setW({ dbb: e.target.value, dpg: 1 }), batchOpts: dbBatchCodes,
      filters: [['due', 'With dues'], ['nodue', 'No dues'], ['all', 'All']].map((f) => ({ label: f[1], pick: () => setW({ dff: f[0], dpg: 1 }), style: segF(dff === f[0]) })),
      pg: dbPg,
      fetched: dbOn, notFetched: !dbOn, hasRows: dbStud.length > 0,
      fetch: () => setW({ db: true, excl: {}, dpg: 1 }), clear: () => setW({ db: false, excl: {}, dshow: false }),
      summary: dbStud.length ? dbStud.length + ' active students found in ' + dbBatchCodes.length + ' batches. ' + dbDue.length + ' have dues for ' + periodLabelW + ' or earlier and are added to the invoice.' : 'No active ' + WI + ' students for ' + W.partner + ' in EduVault. Upload the list from the partner in section B.',
      summaryStyle: 'border-radius:8px;padding:10px 12px;font-size:14px;' + (dbStud.length ? 'background:#EEF5F1;color:#1D5546;font-weight:600' : 'background:#FBEEDF;color:#6B3408'),
      rows: dbPg.items.map((r) => ({ name: r.x.s[0], tid: tidOf(r.x.s[1]), batch: r.x.b.code, months: r.due ? r.ar.map((q) => q + ' (arrear)').concat(r.m).join(', ') : '-', amt: r.due ? inr(r.amt) : '-', status: r.due ? 'Will be billed' : 'No dues', style: r.due ? ok : neu }))
    };
    const csvPg = pagerOf(csvRows.filter((r) => cf === 'all' || grp(r) === cf), W.cpg, (n) => setW({ cpg: n }));
    const up = {
      ctxStyle: 'display:inline-block;background:#F3F4F0;border:1px solid #DADFD8;border-radius:99px;padding:2px 10px;font-size:13px;font-weight:600',
      headsText: headsSel.map((h) => headById[h][1]).join(' + ') || 'No fee heads',
      n1: numDot(W.dl ? 'done' : 'cur'), n2: numDot(UP && UP.rows && UP.rows.length ? 'done' : 'todo'), n3: numDot(UP && UP.rows && UP.rows.length ? 'done' : 'todo'),
      noFile: !(UP && UP.rows && UP.rows.length),
      zoneStyle: 'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:28px 16px;border-radius:12px;border:2px dashed ' + (W.drag ? '#1D5546;background:#EEF5F1' : '#9AA39E;background:#F8F9F6'),
      dragOver: (e) => { e.preventDefault(); if (!W.drag) setW({ drag: true }); },
      dragLeave: () => { if (W.drag) setW({ drag: false }); },
      drop: (e) => { e.preventDefault(); const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (!f) { setW({ drag: false }); return; } const rd = new FileReader(); rd.onload = () => { const cur = this.state.wz || W; this.setState({ wz: Object.assign({}, cur, { upload: parseCsv(rd.result, f.name), excl: {}, drag: false, csvFilter: 'all' }) }); }; rd.readAsText(f); },
      fileName: UP && UP.name ? UP.name : '', fileMeta: UP && UP.rows ? UP.rows.length + ' rows checked against trainee records' : '',
      stats: statDef.map((d) => ({ label: d[1], value: d[2], hint: d[3], active: cf === d[0] ? 'true' : 'false', pick: () => setW({ csvFilter: cf === d[0] ? 'all' : d[0], cpg: 1 }), style: 'text-align:left;border-radius:10px;padding:10px 12px;font-family:inherit;cursor:pointer;color:' + d[4] + ';background:' + d[5] + ';border:2px solid ' + (cf === d[0] ? d[4] : 'transparent') })),
      hasAttention: nA > 0, attnText: nA + ' row' + (nA > 1 ? 's need' : ' needs') + ' attention and will not be billed. Correct the Trainee ID or Aadhaar in your file and use Replace file, or continue without them.',
      pg: csvPg, rows: csvPg.items,
      listTitle: cf === 'all' ? 'All rows (' + csvRows.length + ')' : statDef.find((d) => d[0] === cf)[1] + ' (' + csvRows.filter((r) => grp(r) === cf).length + ')',
      showAll: () => setW({ csvFilter: 'all' }), showAllLabel: cf === 'all' ? '' : 'Show all rows',
      footer: wzAll.length ? wzAll.length + ' students, ' + inr(wzAll.reduce((a, r) => a + r.amt, 0)) : 'Fetch from EduVault or upload a CSV to add students',
      cta: wzAll.length ? 'Review ' + wzAll.length + ' students' : 'Continue'
    };
    const src = {
      isAll: !useCsv, isCsv: useCsv,
      allStyle: 'display:flex;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;border:' + (!useCsv ? '1.5px solid #1D5546;background:#EEF5F1' : '1px solid #DADFD8'),
      csvStyle: 'display:flex;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;border:' + (useCsv ? '1.5px solid #1D5546;background:#EEF5F1' : '1px solid #DADFD8'),
      allNote: allDueCount + ' active ' + WI + ' students have uninvoiced, unpaid fees for this month or earlier.',
      pickAll: () => setW({ src: 'all', excl: {} }), pickCsv: () => setW({ src: 'csv', excl: {} }),
      hasFile: !!(UP && UP.rows && UP.rows.length), hasError: !!(UP && UP.error), error: UP ? UP.error : '',
      fileLabel: UP && UP.name ? UP.name + ', ' + (UP.rows || []).length + ' rows' : 'No file uploaded yet',
      onFile: (e) => { const f = e.target.files && e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => setUpload(parseCsv(rd.result, f.name)); rd.onerror = () => setUpload({ name: f.name, rows: [], error: 'Could not read the file.' }); rd.readAsText(f); e.target.value = ''; },
      loadSample: () => setUpload(parseCsv(sampleCsv(), 'sample_' + W.partner.replace(' ', '_').toLowerCase() + '_' + WI.toLowerCase() + '.csv')),
      clear: () => setW({ upload: null, excl: {} }),
      rows: csvRows,
      counts: [['Will be billed', ok], ['No dues', neu], ['Other industry', rev], ['Other partner', rev], ['Aadhaar mismatch', bad], ['Not found', bad], ['Inactive student', bad], ['Invalid Aadhaar', bad], ['Duplicate row', neu]].filter((x) => cnt(x[0]) > 0).map((x) => ({ label: x[0] + ': ' + cnt(x[0]), style: x[1] })),
      dlMsg: S.dlMsg || '', hasDlMsg: !!S.dlMsg, dlStyle: 'border-radius:8px;padding:10px 12px;font-size:13px;' + (S.dlOk ? 'background:#EEF5F1;color:#1D5546' : 'background:#FBEEDF;color:#6B3408'),
      downloadTemplate: async () => {
        const csv = 'trainee_id,aadhaar_number,student_name,batch_code\n';
        const name = 'active_students_' + W.partner.replace(' ', '_').toLowerCase() + '_' + WI.toLowerCase().replace(/\s+/g, '_') + '.csv';
        try {
          const dl = window.claude && window.claude.use ? await window.claude.use('downloads') : null;
          if (dl) { await dl.save({ filename: name, data: csv }); this.setState({ dlMsg: 'Template saved: ' + name, dlOk: true, wz: Object.assign({}, this.state.wz || W, { dl: true }) }); return; }
          const a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv); a.download = name; document.body.appendChild(a); a.click(); a.remove();
          this.setState({ dlMsg: 'Template download started: ' + name + '. If nothing downloaded, copy the format shown in step 2 into a new .csv file.', dlOk: true, wz: Object.assign({}, this.state.wz || W, { dl: true }) });
        } catch (e) {
          const code = e && e.code;
          this.setState({ dlMsg: code === 'declined' ? 'Download cancelled.' : 'Download is not available in this view. Copy the format shown in step 2 into a new .csv file.', dlOk: false });
        }
      },
      summary: useCsv ? (UP && UP.rows && UP.rows.length ? 'From the uploaded list, the invoice will bill' : 'Upload a CSV to choose the students. The invoice will bill') : 'The invoice will bill'
    };
    const wzIncl = wzAll.filter((r) => !W.excl[r.reg]);
    const semList = ['All'].concat(selBatches.map((b) => b.sem).filter((v, i, a) => a.indexOf(v) === i).sort().map((v) => 'Sem ' + v));
    const headsLabel = (m) => headsSel.map((h) => h === 'tui' ? headById[h][1] + ' x' + m.length : headById[h][1]).join(', ');
    const wzRowsAll = wzAll.map((r) => {
      const on = !W.excl[r.reg];
      return { isNew: !!r.isNew, tid: r.tid || tidOf(r.reg.indexOf('MSU/') === 0 ? r.reg : 'X/NEW/0/' + r.reg), name: r.name, reg: r.reg, batch: r.batch, months: r.months, arrChips: r.arr.map((m) => m + ' (arrear)'), hasArr: r.arr.length > 0, gapNote: r.gapNote, noArr: !r.arr.length, off: !on, arrVal: (W.arrAdj || {})[r.reg] !== undefined ? String(W.arrAdj[r.reg]) : String(r.arrDef),
        arrEdited: r.adj !== undefined && r.adj !== r.arrDef, arrHint: r.adj !== undefined && r.adj !== r.arrDef ? 'Default ' + inr(r.arrDef) + ' (' + r.arr.length + ' x ' + inr(r.arrRate) + ')' : r.arr.length + ' x ' + inr(r.arrRate),
        arrStyle: 'width:110px;text-align:right;' + ((W.arrAdj || {})[r.reg] !== undefined && String(W.arrAdj[r.reg]).trim() !== '' && isNaN(Number(String(W.arrAdj[r.reg]).replace(/[^0-9.]/g, ''))) ? 'border-color:#A9530F;background:#FBEEDF' : (r.adj !== undefined && r.adj !== r.arrDef ? 'border-color:#2456A4;background:#F4F7FD;font-weight:600' : '')),
        arrChange: (e) => setW({ arrAdj: Object.assign({}, W.arrAdj || {}, { [r.reg]: e.target.value }) }),
        arrReset: () => { const a = Object.assign({}, W.arrAdj || {}); delete a[r.reg]; setW({ arrAdj: a }); },
        amt: inr(r.amt), heads: headsLabel(r.months) + (r.arr.length ? ', Arrears x' + r.arr.length : ''), on: on, rowStyle: on ? 'background:#F4F9F6' : '', toggle: () => setW({ excl: Object.assign({}, W.excl, { [r.reg]: on }) }) };
    });
    const rq = (W.rq || '').toLowerCase(), rb = W.rb || '', rf = W.rf || 'all';
    const rvFiltered = wzRowsAll.filter((r) => (!rq || r.name.toLowerCase().indexOf(rq) > -1 || r.reg.toLowerCase().indexOf(rq) > -1 || String(r.tid).toLowerCase().indexOf(rq) > -1) && (!rb || r.batch === rb) && (rf === 'all' || (rf === 'sel' && r.on) || (rf === 'unsel' && !r.on) || (rf === 'arr' && r.hasArr) || (rf === 'new' && r.isNew)));
    const rvPg = pagerOf(rvFiltered, W.rp, (n) => setW({ rp: n }));
    const rvBatches = wzAll.map((r) => r.batch).filter((v, i, a) => a.indexOf(v) === i);
    const rv = {
      total: wzAll.length, rows: rvPg.items, pg: rvPg, shownCount: rvFiltered.length,
      selText: 'Selected ' + wzIncl.length + ' of ' + wzAll.length + ' students, ' + inr(wzIncl.reduce((a, r) => a + r.amt, 0)),
      q: W.rq || '', setQ: (e) => setW({ rq: e.target.value, rp: 1 }), batch: rb, setBatch: (e) => setW({ rb: e.target.value, rp: 1 }), batchOpts: rvBatches,
      filters: [['all', 'All'], ['sel', 'Selected'], ['unsel', 'Not selected'], ['arr', 'With arrears'], ['new', 'New']].map((f) => ({ label: f[1], pick: () => setW({ rf: f[0], rp: 1 }), style: segF(rf === f[0]) })),
      selShown: () => { const ex = Object.assign({}, W.excl); rvFiltered.forEach((r) => { delete ex[r.reg]; }); setW({ excl: ex }); },
      unselShown: () => { const ex = Object.assign({}, W.excl); rvFiltered.forEach((r) => { ex[r.reg] = true; }); setW({ excl: ex }); }
    };
    const wzRows = wzRowsAll;
    const nextNo = invoices.filter((i) => i.id.indexOf('INV-2026-10-') === 0).length + 1;
    const pvId = 'INV-2026-10-' + String(nextNo).padStart(3, '0');
    const dueMap = { '15': '21 Oct 2026', '30': '5 Nov 2026', '45': '20 Nov 2026' };
    const totMonths = wzIncl.reduce((a, r) => a + r.months.length, 0);
    const pvInds = wzIncl.map((r) => r.industry).filter((v, i, a) => a.indexOf(v) === i);
    const pvLines = [];
    headsSel.forEach((h) => pvInds.forEach((ind) => {
      const hd = headById[h]; const rs = wzIncl.filter((r) => r.industry === ind); const rt = rateOf(W.partner, ind)[h];
      const qty = h === 'tui' ? rs.reduce((a, r) => a + r.months.length, 0) : rs.length;
      pvLines.push({ head: hd[1] + ', ' + ind, unit: hd[4], rate: inr(rt), qty: qty, amt: inr(qty * rt) });
    }));
    pvInds.forEach((ind) => {
      const rsA = wzIncl.filter((r) => r.industry === ind && r.arr.length); const q2 = rsA.reduce((a, r) => a + r.arr.length, 0); const sumA = rsA.reduce((a, r) => a + r.arrAmt, 0); const adjd = rsA.some((r) => r.adj !== undefined && r.adj !== r.arrDef);
      if (q2) { const rt = rateOf(W.partner, ind).tui; pvLines.unshift({ head: 'Arrears (unpaid tuition from earlier months), ' + ind + (adjd ? ', adjusted' : ''), unit: 'per student-month', rate: inr(rt), qty: q2, amt: inr(sumA) }); }
    });
    const arrStud = wzIncl.filter((r) => r.arr.length);
    const pvArr = arrStud.map((r) => ({ name: r.name, reg: r.reg, text: r.gapNote + (r.adj !== undefined && r.adj !== r.arrDef ? ' Adjusted from ' + inr(r.arrDef) + '.' : ''), amt: inr(r.arrAmt) }));
    const arrTotal = arrStud.reduce((a, r) => a + r.arrAmt, 0);
    const WRsnap = {}; pvInds.forEach((ind) => { WRsnap[ind] = rateOf(W.partner, ind); });
    const pvBatches = selBatches.map((b) => { const rs = wzIncl.filter((r) => r.batch === b.code); return { code: b.code, sem: b.sem, n: rs.length, amt: inr(rs.reduce((a, r) => a + r.amt, 0)), keep: rs.length > 0 }; }).filter((b) => b.keep);
    const wzTotal = wzIncl.reduce((a, r) => a + r.amt, 0);
    const stepNames = ['Partner and fee month', 'Add students', 'Review students', 'Preview and send'];
    const wzSteps = stepNames.map((l, i) => {
      const st = i + 1 < W.step ? 'done' : (i + 1 === W.step ? 'cur' : 'todo');
      return { label: l, mark: st === 'done' ? '✓' : String(i + 1), dot: numDot(st), locked: st === 'todo', current: st === 'cur' ? 'step' : 'false', go: () => setW({ step: i + 1 }), style: 'flex:1;display:flex;gap:10px;align-items:center;padding:12px 14px;font-size:14px;font-weight:600;border:0;font-family:inherit;cursor:' + (st === 'todo' ? 'default' : 'pointer') + ';' + (st === 'cur' ? 'background:#E6EDF9;color:#1F3F75' : (st === 'done' ? 'background:#FFFFFF;color:#1D5546' : 'background:#FFFFFF;color:#56605B')) + (i ? ';border-left:1px solid #DADFD8' : '') };
    });
    const wzSend = () => {
      const arrMap = {}, arrAdj = {}; wzIncl.forEach((r) => { if (r.arr.length) { arrMap[r.reg] = r.arr; if (r.adj !== undefined && r.adj !== r.arrDef) arrAdj[r.reg] = r.adj; } });
      const newSt = wzIncl.filter((r) => r.isNew).map((r) => ({ name: r.name, reg: r.reg, batch: r.batch }));
      const inv = { id: pvId, newStudents: newSt, arr: arrMap, arrAdj: arrAdj, rates: WRsnap, partner: W.partner, industry: WI, from: fromN, to: toN, heads: headsSel, issued: '6 Oct 2026', due: dueMap[W.due], batches: pvBatches.map((b) => b.code), regs: wzIncl.map((r) => r.reg), tranches: [], overdue: false, sentTo: W.email };
      set({ invoices: S.invoices.concat([inv]), screen: 'inv', invId: pvId, payOpen: false, invFilter: 'all', wz: null });
    };

    // invoice detail
    const IV = invoices.find((i) => i.id === S.invId) || invoices[0];
    const P = S.pay;
    const namedRegs = Object.keys(P.named).filter((k) => P.named[k]);
    const amtN = Number(String(P.amt).replace(/[^0-9.]/g, '')) || 0;
    const pvAlloc = S.payOpen && amtN > 0 ? allocate(IV.studs, Object.assign({}, IV.paidCount), amtN + IV.credit, P.mode === 'named' ? namedRegs : []) : { add: {}, credit: 0 };
    const pvSum = Object.values(pvAlloc.add).reduce((a, x) => a + x, 0);
    const stuStatus = (s) => { const p = IV.paidBy[s.reg]; return p >= s.total ? 'Paid' : (p > 0 ? 'Part paid' : 'Pending verification'); };
    const fmap = { all: () => true, pending: (s) => stuStatus(s) === 'Pending verification', part: (s) => stuStatus(s) === 'Part paid', paid: (s) => stuStatus(s) === 'Paid' };
    const iq = (S.invQ || '').toLowerCase();
    const invRowsV = IV.studs.filter(fmap[S.invFilter] || fmap.all).filter((s) => !iq || s.name.toLowerCase().indexOf(iq) > -1 || s.reg.toLowerCase().indexOf(iq) > -1).map((s) => {
      const st = stuStatus(s), p = IV.paidBy[s.reg], add = pvAlloc.add[s.reg] || 0;
      return {
        name: s.name, reg: s.reg, batch: s.batch, hasArr: (s.arr || []).length > 0, arrNote: (s.arr || []).length ? 'Incl. arrears: ' + s.arr.join(', ') : '', items: s.items.length, amt: inr(s.total), paid: inr(p),
        status: st === 'Part paid' ? 'Part paid, ' + inr(p) + ' of ' + inr(s.total) : st, stStyle: st === 'Paid' ? ok : (st === 'Part paid' ? pill('#FBF3DC', '#7A5A00') : rev),
        preview: add ? '+' + inr(add) + (p + add >= s.total ? ', becomes Paid' : '') : '-',
        rowStyle: add ? 'background:#EEF5F1' : '', named: !!P.named[s.reg], done: st === 'Paid',
        toggleNamed: () => set({ pay: Object.assign({}, P, { named: Object.assign({}, P.named, { [s.reg]: !P.named[s.reg] }) }) })
      };
    });
    const invPg = pagerOf(invRowsV, S.invPage, (n) => set({ invPage: n }));
    const invFilters = [['all', 'All'], ['pending', 'Pending'], ['part', 'Part paid'], ['paid', 'Paid']].map((f) => ({ label: f[1], pick: () => set({ invFilter: f[0], invPage: 1 }), style: seg((S.invFilter || 'all') === f[0]) }));
    const fullyPaid = IV.studs.filter((s) => IV.paidBy[s.reg] >= s.total).length;
    const confN = IV.tranches.filter((t) => t.status === 'confirmed').length;
    const fmtDate = (d) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || ''); if (!m) return d || ''; return Number(m[3]) + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m[2]) - 1] + ' ' + m[1]; };
    const updInv = (fn) => set({ invoices: S.invoices.map((i) => (i.id === IV.id ? fn(i) : i)) });
    const otherInds = (S.partnerInd[IV.partner] || IND_DEF[IV.partner] || []).concat(FB.filter((b) => b.partner === IV.partner).map((b) => b.industry)).filter((v, i, a) => a.indexOf(v) === i)
      .filter((ind) => ind !== IV.industry && FB.some((b) => b.partner === IV.partner && b.industry === ind && b.active && b.st.some((st) => st[2].some((m) => (invMonths[st[1]] || []).indexOf(m) < 0))));
    const iv = {
      hasOther: otherInds.length > 0, otherText: IV.partner + ' also has uninvoiced dues in ' + otherInds.join(' and ') + '. Each industry is billed on its own invoice because the fee structures differ.',
      otherBtn: otherInds.length ? 'Create invoice for ' + otherInds[0] : '', otherGo: () => set({ screen: 'invNew', wz: wzInit(IV.partner, null, otherInds[0]) }),
      id: IV.id, meta: IV.partner + ', ' + (IV.industry ? IV.industry + ' industry, ' : '') + periodOf(IV.from, IV.to) + ', ' + IV.heads.map((h) => headById[h][1]).join(' + ') + ', issued ' + IV.issued + ', due ' + IV.due,
      status: invStatusLabel[IV.statusKey], stStyle: invStatusStyle[IV.statusKey], invoiced: inr(IV.total), paid: inr(IV.paid), balance: inr(IV.balance), credit: inr(IV.credit),
      barPaid: 'height:100%;background:#2E7D66;width:' + Math.min(100, IV.applied / Math.max(1, IV.total) * 100) + '%',
      barRec: 'height:100%;width:' + Math.min(100, IV.recorded / Math.max(1, IV.total) * 100) + '%;background:repeating-linear-gradient(45deg,#C77A1E 0 6px,#F3D9B5 6px 12px)',
      progress: fullyPaid + ' of ' + IV.studs.length + ' students fully paid, ' + confN + ' tranche(s) confirmed',
      reminded: !!S.reminded[IV.id], remindLabel: S.reminded[IV.id] ? 'Reminder sent' : 'Send reminder', payDisabled: IV.balance <= 0 || S.payOpen,
      trCount: IV.tranches.length + (IV.tranches.length === 1 ? ' tranche' : ' tranches'), noTr: IV.tranches.length === 0,
      balanceNote: IV.balance > 0 ? 'Stays open until fully paid; reminder on due date' : 'Invoice settled in full',
      tranches: IV.tranches.map((t, k) => {
        const c = t.status === 'confirmed', o = IV.trOut[k];
        return {
          n: k + 1, amt: inr(t.amt), status: c ? 'Confirmed' : 'Recorded, to verify', stStyle: c ? ok : pill(OT, O),
          meta: t.date + ', ' + t.utr + ', recorded by ' + t.by, cover: c ? 'Covered ' + o.covered + ' students, ' + inr(o.sum || 0) : 'Not applied until the Fees team verifies it',
          dot: 'width:12px;height:12px;border-radius:50%;flex:none;margin-top:4px;background:' + (c ? '#2E7D66' : '#C77A1E'),
          canVerify: !c, verify: () => updInv((i) => Object.assign({}, i, { tranches: i.tranches.map((x, j) => (j === k ? Object.assign({}, x, { status: 'confirmed' }) : x)) }))
        };
      })
    };
    const pay = {
      amt: P.amt, date: P.date, utr: P.utr, isPriority: P.mode === 'priority', isNamed: P.mode === 'named',
      prStyle: 'display:flex;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;border:' + (P.mode === 'priority' ? '1.5px solid #1D5546;background:#EEF5F1' : '1px solid #DADFD8'),
      nmStyle: 'display:flex;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;border:' + (P.mode === 'named' ? '1.5px solid #1D5546;background:#EEF5F1' : '1px solid #DADFD8'),
      note: amtN > 0 ? 'Covers ' + Object.keys(pvAlloc.add).length + ' students (' + inr(pvSum) + ').' + (pvAlloc.credit > 0 ? ' ' + inr(pvAlloc.credit) + ' held as credit.' : '') : 'Enter the amount received to see who it covers.',
      noteStyle: 'border-radius:8px;padding:10px 12px;font-size:13px;' + (amtN > 0 ? 'background:#EEF5F1;color:#1D5546;font-weight:600' : 'background:#F3F4F0;color:#56605B'),
      blocked: amtN <= 0 || !String(P.utr).trim()
    };
    const setP = (p) => set({ pay: Object.assign({}, P, p) });
    const freshPay = { amt: '', date: '2026-10-06', utr: '', mode: 'priority', named: {} };


    // Cycle progress (Complete step / Restart)
    const gates = {
      1: [S.currReq, 'curr', 'Ask the Academic and LMS team to upload the missing curriculum first.'],
      2: [S.escalated, 'curr', 'Escalate the missing question paper first.'],
      3: [feeGateOk, 'fees', 'Invoice every student with pending fees first.'],
      4: [nMism === 0, 'learner', 'Approve the learner data corrections first.'],
      6: [invAll, 'sched', 'Select and confirm an invigilator for every location first.'],
      7: [S.schedShared, 'sched', 'Share the exam schedule first.'],
      8: [S.notice >= 4, 'notice', 'Finish the 4 notice steps first.'],
      9: [S.dispatched, 'notice', 'Record the courier dispatch first.'],
      11: [S.room, 'day', 'Upload the exam room photo first.'],
      13: [S.omr, 'day', 'Reconcile the OMR return first.'],
      14: [S.res >= 1, 'results', 'Enter all marks and confirm tabulation first.'],
      15: [S.res >= 1, 'results', 'Confirm the tabulated result first.'],
      16: [S.res >= 2, 'results', 'Apply grace marks first.'],
      17: [S.res >= 3, 'results', 'Get board approval first.'],
      18: [S.res >= 4, 'results', 'Publish the secure PDF first.'],
      20: [S.v1 && S.v2, 'marks', 'Get both sign-offs first.'],
      21: [S.shipped, 'marks', 'Print and record the dispatch first.'],
      22: [Object.keys(S.redo).length >= 2, 'marks', 'Re-dispatch the returned marksheets first.']
    };
    const ci = cy.stage;
    const allDone = ci >= 23;
    const gate = allDone ? null : gates[ci];
    const gBlocked = !!gate && !gate[0];
    const tabName = (k) => (tabDefs.find((t) => t[0] === k) || ['', ''])[1];
    const pg = {
      num: ci + 1, notDone: !allDone,
      kicker: allDone ? 'Cycle complete' : 'Current step ' + (ci + 1) + ' of 23, ' + phaseName[steps[ci][2]].toLowerCase(),
      title: allDone ? 'All 23 steps are done for ' + cy.code : steps[ci][0] + ' (' + steps[ci][1] + ')',
      msg: allDone ? 'Restart the cycle to walk through it again.' : (gBlocked ? gate[2] : 'Ready to complete.'),
      msgStyle: 'font-size:13px;font-weight:600;color:' + (gBlocked ? O : G),
      blocked: gBlocked,
      showGo: gBlocked && S.tab !== gate[1], goLabel: gBlocked ? 'Open ' + tabName(gate[1]) : '', go: gBlocked ? () => set({ tab: gate[1] }) : () => {},
      complete: () => set({ prog: Object.assign({}, S.prog, { [cy.id]: ci + 1 }), tab: allDone ? S.tab : (ci + 1 <= 22 ? steps[ci + 1][3] : S.tab) }),
      restart: () => set(Object.assign(Component.fresh(), { screen: 'cycle', cycleId: cy.id, tab: 'overview', prog: Object.assign({}, S.prog, { [cy.id]: 0 }) }))
    };

    return {
      pg, loc1: locNames[0], loc2: locNames[1], loc1n: half, loc2n: cy.students - half, loc1used: half - 6, loc2got: String(cy.students - half - 2),
      resetDemo: () => set(Component.fresh()),
      navGroups, roles, roleLabel, tasks, pipeline, calRows, cycleRows: all,
      calTabs, calDue: ct === 'due', calExamList: ct !== 'due', calExams, calAny: calExams.length > 0, calEmpty: calExams.length === 0,
      calEmptyText: ct === 'up' ? 'No upcoming exams.' : 'No exams conducted yet.', calStatusHead: ct === 'up' ? 'Readiness' : 'Result status',
      isDashboard: S.screen === 'dashboard', isCalendar: S.screen === 'calendar', isCycles: S.screen === 'cycles', isCycle: S.screen === 'cycle',
      goCycles: go('cycles'),
      cy, tabs, lock, tabLocked: S.screen === 'cycle' && !isOpen,
      tabOverview: S.screen === 'cycle' && S.tab === 'overview', phases,
      okPill: ok, revPill: rev,

      tabLearner: show('learner'), eligRows, eligStats, hasStudent: !!sel, stu, closeStudent: () => set({ stu: null }),
      tabFees: show('fees'), cfHas: !!cfb, cfNone: !cfb, cfStats, cfRows, cfCanInvoice: cfNotInv > 0, cfInvoice: cfb ? startWizard(cfb.partner, cfb.code) : () => {},
      cfNote: cfNotInv > 0 ? 'Step 4 completes once every student with dues is on an invoice.' : 'All dues are invoiced. Confirmed payments update this list.',
      isFees: S.screen === 'fees', isInvNew: S.screen === 'invNew', isInv: S.screen === 'inv', goFees: go('fees'), newInvoice: startWizard('Partner A'),
      feeFlow, feeKpis, invList, ratePartner: RP, pickRatePartner: (e) => set({ ratePartner: e.target.value }), rateBadge: PI.length + ' industries, ' + nCustom + ' with custom fees', rateBadgeStyle: nCustom ? rev : neu, indRows, addableInd, canAddInd: addableInd.length > 0, stdTui: inr(DEFAULT_RATES.tui), stdExam: inr(DEFAULT_RATES.exam),
      addInd: (e) => { if (e.target.value) set({ partnerInd: Object.assign({}, S.partnerInd, { [RP]: PI.concat([e.target.value]) }) }); },
      resetRates: () => { const r = Object.assign({}, S.rates); delete r[RP]; set({ rates: r }); }, editRates: () => set({ screen: 'fees', headsOpen: true, ratePartner: W.partner }), headsOpen: !!S.headsOpen, headsOpenAria: S.headsOpen ? 'true' : 'false', toggleHeads: () => set({ headsOpen: !S.headsOpen }),
      invListTitle: S.allInv ? 'All invoices' : 'Open invoices', invListToggle: S.allInv ? 'Open invoices only' : 'All invoices', toggleAllInv: () => set({ allInv: !S.allInv }),
      wz: W, wz1: W.step === 1, wzUp: W.step === 2, wz2: W.step === 3, wz3: W.step === 4, wzSteps, up, db, wzUpBlocked: !wzAll.length,
      partnerOpts: PARTNERS, monthOpts: MON.map((m, i) => ({ v: String(i), l: m + ' 2026' })),
      wzPartner: (e) => set({ wz: wzInit(e.target.value) }), wzIndustry: (e) => setW({ industry: e.target.value, batches: null, excl: {}, upload: null }), wzInd: WI, industryOpts, wzMonth: (e) => setW({ from: e.target.value, to: e.target.value, batches: null, excl: {}, upload: null }), wzDue: (e) => setW({ due: e.target.value }), wzQ: (e) => setW({ q: e.target.value }),
      wzHeads: HEADS.map((h) => ({ label: h[1], rate: (() => { const vals = (selBatches.length ? selBatches : pBatches).map((b) => rateOf(W.partner, b.industry)[h[0]]); if (!vals.length) return inr(DEFAULT_RATES[h[0]]) + ', ' + h[3]; const lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals); return (lo === hi ? inr(lo) : inr(lo) + ' to ' + inr(hi) + ' by industry') + ', ' + h[3]; })(), on: !!W.heads[h[0]], toggle: () => setW({ heads: Object.assign({}, W.heads, { [h[0]]: !W.heads[h[0]] }) }), style: 'display:flex;gap:10px;padding:12px;border-radius:10px;cursor:pointer;border:' + (W.heads[h[0]] ? '1.5px solid #1D5546;background:#EEF5F1' : '1px solid #DADFD8;background:#FFFFFF') })),
      wzSuggested, wzOther, wzNoSuggested: sugg.length === 0, wzNoStudents: wzAll.length === 0 && !useCsv, src, periodLabel: periodOf(fromN, toN),
      wzHeadCount: headsSel.length, wzBatchCount: selBatches.length, wzArrLabel: wzAll.some((r) => r.arr.length) ? inr(wzAll.reduce((a, r) => a + r.arrAmt, 0)) + ', ' + wzAll.filter((r) => r.arr.length).length + ' students' : 'None', wzStudCount: wzAll.length, wzTotal: inr(wzAll.reduce((a, r) => a + r.amt, 0)),
      wz1Blocked: !headsSel.length || !WI, wzNext: () => setW({ step: W.step + 1 }), wzBack: () => setW({ step: W.step - 1 }),
      wzSelAll: () => setW({ excl: {} }), wzClear: () => { const ex = {}; wzAll.forEach((r) => { ex[r.reg] = true; }); setW({ excl: ex }); },
      wzRows, wzSelCount: wzIncl.length, wzSelTotal: inr(wzTotal), wz2Blocked: !wzIncl.length,
      pv: { hasArr: arrStud.length > 0, arr: pvArr, arrTotal: inr(arrTotal), id: pvId, issued: '6 Oct 2026', due: dueMap[W.due] + ' (' + W.due + ' days)', lines: pvLines, n: wzIncl.length, total: inr(wzTotal), batches: pvBatches },
      wzEmail: (e) => setW({ email: e.target.value }), wzCopy: (e) => setW({ copy: e.target.value }), wzSend,
      iv, invRowsV, invPg, invFilters, invQ: S.invQ || '', setInvQ: (e) => set({ invQ: e.target.value, invPage: 1 }), invCountText: invRowsV.length + ' of ' + IV.studs.length + ' students',
      rv, pageSize: String(PS), setPageSize: (e) => set({ pageSize: e.target.value }), pay, payOpen: !!S.payOpen, payNamedMode: !!S.payOpen && P.mode === 'named',
      openPay: () => set({ payOpen: true, pay: freshPay }), closePay: () => set({ payOpen: false, pay: freshPay }),
      payAmt: (e) => setP({ amt: e.target.value }), payDate: (e) => setP({ date: e.target.value }), payUtr: (e) => setP({ utr: e.target.value }),
      payPriority: () => setP({ mode: 'priority' }), payNamed: () => setP({ mode: 'named' }),
      confirmPay: () => { const t = { amt: amtN, date: fmtDate(P.date), utr: P.utr.trim(), by: 'Fees team', status: 'confirmed', named: P.mode === 'named' ? namedRegs : [] }; set({ invoices: S.invoices.map((i) => (i.id === IV.id ? Object.assign({}, i, { tranches: i.tranches.concat([t]) }) : i)), payOpen: false, pay: freshPay }); },
      printInv: () => { try { window.print(); } catch (e) {} }, remindInv: () => set({ reminded: Object.assign({}, S.reminded, { [IV.id]: true }) }),

      tabCurr: show('curr'), subjects, escalate: () => set({ escalated: true }),
      reqCurr: () => set({ currReq: true }), currCount: currUp + ' of ' + subjDefs.length,
      currNote: S.currReq ? 'Academic and LMS team notified' : 'RSA103 not uploaded in LMS', currNoteStyle: 'font-size:13px;font-weight:600;color:' + (S.currReq ? B : O),
      qpCount: S.escalated ? '4 of 5 (1 escalated)' : '4 of 5', qpNote: S.escalated ? 'LMS and Content team notified' : 'RSA104 missing: escalate now', qpNoteStyle: 'font-size:13px;font-weight:600;color:' + (S.escalated ? B : O),

      tabSched: show('sched'), invRows, trainerRows, trainerCity: cityOf, badPill: bad, invNames: invRows.map((r) => r.detail.split(',')[0]).join(' and '),
      schedule, fixDate: () => set({ dateFixed: true }), shareSched: () => set({ schedShared: true }), schedBlocked,
      schedNote: S.schedShared ? 'Shared 5 Oct 2026 with partner, 2 trainers and 312 students.' : (S.dateFixed ? 'All subjects are on the partner-confirmed dates.' : 'Move subjects outside the partner-confirmed dates before sharing.'),

      tabNotice: show('notice'), preCheck, noticeSteps,
      noticeHasNext: S.notice < 4, noticeCta: ctas[Math.min(S.notice, 3)], noticeBlocked: !preDone, noticeNext: () => set({ notice: S.notice + 1 }),
      noticeNote: S.notice >= 4 ? 'Signed notice shared with the Program team, partner and invigilators.' : (preDone ? 'Pre-exam checks complete.' : 'Finish the open pre-exam checks above first.'),
      omrCount: cy.students, qpPrint: Math.ceil(cy.students * 1.05),
      notDispatched: !S.dispatched, dispatchParcel: () => set({ dispatched: true }),
      trk1: S.dispatched ? 'PNQ-48213077' : 'Not dispatched', trk2: S.dispatched ? 'PNQ-48213078' : 'Not dispatched',
      parcelLabel: S.dispatched ? 'In transit' : 'Packing', parcelStyle: S.dispatched ? rev : neu,
      onlineSubjects: onlineList.length ? onlineList.join(', ') : 'none',
      toggleProc: () => set({ proc: !S.proc }), procAria: S.proc ? 'true' : 'false', procLabel: S.proc ? 'On' : 'Off', procStyle: chip(S.proc),

      tabDay: show('day'),
      vivaRows: [{ name: 'Priya Sharma', marks: '17' }, { name: 'Sneha Patil', marks: '15' }, { name: 'Imran Khan', marks: '14' }, { name: 'Kavya Nair', marks: '16' }],
      vivaSaved: S.viva, saveViva: () => set({ viva: true }),
      roomPending: !S.room, roomLabel: S.room ? 'Uploaded just now' : 'Missing: blocks results', roomStyle: S.room ? ok : bad, uploadRoom: () => set({ room: true }),
      attLabel: 'Waiting', attStyle: rev, omrTrk: 'HYD-90044127',
      omrOpen: !S.omr, omrLabel: S.omr ? 'Discrepancy reported: 2 short' : '208 of 210: 2 short', omrStyle: S.omr ? rev : bad, reportOmr: () => set({ omr: true }),

      tabResults: show('results'), resSteps, rSubjects, rCur, rEntry, tabRows, rSubjCount: rSubj.length, rMaxTotal: rSubj.length * 100,
      resHasNext: S.res < 4, resCta: resCtas[Math.min(S.res, 3)], resBlocked: S.res === 0 && !allEntered, resNext: () => set({ res: S.res + 1 }), resNote: resNotes[S.res],

      tabMarks: show('marks'),
      v1Done: S.v1, v1Open: !S.v1, v2Done: S.v2, v2Open: !S.v2,
      signV1: () => set({ v1: true }), signV2: () => set({ v2: true }),
      lockNote: locked ? 'Final marksheets locked. No changes allowed.' : 'Both sign-offs are required to lock.', lockNoteStyle: 'margin:10px 0 0;font-size:13px;font-weight:600;color:' + (locked ? G : MUT),
      shipBlocked: !locked || S.shipped, shipCta: S.shipped ? 'Dispatched with ' + cy.students + ' tracking numbers' : 'Print and record dispatch', printShip: () => set({ shipped: true }),
      delRows, shipped: S.shipped, notShipped: !S.shipped
    };
  }
}
function tpl(__v){return [__h("div",{"style":"font-family:'Instrument Sans',system-ui,-apple-system,'Segoe UI',sans-serif;color:#18201D;background:#F3F4F0;min-height:100vh;font-size:15px;line-height:1.5"},__h("header",{"style":"display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;padding:12px 24px;background:#FFFFFF;border-bottom:1px solid #DADFD8"},__h("div",{"style":"display:flex;align-items:center;gap:10px;min-width:200px"},__h("svg",{"width":"28","height":"28","viewBox":"0 0 28 28","aria-hidden":"true"},__h("rect",{"x":"2","y":"2","width":"24","height":"24","rx":"6","fill":"#1D5546"}),__h("path",{"d":"M8 10h12M8 14h8M8 18h12","stroke":"#FFFFFF","stroke-width":"2","stroke-linecap":"round"})),__h("div",{},__h("div",{"style":"font-weight:700;font-size:17px;line-height:1.1"},"EduVault"),__h("div",{"style":"font-size:12px;color:#56605B"},"Medhavi Skills University"))),__h("label",{"style":"flex:1 1 240px;max-width:420px;display:flex;align-items:center;gap:8px;border:1px solid #DADFD8;border-radius:8px;padding:0 12px;min-height:40px;background:#F8F9F6"},__h("svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"#56605B","stroke-width":"2","aria-hidden":"true"},__h("circle",{"cx":"11","cy":"11","r":"7"}),__h("path",{"d":"M20 20l-4-4"})),__h("span",{"class":"sr"},"Search"),__h("input",{"type":"search","placeholder":"Search Reg No, student, batch or cycle","style":"border:0;background:transparent;font:inherit;font-size:14px;flex:1;min-width:0;outline:none"})),__h("div",{"style":"display:flex;align-items:center;gap:12px;margin-left:auto;flex-wrap:wrap"},__h("span",{"style":"display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#1D5546;background:#E3EEE9;padding:4px 10px;border-radius:99px"},__h("svg",{"width":"8","height":"8","aria-hidden":"true"},__h("circle",{"cx":"4","cy":"4","r":"4","fill":"#1D5546"})),"LMS synced 09:40\n    "),__h("span",{"style":"font-size:13px;color:#8A420A;background:#FBEEDF;padding:4px 10px;border-radius:99px"},"Sample data"),__h("span",{"aria-label":"Signed in as Vivek Singh Rawat","style":"width:36px;height:36px;border-radius:50%;background:#18201D;color:#FFFFFF;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:600"},"VR"))),__h("div",{"style":"display:flex;flex-wrap:wrap;align-items:flex-start"},__h("nav",{"aria-label":"Main","style":"flex:1 1 232px;max-width:100%;box-sizing:border-box;padding:20px 14px;display:flex;flex-direction:column;gap:18px"},(__v.navGroups||[]).map((g)=>[__h("div",{"style":"display:flex;flex-direction:column;gap:2px"},__h("div",{"style":"font-size:12px;font-weight:600;color:#56605B;padding:0 10px 6px"},__S(g.label)),(g.items||[]).map((item)=>[__h("button",{"onclick":item.pick,"style":item.style},__h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},__h("path",{"d":item.d})),__h("span",{"style":"flex:1;text-align:left"},__S(item.label)),(__T(item.hasCount)?[__h("span",{"style":"font-size:12px;background:#FBEEDF;color:#8A420A;border-radius:99px;padding:1px 8px;font-weight:600"},__S(item.count))]:null))]))]),__h("button",{"class":"btn","onclick":__v.resetDemo,"style":"display:flex;align-items:center;justify-content:center;gap:8px;width:100%"},__h("svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},__h("path",{"d":"M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"})),"\n    Reset to starting data\n  ")),__h("main",{"style":"flex:999 1 560px;min-width:0;box-sizing:border-box;padding:24px 28px 56px;display:flex;flex-direction:column;gap:20px"},(__T(__v.isDashboard)?[__h("div",{"style":"display:flex;flex-direction:column;gap:20px"},__h("div",{"style":"display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:12px"},__h("div",{},__h("h1",{"style":"margin:0;font-size:28px;font-weight:700;letter-spacing:-0.01em"},"Examination overview"),__h("p",{"style":"margin:4px 0 0;color:#56605B"},"23 steps from due date to marksheet delivery. Pick a team to see its queue."))),__h("div",{"role":"group","aria-label":"Show tasks for team","style":"display:flex;flex-wrap:wrap;gap:6px"},(__v.roles||[]).map((r)=>[__h("button",{"onclick":r.pick,"style":r.style},__S(r.label))])),__h("section",{"aria-label":"Pipeline","style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px"},(__v.pipeline||[]).map((p)=>[__h("div",{"class":"card","style":"padding:16px 18px"},__h("div",{"style":"font-size:14px;color:#56605B"},__S(p.label)),__h("div",{"style":"font-size:34px;font-weight:700;line-height:1.2"},__S(p.count)),__h("div",{"class":"sub"},__S(p.hint)))])),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start"},__h("section",{"class":"card","style":"flex:3 1 420px;min-width:0"},__h("div",{"style":"padding:16px 18px;border-bottom:1px solid #EBEEE9;display:flex;justify-content:space-between;gap:8px"},__h("h2",{"style":"margin:0;font-size:17px"},"Needs action: "+__S(__v.roleLabel))),__h("ul",{"style":"list-style:none;margin:0;padding:0"},(__v.tasks||[]).map((t)=>[__h("li",{"style":"display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;padding:14px 18px;border-bottom:1px solid #EBEEE9"},__h("span",{"style":t.dotStyle}),__h("div",{"style":"flex:1 1 260px;min-width:0"},__h("div",{"style":"font-weight:600"},__S(t.title)),__h("div",{"class":"sub"},__S(t.meta))),__h("button",{"class":"btn","onclick":t.go},__S(t.cta)))]))),__h("section",{"class":"card","style":"flex:2 1 300px;min-width:0;padding:16px 18px"},__h("h2",{"style":"margin:0 0 10px;font-size:17px"},"Rules the system enforces"),__h("ul",{"style":"margin:0;padding-left:18px;display:flex;flex-direction:column;gap:7px;font-size:14px"},__h("li",{},"Pending fees or missing Reg No blocks LMS access and the exam."),__h("li",{},"Exam date follows the partner's availability. The calendar due date is the starting point, and every reschedule is logged."),__h("li",{},"Fees must clear at least 7 days before the exam date."),__h("li",{},"No exam without a question paper for every subject."),__h("li",{},"Exam room photo is required before results; attendance sheet has no deadline."),__h("li",{},"All marks (CWA, internal, viva) before tabulation."),__h("li",{},"Learner data verified twice before TrueScholar; no changes after final approval."),__h("li",{},"Every courier has a tracking number; undelivered marksheets re-dispatched within 7 days.")))))]:null),(__T(__v.isCalendar)?[__h("div",{"style":"display:flex;flex-direction:column;gap:18px"},__h("div",{},__h("h1",{"style":"margin:0;font-size:28px;font-weight:700"},"Exam calendar"),__h("p",{"style":"margin:4px 0 0;color:#56605B"},"Due dates set by the Assessment team, exams coming up, and exams already conducted.")),__h("div",{"role":"tablist","aria-label":"Calendar view","style":"display:flex;flex-wrap:wrap;gap:2px;border-bottom:1px solid #DADFD8"},(__v.calTabs||[]).map((t)=>[__h("button",{"role":"tab","aria-selected":t.active,"onclick":t.pick,"style":t.style},__S(t.label)+" ",__h("span",{"style":t.countStyle},__S(t.count)))])),(__T(__v.calDue)?[__h("div",{"class":"card","style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:640px"},__h("thead",{},__h("tr",{},__h("th",{},"Batch"),__h("th",{},"Due date"),__h("th",{},__h("span",{"class":"sr"},"Action")))),__h("tbody",{},(__v.calRows||[]).map((b)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(b.batch)),__h("div",{"class":"sub"},__S(b.program)+", "+__S(b.students)+" students")),__h("td",{},__h("strong",{},__S(b.due))),__h("td",{"style":"text-align:right"},(__T(b.hasAction)?[__h("button",{"class":"btn btn-p","onclick":b.act},"Start exam cycle")]:null),(__T(b.isStarted)?[__h("button",{"class":"link","onclick":b.openCycle},"Open exam cycle")]:null)))]))))]:null),(__T(__v.calExamList)?[(__T(__v.calEmpty)?[__h("div",{"class":"card","style":"padding:32px 24px;text-align:center;border-style:dashed;color:#56605B"},__S(__v.calEmptyText))]:null),(__T(__v.calAny)?[__h("div",{"class":"card","style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:860px"},__h("thead",{},__h("tr",{},__h("th",{},"Exam cycle"),__h("th",{},"Exam date"),__h("th",{},"Location"),__h("th",{},"Students"),__h("th",{},__S(__v.calStatusHead)),__h("th",{},__h("span",{"class":"sr"},"Action")))),__h("tbody",{},(__v.calExams||[]).map((e)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(e.code)),__h("div",{"class":"sub"},__S(e.title))),__h("td",{},__h("strong",{},__S(e.examDate)),__h("div",{"class":"sub"},"Due "+__S(e.due))),__h("td",{},__S(e.location)),__h("td",{},__S(e.students)),__h("td",{},__h("span",{"style":e.pillStyle},__S(e.pill)),__h("div",{"class":"sub"},"Step "+__S(e.stepNo)+": "+__S(e.stepName))),__h("td",{"style":"text-align:right"},__h("button",{"class":"link","onclick":e.open},"Open exam cycle")))]))))]:null)]:null))]:null),(__T(__v.isCycles)?[__h("div",{"style":"display:flex;flex-direction:column;gap:18px"},__h("div",{},__h("h1",{"style":"margin:0;font-size:28px;font-weight:700"},"Exam cycles"),__h("p",{"style":"margin:4px 0 0;color:#56605B"},"A cycle starts once the exam is rescheduled to the partner's date. Start new cycles from the exam calendar.")),__h("div",{"class":"card","style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:860px"},__h("thead",{},__h("tr",{},__h("th",{},"Cycle"),__h("th",{},"Vertical"),__h("th",{},"Location"),__h("th",{},"Students"),__h("th",{},"Exam date (partner)"),__h("th",{},"Current step"))),__h("tbody",{},(__v.cycleRows||[]).map((c)=>[__h("tr",{},__h("td",{},__h("button",{"class":"link","onclick":c.open},__S(c.code)),__h("div",{"class":"sub"},__S(c.title))),__h("td",{},__h("span",{"style":c.vStyle},__S(c.vertical))),__h("td",{},__S(c.location)),__h("td",{},__S(c.students)),__h("td",{},__S(c.examDate),__h("div",{"class":"sub"},"Due "+__S(c.due))),__h("td",{"style":"min-width:220px"},__h("div",{"style":"font-size:14px;font-weight:500"},__S(c.stepNo)+". "+__S(c.stepName)),__h("div",{"style":"height:6px;background:#EBEEE9;border-radius:99px;margin-top:6px"},__h("div",{"style":c.barStyle})),__h("div",{"style":"font-size:12px;color:#56605B;margin-top:4px"},__S(c.phase))))])))))]:null),(__T(__v.isFees)?[__h("div",{"style":"display:flex;flex-direction:column;gap:18px"},__h("div",{"style":"display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:12px"},__h("div",{"style":"max-width:680px"},__h("h1",{"style":"margin:0;font-size:28px;font-weight:700"},"Partner fees"),__h("p",{"style":"margin:4px 0 0;color:#56605B"},"Select a partner's active students in bulk, let the system work out what is pending across fee heads, send one invoice, and record payments as they arrive, in full or in parts.")),__h("div",{"style":"display:flex;gap:8px;flex-wrap:wrap"},__h("button",{"class":"btn","onclick":__v.toggleHeads,"aria-pressed":__v.headsOpenAria},"Fee structure"),__h("button",{"class":"btn btn-p","onclick":__v.newInvoice},"Create invoice"))),__h("ol",{"aria-label":"How partner fees work","style":"list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:1px;background:#DADFD8;border:1px solid #DADFD8;border-radius:12px;overflow:hidden"},(__v.feeFlow||[]).map((f)=>[__h("li",{"style":"background:#FFFFFF;padding:14px 16px"},__h("span",{"style":"display:inline-flex;width:24px;height:24px;border-radius:50%;background:#1D5546;color:#FFFFFF;align-items:center;justify-content:center;font-size:12px;font-weight:700"},__S(f.n)),__h("div",{"style":"font-weight:700;font-size:14px;margin-top:8px"},__S(f.t)),__h("div",{"class":"sub"},__S(f.d)))])),(__T(__v.headsOpen)?[__h("section",{"class":"card","aria-label":"Fee structure by partner and industry"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline"},__h("h2",{"style":"margin:0;font-size:16px"},"Fee structure by partner and industry"),__h("span",{"class":"sub"},"Fee heads: Tuition fee (per month) and Examination fee (per semester). Changes apply to new invoices only.")),__h("div",{"style":"padding:14px 16px;display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end;border-bottom:1px solid #EBEEE9"},__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600;flex:0 1 260px"},"Partner\n            ",__h("select",{"class":"inp","style":"font-weight:400","value":__v.ratePartner,"onchange":__v.pickRatePartner},(__v.partnerOpts||[]).map((o)=>[__h("option",{"value":o},__S(o))]))),(__T(__v.canAddInd)?[__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600;flex:0 1 260px"},"Add an industry for "+__S(__v.ratePartner)+"\n              ",__h("select",{"class":"inp","style":"font-weight:400","value":"","onchange":__v.addInd},__h("option",{"value":""},"Select industry"),(__v.addableInd||[]).map((o)=>[__h("option",{"value":o},__S(o))])))]:null),__h("span",{"style":__v.rateBadgeStyle},__S(__v.rateBadge))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:720px"},__h("thead",{},__h("tr",{},__h("th",{},"Industry"),__h("th",{"style":"text-align:right"},"Batches"),__h("th",{},"Tuition fee (\u20b9 per month)"),__h("th",{},"Examination fee (\u20b9 per semester)"),__h("th",{},"Structure"),__h("th",{},__h("span",{"class":"sr"},"Action")))),__h("tbody",{},(__v.indRows||[]).map((r)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(r.ind))),__h("td",{"style":"text-align:right"},__S(r.batches)),(r.cells||[]).map((c)=>[__h("td",{},__h("input",{"class":"inp","inputmode":"numeric","value":c.val,"oninput":c.change,"aria-label":c.aria,"style":c.style}))]),__h("td",{},__h("span",{"style":r.pillStyle},__S(r.pill))),__h("td",{},(__T(r.custom)?[__h("button",{"class":"link","onclick":r.reset,"style":"font-size:13px"},"Use standard")]:null)))])))),__h("div",{"style":"padding:10px 16px;border-top:1px solid #EBEEE9;display:flex;gap:10px;flex-wrap:wrap;align-items:center"},__h("button",{"class":"btn","onclick":__v.resetRates},"Use standard rates for all "+__S(__v.ratePartner)+" industries"),__h("span",{"class":"sub"},"Standard: Tuition "+__S(__v.stdTui)+" per month, Examination "+__S(__v.stdExam)+" per semester. Different amounts are highlighted in blue.")))]:null),__h("section",{"aria-label":"Fee summary","style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px"},(__v.feeKpis||[]).map((k)=>[__h("div",{"class":"card","style":k.style},__h("div",{"class":"sub","style":"font-size:14px"},__S(k.label)),__h("div",{"style":k.valStyle},__S(k.value)),__h("div",{"class":"sub"},__S(k.hint)))])),__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap"},__h("h2",{"style":"margin:0;font-size:17px"},__S(__v.invListTitle)),__h("button",{"class":"link","onclick":__v.toggleAllInv},__S(__v.invListToggle))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:980px"},__h("thead",{},__h("tr",{},__h("th",{},"Invoice"),__h("th",{},"Partner"),__h("th",{},"Industry"),__h("th",{},"Month"),__h("th",{},"Due"),__h("th",{"style":"text-align:right"},"Students"),__h("th",{"style":"text-align:right"},"Invoiced"),__h("th",{},"Paid"),__h("th",{"style":"text-align:right"},"Balance"),__h("th",{},"Status"))),__h("tbody",{},(__v.invList||[]).map((iv)=>[__h("tr",{},__h("td",{},__h("button",{"class":"link","onclick":iv.open,"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(iv.id))),__h("td",{},__h("strong",{},__S(iv.partner))),__h("td",{},__S(iv.industry)),__h("td",{},__S(iv.period)),__h("td",{},__S(iv.due)),__h("td",{"style":"text-align:right"},__S(iv.students)),__h("td",{"style":"text-align:right"},__S(iv.invoiced)),__h("td",{"style":"min-width:200px"},__h("div",{"style":"display:flex;align-items:center;gap:10px"},__h("div",{"style":"flex:0 0 70px;height:6px;border-radius:99px;background:#EBEEE9;overflow:hidden"},__h("div",{"style":iv.barStyle})),__h("span",{"class":"sub"},__S(iv.paid)+", "+__S(iv.tr)))),__h("td",{"style":"text-align:right"},__h("strong",{},__S(iv.balance))),__h("td",{},__h("span",{"style":iv.stStyle},__S(iv.status))))]))))))]:null),(__T(__v.isInvNew)?[__h("div",{"style":"display:flex;flex-direction:column;gap:16px;padding-bottom:70px"},__h("div",{},__h("div",{"class":"sub"},__h("button",{"class":"link","onclick":__v.goFees,"style":"font-size:13px"},"Partner fees")," / Create invoice"),__h("h1",{"style":"margin:2px 0 0;font-size:28px;font-weight:700"},"Create invoice"),__h("p",{"style":"margin:4px 0 0;color:#56605B"},"Invoices are raised every month. Pick a partner, an industry, the fee month and fee heads, then upload the active students. Unpaid earlier months are added as arrears.")),__h("ol",{"aria-label":"Invoice steps","style":"list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));border:1px solid #DADFD8;border-radius:12px;overflow:hidden;background:#FFFFFF"},(__v.wzSteps||[]).map((w)=>[__h("li",{"style":"display:flex"},__h("button",{"onclick":w.go,"disabled":w.locked,"aria-current":w.current,"style":w.style},__h("span",{"style":w.dot},__S(w.mark)),__h("span",{"style":"text-align:left"},__S(w.label))))])),(__T(__v.wz1)?[__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"},__h("section",{"class":"card","style":"flex:3 1 520px;min-width:0"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9"},__h("h2",{"style":"margin:0;font-size:16px"},"Who is this invoice for?")),__h("div",{"style":"padding:16px;display:flex;flex-direction:column;gap:16px"},__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px"},__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600"},"Partner\n                ",__h("select",{"class":"inp","style":"font-weight:400","value":__v.wz.partner,"onchange":__v.wzPartner},(__v.partnerOpts||[]).map((o)=>[__h("option",{"value":o},__S(o))]))),__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600"},"Industry\n                ",__h("select",{"class":"inp","style":"font-weight:400","value":__v.wzInd,"onchange":__v.wzIndustry},(__v.industryOpts||[]).map((o)=>[__h("option",{"value":o.v},__S(o.l))]))),__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600"},"Fee month\n                ",__h("select",{"class":"inp","style":"font-weight:400","value":__v.wz.from,"onchange":__v.wzMonth},(__v.monthOpts||[]).map((o)=>[__h("option",{"value":o.v},__S(o.l))]))),__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600"},"Payment due in\n                ",__h("select",{"class":"inp","style":"font-weight:400","value":__v.wz.due,"onchange":__v.wzDue},__h("option",{"value":"15"},"15 days"),__h("option",{"value":"30"},"30 days"),__h("option",{"value":"45"},"45 days")))),__h("div",{},__h("div",{"style":"font-size:14px;font-weight:600;margin-bottom:8px"},"Fee heads to bill ",__h("span",{"class":"sub","style":"font-weight:400"},"select one or more. Rates come from "+__S(__v.wz.partner)+"'s fee structure for each batch's industry.")," ",__h("button",{"class":"link","onclick":__v.editRates,"style":"font-size:13px;min-height:24px"},"Edit fee structure")),__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px"},(__v.wzHeads||[]).map((h)=>[__h("label",{"style":h.style},__h("input",{"type":"checkbox","checked":h.on,"onchange":h.toggle,"style":"width:18px;height:18px;margin:2px 0 0;accent-color:#1D5546"}),__h("span",{},__h("span",{"style":"display:block;font-weight:600;font-size:14px"},__S(h.label)),__h("span",{"class":"sub"},__S(h.rate))))]))),__h("div",{"style":"display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;border-top:1px solid #EBEEE9;padding-top:14px"},__h("span",{"class":"sub"},"Next: fetch "+__S(__v.wzInd)+" students from EduVault, and upload any extra students from the partner."),__h("button",{"class":"btn btn-p","onclick":__v.wzNext,"disabled":__v.wz1Blocked},"Continue to add students")))),__h("aside",{"style":"flex:1 1 260px;min-width:0;display:flex;flex-direction:column;gap:12px"},__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9"},__h("h2",{"style":"margin:0;font-size:16px"},"Summary")),__h("dl",{"style":"margin:0;padding:12px 16px;display:grid;grid-template-columns:1fr auto;gap:8px 12px;font-size:14px"},__h("dt",{"class":"sub"},"Partner"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.wz.partner)),__h("dt",{"class":"sub"},"Industry"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.wzInd)),__h("dt",{"class":"sub"},"Fee month"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.periodLabel)),__h("dt",{"class":"sub"},"Fee heads"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.wzHeadCount)),__h("dt",{"class":"sub"},"Students with dues"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.wzStudCount)),__h("dt",{"class":"sub"},"Arrears included"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right;color:#8A420A"},__S(__v.wzArrLabel))),__h("div",{"style":"padding:12px 16px;border-top:1px solid #EBEEE9;display:flex;justify-content:space-between;align-items:baseline"},__h("span",{"style":"font-weight:600;font-size:14px"},"Estimated invoice"),__h("span",{"style":"font-size:24px;font-weight:700"},__S(__v.wzTotal)))),__h("div",{"style":"background:#FBEEDF;border:1px solid #EBC9A3;color:#5E2E07;border-radius:10px;padding:12px 14px;font-size:13px"},"Replaces the manual pending-amount sheet the fees team shares with partners today.")))]:null),(__T(__v.wzUp)?[__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"},__h("section",{"class":"card","style":"flex:3 1 520px;min-width:0"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;align-items:center"},__h("div",{},__h("h2",{"style":"margin:0;font-size:16px"},"Add students"),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:6px;margin-top:6px"},__h("span",{"style":__v.up.ctxStyle},__S(__v.wz.partner)),__h("span",{"style":__v.up.ctxStyle},__S(__v.wzInd)),__h("span",{"style":__v.up.ctxStyle},__S(__v.periodLabel)),__h("span",{"style":__v.up.ctxStyle},__S(__v.up.headsText)),__h("button",{"class":"link","onclick":__v.wzBack,"style":"font-size:13px;min-height:26px"},"Change")))),__h("div",{"style":"padding:16px;display:flex;flex-direction:column;gap:16px"},__h("section",{"aria-label":"Active students in EduVault","style":"border:1px solid #DADFD8;border-radius:12px;overflow:hidden"},__h("div",{"style":"padding:12px 14px;background:#F8F9F6;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;align-items:center"},__h("div",{"style":"min-width:0;flex:1 1 300px"},__h("h3",{"style":"margin:0;font-size:15px"},"A. Active students in EduVault"),__h("div",{"class":"sub"},__S(__v.wz.partner)+"'s active "+__S(__v.wzInd)+" students already in our database. Dues and arrears are calculated automatically.")),(__T(__v.db.notFetched)?[__h("button",{"class":"btn btn-p","onclick":__v.db.fetch,"style":"display:inline-flex;align-items:center;gap:8px"},__h("svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true"},__h("ellipse",{"cx":"12","cy":"6","rx":"7","ry":"3"}),__h("path",{"d":"M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"})),"Fetch active students")]:null),(__T(__v.db.fetched)?[__h("div",{"style":"display:flex;gap:8px"},__h("button",{"class":"btn","onclick":__v.db.fetch},"Refresh"),__h("button",{"class":"btn","onclick":__v.db.clear},"Clear"))]:null)),(__T(__v.db.fetched)?[__h("div",{"style":"padding:12px 14px;display:flex;flex-direction:column;gap:10px"},__h("div",{"style":__v.db.summaryStyle},__S(__v.db.summary)),(__T(__v.db.hasRows)?[__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px"},(__v.db.kpis||[]).map((k)=>[__h("div",{"style":"border:1px solid #EBEEE9;border-radius:10px;padding:10px 12px"},__h("div",{"class":"sub"},__S(k.label)),__h("div",{"style":"font-size:20px;font-weight:700"},__S(k.value)))])),__h("div",{"style":"border:1px solid #EBEEE9;border-radius:10px;overflow:hidden"},__h("div",{"style":"padding:8px 12px;border-bottom:1px solid #EBEEE9;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center"},__h("strong",{"style":"font-size:14px"},"By batch ("+__S(__v.db.batchCount)+")"),__h("span",{"class":"sub"},"Click a batch to see its students")),__h("div",{"style":"overflow-x:auto;max-height:260px;overflow-y:auto"},__h("table",{"class":"tbl","style":"min-width:560px"},__h("thead",{},__h("tr",{},__h("th",{},"Batch"),__h("th",{},"Semester"),__h("th",{"style":"text-align:right"},"Active"),__h("th",{"style":"text-align:right"},"With dues"),__h("th",{"style":"text-align:right"},"Amount"))),__h("tbody",{},(__v.db.batches||[]).map((b)=>[__h("tr",{"style":b.rowStyle},__h("td",{},__h("button",{"class":"link","onclick":b.pick,"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(b.code))),__h("td",{},"Sem "+__S(b.sem)),__h("td",{"style":"text-align:right"},__S(b.active)),__h("td",{"style":"text-align:right"},__S(b.due)),__h("td",{"style":"text-align:right"},__h("strong",{},__S(b.amt))))]))))),__h("button",{"class":"btn","onclick":__v.db.toggleList,"aria-expanded":__v.db.listAria,"style":"align-self:flex-start"},__S(__v.db.toggleLabel)),(__T(__v.db.showList)?[__h("div",{"style":"border:1px solid #EBEEE9;border-radius:10px;overflow:hidden"},__h("div",{"style":"padding:10px 12px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;gap:10px;align-items:center"},__h("label",{"style":"flex:1 1 220px;max-width:340px;display:flex;align-items:center;gap:8px;border:1px solid #C9CFC8;border-radius:8px;padding:0 10px;min-height:38px;background:#FFFFFF"},__h("span",{"class":"sr"},"Search students"),__h("svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"#56605B","stroke-width":"2","aria-hidden":"true"},__h("circle",{"cx":"11","cy":"11","r":"7"}),__h("path",{"d":"M20 20l-4-4"})),__h("input",{"value":__v.db.q,"oninput":__v.db.setQ,"placeholder":"Search name or Trainee ID","style":"border:0;outline:none;font:inherit;font-size:14px;flex:1;min-width:0;background:transparent"})),__h("label",{"style":"display:flex;align-items:center;gap:6px;font-size:13px;color:#56605B"},"Batch ",__h("select",{"class":"inp","value":__v.db.batch,"onchange":__v.db.setBatch,"style":"min-height:38px"},__h("option",{"value":""},"All batches"),(__v.db.batchOpts||[]).map((o)=>[__h("option",{"value":o},__S(o))]))),__h("div",{"role":"group","aria-label":"Dues filter","style":"display:inline-flex;border:1px solid #C9CFC8;border-radius:8px;overflow:hidden"},(__v.db.filters||[]).map((f)=>[__h("button",{"onclick":f.pick,"style":f.style},__S(f.label))]))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:640px"},__h("thead",{},__h("tr",{},__h("th",{},"Student"),__h("th",{},"Trainee ID"),__h("th",{},"Batch"),__h("th",{},"Unpaid months"),__h("th",{"style":"text-align:right"},"Amount"),__h("th",{},"Status"))),__h("tbody",{},(__v.db.rows||[]).map((r)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(r.name))),__h("td",{"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(r.tid)),__h("td",{"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(r.batch)),__h("td",{"style":"font-size:13px"},__S(r.months)),__h("td",{"style":"text-align:right"},__S(r.amt)),__h("td",{},__h("span",{"style":r.style},__S(r.status))))])))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;padding:8px 12px;border-top:1px solid #EBEEE9;background:#FBFBF9"},__h("span",{"class":"sub"},__S(__v.db.pg.info)),__h("div",{"style":"display:flex;gap:6px;align-items:center;flex-wrap:wrap"},__h("label",{"class":"sub","style":"display:flex;gap:6px;align-items:center"},"Rows per page ",__h("select",{"class":"inp","value":__v.pageSize,"onchange":__v.setPageSize,"style":"min-height:34px;padding:0 6px"},__h("option",{"value":"25"},"25"),__h("option",{"value":"50"},"50"),__h("option",{"value":"100"},"100"))),__h("button",{"class":"btn","onclick":__v.db.pg.first,"disabled":__v.db.pg.prevDis,"aria-label":"First page","style":"min-height:34px;padding:0 10px"},"\u00ab"),__h("button",{"class":"btn","onclick":__v.db.pg.prev,"disabled":__v.db.pg.prevDis,"style":"min-height:34px"},"Previous"),__h("span",{"class":"sub","style":"min-width:90px;text-align:center"},__S(__v.db.pg.pageLabel)),__h("button",{"class":"btn","onclick":__v.db.pg.next,"disabled":__v.db.pg.nextDis,"style":"min-height:34px"},"Next"),__h("button",{"class":"btn","onclick":__v.db.pg.last,"disabled":__v.db.pg.nextDis,"aria-label":"Last page","style":"min-height:34px;padding:0 10px"},"\u00bb"))))]:null)]:null))]:null),(__T(__v.db.notFetched)?[__h("p",{"class":"sub","style":"margin:0;padding:10px 14px"},"Start here. If the partner has sent students who are not in EduVault yet, add them with a CSV in section B.")]:null)),__h("section",{"aria-label":"More students from the partner","style":"border:1px solid #DADFD8;border-radius:12px;overflow:hidden"},__h("div",{"style":"padding:12px 14px;background:#F8F9F6;border-bottom:1px solid #EBEEE9"},__h("h3",{"style":"margin:0;font-size:15px"},"B. More students from the partner (CSV)"),__h("div",{"class":"sub"},"For new students who are not in EduVault yet, or students missing from the list above. New students are billed for "+__S(__v.periodLabel)+" and added to EduVault when the invoice is sent.")),__h("div",{"style":"padding:14px;display:flex;flex-direction:column;gap:14px"},__h("ol",{"aria-label":"How to upload","style":"list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px"},__h("li",{"style":"border:1px solid #DADFD8;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px"},__h("div",{"style":"display:flex;gap:8px;align-items:center"},__h("span",{"style":__v.up.n1},"1"),__h("strong",{"style":"font-size:14px"},"Download the template")),__h("button",{"class":"btn","onclick":__v.src.downloadTemplate,"style":"display:inline-flex;align-items:center;gap:8px;align-self:flex-start"},__h("svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","aria-hidden":"true"},__h("path",{"d":"M12 4v11M7 10l5 5 5-5M5 20h14"})),"Template CSV")),__h("li",{"style":"border:1px solid #DADFD8;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:6px"},__h("div",{"style":"display:flex;gap:8px;align-items:center"},__h("span",{"style":__v.up.n2},"2"),__h("strong",{"style":"font-size:14px"},"Add the students")),__h("code",{"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;background:#F3F4F0;border-radius:6px;padding:6px 8px;white-space:pre;overflow-x:auto"},"trainee_id,aadhaar_number,student_name,batch_code\nTRN-RSA-0601,498765432101,Sana Sheikh,STF-RSA-B52"),__h("span",{"class":"sub","style":"font-size:12px"},"Name and batch are needed only for new students. Aadhaar: 12 digits.")),__h("li",{"style":"border:1px solid #DADFD8;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px"},__h("div",{"style":"display:flex;gap:8px;align-items:center"},__h("span",{"style":__v.up.n3},"3"),__h("strong",{"style":"font-size:14px"},"Upload and check")),__h("span",{"class":"sub","style":"font-size:13px"},"Each row is matched to a trainee record. Only students with dues are billed."))),(__T(__v.src.hasDlMsg)?[__h("div",{"style":__v.src.dlStyle},__S(__v.src.dlMsg))]:null),(__T(__v.up.noFile)?[__h("div",{"ondragover":__v.up.dragOver,"ondragleave":__v.up.dragLeave,"ondrop":__v.up.drop,"style":__v.up.zoneStyle},__h("svg",{"width":"40","height":"40","viewBox":"0 0 24 24","fill":"none","stroke":"#1D5546","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},__h("path",{"d":"M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3M12 15V4M7 9l5-5 5 5"})),__h("div",{"style":"font-weight:700;font-size:16px"},"Drag and drop your CSV here"),__h("div",{"class":"sub"},"or"),__h("label",{"class":"btn btn-p","style":"display:inline-flex;align-items:center;cursor:pointer"},"Choose CSV file",__h("input",{"type":"file","accept":".csv,text/csv","onchange":__v.src.onFile,"style":"position:absolute;width:1px;height:1px;opacity:0"})),__h("button",{"class":"link","onclick":__v.src.loadSample,"style":"font-size:13px"},"No file handy? Use a sample list"))]:null),(__T(__v.src.hasError)?[__h("div",{"role":"alert","style":"background:#FBEEDF;color:#6B3408;border-radius:8px;padding:10px 12px;font-size:14px"},__h("strong",{},"Could not use this file.")," "+__S(__v.src.error))]:null),(__T(__v.src.hasFile)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},__h("div",{"style":"display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;border:1px solid #DADFD8;border-radius:10px;padding:12px 14px;background:#F8F9F6"},__h("div",{"style":"display:flex;gap:12px;align-items:center;min-width:0"},__h("span",{"style":"width:40px;height:40px;border-radius:8px;background:#E3EEE9;color:#1D5546;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex:none"},"CSV"),__h("div",{"style":"min-width:0"},__h("div",{"style":"font-weight:600;font-size:14px;overflow-wrap:anywhere"},__S(__v.up.fileName)),__h("div",{"class":"sub"},__S(__v.up.fileMeta)))),__h("div",{"style":"display:flex;gap:8px"},__h("label",{"class":"btn","style":"display:inline-flex;align-items:center;cursor:pointer"},"Replace file",__h("input",{"type":"file","accept":".csv,text/csv","onchange":__v.src.onFile,"style":"position:absolute;width:1px;height:1px;opacity:0"})),__h("button",{"class":"btn","onclick":__v.src.clear},"Remove"))),__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px"},(__v.up.stats||[]).map((k)=>[__h("button",{"onclick":k.pick,"aria-pressed":k.active,"style":k.style},__h("span",{"style":"display:block;font-size:13px"},__S(k.label)),__h("span",{"style":"display:block;font-size:26px;font-weight:700;line-height:1.2"},__S(k.value)),__h("span",{"style":"display:block;font-size:12px"},__S(k.hint)))])),(__T(__v.up.hasAttention)?[__h("div",{"style":"background:#FBEEDF;color:#5E2E07;border-radius:8px;padding:10px 12px;font-size:13px"},__S(__v.up.attnText))]:null),__h("div",{"style":"border:1px solid #EBEEE9;border-radius:10px;overflow:hidden"},__h("div",{"style":"padding:8px 12px;border-bottom:1px solid #EBEEE9;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center"},__h("strong",{"style":"font-size:14px"},__S(__v.up.listTitle)),__h("button",{"class":"link","onclick":__v.up.showAll,"style":"font-size:13px;min-height:26px"},__S(__v.up.showAllLabel))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:640px"},__h("thead",{},__h("tr",{},__h("th",{"style":"text-align:right"},"Row"),__h("th",{},"Trainee ID"),__h("th",{},"Aadhaar"),__h("th",{},"Student"),__h("th",{},"Result"))),__h("tbody",{},(__v.up.rows||[]).map((r)=>[__h("tr",{},__h("td",{"style":"text-align:right","class":"sub"},__S(r.n)),__h("td",{"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(r.tid)),__h("td",{"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(r.aad)),__h("td",{},__S(r.student)),__h("td",{},__h("span",{"style":r.style},__S(r.result)),__h("div",{"class":"sub"},__S(r.note))))])))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;padding:8px 12px;border-top:1px solid #EBEEE9;background:#FBFBF9"},__h("span",{"class":"sub"},__S(__v.up.pg.info)),__h("div",{"style":"display:flex;gap:6px;align-items:center;flex-wrap:wrap"},__h("label",{"class":"sub","style":"display:flex;gap:6px;align-items:center"},"Rows per page ",__h("select",{"class":"inp","value":__v.pageSize,"onchange":__v.setPageSize,"style":"min-height:34px;padding:0 6px"},__h("option",{"value":"25"},"25"),__h("option",{"value":"50"},"50"),__h("option",{"value":"100"},"100"))),__h("button",{"class":"btn","onclick":__v.up.pg.first,"disabled":__v.up.pg.prevDis,"aria-label":"First page","style":"min-height:34px;padding:0 10px"},"\u00ab"),__h("button",{"class":"btn","onclick":__v.up.pg.prev,"disabled":__v.up.pg.prevDis,"style":"min-height:34px"},"Previous"),__h("span",{"class":"sub","style":"min-width:90px;text-align:center"},__S(__v.up.pg.pageLabel)),__h("button",{"class":"btn","onclick":__v.up.pg.next,"disabled":__v.up.pg.nextDis,"style":"min-height:34px"},"Next"),__h("button",{"class":"btn","onclick":__v.up.pg.last,"disabled":__v.up.pg.nextDis,"aria-label":"Last page","style":"min-height:34px;padding:0 10px"},"\u00bb")))))]:null))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;align-items:center;border-top:1px solid #EBEEE9;padding-top:14px"},__h("button",{"class":"btn","onclick":__v.wzBack},"Back"),__h("div",{"style":"display:flex;gap:12px;align-items:center;flex-wrap:wrap"},__h("span",{"class":"sub"},__S(__v.up.footer)),__h("button",{"class":"btn btn-p","onclick":__v.wzNext,"disabled":__v.wzUpBlocked},__S(__v.up.cta)))))),__h("aside",{"style":"flex:1 1 260px;min-width:0;display:flex;flex-direction:column;gap:12px"},__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9"},__h("h2",{"style":"margin:0;font-size:16px"},"Summary")),__h("dl",{"style":"margin:0;padding:12px 16px;display:grid;grid-template-columns:1fr auto;gap:8px 12px;font-size:14px"},__h("dt",{"class":"sub"},"Partner"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.wz.partner)),__h("dt",{"class":"sub"},"Industry"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.wzInd)),__h("dt",{"class":"sub"},"Fee month"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.periodLabel)),__h("dt",{"class":"sub"},"Students to bill"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right"},__S(__v.wzStudCount)),__h("dt",{"class":"sub"},"Arrears included"),__h("dd",{"style":"margin:0;font-weight:600;text-align:right;color:#8A420A"},__S(__v.wzArrLabel))),__h("div",{"style":"padding:12px 16px;border-top:1px solid #EBEEE9;display:flex;justify-content:space-between;align-items:baseline"},__h("span",{"style":"font-weight:600;font-size:14px"},"Estimated invoice"),__h("span",{"style":"font-size:24px;font-weight:700"},__S(__v.wzTotal)))),__h("div",{"class":"card","style":"padding:12px 14px;font-size:13px;color:#3D4642"},__h("strong",{},"Tips"),__h("ul",{"style":"margin:6px 0 0;padding-left:18px;display:flex;flex-direction:column;gap:4px"},__h("li",{},"Fetch from EduVault first; use a CSV only for extra or new students."),__h("li",{},"Include only students who are active this month."),__h("li",{},"Students from another industry are skipped; bill them on their own invoice."),__h("li",{},"Earlier unpaid months are added as arrears automatically.")))))]:null),(__T(__v.wz2)?[__h("section",{"class":"card"},__h("div",{"style":"padding:12px 16px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;align-items:center;border-bottom:1px solid #EBEEE9"},__h("div",{},__h("div",{"style":"font-size:15px;font-weight:700"},__S(__v.rv.selText)),__h("div",{"class":"sub","style":"max-width:560px"},"Arrears are pre-calculated at the current tuition rate. Edit an amount to waive or adjust it; changes are logged on the invoice.")),__h("div",{"style":"display:flex;gap:8px;flex-wrap:wrap"},__h("button",{"class":"btn","onclick":__v.wzSelAll},"Select all "+__S(__v.rv.total)),__h("button",{"class":"btn","onclick":__v.wzClear},"Clear all"))),__h("div",{"style":"padding:10px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;gap:10px;align-items:center;background:#FBFBF9"},__h("label",{"style":"flex:1 1 220px;max-width:340px;display:flex;align-items:center;gap:8px;border:1px solid #C9CFC8;border-radius:8px;padding:0 10px;min-height:38px;background:#FFFFFF"},__h("span",{"class":"sr"},"Search students"),__h("svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"#56605B","stroke-width":"2","aria-hidden":"true"},__h("circle",{"cx":"11","cy":"11","r":"7"}),__h("path",{"d":"M20 20l-4-4"})),__h("input",{"value":__v.rv.q,"oninput":__v.rv.setQ,"placeholder":"Search name, Reg No or Trainee ID","style":"border:0;outline:none;font:inherit;font-size:14px;flex:1;min-width:0;background:transparent"})),__h("label",{"style":"display:flex;align-items:center;gap:6px;font-size:13px;color:#56605B"},"Batch ",__h("select",{"class":"inp","value":__v.rv.batch,"onchange":__v.rv.setBatch,"style":"min-height:38px"},__h("option",{"value":""},"All batches"),(__v.rv.batchOpts||[]).map((o)=>[__h("option",{"value":o},__S(o))]))),__h("div",{"role":"group","aria-label":"Show","style":"display:inline-flex;border:1px solid #C9CFC8;border-radius:8px;overflow:hidden;flex-wrap:wrap"},(__v.rv.filters||[]).map((f)=>[__h("button",{"onclick":f.pick,"style":f.style},__S(f.label))])),__h("div",{"style":"display:flex;gap:6px;margin-left:auto"},__h("button",{"class":"link","onclick":__v.rv.selShown,"style":"font-size:13px"},"Select "+__S(__v.rv.shownCount)+" shown"),__h("button",{"class":"link","onclick":__v.rv.unselShown,"style":"font-size:13px"},"Unselect shown"))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:860px"},__h("thead",{},__h("tr",{},__h("th",{"style":"width:40px"},__h("span",{"class":"sr"},"Include")),__h("th",{},"Student"),__h("th",{},"Unpaid months"),__h("th",{},"Fee heads"),__h("th",{"style":"text-align:right"},"Arrears"),__h("th",{"style":"text-align:right"},"Pending amount"))),__h("tbody",{},(__v.rv.rows||[]).map((r)=>[__h("tr",{"style":r.rowStyle},__h("td",{},__h("input",{"type":"checkbox","checked":r.on,"onchange":r.toggle,"aria-label":"Include "+__S(r.name),"style":"width:18px;height:18px;accent-color:#1D5546"})),__h("td",{},__h("strong",{},__S(r.name))," ",(__T(r.isNew)?[__h("span",{"style":"background:#E6EDF9;color:#1F4A8F;border-radius:99px;padding:0 8px;font-size:12px;font-weight:600"},"New")]:null),__h("div",{"class":"sub","style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px"},__S(r.reg)+", "+__S(r.batch))),__h("td",{},__h("div",{"style":"display:flex;gap:4px;flex-wrap:wrap"},(r.arrChips||[]).map((m)=>[__h("span",{"style":"background:#FBEEDF;color:#8A420A;border-radius:6px;padding:1px 7px;font-size:12.5px;font-weight:600"},__S(m))]),(r.months||[]).map((m)=>[__h("span",{"style":"background:#F3F4F0;border-radius:6px;padding:1px 7px;font-size:12.5px"},__S(m))])),(__T(r.hasArr)?[__h("div",{"class":"sub","style":"margin-top:4px;max-width:360px"},__S(r.gapNote))]:null)),__h("td",{"class":"sub"},__S(r.heads)),__h("td",{"style":"text-align:right"},(__T(r.hasArr)?[__h("label",{},__h("span",{"class":"sr"},"Arrears amount for "+__S(r.name)),__h("input",{"class":"inp","inputmode":"numeric","value":r.arrVal,"oninput":r.arrChange,"disabled":r.off,"style":r.arrStyle})),__h("div",{"class":"sub","style":"font-size:12px"},__S(r.arrHint)),(__T(r.arrEdited)?[__h("button",{"class":"link","onclick":r.arrReset,"style":"font-size:12px;min-height:24px"},"Reset")]:null)]:null),(__T(r.noArr)?[__h("span",{"class":"sub"},"-")]:null)),__h("td",{"style":"text-align:right"},__h("strong",{},__S(r.amt))))])))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;padding:8px 12px;border-top:1px solid #EBEEE9;background:#FBFBF9"},__h("span",{"class":"sub"},__S(__v.rv.pg.info)),__h("div",{"style":"display:flex;gap:6px;align-items:center;flex-wrap:wrap"},__h("label",{"class":"sub","style":"display:flex;gap:6px;align-items:center"},"Rows per page ",__h("select",{"class":"inp","value":__v.pageSize,"onchange":__v.setPageSize,"style":"min-height:34px;padding:0 6px"},__h("option",{"value":"25"},"25"),__h("option",{"value":"50"},"50"),__h("option",{"value":"100"},"100"))),__h("button",{"class":"btn","onclick":__v.rv.pg.first,"disabled":__v.rv.pg.prevDis,"aria-label":"First page","style":"min-height:34px;padding:0 10px"},"\u00ab"),__h("button",{"class":"btn","onclick":__v.rv.pg.prev,"disabled":__v.rv.pg.prevDis,"style":"min-height:34px"},"Previous"),__h("span",{"class":"sub","style":"min-width:90px;text-align:center"},__S(__v.rv.pg.pageLabel)),__h("button",{"class":"btn","onclick":__v.rv.pg.next,"disabled":__v.rv.pg.nextDis,"style":"min-height:34px"},"Next"),__h("button",{"class":"btn","onclick":__v.rv.pg.last,"disabled":__v.rv.pg.nextDis,"aria-label":"Last page","style":"min-height:34px;padding:0 10px"},"\u00bb")))),__h("div",{"style":"position:sticky;bottom:0;background:#18201D;color:#FFFFFF;border-radius:12px;padding:12px 16px;display:flex;flex-wrap:wrap;gap:12px 28px;align-items:center"},__h("div",{},__h("div",{"style":"font-size:12px;color:#C9CFC8"},"Partner"),__h("strong",{},__S(__v.wz.partner))),__h("div",{},__h("div",{"style":"font-size:12px;color:#C9CFC8"},"Period"),__h("strong",{},__S(__v.periodLabel))),__h("div",{},__h("div",{"style":"font-size:12px;color:#C9CFC8"},"Students"),__h("strong",{},__S(__v.wzSelCount))),__h("div",{},__h("div",{"style":"font-size:12px;color:#C9CFC8"},"Invoice total"),__h("strong",{"style":"color:#F2B66D;font-size:18px"},__S(__v.wzSelTotal))),__h("div",{"style":"margin-left:auto;display:flex;gap:8px"},__h("button",{"class":"btn","onclick":__v.wzBack},"Back"),__h("button",{"class":"btn btn-p","onclick":__v.wzNext,"disabled":__v.wz2Blocked,"style":"background:#2E7D66;border-color:#2E7D66"},"Generate invoice")))]:null),(__T(__v.wz3)?[__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"},__h("article",{"class":"card","aria-label":"Invoice preview","style":"flex:3 1 560px;min-width:0;padding:24px"},__h("div",{"style":"display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-bottom:2px solid #1D5546;padding-bottom:12px"},__h("div",{},__h("div",{"style":"font-weight:800;font-size:20px;color:#1D5546"},"Medhavi Skills University"),__h("div",{"class":"sub"},"Skill, Empower, Liberate")),__h("div",{"style":"text-align:right"},__h("div",{"style":"font-weight:800;font-size:22px;letter-spacing:.02em"},"TAX INVOICE"),__h("div",{"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(__v.pv.id)))),__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin:14px 0;font-size:13px"},__h("div",{},__h("div",{"class":"sub","style":"font-size:11.5px;font-weight:600"},"BILLED TO"),__S(__v.wz.partner),__h("div",{"class":"sub"},__S(__v.wzInd)+" industry"),__h("div",{"class":"sub"},"[Partner billing address]")),__h("div",{},__h("div",{"class":"sub","style":"font-size:11.5px;font-weight:600"},"FEE MONTH"),__S(__v.periodLabel)),__h("div",{},__h("div",{"class":"sub","style":"font-size:11.5px;font-weight:600"},"ISSUED"),__S(__v.pv.issued)),__h("div",{},__h("div",{"class":"sub","style":"font-size:11.5px;font-weight:600"},"DUE"),__S(__v.pv.due))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:480px"},__h("thead",{},__h("tr",{},__h("th",{},"Fee head"),__h("th",{},"Charged"),__h("th",{"style":"text-align:right"},"Rate"),__h("th",{"style":"text-align:right"},"Qty"),__h("th",{"style":"text-align:right"},"Amount"))),__h("tbody",{},(__v.pv.lines||[]).map((l)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(l.head))),__h("td",{},__S(l.unit)),__h("td",{"style":"text-align:right"},__S(l.rate)),__h("td",{"style":"text-align:right"},__S(l.qty)),__h("td",{"style":"text-align:right"},__S(l.amt)))]),__h("tr",{"style":"background:#F3F4F0"},__h("td",{"colspan":"4"},__h("strong",{},"Total payable, "+__S(__v.pv.n)+" students")),__h("td",{"style":"text-align:right"},__h("strong",{},__S(__v.pv.total))))))),(__T(__v.pv.hasArr)?[__h("div",{"style":"margin-top:14px;border:1px solid #EBC9A3;background:#FFF8F0;border-radius:10px;padding:12px 14px;font-size:13px"},__h("strong",{},"Arrears included ("+__S(__v.pv.arrTotal)+")"),__h("div",{"class":"sub","style":"margin-bottom:6px"},"Previous dues must be cleared before the student continues. Break months are not charged."),__h("ul",{"style":"margin:0;padding-left:18px;display:flex;flex-direction:column;gap:4px"},(__v.pv.arr||[]).map((a)=>[__h("li",{},__h("strong",{},__S(a.name))," ("+__S(a.reg)+"), "+__S(a.amt)+": "+__S(a.text))])))]:null),__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:16px;font-size:13px"},__h("div",{},__h("strong",{},"Pay to"),__h("div",{"class":"sub"},"Medhavi Skills University",__h("br",{}),"Bank: [Bank name], A/c [Account no.], IFSC [IFSC]")),__h("div",{},__h("strong",{},"Part payments accepted"),__h("div",{"class":"sub"},"Quote the invoice number with each transfer. Each confirmed payment marks the covered students as paid; the balance stays open on this invoice.")))),__h("aside",{"style":"flex:1 1 280px;min-width:0;display:flex;flex-direction:column;gap:12px"},__h("section",{"class":"card","style":"padding:16px;display:flex;flex-direction:column;gap:10px"},__h("h2",{"style":"margin:0;font-size:16px"},"Send to "+__S(__v.wz.partner)+", "+__S(__v.wzInd)),__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600"},"Send to",__h("input",{"class":"inp","style":"font-weight:400","value":__v.wz.email,"oninput":__v.wzEmail})),__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600"},"Copy",__h("input",{"class":"inp","style":"font-weight:400","value":__v.wz.copy,"oninput":__v.wzCopy})),__h("div",{"style":"background:#E6EDF9;color:#1F3F75;border-radius:8px;padding:10px 12px;font-size:13px"},"On sending, all "+__S(__v.pv.n)+" students show ",__h("strong",{},"Pending verification")," until a payment covering them is confirmed."),__h("div",{"style":"display:flex;gap:8px"},__h("button",{"class":"btn","onclick":__v.wzBack},"Back"),__h("button",{"class":"btn btn-p","onclick":__v.wzSend,"style":"flex:1"},"Send invoice"))),__h("p",{"class":"sub","style":"margin:0;padding:0 4px"},"Student-wise detail is attached as an annexure (PDF and Excel).")))]:null))]:null),(__T(__v.isInv)?[__h("div",{"style":"display:flex;flex-direction:column;gap:16px"},__h("div",{"style":"display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:12px"},__h("div",{},__h("div",{"class":"sub"},__h("button",{"class":"link","onclick":__v.goFees,"style":"font-size:13px"},"Partner invoices")," / "+__S(__v.iv.id)),__h("h1",{"style":"margin:2px 0 0;font-size:28px;font-weight:700"},"Invoice ",__h("span",{"style":"font-family:ui-monospace,Menlo,Consolas,monospace"},__S(__v.iv.id))),__h("p",{"style":"margin:2px 0 0;color:#56605B"},__S(__v.iv.meta))),__h("div",{"style":"display:flex;gap:8px;flex-wrap:wrap;align-items:center"},__h("button",{"class":"btn","onclick":__v.printInv},"Print / PDF"),__h("button",{"class":"btn","onclick":__v.remindInv,"disabled":__v.iv.reminded},__S(__v.iv.remindLabel)),__h("button",{"class":"btn btn-p","onclick":__v.openPay,"disabled":__v.iv.payDisabled},"Record payment"))),(__T(__v.iv.hasOther)?[__h("div",{"style":"background:#E6EDF9;border:1px solid #BFD0EE;color:#1F3F75;border-radius:10px;padding:10px 14px;font-size:14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between"},__h("span",{},__S(__v.iv.otherText)),__h("button",{"class":"btn","onclick":__v.iv.otherGo},__S(__v.iv.otherBtn)))]:null),__h("dl",{"style":"margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1px;background:#DADFD8;border:1px solid #DADFD8;border-radius:12px;overflow:hidden"},__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub","style":"font-size:12px;font-weight:600"},"STATUS"),__h("dd",{"style":"margin:4px 0 0"},__h("span",{"style":__v.iv.stStyle},__S(__v.iv.status)))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub","style":"font-size:12px;font-weight:600"},"INVOICED"),__h("dd",{"style":"margin:0;font-size:22px;font-weight:700"},__S(__v.iv.invoiced))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub","style":"font-size:12px;font-weight:600"},"PAID (CONFIRMED)"),__h("dd",{"style":"margin:0;font-size:22px;font-weight:700;color:#1D5546"},__S(__v.iv.paid))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub","style":"font-size:12px;font-weight:600"},"BALANCE"),__h("dd",{"style":"margin:0;font-size:22px;font-weight:700"},__S(__v.iv.balance))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub","style":"font-size:12px;font-weight:600"},"UNAPPLIED CREDIT"),__h("dd",{"style":"margin:0;font-size:22px;font-weight:700"},__S(__v.iv.credit)))),__h("div",{"class":"card","style":"padding:12px 16px"},__h("div",{"style":"height:10px;border-radius:99px;background:#EBEEE9;overflow:hidden;display:flex"},__h("div",{"style":__v.iv.barPaid}),__h("div",{"style":__v.iv.barRec})),__h("div",{"style":"display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:6px","class":"sub"},__h("span",{},__S(__v.iv.progress)),__h("span",{},"Green = confirmed, striped = recorded, not yet confirmed"))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"},__h("section",{"class":"card","style":"flex:3 1 560px;min-width:0"},__h("div",{"style":"padding:10px 14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;border-bottom:1px solid #EBEEE9"},__h("div",{"role":"group","aria-label":"Filter students","style":"display:inline-flex;border:1px solid #C9CFC8;border-radius:8px;overflow:hidden"},(__v.invFilters||[]).map((f)=>[__h("button",{"onclick":f.pick,"style":f.style},__S(f.label))])),__h("label",{"style":"flex:1 1 220px;max-width:340px;display:flex;align-items:center;gap:8px;border:1px solid #C9CFC8;border-radius:8px;padding:0 10px;min-height:38px;background:#FFFFFF"},__h("span",{"class":"sr"},"Search students"),__h("svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"#56605B","stroke-width":"2","aria-hidden":"true"},__h("circle",{"cx":"11","cy":"11","r":"7"}),__h("path",{"d":"M20 20l-4-4"})),__h("input",{"value":__v.invQ,"oninput":__v.setInvQ,"placeholder":"Search name or Reg No","style":"border:0;outline:none;font:inherit;font-size:14px;flex:1;min-width:0;background:transparent"})),__h("span",{"class":"sub"},__S(__v.invCountText))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:760px"},__h("thead",{},__h("tr",{},(__T(__v.payNamedMode)?[__h("th",{"style":"width:40px"},__h("span",{"class":"sr"},"Named"))]:null),__h("th",{},"Student"),__h("th",{"style":"text-align:right"},"Items"),__h("th",{"style":"text-align:right"},"Amount"),__h("th",{"style":"text-align:right"},"Paid"),__h("th",{},"Status"),(__T(__v.payOpen)?[__h("th",{},"This payment")]:null))),__h("tbody",{},(__v.invPg.items||[]).map((r)=>[__h("tr",{"style":r.rowStyle},(__T(__v.payNamedMode)?[__h("td",{},__h("input",{"type":"checkbox","checked":r.named,"onchange":r.toggleNamed,"disabled":r.done,"aria-label":"Partner named "+__S(r.name),"style":"width:18px;height:18px;accent-color:#1D5546"}))]:null),__h("td",{},__h("strong",{},__S(r.name)),__h("div",{"class":"sub","style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px"},__S(r.reg)),(__T(r.hasArr)?[__h("div",{"style":"font-size:12px;color:#8A420A;font-weight:600"},__S(r.arrNote))]:null)),__h("td",{"style":"text-align:right"},__S(r.items)),__h("td",{"style":"text-align:right"},__S(r.amt)),__h("td",{"style":"text-align:right"},__S(r.paid)),__h("td",{},__h("span",{"style":r.stStyle},__S(r.status))),(__T(__v.payOpen)?[__h("td",{"style":"font-size:13px;font-weight:600;color:#1D5546"},__S(r.preview))]:null))])))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;padding:8px 12px;border-top:1px solid #EBEEE9;background:#FBFBF9"},__h("span",{"class":"sub"},__S(__v.invPg.info)),__h("div",{"style":"display:flex;gap:6px;align-items:center;flex-wrap:wrap"},__h("label",{"class":"sub","style":"display:flex;gap:6px;align-items:center"},"Rows per page ",__h("select",{"class":"inp","value":__v.pageSize,"onchange":__v.setPageSize,"style":"min-height:34px;padding:0 6px"},__h("option",{"value":"25"},"25"),__h("option",{"value":"50"},"50"),__h("option",{"value":"100"},"100"))),__h("button",{"class":"btn","onclick":__v.invPg.first,"disabled":__v.invPg.prevDis,"aria-label":"First page","style":"min-height:34px;padding:0 10px"},"\u00ab"),__h("button",{"class":"btn","onclick":__v.invPg.prev,"disabled":__v.invPg.prevDis,"style":"min-height:34px"},"Previous"),__h("span",{"class":"sub","style":"min-width:90px;text-align:center"},__S(__v.invPg.pageLabel)),__h("button",{"class":"btn","onclick":__v.invPg.next,"disabled":__v.invPg.nextDis,"style":"min-height:34px"},"Next"),__h("button",{"class":"btn","onclick":__v.invPg.last,"disabled":__v.invPg.nextDis,"aria-label":"Last page","style":"min-height:34px;padding:0 10px"},"\u00bb")))),__h("aside",{"style":"flex:1 1 300px;min-width:0;display:flex;flex-direction:column;gap:12px"},(__T(__v.payOpen)?[__h("section",{"class":"card","aria-label":"Record a payment"},__h("div",{"style":"padding:12px 16px;border-bottom:1px solid #EBEEE9;display:flex;justify-content:space-between;align-items:center"},__h("h2",{"style":"margin:0;font-size:16px"},"Record a payment"),__h("button",{"class":"btn","onclick":__v.closePay},"Cancel")),__h("div",{"style":"padding:14px 16px;display:flex;flex-direction:column;gap:12px"},__h("div",{"style":"display:grid;grid-template-columns:1fr 1fr;gap:10px"},__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:600"},"Amount received (\u20b9)",__h("input",{"class":"inp","inputmode":"numeric","style":"font-weight:400;width:100%","value":__v.pay.amt,"oninput":__v.payAmt})),__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:600"},"Date",__h("input",{"class":"inp","type":"date","style":"font-weight:400;width:100%","value":__v.pay.date,"oninput":__v.payDate}))),__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:600"},"UTR / reference",__h("input",{"class":"inp","style":"font-weight:400","value":__v.pay.utr,"oninput":__v.payUtr,"placeholder":"Bank reference number"})),__h("fieldset",{"style":"border:0;margin:0;padding:0;display:flex;flex-direction:column;gap:8px"},__h("legend",{"style":"font-size:13px;font-weight:600;margin-bottom:6px"},"Apply this payment to"),__h("label",{"style":__v.pay.prStyle},__h("input",{"type":"radio","name":"paymode","checked":__v.pay.isPriority,"onchange":__v.payPriority,"style":"accent-color:#1D5546;margin-top:3px"}),__h("span",{},__h("strong",{"style":"font-size:14px"},"Priority order (recommended)"),__h("span",{"class":"sub","style":"display:block"},"Nearest exam first, then most months due. Whole items only."))),__h("label",{"style":__v.pay.nmStyle},__h("input",{"type":"radio","name":"paymode","checked":__v.pay.isNamed,"onchange":__v.payNamed,"style":"accent-color:#1D5546;margin-top:3px"}),__h("span",{},__h("strong",{"style":"font-size:14px"},"Students the partner named"),__h("span",{"class":"sub","style":"display:block"},"Tick students in the list; anything left follows priority order.")))),__h("div",{"style":__v.pay.noteStyle},__S(__v.pay.note)),__h("button",{"class":"btn btn-p","onclick":__v.confirmPay,"disabled":__v.pay.blocked},"Confirm and update students")))]:null),__h("section",{"class":"card"},__h("div",{"style":"padding:12px 16px;border-bottom:1px solid #EBEEE9;display:flex;justify-content:space-between;align-items:baseline"},__h("h2",{"style":"margin:0;font-size:16px"},"Payments on this invoice"),__h("span",{"class":"sub"},__S(__v.iv.trCount))),__h("ol",{"style":"list-style:none;margin:0;padding:12px 16px;display:flex;flex-direction:column;gap:12px"},(__T(__v.iv.noTr)?[__h("li",{"class":"sub"},"No payments yet. Partners can pay in full or in parts; record each transfer as it arrives.")]:null),(__v.iv.tranches||[]).map((t)=>[__h("li",{"style":"display:flex;gap:10px"},__h("span",{"style":t.dot}),__h("div",{"style":"flex:1;min-width:0"},__h("div",{"style":"display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"},__h("strong",{"style":"font-size:14px"},"Tranche "+__S(t.n)+", "+__S(t.amt)),__h("span",{"style":t.stStyle},__S(t.status))),__h("div",{"class":"sub"},__S(t.meta)),__h("div",{"class":"sub"},__S(t.cover)),(__T(t.canVerify)?[__h("button",{"class":"btn","style":"margin-top:6px","onclick":t.verify},"Verify and apply")]:null)))]),__h("li",{"style":"display:flex;gap:10px"},__h("span",{"style":"width:12px;height:12px;border-radius:50%;border:2px solid #9AA39E;flex:none;margin-top:4px"}),__h("div",{},__h("strong",{"style":"font-size:14px"},"Balance "+__S(__v.iv.balance)),__h("div",{"class":"sub"},__S(__v.iv.balanceNote)))))),__h("section",{"class":"card","style":"padding:14px 16px"},__h("h2",{"style":"margin:0 0 8px;font-size:15px"},"Part-payment rules"),__h("ul",{"style":"margin:0;padding-left:18px;display:flex;flex-direction:column;gap:4px;font-size:13px;color:#3D4642"},__h("li",{},"Each student's dues are split into items: one tuition item per month, plus one examination fee item per semester."),__h("li",{},"A confirmed tranche pays whole items, oldest month first."),__h("li",{},"Students with the nearest exam are covered first, unless the partner names students."),__h("li",{},"Leftover smaller than the next item is held as credit for the next tranche."),__h("li",{},"Students not yet covered stay ",__h("strong",{},"Pending verification"),"; 3 or more unpaid tuition months blocks the exam."))))))]:null),(__T(__v.isCycle)?[__h("div",{"style":"display:flex;flex-direction:column;gap:18px"},__h("div",{},__h("button",{"class":"link","onclick":__v.goCycles},"Back to exam cycles"),__h("div",{"style":"display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:4px"},__h("h1",{"style":"margin:0;font-size:28px;font-weight:700"},__S(__v.cy.code)),__h("span",{"style":__v.cy.vStyle},__S(__v.cy.vertical)),__h("span",{"style":__v.cy.phaseStyle},"Step "+__S(__v.cy.stepNo)+" of 23: "+__S(__v.cy.stepName))),__h("p",{"style":"margin:2px 0 0;color:#56605B"},__S(__v.cy.title)+", batch "+__S(__v.cy.batch))),__h("dl",{"style":"margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:#DADFD8;border:1px solid #DADFD8;border-radius:12px;overflow:hidden"},__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub"},"Partner"),__h("dd",{"style":"margin:0;font-weight:600"},__S(__v.cy.partner))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub"},"Location"),__h("dd",{"style":"margin:0;font-weight:600"},__S(__v.cy.location))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub"},"Students"),__h("dd",{"style":"margin:0;font-weight:600"},__S(__v.cy.students))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub"},"Due date (calendar)"),__h("dd",{"style":"margin:0;font-weight:600"},__S(__v.cy.due))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub"},"Exam date (partner)"),__h("dd",{"style":"margin:0;font-weight:600"},__S(__v.cy.examDate))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub"},"Fee clearance by"),__h("dd",{"style":"margin:0;font-weight:600"},__S(__v.cy.feeBy))),__h("div",{"style":"background:#FFFFFF;padding:12px 14px"},__h("dt",{"class":"sub"},"OJL / viva"),__h("dd",{"style":"margin:0;font-weight:600"},__S(__v.cy.ojlLabel)))),__h("div",{"role":"tablist","aria-label":"Cycle sections","style":"display:flex;flex-wrap:wrap;gap:2px;border-bottom:1px solid #DADFD8"},(__v.tabs||[]).map((t)=>[__h("button",{"role":"tab","aria-selected":t.active,"onclick":t.pick,"style":t.style},__S(t.label))])),__h("section",{"aria-label":"Cycle progress","class":"card","style":"padding:12px 16px;display:flex;flex-wrap:wrap;gap:10px 16px;align-items:center"},__h("div",{"style":"flex:1 1 320px;min-width:0"},__h("div",{"style":"font-size:13px;color:#56605B"},__S(__v.pg.kicker)),__h("div",{"style":"font-weight:700"},__S(__v.pg.title)),__h("div",{"style":__v.pg.msgStyle},__S(__v.pg.msg))),(__T(__v.pg.showGo)?[__h("button",{"class":"btn","onclick":__v.pg.go},__S(__v.pg.goLabel))]:null),(__T(__v.pg.notDone)?[__h("button",{"class":"btn btn-p","onclick":__v.pg.complete,"disabled":__v.pg.blocked},"Complete step "+__S(__v.pg.num))]:null),__h("button",{"class":"btn","onclick":__v.pg.restart},"Restart cycle from step 1")),(__T(__v.tabLocked)?[__h("div",{"class":"card","style":"padding:36px 24px;text-align:center;border-style:dashed"},__h("div",{"style":"font-weight:600;font-size:17px"},"This section opens at step "+__S(__v.lock.step)),__h("p",{"style":"margin:6px auto 14px;color:#56605B;max-width:460px"},__S(__v.cy.code)+" is at step "+__S(__v.cy.stepNo)+". Complete the earlier steps to open it, or look at a cycle that has already reached it."),__h("button",{"class":"btn btn-p","onclick":__v.lock.go},"Open "+__S(__v.lock.cycle)))]:null),(__T(__v.tabOverview)?[__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;align-items:start"},(__v.phases||[]).map((ph)=>[__h("section",{"class":"card","style":"padding:14px 0 6px"},__h("div",{"style":"padding:0 16px 8px;display:flex;justify-content:space-between;gap:8px;align-items:baseline"},__h("h2",{"style":"margin:0;font-size:16px"},__S(ph.label)),__h("span",{"class":"sub"},"Steps "+__S(ph.range))),__h("ol",{"style":"list-style:none;margin:0;padding:0"},(ph.steps||[]).map((s)=>[__h("li",{},__h("button",{"onclick":s.go,"style":"display:flex;gap:12px;align-items:flex-start;width:100%;padding:8px 16px;border:0;background:transparent;text-align:left;font-size:14px;color:#18201D"},__h("span",{"style":s.dotStyle},__S(s.mark)),__h("span",{"style":"flex:1;min-width:0"},__h("span",{"style":s.nameStyle},__S(s.name)),__h("span",{"style":"display:block;font-size:12.5px;color:#56605B"},__S(s.owner))),__h("span",{"style":s.chipStyle},__S(s.status))))])))]))]:null),(__T(__v.tabFees)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},__h("div",{"style":"background:#FBEEDF;border:1px solid #EBC9A3;color:#5E2E07;border-radius:10px;padding:12px 14px;font-size:14px"},__h("strong",{},"Step 4. Fees.")," Pending fees for this batch are billed to the partner on an invoice. Students show Pending verification until a payment covering them is confirmed. 3 or more unpaid tuition months blocks the exam. Clear by "+__S(__v.cy.feeBy)+".\n        "),(__T(__v.cfNone)?[__h("div",{"class":"card","style":"padding:28px 24px;text-align:center;color:#56605B;border-style:dashed"},"No partner fee records for "+__S(__v.cy.batch)+". Students in this vertical pay directly; the Finance team marks them cleared.")]:null),(__T(__v.cfHas)?[__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px"},(__v.cfStats||[]).map((v)=>[__h("div",{"class":"card","style":"padding:12px 16px"},__h("div",{"class":"sub"},__S(v.label)),__h("div",{"style":v.style},__S(v.value)))])),__h("div",{"class":"card","style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:860px"},__h("thead",{},__h("tr",{},__h("th",{},"Student"),__h("th",{},"Unpaid tuition months (incl. arrears)"),__h("th",{"style":"text-align:right"},"Pending"),__h("th",{},"Invoice"),__h("th",{},"Fee status"),__h("th",{},"Exam"))),__h("tbody",{},(__v.cfRows||[]).map((r)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(r.name)),__h("div",{"class":"sub","style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px"},__S(r.reg))),__h("td",{},__h("div",{"style":"display:flex;gap:4px;flex-wrap:wrap"},(r.months||[]).map((m)=>[__h("span",{"style":"background:#F3F4F0;border-radius:6px;padding:1px 7px;font-size:12.5px"},__S(m))]),(__T(r.noMonths)?[__h("span",{"class":"sub"},"None")]:null))),__h("td",{"style":"text-align:right"},__h("strong",{},__S(r.amt))),__h("td",{},(__T(r.hasInv)?[__h("button",{"class":"link","onclick":r.openInv,"style":"font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px"},__S(r.inv))]:null),(__T(r.noInv)?[__h("span",{"class":"sub"},__S(r.invNote))]:null)),__h("td",{},__h("span",{"style":r.stStyle},__S(r.status))),__h("td",{},__h("span",{"style":r.exStyle},__S(r.exam))))])))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:10px;align-items:center"},(__T(__v.cfCanInvoice)?[__h("button",{"class":"btn btn-p","onclick":__v.cfInvoice},"Create invoice for "+__S(__v.cy.partner))]:null),__h("button",{"class":"btn","onclick":__v.goFees},"Open partner fees"),__h("span",{"class":"sub"},__S(__v.cfNote)))]:null))]:null),(__T(__v.tabLearner)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},__h("div",{"style":"background:#E6EDF9;border:1px solid #BFD0EE;color:#1F3F75;border-radius:10px;padding:12px 14px;font-size:14px"},__h("strong",{},"Step 5. Learner data and Reg No.")," Name, father's name, DOB and Reg No are compared with the original documents. Corrections need Program team or KAM approval. No Reg No (FAL not generated), or 3+ unpaid tuition months from the Fees step, blocks the student from LMS and the exam.\n        "),__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px"},(__v.eligStats||[]).map((v)=>[__h("div",{"class":"card","style":"padding:12px 16px"},__h("div",{"class":"sub"},__S(v.label)),__h("div",{"style":"font-size:26px;font-weight:700"},__S(v.value)))])),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"},__h("div",{"class":"card","style":"flex:3 1 560px;min-width:0;overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:800px"},__h("thead",{},__h("tr",{},__h("th",{},"Student"),__h("th",{},"Reg No (FAL)"),__h("th",{},"Fee status (from Fees)"),__h("th",{},"Learner data vs documents"),__h("th",{},"Eligibility"),__h("th",{},__h("span",{"class":"sr"},"Action")))),__h("tbody",{},(__v.eligRows||[]).map((st)=>[__h("tr",{},__h("td",{},__h("button",{"class":"link","onclick":st.open},__S(st.name)),__h("div",{"class":"sub"},"Father: "+__S(st.father)+", DOB "+__S(st.dob))),__h("td",{},__h("span",{"style":st.regStyle},__S(st.regLabel))),__h("td",{},__h("span",{"style":st.feeStyle},__S(st.fee))),__h("td",{},__h("span",{"style":st.dataStyle},__S(st.dataLabel))),__h("td",{},__h("span",{"style":st.eligStyle},__S(st.eligLabel))),__h("td",{},(__T(st.canCorrect)?[__h("button",{"class":"btn","onclick":st.correct},"Approve correction (KAM)")]:null)))])))),(__T(__v.hasStudent)?[__h("aside",{"aria-label":"Academic journey","class":"card","style":"flex:2 1 280px;min-width:0;padding:18px"},__h("div",{"style":"display:flex;justify-content:space-between;gap:8px"},__h("div",{},__h("h2",{"style":"margin:0;font-size:17px"},__S(__v.stu.name)),__h("div",{"class":"sub"},__S(__v.stu.reg))),__h("button",{"class":"btn","onclick":__v.closeStudent,"aria-label":"Close","style":"min-width:40px;padding:0"},__h("svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},__h("path",{"d":"M6 6l12 12M18 6L6 18"})))),__h("h3",{"style":"margin:16px 0 10px;font-size:14px;color:#56605B;font-weight:600"},"Academic journey"),__h("ol",{"style":"list-style:none;margin:0;padding:0 0 0 14px;border-left:2px solid #DADFD8;display:flex;flex-direction:column;gap:14px"},(__v.stu.journey||[]).map((j)=>[__h("li",{"style":"position:relative"},__h("span",{"style":"position:absolute;left:-21px;top:6px;width:12px;height:12px;border-radius:50%;background:#FFFFFF;border:2px solid #1D5546"}),__h("div",{"class":"sub"},__S(j.when)),__h("div",{"style":"font-weight:600;font-size:14px"},__S(j.what)),__h("div",{"class":"sub"},__S(j.by)))])))]:null)))]:null),(__T(__v.tabCurr)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px"},__h("div",{"class":"card","style":"padding:12px 16px"},__h("div",{"class":"sub"},"Credits (program requires 20)"),__h("div",{"style":"font-size:24px;font-weight:700"},"20 of 20"),__h("div",{"style":"font-size:13px;color:#1D5546;font-weight:600"},"Matches")),__h("div",{"class":"card","style":"padding:12px 16px"},__h("div",{"class":"sub"},"Theory, practical, project"),__h("div",{"style":"font-size:24px;font-weight:700"},"2, 2, 1"),__h("div",{"style":"font-size:13px;color:#1D5546;font-weight:600"},"Matches program")),__h("div",{"class":"card","style":"padding:12px 16px"},__h("div",{"class":"sub"},"Curriculum in LMS"),__h("div",{"style":"font-size:24px;font-weight:700"},__S(__v.currCount)),__h("div",{"style":__v.currNoteStyle},__S(__v.currNote))),__h("div",{"class":"card","style":"padding:12px 16px"},__h("div",{"class":"sub"},"Question papers"),__h("div",{"style":"font-size:24px;font-weight:700"},__S(__v.qpCount)),__h("div",{"style":__v.qpNoteStyle},__S(__v.qpNote)))),__h("div",{"class":"card","style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:820px"},__h("thead",{},__h("tr",{},__h("th",{},"Subject"),__h("th",{},"Type"),__h("th",{},"Credits"),__h("th",{},"Curriculum in LMS (step 3)"),__h("th",{},"Question paper (step 4)"),__h("th",{},"Mode (step 6)"))),__h("tbody",{},(__v.subjects||[]).map((sj)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(sj.code)),__h("div",{"class":"sub"},__S(sj.name))),__h("td",{},__S(sj.type)),__h("td",{},__S(sj.credits)),__h("td",{},__h("span",{"style":sj.currStyle},__S(sj.currLabel)),(__T(sj.canReqCurr)?[__h("div",{},__h("button",{"class":"btn","style":"margin-top:6px","onclick":__v.reqCurr},"Notify Academic and LMS team"))]:null)),__h("td",{},__h("span",{"style":sj.qpStyle},__S(sj.qpLabel)),(__T(sj.canEscalate)?[__h("button",{"class":"btn","style":"margin-left:8px","onclick":__v.escalate},"Escalate to LMS and Content")]:null)),__h("td",{},(__T(sj.hasMode)?[__h("div",{"role":"group","aria-label":"Mode","style":"display:inline-flex;border:1px solid #C9CFC8;border-radius:8px;overflow:hidden"},__h("button",{"onclick":sj.setOff,"style":sj.offStyle},"Offline"),__h("button",{"onclick":sj.setOn,"style":sj.onStyle},"Online"))]:null),(__T(sj.noMode)?[__h("span",{"class":"sub"},"Viva on site")]:null)))])))),__h("p",{"class":"sub","style":"margin:0"},"Step 3: curriculum must be uploaded in the LMS for every subject, and any mismatch in counts or credits is flagged to the Academic team for correction. Mode is recorded per subject per batch and drives the material in step 10."))]:null),(__T(__v.tabSched)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline"},__h("h2",{"style":"margin:0;font-size:16px"},"Step 7. Invigilator or trainer per location"),__h("span",{"class":"sub"},"Pick from trainers based in the same city. Same-area trainers are listed first.")),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:860px"},__h("thead",{},__h("tr",{},__h("th",{},"Exam location"),__h("th",{},"Students"),__h("th",{},"Select invigilator / trainer"),__h("th",{},"Details"),__h("th",{},"Status"))),__h("tbody",{},(__v.invRows||[]).map((l)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(l.name)),__h("div",{"class":"sub"},__S(l.area)+", "+__S(l.city))),__h("td",{},__S(l.students)),__h("td",{},__h("label",{},__h("span",{"class":"sr"},"Invigilator for "+__S(l.name)),__h("select",{"class":"inp","onchange":l.change,"value":l.sel,"disabled":l.locked,"style":"min-width:260px"},__h("option",{"value":""},"Select a trainer"),(l.opts||[]).map((o)=>[__h("option",{"value":o.id,"disabled":o.disabled},__S(o.label))])))),__h("td",{"style":"font-size:13px"},__h("div",{},__S(l.detail)),__h("div",{"class":"sub"},__S(l.detail2))),__h("td",{},(__T(l.confirmed)?[__h("span",{"style":__v.okPill},"Confirmed"),__h("div",{"class":"sub"},"Exam details shared")]:null),(__T(l.canConfirm)?[__h("button",{"class":"btn btn-p","onclick":l.confirm},"Confirm and share details")]:null),(__T(l.empty)?[__h("span",{"style":__v.badPill},"Not assigned")]:null)))]))))),__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline"},__h("h2",{"style":"margin:0;font-size:16px"},"Trainer locations: "+__S(__v.trainerCity)),__h("span",{"class":"sub"},"Availability is for the exam dates: "+__S(__v.cy.examDate))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:760px"},__h("thead",{},__h("tr",{},__h("th",{},"Trainer / invigilator"),__h("th",{},"Type"),__h("th",{},"Base location"),__h("th",{},"Availability"),__h("th",{},"Assigned to"))),__h("tbody",{},(__v.trainerRows||[]).map((t)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(t.name)),__h("div",{"class":"sub"},__S(t.phone))),__h("td",{},__S(t.type)),__h("td",{},__S(t.area)+", "+__S(t.city)),__h("td",{},__h("span",{"style":t.availStyle},__S(t.avail))),__h("td",{},__S(t.assigned)))]))))),__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px"},__h("h2",{"style":"margin:0;font-size:16px"},"Step 8. Exam schedule"),__h("span",{"class":"sub"},"Subjects go on the partner-confirmed dates: "+__S(__v.cy.examDate))),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:760px"},__h("thead",{},__h("tr",{},__h("th",{},"Subject"),__h("th",{},"Date"),__h("th",{},"Time"),__h("th",{},"Venue"),__h("th",{},"Mode"),__h("th",{},"Date check"))),__h("tbody",{},(__v.schedule||[]).map((r)=>[__h("tr",{},__h("td",{},__S(r.code)),__h("td",{},__S(r.date)),__h("td",{},__S(r.time)),__h("td",{},__S(r.venue)),__h("td",{},__S(r.mode)),__h("td",{},__h("span",{"style":r.chkStyle},__S(r.chk)),(__T(r.canFix)?[__h("button",{"class":"btn","style":"margin-left:8px","onclick":__v.fixDate},"Move to 24 Oct")]:null)))])))),__h("div",{"style":"padding:14px 16px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;border-top:1px solid #EBEEE9"},__h("button",{"class":"btn btn-p","onclick":__v.shareSched,"disabled":__v.schedBlocked},"Share schedule with partner, trainers and students"),__h("span",{"class":"sub"},__S(__v.schedNote)))))]:null),(__T(__v.tabNotice)?[__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"},__h("section",{"class":"card","style":"flex:1 1 380px;min-width:0;padding:18px"},__h("h2",{"style":"margin:0 0 4px;font-size:16px"},"Step 9. Exam notice"),__h("p",{"class":"sub","style":"margin:0 0 12px"},"Generated only after pre-exam steps 2 to 8 are complete."),__h("ul",{"style":"list-style:none;margin:0 0 14px;padding:0;display:flex;flex-direction:column;gap:6px;font-size:14px"},(__v.preCheck||[]).map((p)=>[__h("li",{"style":"display:flex;gap:8px;align-items:center"},__h("span",{"style":p.dot}),__S(p.label))])),__h("ol",{"style":"list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;font-size:14px"},(__v.noticeSteps||[]).map((n)=>[__h("li",{"style":"display:flex;gap:10px;align-items:center"},__h("span",{"style":n.dot},__S(n.num)),__h("span",{"style":"flex:1"},__S(n.label)))])),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:10px;margin-top:14px;align-items:center"},(__T(__v.noticeHasNext)?[__h("button",{"class":"btn btn-p","onclick":__v.noticeNext,"disabled":__v.noticeBlocked},__S(__v.noticeCta))]:null),__h("span",{"style":"font-size:14px;color:#56605B"},__S(__v.noticeNote))),__h("div",{"style":"margin-top:14px;border:1px dashed #C9CFC8;border-radius:10px;padding:12px;font-size:13px;color:#3D4642"},"\n            Notice contains: batch "+__S(__v.cy.batch)+", 5 subjects, dates 20 to 24 Oct, venues Hadapsar and Chakan, invigilators "+__S(__v.invNames)+".\n          ")),__h("section",{"class":"card","style":"flex:1 1 380px;min-width:0;padding:18px"},__h("h2",{"style":"margin:0 0 4px;font-size:16px"},"Step 10. Exam material by mode"),__h("h3",{"style":"margin:12px 0 6px;font-size:14px"},"Offline subjects"),__h("div",{"style":"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;font-size:14px"},__h("div",{"style":"background:#F3F4F0;border-radius:8px;padding:10px"},__h("div",{"class":"sub"},"OMR sheets"),__h("strong",{},__S(__v.omrCount))," ",__h("span",{"class":"sub"},"(1 per student)")),__h("div",{"style":"background:#F3F4F0;border-radius:8px;padding:10px"},__h("div",{"class":"sub"},"Question papers per subject"),__h("strong",{},__S(__v.qpPrint))," ",__h("span",{"class":"sub"},"(students + 5% spare)"))),__h("div",{"style":"overflow-x:auto;margin-top:10px"},__h("table",{"class":"tbl","style":"min-width:420px"},__h("thead",{},__h("tr",{},__h("th",{},"Parcel to"),__h("th",{},"Tracking no."),__h("th",{},"Status"))),__h("tbody",{},__h("tr",{},__h("td",{},"Hadapsar centre"),__h("td",{},__S(__v.trk1)),__h("td",{},__h("span",{"style":__v.parcelStyle},__S(__v.parcelLabel)))),__h("tr",{},__h("td",{},"Chakan site"),__h("td",{},__S(__v.trk2)),__h("td",{},__h("span",{"style":__v.parcelStyle},__S(__v.parcelLabel))))))),(__T(__v.notDispatched)?[__h("button",{"class":"btn","style":"margin-top:10px","onclick":__v.dispatchParcel},"Record courier dispatch")]:null),__h("h3",{"style":"margin:16px 0 6px;font-size:14px"},"Online subjects ("+__S(__v.onlineSubjects)+")"),__h("ul",{"style":"list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;font-size:14px"},__h("li",{"style":"display:flex;justify-content:space-between;gap:10px"},__h("span",{},"Jury sheet for evaluation"),__h("span",{"style":__v.okPill},"Ready")),__h("li",{"style":"display:flex;justify-content:space-between;gap:10px"},__h("span",{},"Exam configured in LMS (LMS team)"),__h("span",{"style":__v.revPill},"In progress")),__h("li",{"style":"display:flex;justify-content:space-between;gap:10px;align-items:center"},__h("label",{"for":"proc"},"AI proctoring"),__h("button",{"id":"proc","onclick":__v.toggleProc,"aria-pressed":__v.procAria,"style":__v.procStyle},__S(__v.procLabel))))))]:null),(__T(__v.tabDay)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},(__T(__v.cy.ojl)?[__h("section",{"class":"card","style":"padding:16px 18px"},__h("h2",{"style":"margin:0 0 4px;font-size:16px"},"Step 11. OJL skill test and viva"),__h("p",{"class":"sub","style":"margin:0 0 10px"},"Required for this program. Viva marks count toward the final result."),__h("div",{"style":"display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px"},(__v.vivaRows||[]).map((v)=>[__h("label",{"style":"display:flex;justify-content:space-between;align-items:center;gap:8px;background:#F3F4F0;border-radius:8px;padding:8px 10px;font-size:14px"},__S(v.name),__h("input",{"class":"inp","value":v.marks,"style":"width:70px","aria-label":"Viva marks out of 20"}))])),__h("div",{"style":"display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap"},__h("button",{"class":"btn btn-p","onclick":__v.saveViva},"Save viva marks"),(__T(__v.vivaSaved)?[__h("span",{"style":"font-size:14px;color:#1D5546;font-weight:600"},"Saved for all present students")]:null)))]:null),(__T(__v.cy.noOjl)?[__h("div",{"class":"card","style":"padding:12px 16px;font-size:14px;color:#56605B"},"Step 11 (OJL viva) does not apply to this program.")]:null),__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9"},__h("h2",{"style":"margin:0;font-size:16px"},"Steps 12 to 14. Evidence from each location")),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:820px"},__h("thead",{},__h("tr",{},__h("th",{},"Location"),__h("th",{},"12. Room photo (required)"),__h("th",{},"13. Attendance sheet photo"),__h("th",{},"14. OMR returned"))),__h("tbody",{},__h("tr",{},__h("td",{},__h("strong",{},__S(__v.loc1)),__h("div",{"class":"sub"},__S(__v.loc1n)+" students, offline")),__h("td",{},__h("span",{"style":__v.okPill},"Uploaded 6 Oct, 09:12")),__h("td",{},__h("span",{"style":__v.okPill},"Uploaded 6 Oct, 17:40")),__h("td",{},__h("span",{"style":__v.okPill},__S(__v.loc1n)+" of "+__S(__v.loc1n)+" received"),__h("div",{"class":"sub"},"Used "+__S(__v.loc1used)+", unused 6"))),__h("tr",{},__h("td",{},__h("strong",{},__S(__v.loc2)),__h("div",{"class":"sub"},__S(__v.loc2n)+" students, offline")),__h("td",{},__h("span",{"style":__v.roomStyle},__S(__v.roomLabel)),(__T(__v.roomPending)?[__h("div",{},__h("button",{"class":"btn","style":"margin-top:6px","onclick":__v.uploadRoom},"Upload photo"))]:null)),__h("td",{},__h("span",{"style":__v.attStyle},__S(__v.attLabel)),__h("div",{"class":"sub"},"No deadline. Does not block results.")),__h("td",{},__h("div",{"class":"sub"},"Courier "+__S(__v.omrTrk)),__h("label",{"style":"display:flex;gap:6px;align-items:center;font-size:13px;margin-top:4px"},"Received count",__h("input",{"class":"inp","value":__v.loc2got,"style":"width:70px"})),__h("span",{"style":__v.omrStyle},__S(__v.omrLabel)),(__T(__v.omrOpen)?[__h("div",{},__h("button",{"class":"btn","style":"margin-top:6px","onclick":__v.reportOmr},"Report discrepancy"))]:null))),__h("tr",{},__h("td",{},__h("strong",{},"Online subjects"),__h("div",{"class":"sub"},"LMS exam window")),__h("td",{},__h("span",{"style":__v.okPill},"Active-student screenshot")),__h("td",{},__h("span",{"style":__v.okPill},"From LMS log")),__h("td",{},__h("span",{"class":"sub"},"Not applicable"))))))))]:null),(__T(__v.tabResults)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},__h("ol",{"style":"list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px"},(__v.resSteps||[]).map((r)=>[__h("li",{"style":r.style},__h("div",{"style":"font-size:12px"},"Step "+__S(r.n)),__h("div",{"style":"font-weight:600;font-size:14px"},__S(r.label)))])),__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline"},__h("h2",{"style":"margin:0;font-size:16px"},"Step 15. Enter marks for every subject"),__h("span",{"class":"sub"},__S(__v.cy.title)+": "+__S(__v.rSubjCount)+" subjects. CWA / internal marks come from the LMS. The team enters only the theory or practical exam marks.")),__h("div",{"role":"tablist","aria-label":"Subjects","style":"display:flex;flex-wrap:wrap;gap:8px;padding:14px 16px 4px"},(__v.rSubjects||[]).map((sj)=>[__h("button",{"role":"tab","aria-selected":sj.active,"onclick":sj.pick,"style":sj.style},__h("span",{"style":"display:block;font-weight:700;font-size:14px"},__S(sj.code)),__h("span",{"style":"display:block;font-size:12.5px"},__S(sj.name)),__h("span",{"style":sj.pillStyle},__S(sj.entered)))])),__h("div",{"style":"padding:10px 16px 0;font-size:14px"},__h("strong",{},__S(__v.rCur.code)+" "+__S(__v.rCur.name))," ",__h("span",{"class":"sub"},"("+__S(__v.rCur.type)+"). Pass mark 40 of 100.")),__h("div",{"style":"overflow-x:auto;padding:4px 0 6px"},__h("table",{"class":"tbl","style":"min-width:720px"},__h("thead",{},__h("tr",{},__h("th",{},"Reg No / student"),(__v.rCur.comps||[]).map((cp)=>[__h("th",{},__S(cp.label)+" /"+__S(cp.max))]),__h("th",{},"Subject total /100"),__h("th",{},"Status"))),__h("tbody",{},(__v.rEntry||[]).map((r)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(r.name)),__h("div",{"class":"sub"},__S(r.reg))),(r.cells||[]).map((m)=>[__h("td",{},(__T(m.fromLms)?[__h("span",{"style":"font-weight:600"},__S(m.val))," ",__h("span",{"class":"sub"},__S(m.src))]:null),(__T(m.editable)?[__h("input",{"class":"inp","inputmode":"numeric","value":m.val,"oninput":m.change,"disabled":m.locked,"aria-label":m.aria,"placeholder":"-","style":m.style})]:null))]),__h("td",{},__h("strong",{},__S(r.total))),__h("td",{},__h("span",{"style":r.stStyle},__S(r.st))))]))))),__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:baseline"},__h("h2",{"style":"margin:0;font-size:16px"},"Steps 16 and 17. Tabulated result and grace"),__h("span",{"class":"sub"},"Grace is given only for failed subjects. Default 0, up to 5; up to 8 with COE decision.")),__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:980px"},__h("thead",{},__h("tr",{},__h("th",{},"Student"),(__v.rSubjects||[]).map((sj)=>[__h("th",{},__S(sj.code))]),__h("th",{},"Grace"),__h("th",{},"Total /"+__S(__v.rMaxTotal)),__h("th",{},"Result"))),__h("tbody",{},(__v.tabRows||[]).map((t)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(t.name)),__h("div",{"class":"sub"},__S(t.reg))),(t.subs||[]).map((x)=>[__h("td",{},__h("span",{"style":x.style},__S(x.val)))]),__h("td",{},(__T(t.noGrace)?[__h("span",{"class":"sub"},__S(t.graceNote))]:null),(__T(t.hasGrace)?[__h("div",{"style":"display:flex;flex-direction:column;gap:6px"},(t.graceItems||[]).map((gi)=>[__h("div",{"style":"display:flex;align-items:center;gap:8px"},__h("span",{"style":"font-size:13px;font-weight:600;min-width:58px"},__S(gi.code)),__h("div",{"role":"group","aria-label":gi.aria,"style":"display:inline-flex;border:1px solid #C9CFC8;border-radius:8px;overflow:hidden"},(gi.opts||[]).map((g)=>[__h("button",{"onclick":g.pick,"disabled":g.disabled,"style":g.style},__S(g.label))])))]))]:null)),__h("td",{},__h("strong",{},__S(t.total))),__h("td",{},__h("span",{"style":t.resStyle},__S(t.result))))]))))),__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"},__h("div",{"class":"card","style":"flex:1 1 320px;padding:14px 16px;font-size:14px"},__h("label",{"style":"display:flex;flex-direction:column;gap:6px;font-weight:600"},"Grace justification (required)\n              ",__h("select",{"class":"inp","style":"font-weight:400"},__h("option",{},"Attendance above 90%"),__h("option",{},"Strong viva performance"),__h("option",{},"Question paper difficulty (COE decision)"),__h("option",{},"CWA consistency"))),__h("p",{"class":"sub","style":"margin:8px 0 0"},"Default 0. Up to 5 allowed; up to 8 only with COE decision. Every grace entry is logged with who applied it and why.")),__h("div",{"class":"card","style":"flex:1 1 320px;padding:14px 16px;display:flex;flex-direction:column;gap:10px"},__h("div",{"style":"font-size:14px;color:#56605B"},__S(__v.resNote)),(__T(__v.resHasNext)?[__h("button",{"class":"btn btn-p","onclick":__v.resNext,"disabled":__v.resBlocked},__S(__v.resCta))]:null))))]:null),(__T(__v.tabMarks)?[__h("div",{"style":"display:flex;flex-direction:column;gap:14px"},__h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px;align-items:stretch"},__h("section",{"class":"card","style":"flex:1 1 300px;padding:16px 18px"},__h("h2",{"style":"margin:0 0 4px;font-size:16px"},"Step 20. TrueScholar"),__h("p",{"class":"sub","style":"margin:0 0 8px"},"Learner data was verified twice before entry. Marks and grades entered for all "+__S(__v.cy.students)+" students."),__h("div",{"style":"font-size:14px"},"Marksheet IDs issued: ",__h("strong",{},__S(__v.cy.students)+" of "+__S(__v.cy.students)))),__h("section",{"class":"card","style":"flex:1 1 300px;padding:16px 18px"},__h("h2",{"style":"margin:0 0 8px;font-size:16px"},"Step 21. Double verification"),__h("div",{"style":"display:flex;flex-direction:column;gap:8px;font-size:14px"},__h("div",{"style":"display:flex;justify-content:space-between;gap:8px;align-items:center"},__h("span",{},"1. Assessment team (Bholanath)"),(__T(__v.v1Done)?[__h("span",{"style":__v.okPill},"Signed")]:null),(__T(__v.v1Open)?[__h("button",{"class":"btn","onclick":__v.signV1},"Sign off")]:null)),__h("div",{"style":"display:flex;justify-content:space-between;gap:8px;align-items:center"},__h("span",{},"2. Board representative"),(__T(__v.v2Done)?[__h("span",{"style":__v.okPill},"Signed")]:null),(__T(__v.v2Open)?[__h("button",{"class":"btn","onclick":__v.signV2,"disabled":__v.v1Open},"Sign off")]:null))),__h("p",{"style":__v.lockNoteStyle},__S(__v.lockNote))),__h("section",{"class":"card","style":"flex:1 1 300px;padding:16px 18px"},__h("h2",{"style":"margin:0 0 8px;font-size:16px"},"Step 22. Print and courier"),__h("p",{"class":"sub","style":"margin:0 0 10px"},"Printed on official letterhead, sealed, one tracking number per marksheet."),__h("button",{"class":"btn btn-p","onclick":__v.printShip,"disabled":__v.shipBlocked},__S(__v.shipCta)))),__h("section",{"class":"card"},__h("div",{"style":"padding:14px 16px;border-bottom:1px solid #EBEEE9;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px"},__h("h2",{"style":"margin:0;font-size:16px"},"Step 23. Delivery and returns"),__h("span",{"class":"sub"},"Undelivered or returned marksheets must be re-dispatched within 7 days.")),(__T(__v.notShipped)?[__h("p",{"class":"sub","style":"margin:0;padding:16px"},"Delivery tracking starts once marksheets are printed and dispatched (step 22).")]:null),(__T(__v.shipped)?[__h("div",{"style":"overflow-x:auto"},__h("table",{"class":"tbl","style":"min-width:820px"},__h("thead",{},__h("tr",{},__h("th",{},"Student"),__h("th",{},"Marksheet ID"),__h("th",{},"Tracking no."),__h("th",{},"Delivery"),__h("th",{},__h("span",{"class":"sr"},"Action")))),__h("tbody",{},(__v.delRows||[]).map((d)=>[__h("tr",{},__h("td",{},__h("strong",{},__S(d.name)),__h("div",{"class":"sub"},__S(d.reg))),__h("td",{},__S(d.msid)),__h("td",{},__S(d.trk)),__h("td",{},__h("span",{"style":d.style},__S(d.status)),__h("div",{"class":"sub"},__S(d.note))),__h("td",{},(__T(d.canRedo)?[__h("button",{"class":"btn","onclick":d.redo},"Re-dispatch")]:null)))]))))]:null)))]:null))]:null))))];}
const root = document.getElementById('app');
const inst = new Component({});
let queued = false;
function draw() { queued = false; __render(tpl(inst.renderVals()), root); }
function schedule() { if (!queued) { queued = true; Promise.resolve().then(draw); } }
draw();
