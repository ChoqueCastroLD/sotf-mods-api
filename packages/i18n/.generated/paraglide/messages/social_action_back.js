/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_BackInputs */

const en_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

const es_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver`)
};

const de_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück`)
};

const fr_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour`)
};

const it_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indietro`)
};

const nl_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug`)
};

const pl_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstecz`)
};

const pt_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar`)
};

const ru_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад`)
};

const sv_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka`)
};

const tr_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri`)
};

const zh_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回`)
};

const ja_social_action_back = /** @type {(inputs: Social_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`戻る`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {Social_Action_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_back = /** @type {((inputs?: Social_Action_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_back(inputs)
	if (locale === "de") return de_social_action_back(inputs)
	if (locale === "fr") return fr_social_action_back(inputs)
	if (locale === "it") return it_social_action_back(inputs)
	if (locale === "nl") return nl_social_action_back(inputs)
	if (locale === "pl") return pl_social_action_back(inputs)
	if (locale === "pt") return pt_social_action_back(inputs)
	if (locale === "ru") return ru_social_action_back(inputs)
	if (locale === "sv") return sv_social_action_back(inputs)
	if (locale === "tr") return tr_social_action_back(inputs)
	if (locale === "zh") return zh_social_action_back(inputs)
	if (locale === "ja") return ja_social_action_back(inputs)
	return en_social_action_back(inputs)
});
