/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Action_BasecampInputs */

const en_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Basecamp`)
};

const es_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir al Campamento`)
};

const de_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Basislager`)
};

const fr_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller au Camp de base`)
};

const it_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai al Campo base`)
};

const nl_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar het Basiskamp`)
};

const pl_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do Obozu`)
};

const pt_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para o Acampamento`)
};

const ru_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти в Лагерь`)
};

const sv_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till Basläger`)
};

const tr_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana Kamp’a git`)
};

const zh_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往营地`)
};

const ja_cmdk_action_basecamp = /** @type {(inputs: Cmdk_Action_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプへ移動`)
};

/**
* | output |
* | --- |
* | "Go to Basecamp" |
*
* @param {Cmdk_Action_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_basecamp = /** @type {((inputs?: Cmdk_Action_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_basecamp(inputs)
	if (locale === "de") return de_cmdk_action_basecamp(inputs)
	if (locale === "fr") return fr_cmdk_action_basecamp(inputs)
	if (locale === "it") return it_cmdk_action_basecamp(inputs)
	if (locale === "nl") return nl_cmdk_action_basecamp(inputs)
	if (locale === "pl") return pl_cmdk_action_basecamp(inputs)
	if (locale === "pt") return pt_cmdk_action_basecamp(inputs)
	if (locale === "ru") return ru_cmdk_action_basecamp(inputs)
	if (locale === "sv") return sv_cmdk_action_basecamp(inputs)
	if (locale === "tr") return tr_cmdk_action_basecamp(inputs)
	if (locale === "zh") return zh_cmdk_action_basecamp(inputs)
	if (locale === "ja") return ja_cmdk_action_basecamp(inputs)
	return en_cmdk_action_basecamp(inputs)
});
