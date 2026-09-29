/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_ClearInputs */

const en_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
};

const es_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar`)
};

const de_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leeren`)
};

const fr_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer`)
};

const it_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella`)
};

const nl_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wissen`)
};

const pl_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść`)
};

const pt_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar`)
};

const ru_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить`)
};

const sv_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa`)
};

const tr_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temizle`)
};

const zh_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除`)
};

const ja_common_action_clear = /** @type {(inputs: Common_Action_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリア`)
};

/**
* | output |
* | --- |
* | "Clear" |
*
* @param {Common_Action_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_clear = /** @type {((inputs?: Common_Action_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_clear(inputs)
	if (locale === "de") return de_common_action_clear(inputs)
	if (locale === "fr") return fr_common_action_clear(inputs)
	if (locale === "it") return it_common_action_clear(inputs)
	if (locale === "nl") return nl_common_action_clear(inputs)
	if (locale === "pl") return pl_common_action_clear(inputs)
	if (locale === "pt") return pt_common_action_clear(inputs)
	if (locale === "ru") return ru_common_action_clear(inputs)
	if (locale === "sv") return sv_common_action_clear(inputs)
	if (locale === "tr") return tr_common_action_clear(inputs)
	if (locale === "zh") return zh_common_action_clear(inputs)
	if (locale === "ja") return ja_common_action_clear(inputs)
	return en_common_action_clear(inputs)
});
