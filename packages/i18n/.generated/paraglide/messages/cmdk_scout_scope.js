/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_ScopeInputs */

const en_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask Scout`)
};

const es_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntar a Scout`)
};

const de_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout fragen`)
};

const fr_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander à Scout`)
};

const it_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi a Scout`)
};

const nl_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraag het Scout`)
};

const pl_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapytaj Scouta`)
};

const pt_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntar ao Scout`)
};

const ru_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спросить Scout`)
};

const sv_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga Scout`)
};

const tr_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout’a sor`)
};

const zh_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`询问 Scout`)
};

const ja_cmdk_scout_scope = /** @type {(inputs: Cmdk_Scout_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scoutに聞く`)
};

/**
* | output |
* | --- |
* | "Ask Scout" |
*
* @param {Cmdk_Scout_ScopeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_scope = /** @type {((inputs?: Cmdk_Scout_ScopeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_ScopeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_scope(inputs)
	if (locale === "de") return de_cmdk_scout_scope(inputs)
	if (locale === "fr") return fr_cmdk_scout_scope(inputs)
	if (locale === "it") return it_cmdk_scout_scope(inputs)
	if (locale === "nl") return nl_cmdk_scout_scope(inputs)
	if (locale === "pl") return pl_cmdk_scout_scope(inputs)
	if (locale === "pt") return pt_cmdk_scout_scope(inputs)
	if (locale === "ru") return ru_cmdk_scout_scope(inputs)
	if (locale === "sv") return sv_cmdk_scout_scope(inputs)
	if (locale === "tr") return tr_cmdk_scout_scope(inputs)
	if (locale === "zh") return zh_cmdk_scout_scope(inputs)
	if (locale === "ja") return ja_cmdk_scout_scope(inputs)
	return en_cmdk_scout_scope(inputs)
});
