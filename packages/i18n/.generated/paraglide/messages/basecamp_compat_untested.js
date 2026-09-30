/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_UntestedInputs */

const en_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reports`)
};

const es_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin reportes`)
};

const de_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Berichte`)
};

const fr_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun rapport`)
};

const it_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun rapporto`)
};

const nl_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen rapporten`)
};

const pl_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak raportów`)
};

const pt_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem relatórios`)
};

const ru_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет отчётов`)
};

const sv_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga rapporter`)
};

const tr_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapor yok`)
};

const zh_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无报告`)
};

const ja_basecamp_compat_untested = /** @type {(inputs: Basecamp_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レポートなし`)
};

/**
* | output |
* | --- |
* | "No reports" |
*
* @param {Basecamp_Compat_UntestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_untested = /** @type {((inputs?: Basecamp_Compat_UntestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_UntestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_untested(inputs)
	if (locale === "de") return de_basecamp_compat_untested(inputs)
	if (locale === "fr") return fr_basecamp_compat_untested(inputs)
	if (locale === "it") return it_basecamp_compat_untested(inputs)
	if (locale === "nl") return nl_basecamp_compat_untested(inputs)
	if (locale === "pl") return pl_basecamp_compat_untested(inputs)
	if (locale === "pt") return pt_basecamp_compat_untested(inputs)
	if (locale === "ru") return ru_basecamp_compat_untested(inputs)
	if (locale === "sv") return sv_basecamp_compat_untested(inputs)
	if (locale === "tr") return tr_basecamp_compat_untested(inputs)
	if (locale === "zh") return zh_basecamp_compat_untested(inputs)
	if (locale === "ja") return ja_basecamp_compat_untested(inputs)
	return en_basecamp_compat_untested(inputs)
});
