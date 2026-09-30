/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ works: NonNullable<unknown>, partial: NonNullable<unknown>, broken: NonNullable<unknown> }} Ui_Domain_Reports_SummaryInputs */

const en_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("en", i?.works, {});
	const partial__number = registry.number("en", i?.partial, {});
	const broken__number = registry.number("en", i?.broken, {});return /** @type {LocalizedString} */ (`Field reports: ${works__number} work, ${partial__number} partly, ${broken__number} broken`)
};

const es_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("es", i?.works, {});
	const partial__number = registry.number("es", i?.partial, {});
	const broken__number = registry.number("es", i?.broken, {});return /** @type {LocalizedString} */ (`Reportes de campo: ${works__number} funciona, ${partial__number} en parte, ${broken__number} roto`)
};

const de_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("de", i?.works, {});
	const partial__number = registry.number("de", i?.partial, {});
	const broken__number = registry.number("de", i?.broken, {});return /** @type {LocalizedString} */ (`Feldberichte: ${works__number} läuft, ${partial__number} teilweise, ${broken__number} kaputt`)
};

const fr_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("fr", i?.works, {});
	const partial__number = registry.number("fr", i?.partial, {});
	const broken__number = registry.number("fr", i?.broken, {});return /** @type {LocalizedString} */ (`Rapports de terrain : ${works__number} fonctionne, ${partial__number} en partie, ${broken__number} cassé`)
};

const it_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("it", i?.works, {});
	const partial__number = registry.number("it", i?.partial, {});
	const broken__number = registry.number("it", i?.broken, {});return /** @type {LocalizedString} */ (`Rapporti sul campo: ${works__number} funziona, ${partial__number} in parte, ${broken__number} non funziona`)
};

const nl_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("nl", i?.works, {});
	const partial__number = registry.number("nl", i?.partial, {});
	const broken__number = registry.number("nl", i?.broken, {});return /** @type {LocalizedString} */ (`Veldrapporten: ${works__number} werkt, ${partial__number} deels, ${broken__number} kapot`)
};

const pl_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pl", i?.works, {});
	const partial__number = registry.number("pl", i?.partial, {});
	const broken__number = registry.number("pl", i?.broken, {});return /** @type {LocalizedString} */ (`Raporty terenowe: działa – ${works__number}, częściowo – ${partial__number}, nie działa – ${broken__number}`)
};

const pt_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pt", i?.works, {});
	const partial__number = registry.number("pt", i?.partial, {});
	const broken__number = registry.number("pt", i?.broken, {});return /** @type {LocalizedString} */ (`Relatórios de campo: ${works__number} funciona, ${partial__number} em parte, ${broken__number} quebrado`)
};

const ru_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ru", i?.works, {});
	const partial__number = registry.number("ru", i?.partial, {});
	const broken__number = registry.number("ru", i?.broken, {});return /** @type {LocalizedString} */ (`Полевые отчёты: работает — ${works__number}, частично — ${partial__number}, не работает — ${broken__number}`)
};

const sv_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("sv", i?.works, {});
	const partial__number = registry.number("sv", i?.partial, {});
	const broken__number = registry.number("sv", i?.broken, {});return /** @type {LocalizedString} */ (`Fältrapporter: ${works__number} fungerar, ${partial__number} delvis, ${broken__number} trasig`)
};

const tr_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("tr", i?.works, {});
	const partial__number = registry.number("tr", i?.partial, {});
	const broken__number = registry.number("tr", i?.broken, {});return /** @type {LocalizedString} */ (`Saha raporları: ${works__number} çalışıyor, ${partial__number} kısmen, ${broken__number} bozuk`)
};

const zh_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("zh", i?.works, {});
	const partial__number = registry.number("zh", i?.partial, {});
	const broken__number = registry.number("zh", i?.broken, {});return /** @type {LocalizedString} */ (`实地报告：${works__number} 可用，${partial__number} 部分可用，${broken__number} 失效`)
};

const ja_ui_domain_reports_summary = /** @type {(inputs: Ui_Domain_Reports_SummaryInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ja", i?.works, {});
	const partial__number = registry.number("ja", i?.partial, {});
	const broken__number = registry.number("ja", i?.broken, {});return /** @type {LocalizedString} */ (`フィールドレポート：動作 ${works__number}・一部動作 ${partial__number}・動作しない ${broken__number}`)
};

/**
* | output |
* | --- |
* | "Field reports: {works__number} work, {partial__number} partly, {broken__number} broken" |
*
* @param {Ui_Domain_Reports_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_summary = /** @type {((inputs: Ui_Domain_Reports_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_summary(inputs)
	if (locale === "de") return de_ui_domain_reports_summary(inputs)
	if (locale === "fr") return fr_ui_domain_reports_summary(inputs)
	if (locale === "it") return it_ui_domain_reports_summary(inputs)
	if (locale === "nl") return nl_ui_domain_reports_summary(inputs)
	if (locale === "pl") return pl_ui_domain_reports_summary(inputs)
	if (locale === "pt") return pt_ui_domain_reports_summary(inputs)
	if (locale === "ru") return ru_ui_domain_reports_summary(inputs)
	if (locale === "sv") return sv_ui_domain_reports_summary(inputs)
	if (locale === "tr") return tr_ui_domain_reports_summary(inputs)
	if (locale === "zh") return zh_ui_domain_reports_summary(inputs)
	if (locale === "ja") return ja_ui_domain_reports_summary(inputs)
	return en_ui_domain_reports_summary(inputs)
});
