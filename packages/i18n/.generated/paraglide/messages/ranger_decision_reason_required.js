/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Decision_Reason_RequiredInputs */

const en_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write a reason (at least 3 characters).`)
};

const es_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un motivo (al menos 3 caracteres).`)
};

const de_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine Begründung an (mindestens 3 Zeichen).`)
};

const fr_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indiquez un motif (3 caractères minimum).`)
};

const it_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi un motivo (almeno 3 caratteri).`)
};

const nl_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef een reden (minstens 3 tekens).`)
};

const pl_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj powód (co najmniej 3 znaki).`)
};

const pt_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escreva um motivo (pelo menos 3 caracteres).`)
};

const ru_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите причину (не менее 3 символов).`)
};

const sv_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv en motivering (minst 3 tecken).`)
};

const tr_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir gerekçe yazın (en az 3 karakter).`)
};

const zh_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请填写原因（至少 3 个字符）。`)
};

const ja_ranger_decision_reason_required = /** @type {(inputs: Ranger_Decision_Reason_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由を入力してください（3 文字以上）。`)
};

/**
* | output |
* | --- |
* | "Write a reason (at least 3 characters)." |
*
* @param {Ranger_Decision_Reason_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decision_reason_required = /** @type {((inputs?: Ranger_Decision_Reason_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_Reason_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decision_reason_required(inputs)
	if (locale === "de") return de_ranger_decision_reason_required(inputs)
	if (locale === "fr") return fr_ranger_decision_reason_required(inputs)
	if (locale === "it") return it_ranger_decision_reason_required(inputs)
	if (locale === "nl") return nl_ranger_decision_reason_required(inputs)
	if (locale === "pl") return pl_ranger_decision_reason_required(inputs)
	if (locale === "pt") return pt_ranger_decision_reason_required(inputs)
	if (locale === "ru") return ru_ranger_decision_reason_required(inputs)
	if (locale === "sv") return sv_ranger_decision_reason_required(inputs)
	if (locale === "tr") return tr_ranger_decision_reason_required(inputs)
	if (locale === "zh") return zh_ranger_decision_reason_required(inputs)
	if (locale === "ja") return ja_ranger_decision_reason_required(inputs)
	return en_ranger_decision_reason_required(inputs)
});
