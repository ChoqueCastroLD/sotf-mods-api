/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Download_TitleInputs */

const en_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download your first mod`)
};

const es_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga tu primer mod`)
};

const de_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade deinen ersten Mod herunter`)
};

const fr_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez votre premier mod`)
};

const it_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica la tua prima mod`)
};

const nl_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download je eerste mod`)
};

const pl_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz pierwszy mod`)
};

const pt_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe seu primeiro mod`)
};

const ru_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте первый мод`)
};

const sv_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned din första modd`)
};

const tr_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk modunu indir`)
};

const zh_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载你的第一个模组`)
};

const ja_me_onboarding_download_title = /** @type {(inputs: Me_Onboarding_Download_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のMODをダウンロード`)
};

/**
* | output |
* | --- |
* | "Download your first mod" |
*
* @param {Me_Onboarding_Download_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_download_title = /** @type {((inputs?: Me_Onboarding_Download_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Download_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_download_title(inputs)
	if (locale === "de") return de_me_onboarding_download_title(inputs)
	if (locale === "fr") return fr_me_onboarding_download_title(inputs)
	if (locale === "it") return it_me_onboarding_download_title(inputs)
	if (locale === "nl") return nl_me_onboarding_download_title(inputs)
	if (locale === "pl") return pl_me_onboarding_download_title(inputs)
	if (locale === "pt") return pt_me_onboarding_download_title(inputs)
	if (locale === "ru") return ru_me_onboarding_download_title(inputs)
	if (locale === "sv") return sv_me_onboarding_download_title(inputs)
	if (locale === "tr") return tr_me_onboarding_download_title(inputs)
	if (locale === "zh") return zh_me_onboarding_download_title(inputs)
	if (locale === "ja") return ja_me_onboarding_download_title(inputs)
	return en_me_onboarding_download_title(inputs)
});
