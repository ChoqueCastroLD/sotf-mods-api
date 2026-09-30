/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Action_FailedInputs */

const en_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That didn’t work`)
};

const es_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No ha funcionado`)
};

const de_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das hat nicht geklappt`)
};

const fr_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça n’a pas marché`)
};

const it_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ha funzionato`)
};

const nl_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat lukte niet`)
};

const pl_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To się nie udało`)
};

const pt_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não deu certo`)
};

const ru_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не получилось`)
};

const sv_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det fungerade inte`)
};

const tr_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olmadı`)
};

const zh_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败`)
};

const ja_me_action_failed = /** @type {(inputs: Me_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`うまくいきませんでした`)
};

/**
* | output |
* | --- |
* | "That didn’t work" |
*
* @param {Me_Action_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_action_failed = /** @type {((inputs?: Me_Action_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Action_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_action_failed(inputs)
	if (locale === "de") return de_me_action_failed(inputs)
	if (locale === "fr") return fr_me_action_failed(inputs)
	if (locale === "it") return it_me_action_failed(inputs)
	if (locale === "nl") return nl_me_action_failed(inputs)
	if (locale === "pl") return pl_me_action_failed(inputs)
	if (locale === "pt") return pt_me_action_failed(inputs)
	if (locale === "ru") return ru_me_action_failed(inputs)
	if (locale === "sv") return sv_me_action_failed(inputs)
	if (locale === "tr") return tr_me_action_failed(inputs)
	if (locale === "zh") return zh_me_action_failed(inputs)
	if (locale === "ja") return ja_me_action_failed(inputs)
	return en_me_action_failed(inputs)
});
