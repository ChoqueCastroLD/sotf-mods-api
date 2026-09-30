/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Step_First_DownloadInputs */

const en_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download your first mod`)
};

const es_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga tu primer mod`)
};

const de_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deinen ersten Mod herunterladen`)
};

const fr_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger votre premier mod`)
};

const it_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica la tua prima mod`)
};

const nl_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download je eerste mod`)
};

const pl_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz swój pierwszy mod`)
};

const pt_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe seu primeiro mod`)
};

const ru_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать первый мод`)
};

const sv_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned din första modd`)
};

const tr_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk modunu indir`)
};

const zh_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载你的第一个模组`)
};

const ja_landing_personal_step_first_download = /** @type {(inputs: Landing_Personal_Step_First_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のMODをダウンロード`)
};

/**
* | output |
* | --- |
* | "Download your first mod" |
*
* @param {Landing_Personal_Step_First_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_first_download = /** @type {((inputs?: Landing_Personal_Step_First_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_First_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_first_download(inputs)
	if (locale === "de") return de_landing_personal_step_first_download(inputs)
	if (locale === "fr") return fr_landing_personal_step_first_download(inputs)
	if (locale === "it") return it_landing_personal_step_first_download(inputs)
	if (locale === "nl") return nl_landing_personal_step_first_download(inputs)
	if (locale === "pl") return pl_landing_personal_step_first_download(inputs)
	if (locale === "pt") return pt_landing_personal_step_first_download(inputs)
	if (locale === "ru") return ru_landing_personal_step_first_download(inputs)
	if (locale === "sv") return sv_landing_personal_step_first_download(inputs)
	if (locale === "tr") return tr_landing_personal_step_first_download(inputs)
	if (locale === "zh") return zh_landing_personal_step_first_download(inputs)
	if (locale === "ja") return ja_landing_personal_step_first_download(inputs)
	return en_landing_personal_step_first_download(inputs)
});
