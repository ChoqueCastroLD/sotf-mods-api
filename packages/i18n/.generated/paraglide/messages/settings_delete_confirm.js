/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_ConfirmInputs */

const en_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete in 14 days`)
};

const es_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar dentro de 14 días`)
};

const de_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In 14 Tagen löschen`)
};

const fr_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer dans 14 jours`)
};

const it_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina tra 14 giorni`)
};

const nl_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over 14 dagen verwijderen`)
};

const pl_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń za 14 dni`)
};

const pt_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir em 14 dias`)
};

const ru_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить через 14 дней`)
};

const sv_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera om 14 dagar`)
};

const tr_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`14 gün içinde sil`)
};

const zh_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`14 天后删除`)
};

const ja_settings_delete_confirm = /** @type {(inputs: Settings_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`14 日後に削除`)
};

/**
* | output |
* | --- |
* | "Delete in 14 days" |
*
* @param {Settings_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_confirm = /** @type {((inputs?: Settings_Delete_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_confirm(inputs)
	if (locale === "de") return de_settings_delete_confirm(inputs)
	if (locale === "fr") return fr_settings_delete_confirm(inputs)
	if (locale === "it") return it_settings_delete_confirm(inputs)
	if (locale === "nl") return nl_settings_delete_confirm(inputs)
	if (locale === "pl") return pl_settings_delete_confirm(inputs)
	if (locale === "pt") return pt_settings_delete_confirm(inputs)
	if (locale === "ru") return ru_settings_delete_confirm(inputs)
	if (locale === "sv") return sv_settings_delete_confirm(inputs)
	if (locale === "tr") return tr_settings_delete_confirm(inputs)
	if (locale === "zh") return zh_settings_delete_confirm(inputs)
	if (locale === "ja") return ja_settings_delete_confirm(inputs)
	return en_settings_delete_confirm(inputs)
});
