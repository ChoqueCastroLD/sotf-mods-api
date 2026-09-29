/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_BackInputs */

const en_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

const es_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver`)
};

const de_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück`)
};

const fr_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour`)
};

const it_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indietro`)
};

const nl_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug`)
};

const pl_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstecz`)
};

const pt_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar`)
};

const ru_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад`)
};

const sv_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka`)
};

const tr_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri`)
};

const zh_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回`)
};

const ja_common_action_back = /** @type {(inputs: Common_Action_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`戻る`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {Common_Action_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_back = /** @type {((inputs?: Common_Action_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_back(inputs)
	if (locale === "de") return de_common_action_back(inputs)
	if (locale === "fr") return fr_common_action_back(inputs)
	if (locale === "it") return it_common_action_back(inputs)
	if (locale === "nl") return nl_common_action_back(inputs)
	if (locale === "pl") return pl_common_action_back(inputs)
	if (locale === "pt") return pt_common_action_back(inputs)
	if (locale === "ru") return ru_common_action_back(inputs)
	if (locale === "sv") return sv_common_action_back(inputs)
	if (locale === "tr") return tr_common_action_back(inputs)
	if (locale === "zh") return zh_common_action_back(inputs)
	if (locale === "ja") return ja_common_action_back(inputs)
	return en_common_action_back(inputs)
});
