/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_TitleInputs */

const en_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My downloads`)
};

const es_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis descargas`)
};

const de_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Downloads`)
};

const fr_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes téléchargements`)
};

const it_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I miei download`)
};

const nl_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn downloads`)
};

const pl_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje pobrania`)
};

const pt_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meus downloads`)
};

const ru_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои загрузки`)
};

const sv_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina nedladdningar`)
};

const tr_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirdiklerim`)
};

const zh_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的下载`)
};

const ja_me_downloads_title = /** @type {(inputs: Me_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴`)
};

/**
* | output |
* | --- |
* | "My downloads" |
*
* @param {Me_Downloads_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_title = /** @type {((inputs?: Me_Downloads_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_title(inputs)
	if (locale === "de") return de_me_downloads_title(inputs)
	if (locale === "fr") return fr_me_downloads_title(inputs)
	if (locale === "it") return it_me_downloads_title(inputs)
	if (locale === "nl") return nl_me_downloads_title(inputs)
	if (locale === "pl") return pl_me_downloads_title(inputs)
	if (locale === "pt") return pt_me_downloads_title(inputs)
	if (locale === "ru") return ru_me_downloads_title(inputs)
	if (locale === "sv") return sv_me_downloads_title(inputs)
	if (locale === "tr") return tr_me_downloads_title(inputs)
	if (locale === "zh") return zh_me_downloads_title(inputs)
	if (locale === "ja") return ja_me_downloads_title(inputs)
	return en_me_downloads_title(inputs)
});
