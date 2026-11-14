/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Detail_TitleInputs */

const en_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, a Sons of the Forest modpack`)
};

const es_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, un modpack de Sons of the Forest`)
};

const de_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, ein Modpack für Sons of the Forest`)
};

const fr_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, un modpack Sons of the Forest`)
};

const it_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, un modpack per Sons of the Forest`)
};

const nl_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, een modpack voor Sons of the Forest`)
};

const pl_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, modpack do Sons of the Forest`)
};

const pt_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, um modpack de Sons of the Forest`)
};

const ru_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, модпак для Sons of the Forest`)
};

const sv_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, ett modpaket för Sons of the Forest`)
};

const tr_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, bir Sons of the Forest mod paketi`)
};

const zh_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}，《森林之子》整合包`)
};

const ja_modpacks_detail_title = /** @type {(inputs: Modpacks_Detail_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}（Sons of the Forest の Modパック）`)
};

/**
* | output |
* | --- |
* | "{name}, a Sons of the Forest modpack" |
*
* @param {Modpacks_Detail_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_detail_title = /** @type {((inputs: Modpacks_Detail_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Detail_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_detail_title(inputs)
	if (locale === "de") return de_modpacks_detail_title(inputs)
	if (locale === "fr") return fr_modpacks_detail_title(inputs)
	if (locale === "it") return it_modpacks_detail_title(inputs)
	if (locale === "nl") return nl_modpacks_detail_title(inputs)
	if (locale === "pl") return pl_modpacks_detail_title(inputs)
	if (locale === "pt") return pt_modpacks_detail_title(inputs)
	if (locale === "ru") return ru_modpacks_detail_title(inputs)
	if (locale === "sv") return sv_modpacks_detail_title(inputs)
	if (locale === "tr") return tr_modpacks_detail_title(inputs)
	if (locale === "zh") return zh_modpacks_detail_title(inputs)
	if (locale === "ja") return ja_modpacks_detail_title(inputs)
	return en_modpacks_detail_title(inputs)
});
