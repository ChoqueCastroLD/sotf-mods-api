/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Dialog_TitleInputs */

const en_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete your account?`)
};

const es_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Borrar tu cuenta?`)
};

const de_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto löschen?`)
};

const fr_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer votre compte ?`)
};

const it_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare il tuo account?`)
};

const nl_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account verwijderen?`)
};

const pl_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć konto?`)
};

const pt_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir sua conta?`)
};

const ru_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить аккаунт?`)
};

const sv_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera ditt konto?`)
};

const tr_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın silinsin mi?`)
};

const zh_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要删除你的账户吗？`)
};

const ja_settings_delete_dialog_title = /** @type {(inputs: Settings_Delete_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete your account?" |
*
* @param {Settings_Delete_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_dialog_title = /** @type {((inputs?: Settings_Delete_Dialog_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Dialog_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_dialog_title(inputs)
	if (locale === "de") return de_settings_delete_dialog_title(inputs)
	if (locale === "fr") return fr_settings_delete_dialog_title(inputs)
	if (locale === "it") return it_settings_delete_dialog_title(inputs)
	if (locale === "nl") return nl_settings_delete_dialog_title(inputs)
	if (locale === "pl") return pl_settings_delete_dialog_title(inputs)
	if (locale === "pt") return pt_settings_delete_dialog_title(inputs)
	if (locale === "ru") return ru_settings_delete_dialog_title(inputs)
	if (locale === "sv") return sv_settings_delete_dialog_title(inputs)
	if (locale === "tr") return tr_settings_delete_dialog_title(inputs)
	if (locale === "zh") return zh_settings_delete_dialog_title(inputs)
	if (locale === "ja") return ja_settings_delete_dialog_title(inputs)
	return en_settings_delete_dialog_title(inputs)
});
