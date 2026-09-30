/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_CloseInputs */

const en_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const es_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar`)
};

const de_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließen`)
};

const fr_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer`)
};

const it_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi`)
};

const nl_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const pl_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij`)
};

const pt_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar`)
};

const ru_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть`)
};

const sv_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng`)
};

const tr_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapat`)
};

const zh_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const ja_social_action_close = /** @type {(inputs: Social_Action_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Social_Action_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_close = /** @type {((inputs?: Social_Action_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_close(inputs)
	if (locale === "de") return de_social_action_close(inputs)
	if (locale === "fr") return fr_social_action_close(inputs)
	if (locale === "it") return it_social_action_close(inputs)
	if (locale === "nl") return nl_social_action_close(inputs)
	if (locale === "pl") return pl_social_action_close(inputs)
	if (locale === "pt") return pt_social_action_close(inputs)
	if (locale === "ru") return ru_social_action_close(inputs)
	if (locale === "sv") return sv_social_action_close(inputs)
	if (locale === "tr") return tr_social_action_close(inputs)
	if (locale === "zh") return zh_social_action_close(inputs)
	if (locale === "ja") return ja_social_action_close(inputs)
	return en_social_action_close(inputs)
});
