/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_ShareInputs */

const en_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share`)
};

const es_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir`)
};

const de_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teilen`)
};

const fr_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager`)
};

const it_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi`)
};

const nl_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delen`)
};

const pl_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij`)
};

const pt_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartilhar`)
};

const ru_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться`)
};

const sv_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela`)
};

const tr_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paylaş`)
};

const zh_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享`)
};

const ja_common_action_share = /** @type {(inputs: Common_Action_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共有`)
};

/**
* | output |
* | --- |
* | "Share" |
*
* @param {Common_Action_ShareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_share = /** @type {((inputs?: Common_Action_ShareInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_ShareInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_share(inputs)
	if (locale === "de") return de_common_action_share(inputs)
	if (locale === "fr") return fr_common_action_share(inputs)
	if (locale === "it") return it_common_action_share(inputs)
	if (locale === "nl") return nl_common_action_share(inputs)
	if (locale === "pl") return pl_common_action_share(inputs)
	if (locale === "pt") return pt_common_action_share(inputs)
	if (locale === "ru") return ru_common_action_share(inputs)
	if (locale === "sv") return sv_common_action_share(inputs)
	if (locale === "tr") return tr_common_action_share(inputs)
	if (locale === "zh") return zh_common_action_share(inputs)
	if (locale === "ja") return ja_common_action_share(inputs)
	return en_common_action_share(inputs)
});
