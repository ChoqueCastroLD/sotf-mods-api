/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ handle: NonNullable<unknown> }} Settings_Delete_Type_LabelInputs */

const en_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Type your handle «${i?.handle}» to confirm`)
};

const es_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escribe tu usuario «${i?.handle}» para confirmar`)
};

const de_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gib zur Bestätigung dein Handle „${i?.handle}“ ein`)
};

const fr_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saisissez votre identifiant « ${i?.handle} » pour confirmer`)
};

const it_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scrivi il tuo nome utente «${i?.handle}» per confermare`)
};

const nl_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Typ je handle ‘${i?.handle}’ om te bevestigen`)
};

const pl_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wpisz swoją nazwę użytkownika „${i?.handle}”, aby potwierdzić`)
};

const pt_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Digite seu nome de usuário “${i?.handle}” para confirmar`)
};

const ru_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Введите имя пользователя «${i?.handle}» для подтверждения`)
};

const sv_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skriv ditt användarnamn ”${i?.handle}” för att bekräfta`)
};

const tr_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Onaylamak için kullanıcı adını “${i?.handle}” yaz`)
};

const zh_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`输入你的用户名“${i?.handle}”以确认`)
};

const ja_settings_delete_type_label = /** @type {(inputs: Settings_Delete_Type_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`確認のためユーザー名「${i?.handle}」を入力してください`)
};

/**
* | output |
* | --- |
* | "Type your handle «{handle}» to confirm" |
*
* @param {Settings_Delete_Type_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_type_label = /** @type {((inputs: Settings_Delete_Type_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Type_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_type_label(inputs)
	if (locale === "de") return de_settings_delete_type_label(inputs)
	if (locale === "fr") return fr_settings_delete_type_label(inputs)
	if (locale === "it") return it_settings_delete_type_label(inputs)
	if (locale === "nl") return nl_settings_delete_type_label(inputs)
	if (locale === "pl") return pl_settings_delete_type_label(inputs)
	if (locale === "pt") return pt_settings_delete_type_label(inputs)
	if (locale === "ru") return ru_settings_delete_type_label(inputs)
	if (locale === "sv") return sv_settings_delete_type_label(inputs)
	if (locale === "tr") return tr_settings_delete_type_label(inputs)
	if (locale === "zh") return zh_settings_delete_type_label(inputs)
	if (locale === "ja") return ja_settings_delete_type_label(inputs)
	return en_settings_delete_type_label(inputs)
});
