/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Action_DownloadInputs */

const en_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const es_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar`)
};

const de_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herunterladen`)
};

const fr_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger`)
};

const it_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica`)
};

const nl_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden`)
};

const pl_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz`)
};

const pt_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar`)
};

const ru_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать`)
};

const sv_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned`)
};

const tr_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndir`)
};

const zh_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_me_action_download = /** @type {(inputs: Me_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {Me_Action_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_action_download = /** @type {((inputs?: Me_Action_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Action_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_action_download(inputs)
	if (locale === "de") return de_me_action_download(inputs)
	if (locale === "fr") return fr_me_action_download(inputs)
	if (locale === "it") return it_me_action_download(inputs)
	if (locale === "nl") return nl_me_action_download(inputs)
	if (locale === "pl") return pl_me_action_download(inputs)
	if (locale === "pt") return pt_me_action_download(inputs)
	if (locale === "ru") return ru_me_action_download(inputs)
	if (locale === "sv") return sv_me_action_download(inputs)
	if (locale === "tr") return tr_me_action_download(inputs)
	if (locale === "zh") return zh_me_action_download(inputs)
	if (locale === "ja") return ja_me_action_download(inputs)
	return en_me_action_download(inputs)
});
