/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Reports_NoneInputs */

const en_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None`)
};

const es_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguno`)
};

const de_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine`)
};

const fr_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun`)
};

const it_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuno`)
};

const nl_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen`)
};

const pl_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak`)
};

const pt_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum`)
};

const ru_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет`)
};

const sv_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga`)
};

const tr_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yok`)
};

const zh_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无`)
};

const ja_basecamp_mods_reports_none = /** @type {(inputs: Basecamp_Mods_Reports_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`なし`)
};

/**
* | output |
* | --- |
* | "None" |
*
* @param {Basecamp_Mods_Reports_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_reports_none = /** @type {((inputs?: Basecamp_Mods_Reports_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Reports_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_reports_none(inputs)
	if (locale === "de") return de_basecamp_mods_reports_none(inputs)
	if (locale === "fr") return fr_basecamp_mods_reports_none(inputs)
	if (locale === "it") return it_basecamp_mods_reports_none(inputs)
	if (locale === "nl") return nl_basecamp_mods_reports_none(inputs)
	if (locale === "pl") return pl_basecamp_mods_reports_none(inputs)
	if (locale === "pt") return pt_basecamp_mods_reports_none(inputs)
	if (locale === "ru") return ru_basecamp_mods_reports_none(inputs)
	if (locale === "sv") return sv_basecamp_mods_reports_none(inputs)
	if (locale === "tr") return tr_basecamp_mods_reports_none(inputs)
	if (locale === "zh") return zh_basecamp_mods_reports_none(inputs)
	if (locale === "ja") return ja_basecamp_mods_reports_none(inputs)
	return en_basecamp_mods_reports_none(inputs)
});
