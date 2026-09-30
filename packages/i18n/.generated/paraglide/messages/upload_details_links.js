/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Details_LinksInputs */

const en_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence and links`)
};

const es_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia y enlaces`)
};

const de_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz und Links`)
};

const fr_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence et liens`)
};

const it_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza e link`)
};

const nl_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licentie en links`)
};

const pl_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencja i linki`)
};

const pt_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença e links`)
};

const ru_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия и ссылки`)
};

const sv_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licens och länkar`)
};

const tr_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lisans ve bağlantılar`)
};

const zh_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`许可和链接`)
};

const ja_upload_details_links = /** @type {(inputs: Upload_Details_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンスとリンク`)
};

/**
* | output |
* | --- |
* | "Licence and links" |
*
* @param {Upload_Details_LinksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_details_links = /** @type {((inputs?: Upload_Details_LinksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Details_LinksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_details_links(inputs)
	if (locale === "de") return de_upload_details_links(inputs)
	if (locale === "fr") return fr_upload_details_links(inputs)
	if (locale === "it") return it_upload_details_links(inputs)
	if (locale === "nl") return nl_upload_details_links(inputs)
	if (locale === "pl") return pl_upload_details_links(inputs)
	if (locale === "pt") return pt_upload_details_links(inputs)
	if (locale === "ru") return ru_upload_details_links(inputs)
	if (locale === "sv") return sv_upload_details_links(inputs)
	if (locale === "tr") return tr_upload_details_links(inputs)
	if (locale === "zh") return zh_upload_details_links(inputs)
	if (locale === "ja") return ja_upload_details_links(inputs)
	return en_upload_details_links(inputs)
});
