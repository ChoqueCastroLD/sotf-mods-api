/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Ui_Domain_Reports_BrokenInputs */

const en_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} broken`);
	return /** @type {LocalizedString} */ (`${i?.display} broken`)
	
};

const es_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} roto`);
	return /** @type {LocalizedString} */ (`${i?.display} rotos`)
	
};

const de_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} kaputt`);
	return /** @type {LocalizedString} */ (`${i?.display} kaputt`)
	
};

const fr_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} cassé`);
	return /** @type {LocalizedString} */ (`${i?.display} cassés`)
	
};

const it_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} non funziona`);
	return /** @type {LocalizedString} */ (`${i?.display} non funzionano`)
	
};

const nl_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} kapot`);
	return /** @type {LocalizedString} */ (`${i?.display} kapot`)
	
};

const pl_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`nie działa: ${i?.display}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`nie działa: ${i?.display}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`nie działa: ${i?.display}`);
	return /** @type {LocalizedString} */ (`nie działa: ${i?.display}`)
	
};

const pt_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} quebrado`);
	return /** @type {LocalizedString} */ (`${i?.display} quebrados`)
	
};

const ru_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`не работает: ${i?.display}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`не работает: ${i?.display}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`не работает: ${i?.display}`);
	return /** @type {LocalizedString} */ (`не работает: ${i?.display}`)
	
};

const sv_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} trasig`);
	return /** @type {LocalizedString} */ (`${i?.display} trasiga`)
	
};

const tr_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} bozuk`);
	return /** @type {LocalizedString} */ (`${i?.display} bozuk`)
	
};

const zh_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 失效`)
};

const ja_ui_domain_reports_broken = /** @type {(inputs: Ui_Domain_Reports_BrokenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`動作しない ${i?.display}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} broken" |
* | * | "{display} broken" |
*
* @param {Ui_Domain_Reports_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_broken = /** @type {((inputs: Ui_Domain_Reports_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_broken(inputs)
	if (locale === "de") return de_ui_domain_reports_broken(inputs)
	if (locale === "fr") return fr_ui_domain_reports_broken(inputs)
	if (locale === "it") return it_ui_domain_reports_broken(inputs)
	if (locale === "nl") return nl_ui_domain_reports_broken(inputs)
	if (locale === "pl") return pl_ui_domain_reports_broken(inputs)
	if (locale === "pt") return pt_ui_domain_reports_broken(inputs)
	if (locale === "ru") return ru_ui_domain_reports_broken(inputs)
	if (locale === "sv") return sv_ui_domain_reports_broken(inputs)
	if (locale === "tr") return tr_ui_domain_reports_broken(inputs)
	if (locale === "zh") return zh_ui_domain_reports_broken(inputs)
	if (locale === "ja") return ja_ui_domain_reports_broken(inputs)
	return en_ui_domain_reports_broken(inputs)
});
