/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_ResubmitInputs */

const en_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resubmit for review`)
};

const es_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenviar a revisión`)
};

const de_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut zur Prüfung senden`)
};

const fr_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renvoyer en revue`)
};

const it_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rinvia alla revisione`)
};

const nl_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw ter beoordeling sturen`)
};

const pl_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij ponownie do przeglądu`)
};

const pt_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenviar para revisão`)
};

const ru_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить на повторную проверку`)
};

const sv_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka till granskning igen`)
};

const tr_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeye yeniden gönder`)
};

const zh_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新提交审核`)
};

const ja_basecamp_action_resubmit = /** @type {(inputs: Basecamp_Action_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再審査に送る`)
};

/**
* | output |
* | --- |
* | "Resubmit for review" |
*
* @param {Basecamp_Action_ResubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_resubmit = /** @type {((inputs?: Basecamp_Action_ResubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_ResubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_resubmit(inputs)
	if (locale === "de") return de_basecamp_action_resubmit(inputs)
	if (locale === "fr") return fr_basecamp_action_resubmit(inputs)
	if (locale === "it") return it_basecamp_action_resubmit(inputs)
	if (locale === "nl") return nl_basecamp_action_resubmit(inputs)
	if (locale === "pl") return pl_basecamp_action_resubmit(inputs)
	if (locale === "pt") return pt_basecamp_action_resubmit(inputs)
	if (locale === "ru") return ru_basecamp_action_resubmit(inputs)
	if (locale === "sv") return sv_basecamp_action_resubmit(inputs)
	if (locale === "tr") return tr_basecamp_action_resubmit(inputs)
	if (locale === "zh") return zh_basecamp_action_resubmit(inputs)
	if (locale === "ja") return ja_basecamp_action_resubmit(inputs)
	return en_basecamp_action_resubmit(inputs)
});
