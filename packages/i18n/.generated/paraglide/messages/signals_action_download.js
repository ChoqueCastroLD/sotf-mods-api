/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Action_DownloadInputs */

const en_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const es_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar`)
};

const de_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herunterladen`)
};

const fr_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger`)
};

const it_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica`)
};

const nl_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden`)
};

const pl_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz`)
};

const pt_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar`)
};

const ru_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать`)
};

const sv_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned`)
};

const tr_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndir`)
};

const zh_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_signals_action_download = /** @type {(inputs: Signals_Action_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {Signals_Action_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_action_download = /** @type {((inputs?: Signals_Action_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Action_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_action_download(inputs)
	if (locale === "de") return de_signals_action_download(inputs)
	if (locale === "fr") return fr_signals_action_download(inputs)
	if (locale === "it") return it_signals_action_download(inputs)
	if (locale === "nl") return nl_signals_action_download(inputs)
	if (locale === "pl") return pl_signals_action_download(inputs)
	if (locale === "pt") return pt_signals_action_download(inputs)
	if (locale === "ru") return ru_signals_action_download(inputs)
	if (locale === "sv") return sv_signals_action_download(inputs)
	if (locale === "tr") return tr_signals_action_download(inputs)
	if (locale === "zh") return zh_signals_action_download(inputs)
	if (locale === "ja") return ja_signals_action_download(inputs)
	return en_signals_action_download(inputs)
});
