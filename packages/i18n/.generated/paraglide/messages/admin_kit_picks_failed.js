/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_FailedInputs */

const en_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t change the staff pick`)
};

const es_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar el destacado`)
};

const de_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empfehlung konnte nicht geändert werden`)
};

const fr_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de modifier le choix de l’équipe`)
};

const it_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile modificare la scelta dello staff`)
};

const nl_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamkeuze kon niet worden gewijzigd`)
};

const pl_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić wyboru ekipy`)
};

const pt_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível alterar a escolha da equipe`)
};

const ru_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось изменить выбор команды`)
};

const sv_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ändra teamets val`)
};

const tr_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekip seçimi değiştirilemedi`)
};

const zh_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更改精选`)
};

const ja_admin_kit_picks_failed = /** @type {(inputs: Admin_Kit_Picks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おすすめを変更できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t change the staff pick" |
*
* @param {Admin_Kit_Picks_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_failed = /** @type {((inputs?: Admin_Kit_Picks_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_failed(inputs)
	if (locale === "de") return de_admin_kit_picks_failed(inputs)
	if (locale === "fr") return fr_admin_kit_picks_failed(inputs)
	if (locale === "it") return it_admin_kit_picks_failed(inputs)
	if (locale === "nl") return nl_admin_kit_picks_failed(inputs)
	if (locale === "pl") return pl_admin_kit_picks_failed(inputs)
	if (locale === "pt") return pt_admin_kit_picks_failed(inputs)
	if (locale === "ru") return ru_admin_kit_picks_failed(inputs)
	if (locale === "sv") return sv_admin_kit_picks_failed(inputs)
	if (locale === "tr") return tr_admin_kit_picks_failed(inputs)
	if (locale === "zh") return zh_admin_kit_picks_failed(inputs)
	if (locale === "ja") return ja_admin_kit_picks_failed(inputs)
	return en_admin_kit_picks_failed(inputs)
});
