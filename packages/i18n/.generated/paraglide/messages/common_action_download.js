/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_DownloadInputs */

const en_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const es_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar`)
};

const de_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herunterladen`)
};

const fr_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger`)
};

const it_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica`)
};

const nl_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden`)
};

const pl_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz`)
};

const pt_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar`)
};

const ru_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать`)
};

const sv_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner`)
};

const tr_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndir`)
};

const zh_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_common_action_download = /** @type {(inputs: Common_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {Common_Action_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_download = /** @type {((inputs?: Common_Action_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_download(inputs)
	if (locale === "de") return de_common_action_download(inputs)
	if (locale === "fr") return fr_common_action_download(inputs)
	if (locale === "it") return it_common_action_download(inputs)
	if (locale === "nl") return nl_common_action_download(inputs)
	if (locale === "pl") return pl_common_action_download(inputs)
	if (locale === "pt") return pt_common_action_download(inputs)
	if (locale === "ru") return ru_common_action_download(inputs)
	if (locale === "sv") return sv_common_action_download(inputs)
	if (locale === "tr") return tr_common_action_download(inputs)
	if (locale === "zh") return zh_common_action_download(inputs)
	if (locale === "ja") return ja_common_action_download(inputs)
	return en_common_action_download(inputs)
});
