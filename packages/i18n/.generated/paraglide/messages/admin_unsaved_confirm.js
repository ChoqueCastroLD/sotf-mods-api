/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Unsaved_ConfirmInputs */

const en_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have unsaved changes. They will be lost if you leave.`)
};

const es_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes cambios sin guardar. Se perderán si sales.`)
};

const de_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast ungespeicherte Änderungen. Sie gehen verloren, wenn du die Seite verlässt.`)
};

const fr_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez des modifications non enregistrées. Elles seront perdues si vous quittez.`)
};

const it_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai modifiche non salvate. Andranno perse se esci.`)
};

const nl_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt niet-opgeslagen wijzigingen. Ze gaan verloren als je weggaat.`)
};

const pl_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz niezapisane zmiany. Zostaną utracone, jeśli wyjdziesz.`)
};

const pt_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem alterações não salvas. Elas serão perdidas se você sair.`)
};

const ru_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть несохранённые изменения. Если выйти, они пропадут.`)
};

const sv_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har osparade ändringar. De går förlorade om du lämnar.`)
};

const tr_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişiklikleriniz var. Çıkarsanız kaybolacaklar.`)
};

const zh_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改，离开后将丢失。`)
};

const ja_admin_unsaved_confirm = /** @type {(inputs: Admin_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更があります。移動すると失われます。`)
};

/**
* | output |
* | --- |
* | "You have unsaved changes. They will be lost if you leave." |
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
