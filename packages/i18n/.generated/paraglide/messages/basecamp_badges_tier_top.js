/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Badges_Tier_TopInputs */

const en_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You reached the highest tier.`)
};

const es_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has llegado al rango más alto.`)
};

const de_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast die höchste Stufe erreicht.`)
};

const fr_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu as atteint le rang le plus élevé.`)
};

const it_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai raggiunto il livello più alto.`)
};

const nl_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt het hoogste niveau bereikt.`)
};

const pl_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osiągnąłeś najwyższy poziom.`)
};

const pt_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você chegou ao nível mais alto.`)
};

const ru_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы достигли высшего ранга.`)
};

const sv_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har nått den högsta nivån.`)
};

const tr_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yüksek seviyeye ulaştın.`)
};

const zh_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已达到最高等级。`)
};

const ja_basecamp_badges_tier_top = /** @type {(inputs: Basecamp_Badges_Tier_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最高ティアに到達しました。`)
};

/**
* | output |
* | --- |
* | "You reached the highest tier." |
*
* @param {Basecamp_Badges_Tier_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_tier_top = /** @type {((inputs?: Basecamp_Badges_Tier_TopInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Tier_TopInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_tier_top(inputs)
	if (locale === "de") return de_basecamp_badges_tier_top(inputs)
	if (locale === "fr") return fr_basecamp_badges_tier_top(inputs)
	if (locale === "it") return it_basecamp_badges_tier_top(inputs)
	if (locale === "nl") return nl_basecamp_badges_tier_top(inputs)
	if (locale === "pl") return pl_basecamp_badges_tier_top(inputs)
	if (locale === "pt") return pt_basecamp_badges_tier_top(inputs)
	if (locale === "ru") return ru_basecamp_badges_tier_top(inputs)
	if (locale === "sv") return sv_basecamp_badges_tier_top(inputs)
	if (locale === "tr") return tr_basecamp_badges_tier_top(inputs)
	if (locale === "zh") return zh_basecamp_badges_tier_top(inputs)
	if (locale === "ja") return ja_basecamp_badges_tier_top(inputs)
	return en_basecamp_badges_tier_top(inputs)
});
