/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Post_ReviewInputs */

const en_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post-review`)
};

const es_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisión posterior`)
};

const de_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachprüfung`)
};

const fr_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revue a posteriori`)
};

const it_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisione successiva`)
};

const nl_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacontrole`)
};

const pl_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przegląd po publikacji`)
};

const pt_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisão posterior`)
};

const ru_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последующая проверка`)
};

const sv_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efterhandsgranskning`)
};

const tr_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonradan inceleme`)
};

const zh_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`事后审核`)
};

const ja_ranger_lane_post_review = /** @type {(inputs: Ranger_Lane_Post_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`事後レビュー`)
};

/**
* | output |
* | --- |
* | "Post-review" |
*
* @param {Ranger_Lane_Post_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_post_review = /** @type {((inputs?: Ranger_Lane_Post_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Post_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_post_review(inputs)
	if (locale === "de") return de_ranger_lane_post_review(inputs)
	if (locale === "fr") return fr_ranger_lane_post_review(inputs)
	if (locale === "it") return it_ranger_lane_post_review(inputs)
	if (locale === "nl") return nl_ranger_lane_post_review(inputs)
	if (locale === "pl") return pl_ranger_lane_post_review(inputs)
	if (locale === "pt") return pt_ranger_lane_post_review(inputs)
	if (locale === "ru") return ru_ranger_lane_post_review(inputs)
	if (locale === "sv") return sv_ranger_lane_post_review(inputs)
	if (locale === "tr") return tr_ranger_lane_post_review(inputs)
	if (locale === "zh") return zh_ranger_lane_post_review(inputs)
	if (locale === "ja") return ja_ranger_lane_post_review(inputs)
	return en_ranger_lane_post_review(inputs)
});
