/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Release_FailedInputs */

const en_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t add the release`)
};

const es_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo añadir la versión`)
};

const de_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version konnte nicht hinzugefügt werden`)
};

const fr_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’ajouter la version`)
};

const it_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiungere la versione`)
};

const nl_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de release niet toevoegen`)
};

const pl_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się dodać wydania`)
};

const pt_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível adicionar a versão`)
};

const ru_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось добавить версию`)
};

const sv_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte lägga till versionen`)
};

const tr_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm eklenemedi`)
};

const zh_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法添加版本`)
};

const ja_admin_eco_release_failed = /** @type {(inputs: Admin_Eco_Release_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリースを追加できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t add the release" |
*
* @param {Admin_Eco_Release_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_release_failed = /** @type {((inputs?: Admin_Eco_Release_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Release_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_release_failed(inputs)
	if (locale === "de") return de_admin_eco_release_failed(inputs)
	if (locale === "fr") return fr_admin_eco_release_failed(inputs)
	if (locale === "it") return it_admin_eco_release_failed(inputs)
	if (locale === "nl") return nl_admin_eco_release_failed(inputs)
	if (locale === "pl") return pl_admin_eco_release_failed(inputs)
	if (locale === "pt") return pt_admin_eco_release_failed(inputs)
	if (locale === "ru") return ru_admin_eco_release_failed(inputs)
	if (locale === "sv") return sv_admin_eco_release_failed(inputs)
	if (locale === "tr") return tr_admin_eco_release_failed(inputs)
	if (locale === "zh") return zh_admin_eco_release_failed(inputs)
	if (locale === "ja") return ja_admin_eco_release_failed(inputs)
	return en_admin_eco_release_failed(inputs)
});
