/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Mods_Reports_OpenInputs */

const en_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} broken report`);
	return /** @type {LocalizedString} */ (`${count__number} broken reports`)
	
};

const es_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reporte de rotura`);
	return /** @type {LocalizedString} */ (`${count__number} reportes de rotura`)
	
};

const de_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Fehlerbericht`);
	return /** @type {LocalizedString} */ (`${count__number} Fehlerberichte`)
	
};

const fr_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rapport de panne`);
	return /** @type {LocalizedString} */ (`${count__number} rapports de panne`)
	
};

const it_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} segnalazione di guasto`);
	return /** @type {LocalizedString} */ (`${count__number} segnalazioni di guasto`)
	
};

const nl_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} defectmelding`);
	return /** @type {LocalizedString} */ (`${count__number} defectmeldingen`)
	
};

const pl_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} zgłoszenie awarii`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} zgłoszenia awarii`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} zgłoszeń awarii`);
	return /** @type {LocalizedString} */ (`${count__number} zgłoszenia awarii`)
	
};

const pt_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} relatório de falha`);
	return /** @type {LocalizedString} */ (`${count__number} relatórios de falha`)
	
};

const ru_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} сообщение о поломке`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} сообщения о поломке`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} сообщений о поломке`);
	return /** @type {LocalizedString} */ (`${count__number} сообщения о поломке`)
	
};

const sv_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} felrapport`);
	return /** @type {LocalizedString} */ (`${count__number} felrapporter`)
	
};

const tr_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bozuk raporu`);
	return /** @type {LocalizedString} */ (`${count__number} bozuk raporu`)
	
};

const zh_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 份损坏报告`)
};

const ja_basecamp_mods_reports_open = /** @type {(inputs: Basecamp_Mods_Reports_OpenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`不具合報告 ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} broken report" |
* | * | "{count__number} broken reports" |
*
* @param {Basecamp_Mods_Reports_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_reports_open = /** @type {((inputs: Basecamp_Mods_Reports_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Reports_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_reports_open(inputs)
	if (locale === "de") return de_basecamp_mods_reports_open(inputs)
	if (locale === "fr") return fr_basecamp_mods_reports_open(inputs)
	if (locale === "it") return it_basecamp_mods_reports_open(inputs)
	if (locale === "nl") return nl_basecamp_mods_reports_open(inputs)
	if (locale === "pl") return pl_basecamp_mods_reports_open(inputs)
	if (locale === "pt") return pt_basecamp_mods_reports_open(inputs)
	if (locale === "ru") return ru_basecamp_mods_reports_open(inputs)
	if (locale === "sv") return sv_basecamp_mods_reports_open(inputs)
	if (locale === "tr") return tr_basecamp_mods_reports_open(inputs)
	if (locale === "zh") return zh_basecamp_mods_reports_open(inputs)
	if (locale === "ja") return ja_basecamp_mods_reports_open(inputs)
	return en_basecamp_mods_reports_open(inputs)
});
