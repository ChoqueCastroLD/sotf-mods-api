/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Announce_GroupInputs */

const en_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tested builds and announcement`)
};

const es_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds probadas y aviso`)
};

const de_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getestete Builds und Ankündigung`)
};

const fr_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds testés et annonce`)
};

const it_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build testate e annuncio`)
};

const nl_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geteste builds en aankondiging`)
};

const pl_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetestowane buildy i ogłoszenie`)
};

const pt_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds testadas e aviso`)
};

const ru_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенные сборки и оповещение`)
};

const sv_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testade versioner och meddelande`)
};

const tr_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test edilen sürümler ve duyuru`)
};

const zh_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已测试版本和通知`)
};

const ja_upload_announce_group = /** @type {(inputs: Upload_Announce_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テストしたビルドとお知らせ`)
};

/**
* | output |
* | --- |
* | "Tested builds and announcement" |
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
