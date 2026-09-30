/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Ui_Domain_Reports_PartialInputs */

const en_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} partly`);
	return /** @type {LocalizedString} */ (`${i?.display} partly`)
	
};

const es_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} en parte`);
	return /** @type {LocalizedString} */ (`${i?.display} en parte`)
	
};

const de_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} teilweise`);
	return /** @type {LocalizedString} */ (`${i?.display} teilweise`)
	
};

const fr_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} en partie`);
	return /** @type {LocalizedString} */ (`${i?.display} en partie`)
	
};

const it_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} in parte`);
	return /** @type {LocalizedString} */ (`${i?.display} in parte`)
	
};

const nl_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} deels`);
	return /** @type {LocalizedString} */ (`${i?.display} deels`)
	
};

const pl_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`częściowo: ${i?.display}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`częściowo: ${i?.display}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`częściowo: ${i?.display}`);
	return /** @type {LocalizedString} */ (`częściowo: ${i?.display}`)
	
};

const pt_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} em parte`);
	return /** @type {LocalizedString} */ (`${i?.display} em parte`)
	
};

const ru_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`частично: ${i?.display}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`частично: ${i?.display}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`частично: ${i?.display}`);
	return /** @type {LocalizedString} */ (`частично: ${i?.display}`)
	
};

const sv_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} delvis`);
	return /** @type {LocalizedString} */ (`${i?.display} delvis`)
	
};

const tr_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} kısmen`);
	return /** @type {LocalizedString} */ (`${i?.display} kısmen`)
	
};

const zh_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 部分可用`)
};

const ja_ui_domain_reports_partial = /** @type {(inputs: Ui_Domain_Reports_PartialInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`一部動作 ${i?.display}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} partly" |
* | * | "{display} partly" |
*
* @param {Ui_Domain_Reports_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_partial = /** @type {((inputs: Ui_Domain_Reports_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_partial(inputs)
	if (locale === "de") return de_ui_domain_reports_partial(inputs)
	if (locale === "fr") return fr_ui_domain_reports_partial(inputs)
	if (locale === "it") return it_ui_domain_reports_partial(inputs)
	if (locale === "nl") return nl_ui_domain_reports_partial(inputs)
	if (locale === "pl") return pl_ui_domain_reports_partial(inputs)
	if (locale === "pt") return pt_ui_domain_reports_partial(inputs)
	if (locale === "ru") return ru_ui_domain_reports_partial(inputs)
	if (locale === "sv") return sv_ui_domain_reports_partial(inputs)
	if (locale === "tr") return tr_ui_domain_reports_partial(inputs)
	if (locale === "zh") return zh_ui_domain_reports_partial(inputs)
	if (locale === "ja") return ja_ui_domain_reports_partial(inputs)
	return en_ui_domain_reports_partial(inputs)
});
