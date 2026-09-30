/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Settings_Delete_Scheduled_TitleInputs */

const en_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your account will be deleted on ${i?.date}`)
};

const es_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu cuenta se borrará el ${i?.date}`)
};

const de_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Konto wird am ${i?.date} gelöscht`)
};

const fr_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre compte sera supprimé le ${i?.date}`)
};

const it_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il tuo account verrà eliminato il ${i?.date}`)
};

const nl_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je account wordt verwijderd op ${i?.date}`)
};

const pl_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twoje konto zostanie usunięte ${i?.date}`)
};

const pt_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sua conta será excluída em ${i?.date}`)
};

const ru_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш аккаунт будет удалён ${i?.date}`)
};

const sv_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ditt konto raderas den ${i?.date}`)
};

const tr_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabın ${i?.date} tarihinde silinecek`)
};

const zh_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账户将于 ${i?.date} 删除`)
};

const ja_settings_delete_scheduled_title = /** @type {(inputs: Settings_Delete_Scheduled_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`アカウントは ${i?.date} に削除されます`)
};

/**
* | output |
* | --- |
* | "Your account will be deleted on {date}" |
*
* @param {Settings_Delete_Scheduled_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_scheduled_title = /** @type {((inputs: Settings_Delete_Scheduled_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Scheduled_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_scheduled_title(inputs)
	if (locale === "de") return de_settings_delete_scheduled_title(inputs)
	if (locale === "fr") return fr_settings_delete_scheduled_title(inputs)
	if (locale === "it") return it_settings_delete_scheduled_title(inputs)
	if (locale === "nl") return nl_settings_delete_scheduled_title(inputs)
	if (locale === "pl") return pl_settings_delete_scheduled_title(inputs)
	if (locale === "pt") return pt_settings_delete_scheduled_title(inputs)
	if (locale === "ru") return ru_settings_delete_scheduled_title(inputs)
	if (locale === "sv") return sv_settings_delete_scheduled_title(inputs)
	if (locale === "tr") return tr_settings_delete_scheduled_title(inputs)
	if (locale === "zh") return zh_settings_delete_scheduled_title(inputs)
	if (locale === "ja") return ja_settings_delete_scheduled_title(inputs)
	return en_settings_delete_scheduled_title(inputs)
});
