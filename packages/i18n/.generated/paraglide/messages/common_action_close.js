/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_CloseInputs */

const en_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const es_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar`)
};

const de_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließen`)
};

const fr_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer`)
};

const it_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi`)
};

const nl_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const pl_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij`)
};

const pt_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar`)
};

const ru_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть`)
};

const sv_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng`)
};

const tr_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapat`)
};

const zh_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const ja_common_action_close = /** @type {(inputs: Common_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Common_Action_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_close = /** @type {((inputs?: Common_Action_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_close(inputs)
	if (locale === "de") return de_common_action_close(inputs)
	if (locale === "fr") return fr_common_action_close(inputs)
	if (locale === "it") return it_common_action_close(inputs)
	if (locale === "nl") return nl_common_action_close(inputs)
	if (locale === "pl") return pl_common_action_close(inputs)
	if (locale === "pt") return pt_common_action_close(inputs)
	if (locale === "ru") return ru_common_action_close(inputs)
	if (locale === "sv") return sv_common_action_close(inputs)
	if (locale === "tr") return tr_common_action_close(inputs)
	if (locale === "zh") return zh_common_action_close(inputs)
	if (locale === "ja") return ja_common_action_close(inputs)
	return en_common_action_close(inputs)
});
