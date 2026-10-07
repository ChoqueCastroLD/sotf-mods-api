/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Status_ActiveInputs */

const en_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active`)
};

const es_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activo`)
};

const de_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiv`)
};

const fr_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actif`)
};

const it_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attivo`)
};

const nl_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actief`)
};

const pl_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktywne`)
};

const pt_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ativo`)
};

const ru_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Активные`)
};

const sv_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiv`)
};

const tr_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkin`)
};

const zh_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正常`)
};

const ja_ranger_users_status_active = /** @type {(inputs: Ranger_Users_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効`)
};

/**
* | output |
* | --- |
* | "Active" |
*
* @param {Ranger_Users_Status_ActiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_status_active = /** @type {((inputs?: Ranger_Users_Status_ActiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Status_ActiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_status_active(inputs)
	if (locale === "de") return de_ranger_users_status_active(inputs)
	if (locale === "fr") return fr_ranger_users_status_active(inputs)
	if (locale === "it") return it_ranger_users_status_active(inputs)
	if (locale === "nl") return nl_ranger_users_status_active(inputs)
	if (locale === "pl") return pl_ranger_users_status_active(inputs)
	if (locale === "pt") return pt_ranger_users_status_active(inputs)
	if (locale === "ru") return ru_ranger_users_status_active(inputs)
	if (locale === "sv") return sv_ranger_users_status_active(inputs)
	if (locale === "tr") return tr_ranger_users_status_active(inputs)
	if (locale === "zh") return zh_ranger_users_status_active(inputs)
	if (locale === "ja") return ja_ranger_users_status_active(inputs)
	return en_ranger_users_status_active(inputs)
});
