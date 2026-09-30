/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_License_All_Rights_ReservedInputs */

const en_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All rights reserved`)
};

const es_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los derechos reservados`)
};

const de_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Rechte vorbehalten`)
};

const fr_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous droits réservés`)
};

const it_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i diritti riservati`)
};

const nl_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle rechten voorbehouden`)
};

const pl_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszelkie prawa zastrzeżone`)
};

const pt_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os direitos reservados`)
};

const ru_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все права защищены`)
};

const sv_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla rättigheter förbehållna`)
};

const tr_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm hakları saklıdır`)
};

const zh_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保留所有权利`)
};

const ja_mod_license_all_rights_reserved = /** @type {(inputs: Mod_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All rights reserved`)
};

/**
* | output |
* | --- |
* | "All rights reserved" |
*
* @param {Mod_License_All_Rights_ReservedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_license_all_rights_reserved = /** @type {((inputs?: Mod_License_All_Rights_ReservedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_License_All_Rights_ReservedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_license_all_rights_reserved(inputs)
	if (locale === "de") return de_mod_license_all_rights_reserved(inputs)
	if (locale === "fr") return fr_mod_license_all_rights_reserved(inputs)
	if (locale === "it") return it_mod_license_all_rights_reserved(inputs)
	if (locale === "nl") return nl_mod_license_all_rights_reserved(inputs)
	if (locale === "pl") return pl_mod_license_all_rights_reserved(inputs)
	if (locale === "pt") return pt_mod_license_all_rights_reserved(inputs)
	if (locale === "ru") return ru_mod_license_all_rights_reserved(inputs)
	if (locale === "sv") return sv_mod_license_all_rights_reserved(inputs)
	if (locale === "tr") return tr_mod_license_all_rights_reserved(inputs)
	if (locale === "zh") return zh_mod_license_all_rights_reserved(inputs)
	if (locale === "ja") return ja_mod_license_all_rights_reserved(inputs)
	return en_mod_license_all_rights_reserved(inputs)
});
