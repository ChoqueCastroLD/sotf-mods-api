/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tier: NonNullable<unknown> }} Basecamp_Milestone_Tier_LabelInputs */

const en_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progress to the ${i?.tier} tier`)
};

const es_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progreso hacia el rango ${i?.tier}`)
};

const de_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fortschritt zur Stufe ${i?.tier}`)
};

const fr_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progression vers le rang ${i?.tier}`)
};

const it_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progressi verso il livello ${i?.tier}`)
};

const nl_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voortgang naar niveau ${i?.tier}`)
};

const pl_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Postęp do poziomu ${i?.tier}`)
};

const pt_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progresso até o nível ${i?.tier}`)
};

const ru_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Прогресс до ранга ${i?.tier}`)
};

const sv_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Framsteg mot nivån ${i?.tier}`)
};

const tr_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} seviyesine ilerleme`)
};

const zh_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} 等级进度`)
};

const ja_basecamp_milestone_tier_label = /** @type {(inputs: Basecamp_Milestone_Tier_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tier} ティアまでの進捗`)
};

/**
* | output |
* | --- |
* | "Progress to the {tier} tier" |
*
* @param {Basecamp_Milestone_Tier_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_tier_label = /** @type {((inputs: Basecamp_Milestone_Tier_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_Tier_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_tier_label(inputs)
	if (locale === "de") return de_basecamp_milestone_tier_label(inputs)
	if (locale === "fr") return fr_basecamp_milestone_tier_label(inputs)
	if (locale === "it") return it_basecamp_milestone_tier_label(inputs)
	if (locale === "nl") return nl_basecamp_milestone_tier_label(inputs)
	if (locale === "pl") return pl_basecamp_milestone_tier_label(inputs)
	if (locale === "pt") return pt_basecamp_milestone_tier_label(inputs)
	if (locale === "ru") return ru_basecamp_milestone_tier_label(inputs)
	if (locale === "sv") return sv_basecamp_milestone_tier_label(inputs)
	if (locale === "tr") return tr_basecamp_milestone_tier_label(inputs)
	if (locale === "zh") return zh_basecamp_milestone_tier_label(inputs)
	if (locale === "ja") return ja_basecamp_milestone_tier_label(inputs)
	return en_basecamp_milestone_tier_label(inputs)
});
