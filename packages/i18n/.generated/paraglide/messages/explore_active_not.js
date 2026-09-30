/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Explore_Active_NotInputs */

const en_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Not ${i?.label}`)
};

const es_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sin ${i?.label}`)
};

const de_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ohne ${i?.label}`)
};

const fr_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sans ${i?.label}`)
};

const it_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senza ${i?.label}`)
};

const nl_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zonder ${i?.label}`)
};

const pl_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bez: ${i?.label}`)
};

const pt_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sem ${i?.label}`)
};

const ru_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Без: ${i?.label}`)
};

const sv_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inte ${i?.label}`)
};

const tr_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} hariç`)
};

const zh_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`排除 ${i?.label}`)
};

const ja_explore_active_not = /** @type {(inputs: Explore_Active_NotInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を除く`)
};

/**
* | output |
* | --- |
* | "Not {label}" |
*
* @param {Explore_Active_NotInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_active_not = /** @type {((inputs: Explore_Active_NotInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Active_NotInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_active_not(inputs)
	if (locale === "de") return de_explore_active_not(inputs)
	if (locale === "fr") return fr_explore_active_not(inputs)
	if (locale === "it") return it_explore_active_not(inputs)
	if (locale === "nl") return nl_explore_active_not(inputs)
	if (locale === "pl") return pl_explore_active_not(inputs)
	if (locale === "pt") return pt_explore_active_not(inputs)
	if (locale === "ru") return ru_explore_active_not(inputs)
	if (locale === "sv") return sv_explore_active_not(inputs)
	if (locale === "tr") return tr_explore_active_not(inputs)
	if (locale === "zh") return zh_explore_active_not(inputs)
	if (locale === "ja") return ja_explore_active_not(inputs)
	return en_explore_active_not(inputs)
});
