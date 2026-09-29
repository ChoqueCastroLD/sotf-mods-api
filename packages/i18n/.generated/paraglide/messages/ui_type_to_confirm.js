/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ text: NonNullable<unknown> }} Ui_Type_To_ConfirmInputs */

const en_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Type ${i?.text} to confirm.`)
};

const es_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escribe ${i?.text} para confirmar.`)
};

const de_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gib ${i?.text} ein, um zu bestätigen.`)
};

const fr_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saisis ${i?.text} pour confirmer.`)
};

const it_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scrivi ${i?.text} per confermare.`)
};

const nl_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Typ ${i?.text} om te bevestigen.`)
};

const pl_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wpisz ${i?.text}, aby potwierdzić.`)
};

const pt_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Digite ${i?.text} para confirmar.`)
};

const ru_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Введи ${i?.text} для подтверждения.`)
};

const sv_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skriv ${i?.text} för att bekräfta.`)
};

const tr_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Onaylamak için ${i?.text} yaz.`)
};

const zh_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`输入 ${i?.text} 以确认。`)
};

const ja_ui_type_to_confirm = /** @type {(inputs: Ui_Type_To_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`確認するには ${i?.text} と入力してください。`)
};

/**
* | output |
* | --- |
* | "Type {text} to confirm." |
*
* @param {Ui_Type_To_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_type_to_confirm = /** @type {((inputs: Ui_Type_To_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Type_To_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_type_to_confirm(inputs)
	if (locale === "de") return de_ui_type_to_confirm(inputs)
	if (locale === "fr") return fr_ui_type_to_confirm(inputs)
	if (locale === "it") return it_ui_type_to_confirm(inputs)
	if (locale === "nl") return nl_ui_type_to_confirm(inputs)
	if (locale === "pl") return pl_ui_type_to_confirm(inputs)
	if (locale === "pt") return pt_ui_type_to_confirm(inputs)
	if (locale === "ru") return ru_ui_type_to_confirm(inputs)
	if (locale === "sv") return sv_ui_type_to_confirm(inputs)
	if (locale === "tr") return tr_ui_type_to_confirm(inputs)
	if (locale === "zh") return zh_ui_type_to_confirm(inputs)
	if (locale === "ja") return ja_ui_type_to_confirm(inputs)
	return en_ui_type_to_confirm(inputs)
});
