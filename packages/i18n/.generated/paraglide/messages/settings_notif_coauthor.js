/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_CoauthorInputs */

const en_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-author invitations`)
};

const es_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitaciones de coautoría`)
};

const de_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einladungen zur Mitautorenschaft`)
};

const fr_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitations de co-création`)
};

const it_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviti di co-creazione`)
};

const nl_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitnodigingen voor mede-auteurschap`)
};

const pl_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaproszenia do współtworzenia`)
};

const pt_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convites de coautoria`)
};

const ru_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приглашения в соавторы`)
};

const sv_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbjudningar som medförfattare`)
};

const tr_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazar davetleri`)
};

const zh_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同作者邀请`)
};

const ja_settings_notif_coauthor = /** @type {(inputs: Settings_Notif_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同作者への招待`)
};

/**
* | output |
* | --- |
* | "Co-author invitations" |
*
* @param {Settings_Notif_CoauthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_coauthor = /** @type {((inputs?: Settings_Notif_CoauthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_CoauthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_coauthor(inputs)
	if (locale === "de") return de_settings_notif_coauthor(inputs)
	if (locale === "fr") return fr_settings_notif_coauthor(inputs)
	if (locale === "it") return it_settings_notif_coauthor(inputs)
	if (locale === "nl") return nl_settings_notif_coauthor(inputs)
	if (locale === "pl") return pl_settings_notif_coauthor(inputs)
	if (locale === "pt") return pt_settings_notif_coauthor(inputs)
	if (locale === "ru") return ru_settings_notif_coauthor(inputs)
	if (locale === "sv") return sv_settings_notif_coauthor(inputs)
	if (locale === "tr") return tr_settings_notif_coauthor(inputs)
	if (locale === "zh") return zh_settings_notif_coauthor(inputs)
	if (locale === "ja") return ja_settings_notif_coauthor(inputs)
	return en_settings_notif_coauthor(inputs)
});
