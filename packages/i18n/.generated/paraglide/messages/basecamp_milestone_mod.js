/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, threshold: NonNullable<unknown> }} Basecamp_Milestone_ModInputs */

const en_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} at ${i?.threshold} downloads`)
};

const es_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} a las ${i?.threshold} descargas`)
};

const de_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bei ${i?.threshold} Downloads`)
};

const fr_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} à ${i?.threshold} téléchargements`)
};

const it_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} a ${i?.threshold} download`)
};

const nl_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bij ${i?.threshold} downloads`)
};

const pl_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} przy ${i?.threshold} pobraniach`)
};

const pt_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} com ${i?.threshold} downloads`)
};

const ru_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} на ${i?.threshold} загрузок`)
};

const sv_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} vid ${i?.threshold} nedladdningar`)
};

const tr_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.threshold} indirmede ${i?.name}`)
};

const zh_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 达到 ${i?.threshold} 次下载`)
};

const ja_basecamp_milestone_mod = /** @type {(inputs: Basecamp_Milestone_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} が ${i?.threshold} ダウンロード`)
};

/**
* | output |
* | --- |
* | "{name} at {threshold} downloads" |
*
* @param {Basecamp_Milestone_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_mod = /** @type {((inputs: Basecamp_Milestone_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_mod(inputs)
	if (locale === "de") return de_basecamp_milestone_mod(inputs)
	if (locale === "fr") return fr_basecamp_milestone_mod(inputs)
	if (locale === "it") return it_basecamp_milestone_mod(inputs)
	if (locale === "nl") return nl_basecamp_milestone_mod(inputs)
	if (locale === "pl") return pl_basecamp_milestone_mod(inputs)
	if (locale === "pt") return pt_basecamp_milestone_mod(inputs)
	if (locale === "ru") return ru_basecamp_milestone_mod(inputs)
	if (locale === "sv") return sv_basecamp_milestone_mod(inputs)
	if (locale === "tr") return tr_basecamp_milestone_mod(inputs)
	if (locale === "zh") return zh_basecamp_milestone_mod(inputs)
	if (locale === "ja") return ja_basecamp_milestone_mod(inputs)
	return en_basecamp_milestone_mod(inputs)
});
