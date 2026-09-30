/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Unsaved_ConfirmInputs */

const en_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have unsaved changes. Leave without saving?`)
};

const es_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes cambios sin guardar. ¿Salir sin guardar?`)
};

const de_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast ungespeicherte Änderungen. Ohne Speichern verlassen?`)
};

const fr_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez des modifications non enregistrées. Quitter sans enregistrer ?`)
};

const it_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai modifiche non salvate. Uscire senza salvare?`)
};

const nl_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt niet-opgeslagen wijzigingen. Verlaten zonder opslaan?`)
};

const pl_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz niezapisane zmiany. Wyjść bez zapisywania?`)
};

const pt_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem alterações não salvas. Sair sem salvar?`)
};

const ru_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть несохранённые изменения. Уйти без сохранения?`)
};

const sv_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har osparade ändringar. Lämna utan att spara?`)
};

const tr_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişikliklerin var. Kaydetmeden çıkılsın mı?`)
};

const zh_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改。确定不保存就离开吗？`)
};

const ja_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存されていない変更があります。保存せずに移動しますか？`)
};

/**
* | output |
* | --- |
* | "You have unsaved changes. Leave without saving?" |
*
* @param {Admin_Unsaved_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_unsaved_confirm = /** @type {((inputs?: Admin_Unsaved_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Unsaved_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_unsaved_confirm(inputs)
	if (locale === "de") return de_admin_unsaved_confirm(inputs)
	if (locale === "fr") return fr_admin_unsaved_confirm(inputs)
	if (locale === "it") return it_admin_unsaved_confirm(inputs)
	if (locale === "nl") return nl_admin_unsaved_confirm(inputs)
	if (locale === "pl") return pl_admin_unsaved_confirm(inputs)
	if (locale === "pt") return pt_admin_unsaved_confirm(inputs)
	if (locale === "ru") return ru_admin_unsaved_confirm(inputs)
	if (locale === "sv") return sv_admin_unsaved_confirm(inputs)
	if (locale === "tr") return tr_admin_unsaved_confirm(inputs)
	if (locale === "zh") return zh_admin_unsaved_confirm(inputs)
	if (locale === "ja") return ja_admin_unsaved_confirm(inputs)
	return en_admin_unsaved_confirm(inputs)
});
