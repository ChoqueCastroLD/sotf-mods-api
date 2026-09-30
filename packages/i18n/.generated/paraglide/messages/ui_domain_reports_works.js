/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Ui_Domain_Reports_WorksInputs */

const en_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} works`);
	return /** @type {LocalizedString} */ (`${i?.display} work`)
	
};

const es_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} funciona`);
	return /** @type {LocalizedString} */ (`${i?.display} funcionan`)
	
};

const de_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} läuft`);
	return /** @type {LocalizedString} */ (`${i?.display} laufen`)
	
};

const fr_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} fonctionne`);
	return /** @type {LocalizedString} */ (`${i?.display} fonctionnent`)
	
};

const it_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} funziona`);
	return /** @type {LocalizedString} */ (`${i?.display} funzionano`)
	
};

const nl_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} werkt`);
	return /** @type {LocalizedString} */ (`${i?.display} werken`)
	
};

const pl_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`działa: ${i?.display}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`działa: ${i?.display}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`działa: ${i?.display}`);
	return /** @type {LocalizedString} */ (`działa: ${i?.display}`)
	
};

const pt_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} funciona`);
	return /** @type {LocalizedString} */ (`${i?.display} funcionam`)
	
};

const ru_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`работает: ${i?.display}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`работает: ${i?.display}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`работает: ${i?.display}`);
	return /** @type {LocalizedString} */ (`работает: ${i?.display}`)
	
};

const sv_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} fungerar`);
	return /** @type {LocalizedString} */ (`${i?.display} fungerar`)
	
};

const tr_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} çalışıyor`);
	return /** @type {LocalizedString} */ (`${i?.display} çalışıyor`)
	
};

const zh_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 可用`)
};

const ja_ui_domain_reports_works = /** @type {(inputs: Ui_Domain_Reports_WorksInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`動作 ${i?.display}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} works" |
* | * | "{display} work" |
*
* @param {Ui_Domain_Reports_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_works = /** @type {((inputs: Ui_Domain_Reports_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_works(inputs)
	if (locale === "de") return de_ui_domain_reports_works(inputs)
	if (locale === "fr") return fr_ui_domain_reports_works(inputs)
	if (locale === "it") return it_ui_domain_reports_works(inputs)
	if (locale === "nl") return nl_ui_domain_reports_works(inputs)
	if (locale === "pl") return pl_ui_domain_reports_works(inputs)
	if (locale === "pt") return pt_ui_domain_reports_works(inputs)
	if (locale === "ru") return ru_ui_domain_reports_works(inputs)
	if (locale === "sv") return sv_ui_domain_reports_works(inputs)
	if (locale === "tr") return tr_ui_domain_reports_works(inputs)
	if (locale === "zh") return zh_ui_domain_reports_works(inputs)
	if (locale === "ja") return ja_ui_domain_reports_works(inputs)
	return en_ui_domain_reports_works(inputs)
});
