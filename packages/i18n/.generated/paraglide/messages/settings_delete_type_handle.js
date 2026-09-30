/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ handle: NonNullable<unknown> }} Settings_Delete_Type_HandleInputs */

const en_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Type «${i?.handle}» exactly to confirm.`)
};

const es_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escribe «${i?.handle}» exactamente para confirmar.`)
};

const de_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gib „${i?.handle}“ genau so ein, um zu bestätigen.`)
};

const fr_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saisissez « ${i?.handle} » exactement pour confirmer.`)
};

const it_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scrivi «${i?.handle}» esattamente per confermare.`)
};

const nl_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Typ ‘${i?.handle}’ precies zo om te bevestigen.`)
};

const pl_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wpisz dokładnie „${i?.handle}”, aby potwierdzić.`)
};

const pt_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Digite “${i?.handle}” exatamente para confirmar.`)
};

const ru_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Введите «${i?.handle}» точно, чтобы подтвердить.`)
};

const sv_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skriv ”${i?.handle}” exakt för att bekräfta.`)
};

const tr_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Onaylamak için “${i?.handle}” ifadesini aynen yaz.`)
};

const zh_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请准确输入“${i?.handle}”以确认。`)
};

const ja_settings_delete_type_handle = /** @type {(inputs: Settings_Delete_Type_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`確認のため「${i?.handle}」を正確に入力してください。`)
};

/**
* | output |
* | --- |
* | "Type «{handle}» exactly to confirm." |
*
* @param {Settings_Delete_Type_HandleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_type_handle = /** @type {((inputs: Settings_Delete_Type_HandleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Type_HandleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_type_handle(inputs)
	if (locale === "de") return de_settings_delete_type_handle(inputs)
	if (locale === "fr") return fr_settings_delete_type_handle(inputs)
	if (locale === "it") return it_settings_delete_type_handle(inputs)
	if (locale === "nl") return nl_settings_delete_type_handle(inputs)
	if (locale === "pl") return pl_settings_delete_type_handle(inputs)
	if (locale === "pt") return pt_settings_delete_type_handle(inputs)
	if (locale === "ru") return ru_settings_delete_type_handle(inputs)
	if (locale === "sv") return sv_settings_delete_type_handle(inputs)
	if (locale === "tr") return tr_settings_delete_type_handle(inputs)
	if (locale === "zh") return zh_settings_delete_type_handle(inputs)
	if (locale === "ja") return ja_settings_delete_type_handle(inputs)
	return en_settings_delete_type_handle(inputs)
});
