/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Action_FailedInputs */

const en_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That did not work`)
};

const es_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No funcionó`)
};

const de_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das hat nicht geklappt`)
};

const fr_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça n’a pas marché`)
};

const it_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ha funzionato`)
};

const nl_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat is niet gelukt`)
};

const pl_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To się nie udało`)
};

const pt_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não deu certo`)
};

const ru_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не получилось`)
};

const sv_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte`)
};

const tr_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu işe yaramadı`)
};

const zh_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败`)
};

const ja_basecamp_inbox_action_failed = /** @type {(inputs: Basecamp_Inbox_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`うまくいきませんでした`)
};

/**
* | output |
* | --- |
* | "That did not work" |
*
* @param {Basecamp_Inbox_Action_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_action_failed = /** @type {((inputs?: Basecamp_Inbox_Action_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Action_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_action_failed(inputs)
	if (locale === "de") return de_basecamp_inbox_action_failed(inputs)
	if (locale === "fr") return fr_basecamp_inbox_action_failed(inputs)
	if (locale === "it") return it_basecamp_inbox_action_failed(inputs)
	if (locale === "nl") return nl_basecamp_inbox_action_failed(inputs)
	if (locale === "pl") return pl_basecamp_inbox_action_failed(inputs)
	if (locale === "pt") return pt_basecamp_inbox_action_failed(inputs)
	if (locale === "ru") return ru_basecamp_inbox_action_failed(inputs)
	if (locale === "sv") return sv_basecamp_inbox_action_failed(inputs)
	if (locale === "tr") return tr_basecamp_inbox_action_failed(inputs)
	if (locale === "zh") return zh_basecamp_inbox_action_failed(inputs)
	if (locale === "ja") return ja_basecamp_inbox_action_failed(inputs)
	return en_basecamp_inbox_action_failed(inputs)
});
