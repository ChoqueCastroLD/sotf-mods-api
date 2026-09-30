/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Revoke_SessionsInputs */

const en_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out everywhere`)
};

const es_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar todas las sesiones`)
};

const de_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überall abmelden`)
};

const fr_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnecter partout`)
};

const it_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnetti ovunque`)
};

const nl_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overal afmelden`)
};

const pl_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj wszędzie`)
};

const pt_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerrar todas as sessões`)
};

const ru_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти везде`)
};

const sv_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut överallt`)
};

const tr_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her yerden çıkış yaptır`)
};

const zh_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在所有设备上退出`)
};

const ja_ranger_user_revoke_sessions = /** @type {(inputs: Ranger_User_Revoke_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての端末からログアウト`)
};

/**
* | output |
* | --- |
* | "Sign out everywhere" |
*
* @param {Ranger_User_Revoke_SessionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_revoke_sessions = /** @type {((inputs?: Ranger_User_Revoke_SessionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Revoke_SessionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_revoke_sessions(inputs)
	if (locale === "de") return de_ranger_user_revoke_sessions(inputs)
	if (locale === "fr") return fr_ranger_user_revoke_sessions(inputs)
	if (locale === "it") return it_ranger_user_revoke_sessions(inputs)
	if (locale === "nl") return nl_ranger_user_revoke_sessions(inputs)
	if (locale === "pl") return pl_ranger_user_revoke_sessions(inputs)
	if (locale === "pt") return pt_ranger_user_revoke_sessions(inputs)
	if (locale === "ru") return ru_ranger_user_revoke_sessions(inputs)
	if (locale === "sv") return sv_ranger_user_revoke_sessions(inputs)
	if (locale === "tr") return tr_ranger_user_revoke_sessions(inputs)
	if (locale === "zh") return zh_ranger_user_revoke_sessions(inputs)
	if (locale === "ja") return ja_ranger_user_revoke_sessions(inputs)
	return en_ranger_user_revoke_sessions(inputs)
});
