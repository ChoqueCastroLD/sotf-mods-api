/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tier: NonNullable<unknown>, threshold: NonNullable<unknown> }} Basecamp_Milestone_TierInputs */

const en_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} tier at ${i?.threshold} downloads`)
};

const es_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rango ${i?.tier} a las ${i?.threshold} descargas`)
};

const de_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stufe ${i?.tier} bei ${i?.threshold} Downloads`)
};

const fr_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rang ${i?.tier} à ${i?.threshold} téléchargements`)
};

const it_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Livello ${i?.tier} a ${i?.threshold} download`)
};

const nl_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niveau ${i?.tier} bij ${i?.threshold} downloads`)
};

const pl_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poziom ${i?.tier} przy ${i?.threshold} pobraniach`)
};

const pt_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nível ${i?.tier} com ${i?.threshold} downloads`)
};

const ru_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ранг ${i?.tier} на ${i?.threshold} загрузок`)
};

const sv_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nivå ${i?.tier} vid ${i?.threshold} nedladdningar`)
};

const tr_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.threshold} indirmede ${i?.tier} seviyesi`)
};

const zh_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.threshold} 次下载达到 ${i?.tier} 等级`)
};

const ja_basecamp_milestone_tier = /** @type {(inputs: Basecamp_Milestone_TierInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.threshold} ダウンロードで ${i?.tier} ティア`)
};

/**
* | output |
* | --- |
* | "{tier} tier at {threshold} downloads" |
*
* @param {Basecamp_Milestone_TierInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_tier = /** @type {((inputs: Basecamp_Milestone_TierInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_TierInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_tier(inputs)
	if (locale === "de") return de_basecamp_milestone_tier(inputs)
	if (locale === "fr") return fr_basecamp_milestone_tier(inputs)
	if (locale === "it") return it_basecamp_milestone_tier(inputs)
	if (locale === "nl") return nl_basecamp_milestone_tier(inputs)
	if (locale === "pl") return pl_basecamp_milestone_tier(inputs)
	if (locale === "pt") return pt_basecamp_milestone_tier(inputs)
	if (locale === "ru") return ru_basecamp_milestone_tier(inputs)
	if (locale === "sv") return sv_basecamp_milestone_tier(inputs)
	if (locale === "tr") return tr_basecamp_milestone_tier(inputs)
	if (locale === "zh") return zh_basecamp_milestone_tier(inputs)
	if (locale === "ja") return ja_basecamp_milestone_tier(inputs)
	return en_basecamp_milestone_tier(inputs)
});
