/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Announce_GroupInputs */

const en_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcement`)
};

const es_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const de_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung`)
};

const fr_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonce`)
};

const it_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncio`)
};

const nl_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondiging`)
};

const pl_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenie`)
};

const pt_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const ru_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оповещение`)
};

const sv_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelande`)
};

const tr_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru`)
};

const zh_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公告`)
};

const ja_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせ`)
};

/**
* | output |
* | --- |
* | "Announcement" |
*
* @param {Upload_Announce_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_announce_group = /** @type {((inputs?: Upload_Announce_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Announce_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_announce_group(inputs)
	if (locale === "de") return de_upload_announce_group(inputs)
	if (locale === "fr") return fr_upload_announce_group(inputs)
	if (locale === "it") return it_upload_announce_group(inputs)
	if (locale === "nl") return nl_upload_announce_group(inputs)
	if (locale === "pl") return pl_upload_announce_group(inputs)
	if (locale === "pt") return pt_upload_announce_group(inputs)
	if (locale === "ru") return ru_upload_announce_group(inputs)
	if (locale === "sv") return sv_upload_announce_group(inputs)
	if (locale === "tr") return tr_upload_announce_group(inputs)
	if (locale === "zh") return zh_upload_announce_group(inputs)
	if (locale === "ja") return ja_upload_announce_group(inputs)
	return en_upload_announce_group(inputs)
});
