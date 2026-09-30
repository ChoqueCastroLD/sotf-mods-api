/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_OpenInputs */

const en_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete my account…`)
};

const es_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar mi cuenta…`)
};

const de_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mein Konto löschen…`)
};

const fr_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer mon compte…`)
};

const it_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina il mio account…`)
};

const nl_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn account verwijderen…`)
};

const pl_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń moje konto…`)
};

const pt_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir minha conta…`)
};

const ru_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить мой аккаунт…`)
};

const sv_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera mitt konto…`)
};

const tr_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabımı sil…`)
};

const zh_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除我的账户…`)
};

const ja_settings_delete_open = /** @type {(inputs: Settings_Delete_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントを削除…`)
};

/**
* | output |
* | --- |
* | "Delete my account…" |
*
* @param {Settings_Delete_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_open = /** @type {((inputs?: Settings_Delete_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_open(inputs)
	if (locale === "de") return de_settings_delete_open(inputs)
	if (locale === "fr") return fr_settings_delete_open(inputs)
	if (locale === "it") return it_settings_delete_open(inputs)
	if (locale === "nl") return nl_settings_delete_open(inputs)
	if (locale === "pl") return pl_settings_delete_open(inputs)
	if (locale === "pt") return pt_settings_delete_open(inputs)
	if (locale === "ru") return ru_settings_delete_open(inputs)
	if (locale === "sv") return sv_settings_delete_open(inputs)
	if (locale === "tr") return tr_settings_delete_open(inputs)
	if (locale === "zh") return zh_settings_delete_open(inputs)
	if (locale === "ja") return ja_settings_delete_open(inputs)
	return en_settings_delete_open(inputs)
});
