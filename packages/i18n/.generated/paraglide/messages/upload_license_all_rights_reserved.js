/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_License_All_Rights_ReservedInputs */

const en_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All rights reserved`)
};

const es_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los derechos reservados`)
};

const de_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Rechte vorbehalten`)
};

const fr_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous droits réservés`)
};

const it_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i diritti riservati`)
};

const nl_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle rechten voorbehouden`)
};

const pl_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszelkie prawa zastrzeżone`)
};

const pt_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os direitos reservados`)
};

const ru_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все права защищены`)
};

const sv_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla rättigheter förbehållna`)
};

const tr_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm hakları saklıdır`)
};

const zh_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保留所有权利`)
};

const ja_upload_license_all_rights_reserved = /** @type {(inputs: Upload_License_All_Rights_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての権利を保有`)
};

/**
* | output |
* | --- |
* | "All rights reserved" |
*
* @param {Upload_License_All_Rights_ReservedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_license_all_rights_reserved = /** @type {((inputs?: Upload_License_All_Rights_ReservedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_All_Rights_ReservedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_license_all_rights_reserved(inputs)
	if (locale === "de") return de_upload_license_all_rights_reserved(inputs)
	if (locale === "fr") return fr_upload_license_all_rights_reserved(inputs)
	if (locale === "it") return it_upload_license_all_rights_reserved(inputs)
	if (locale === "nl") return nl_upload_license_all_rights_reserved(inputs)
	if (locale === "pl") return pl_upload_license_all_rights_reserved(inputs)
	if (locale === "pt") return pt_upload_license_all_rights_reserved(inputs)
	if (locale === "ru") return ru_upload_license_all_rights_reserved(inputs)
	if (locale === "sv") return sv_upload_license_all_rights_reserved(inputs)
	if (locale === "tr") return tr_upload_license_all_rights_reserved(inputs)
	if (locale === "zh") return zh_upload_license_all_rights_reserved(inputs)
	if (locale === "ja") return ja_upload_license_all_rights_reserved(inputs)
	return en_upload_license_all_rights_reserved(inputs)
});
