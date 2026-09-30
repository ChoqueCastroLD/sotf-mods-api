/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Filter_OnInputs */

const en_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(on)`)
};

const es_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(activado)`)
};

const de_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(aktiv)`)
};

const fr_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(activé)`)
};

const it_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(attivo)`)
};

const nl_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(aan)`)
};

const pl_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(włączony)`)
};

const pt_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(ativado)`)
};

const ru_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(включён)`)
};

const sv_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(på)`)
};

const tr_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(açık)`)
};

const zh_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（已启用）`)
};

const ja_kits_filter_on = /** @type {(inputs: Kits_Filter_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（オン）`)
};

/**
* | output |
* | --- |
* | "(on)" |
*
* @param {Kits_Filter_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_filter_on = /** @type {((inputs?: Kits_Filter_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Filter_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_filter_on(inputs)
	if (locale === "de") return de_kits_filter_on(inputs)
	if (locale === "fr") return fr_kits_filter_on(inputs)
	if (locale === "it") return it_kits_filter_on(inputs)
	if (locale === "nl") return nl_kits_filter_on(inputs)
	if (locale === "pl") return pl_kits_filter_on(inputs)
	if (locale === "pt") return pt_kits_filter_on(inputs)
	if (locale === "ru") return ru_kits_filter_on(inputs)
	if (locale === "sv") return sv_kits_filter_on(inputs)
	if (locale === "tr") return tr_kits_filter_on(inputs)
	if (locale === "zh") return zh_kits_filter_on(inputs)
	if (locale === "ja") return ja_kits_filter_on(inputs)
	return en_kits_filter_on(inputs)
});
