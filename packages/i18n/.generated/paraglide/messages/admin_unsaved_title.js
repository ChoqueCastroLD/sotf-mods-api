/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Unsaved_TitleInputs */

const en_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave without saving?`)
};

const es_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Salir sin guardar?`)
};

const de_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ohne Speichern verlassen?`)
};

const fr_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitter sans enregistrer ?`)
};

const it_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscire senza salvare?`)
};

const nl_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlaten zonder op te slaan?`)
};

const pl_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyjść bez zapisywania?`)
};

const pt_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair sem salvar?`)
};

const ru_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти без сохранения?`)
};

const sv_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna utan att spara?`)
};

const tr_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydetmeden çıkılsın mı?`)
};

const zh_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不保存就离开？`)
};

const ja_admin_unsaved_title = /** @type {(inputs: Admin_Unsaved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存せずに移動しますか？`)
};

/**
* | output |
* | --- |
* | "Leave without saving?" |
*
* @param {Admin_Unsaved_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_unsaved_title = /** @type {((inputs?: Admin_Unsaved_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Unsaved_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_unsaved_title(inputs)
	if (locale === "de") return de_admin_unsaved_title(inputs)
	if (locale === "fr") return fr_admin_unsaved_title(inputs)
	if (locale === "it") return it_admin_unsaved_title(inputs)
	if (locale === "nl") return nl_admin_unsaved_title(inputs)
	if (locale === "pl") return pl_admin_unsaved_title(inputs)
	if (locale === "pt") return pt_admin_unsaved_title(inputs)
	if (locale === "ru") return ru_admin_unsaved_title(inputs)
	if (locale === "sv") return sv_admin_unsaved_title(inputs)
	if (locale === "tr") return tr_admin_unsaved_title(inputs)
	if (locale === "zh") return zh_admin_unsaved_title(inputs)
	if (locale === "ja") return ja_admin_unsaved_title(inputs)
	return en_admin_unsaved_title(inputs)
});
